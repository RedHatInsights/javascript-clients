import { ExecutorContext } from '@nx/devkit';
import { z } from 'zod';
import { cleanGeneratedFilesForSpecs } from '../../utils/clean-generated-files';

const CleanSchema = z.object({});

export type CleanSchemaType = z.infer<typeof CleanSchema>;

export default async function cleanExecutor(options: CleanSchemaType, context: ExecutorContext) {
  const result = CleanSchema.safeParse(options);
  if (!result?.success) {
    console.error(result?.error);
    throw new Error('invalid options passed to clean executor');
  }

  if (!context.projectName) {
    throw new Error('Project name is not defined in the executor context');
  }

  const targetPath = context.projectsConfigurations?.projects[context.projectName]?.root;

  if (!targetPath) {
    console.error('Available projects:', Object.keys(context.projectsConfigurations?.projects || {}));
    console.error('Looking for project:', context.projectName);
    throw new Error(`Unable to find project root for project: ${context.projectName}`);
  }

  // Read specs from generate target
  const generateTarget = context.projectsConfigurations?.projects[context.projectName]?.targets?.generate;

  if (!generateTarget?.options?.specs) {
    throw new Error(`No generate target with specs found for project: ${context.projectName}`);
  }

  const specs = generateTarget.options.specs;
  console.log('Using specs from generate target:', Object.keys(specs));

  // Clean generated files
  cleanGeneratedFilesForSpecs(targetPath, specs);

  return {
    success: true,
  };
}
