import { BuilderExecutorSchema } from './schema';
import executor from './executor';
import { ExecutorContext } from '@nx/devkit';

const mockExec = jest.fn((_command: string, cb: (error: Error | null) => void) => cb(null));
const mockStat = jest.fn((_path: string, cb: (error: Error | null) => void) => cb(null));

jest.mock('fs', () => ({
  __esModule: true,
  stat: (path, cb) => mockStat(path, cb),
}));

jest.mock('child_process', () => ({
  __esModule: true,
  exec: (command, cb) => mockExec(command, cb),
  execSync: () => undefined,
}));

const options: BuilderExecutorSchema = {
  assets: [],
  cjsTsConfig: 'cjsTsConfig',
  esmTsConfig: 'esmTsConfig',
  outputPath: 'packages/foo/dist',
};

const context = {
  root: '/workspace',
  projectName: 'foo',
  projectsConfigurations: { version: 2, projects: { foo: { root: 'packages/foo' } } },
} as unknown as ExecutorContext;

describe('Builder Executor', () => {
  beforeEach(() => {
    mockExec.mockClear();
    mockStat.mockReset().mockImplementation((_path, cb) => cb(null));
  });

  it('can run', async () => {
    const output = await executor(options, {} as ExecutorContext);
    expect(output.success).toBe(true);
  });

  it('copies the root .npmignore into the output directory', async () => {
    await executor(options, context);
    expect(mockExec).toHaveBeenCalledWith('cp -r /workspace/.npmignore /workspace/packages/foo/dist', expect.any(Function));
  });

  it('fails when the root .npmignore is missing', async () => {
    mockStat.mockImplementation((path, cb) => cb(path === '/workspace/.npmignore' ? new Error('ENOENT') : null));
    await expect(executor(options, context)).rejects.toThrow('ENOENT');
  });
});
