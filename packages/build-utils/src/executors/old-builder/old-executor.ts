import { addDependenciesToPackageJson, ExecutorContext, Tree, workspaceRoot } from '@nx/devkit';
import { z } from 'zod';
import { chmodSync, copyFile, existsSync, lstatSync, mkdir, readFileSync, readdirSync, renameSync, stat, unlink, writeFileSync } from 'fs';
import { copy } from 'fs-extra';
import { promisify } from 'util';
import { execSync } from 'child_process';

// Typescript prevents us from importing the global package.json to check which dependencies we want shared
// See https://github.com/microsoft/TypeScript/issues/9858
const rawData = readFileSync(`${workspaceRoot}/package.json`, {
  encoding: 'utf8',
});
const globalPackageJson = JSON.parse(rawData);
const globalDependencies = globalPackageJson.dependencies;

// Filters the globally hoisted dependencies to be added to the packages published package.json (outside NX scope)
// TODO add tslib
const sharedGlobalDependencies = (({ axios }) => ({ axios }))(globalDependencies);
const sharedGlobalDevDependencies = {};

const asyncStat = promisify(stat);
const asyncMkdir = promisify(mkdir);
const asyncCopyfile = promisify(copyFile);
const asyncCopyfolder = promisify(copy);
const asyncRemove = promisify(unlink);

const OldBuilderExecutorSchema = z.object({
  tsConfig: z.string(),
  outputPath: z.string(),
  main: z.string(),
});

export type OldBuilderExecutorSchemaType = z.infer<typeof OldBuilderExecutorSchema>;

async function validateExistingFile(path: string) {
  return asyncStat(path);
}

async function runTSC(tsConfigPath: string, outputDir: string) {
  try {
    execSync(`tsc -p ${tsConfigPath} --outDir ${outputDir}`, { stdio: 'inherit' });
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to run tsc for ${tsConfigPath}`);
  }
}

async function makeDirs(pathList: string[]) {
  return Promise.all(pathList.map((path) => asyncMkdir(path, { recursive: true })));
}

async function copyFiles(srcDir: string, destDir: string, files: string[]) {
  return Promise.all(
    files.map((file) => {
      stat(`${srcDir}/${file}`, (error, stats) => {
        if (stats) {
          return asyncCopyfile(`${srcDir}/${file}`, `${destDir}/${file}`);
        }
      });
    }),
  );
}

async function copyFolder(folderPath: string, dest: string) {
  return asyncCopyfolder(folderPath, dest);
}

async function removePackage(distPath: string) {
  return asyncRemove(`${distPath}/package.json`).catch(console.error);
}

export default async function runExecutor(options: OldBuilderExecutorSchemaType, context: ExecutorContext) {
  try {
    OldBuilderExecutorSchema.parse(options);
  } catch (error) {
    throw new Error(`Invalid options passed to builder executor: ${error}`);
  }

  const projectName = context.projectName;
  const projectRoot = context.root;
  const currentProjectRoot = context.projectsConfigurations?.projects?.[projectName]?.root;
  const packageName = currentProjectRoot?.split('/')[1];
  const outputDir = `${projectRoot}/${options.outputPath}`;
  const pathList = [`dist/${packageName}/dist`, `dist/${packageName}/doc`];
  const filesList = [`README.md`, `package.json`, `CHANGELOG.md`, `LICENSE`];
  const filesDest = `dist/${packageName}`;
  const distSrc = `packages/${packageName}/dist`;
  const distDest = `dist/${packageName}/dist`;
  const docsSrc = `packages/${packageName}/doc`;
  const docsDest = `dist/${packageName}/doc`;

  await validateExistingFile(options.tsConfig);
  await runTSC(options.tsConfig, outputDir);
  await makeDirs(pathList);
  await copyFiles(currentProjectRoot, filesDest, filesList);
  await Promise.all([copyFolder(distSrc, distDest), copyFolder(docsSrc, docsDest)]);
  await removePackage(distDest);

  // NX does not officially expose or document some utility classes such as FsTree which would make this easier
  // See https://github.com/nrwl/nx/issues/16691
  const tree: Tree = {
    root: filesDest,
    read: readFileSync,
    write: writeFileSync,
    exists: existsSync,
    delete: (path) => unlink(path, () => {}),
    rename: renameSync,
    changePermissions: chmodSync,
    isFile: (path) => lstatSync(path).isFile(),
    children: readdirSync,
    listChanges: () => [],
  };
  addDependenciesToPackageJson(tree, sharedGlobalDependencies, sharedGlobalDevDependencies, `${filesDest}/package.json`);
  return {
    success: true,
  };
}
