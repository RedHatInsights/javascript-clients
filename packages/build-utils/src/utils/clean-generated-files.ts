import * as path from 'path';
import * as fs from 'fs';

/**
 * Cleans previously generated files before regenerating new ones.
 *
 * This function replicates the cleanup functionality available in OpenAPI Generator's
 * `batch` command (--clean flag), which is not available in the `generate` command that we use.
 *
 * How it works:
 * - Reads the `.openapi-generator/FILES` file which tracks all previously generated files
 * - Removes each file listed in that FILES file from the filesystem
 * - This prevents stale files from accumulating when the API spec changes
 *
 * Comparison with OpenAPI Generator's native cleanup:
 * - Batch command cleanup: Available via `openapi-generator-cli batch --clean`
 *   - Reads .openapi-generator/FILES and deletes listed files
 *   - Requires using batch command with external config files
 *   - Same file-based approach, same limitations
 * - Generate command: No cleanup functionality available
 *
 * Known limitations (shared with native batch cleanup):
 * - Only removes files explicitly listed in the FILES file
 * - Does NOT remove "orphaned directories" that exist on filesystem but aren't tracked
 *   (e.g., old endpoint directories when endpoints are removed from the OpenAPI spec)
 * - Legacy generator packages don't create FILES files, so cleanup is silently skipped
 *
 * @param targetPath - Root path of the package being generated
 * @param dir - Subdirectory within the package (e.g., 'v2' for multi-spec packages, '.' for root)
 */
export function cleanGeneratedFiles(targetPath: string, dir: string): void {
  const filesPath = path.join(targetPath, dir, '.openapi-generator', 'FILES');
  if (fs.existsSync(filesPath)) {
    console.log(`Cleaning previously generated files in ${dir === '.' ? 'root' : dir}...`);
    const files = fs
      .readFileSync(filesPath, 'utf-8')
      .split('\n')
      .filter((f) => f.trim());

    files.forEach((file) => {
      const fullPath = path.join(targetPath, dir, file);
      if (fs.existsSync(fullPath)) {
        console.log(`  Removing: ${file}`);
        fs.rmSync(fullPath, { recursive: true, force: true });
      }
    });
  }
}

/**
 * Cleans generated files for multiple specs within a package.
 *
 * @param targetPath - Root path of the package being cleaned
 * @param specs - Map of spec names to their configurations (same format as client-generator specs)
 */
export function cleanGeneratedFilesForSpecs(targetPath: string, specs: Record<string, string>): void {
  console.log('Cleaning previously generated files...');
  Object.keys(specs).forEach((specName) => {
    const dir = specName !== 'default' ? specName : '.';
    cleanGeneratedFiles(targetPath, dir);
  });
}
