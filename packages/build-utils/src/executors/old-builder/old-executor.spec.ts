import { OldBuilderExecutorSchema } from './schema';
import executor from './old-executor';
import { ExecutorContext } from '@nx/devkit';

jest.mock('fs', () => ({
  __esModule: true,
  stat: (_path, cb) => cb(),
  mkdir: (_path, _options, cb) => cb(),
  copyFile: (_src, _dest, cb) => cb(),
  unlink: (_path, cb) => cb(),
}));

jest.mock('fs-extra', () => ({
  __esModule: true,
  copy: (_src, _dest, cb) => cb(),
}));

jest.mock('child_process', () => ({
  __esModule: true,
  exec: (_command, cb) => cb(),
  execSync: () => undefined,
}));

const options: OldBuilderExecutorSchema = {
  main: 'main',
  tsConfig: 'tsConfig',
  outputPath: 'outputPath',
};

describe('Builder Executor', () => {
  it('can run', async () => {
    const output = await executor(options, {} as ExecutorContext);
    expect(output.success).toBe(true);
  });
});
