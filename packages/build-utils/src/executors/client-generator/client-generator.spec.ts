import { ClientGeneratorSchema } from './schema';
import executor from './client-generator';
import { ExecutorContext } from '@nx/devkit';

jest.mock('child_process', () => ({
  __esModule: true,
  exec: (_command, cb) => cb(),
  execSync: () => undefined,
}));

jest.mock('fs', () => ({
  existsSync: jest.fn(() => false),
  readFileSync: jest.fn(() => ''),
  rmSync: jest.fn(),
}));

const mockContext: ExecutorContext = {
  projectName: 'test-project',
  root: '/test/workspace',
  cwd: '/test/workspace',
  isVerbose: false,
  projectGraph: {} as any,
  nxJsonConfiguration: {} as any,
  projectsConfigurations: {
    version: 2,
    projects: {
      'test-project': {
        root: '/test/path',
      },
    },
  },
};

describe('Client Generator', () => {
  it('can run', async () => {
    const options: ClientGeneratorSchema = {
      postProcess: '',
      specs: {},
    };
    const output = await executor(options, mockContext);
    expect(output.success).toBe(true);
  });

  it('logs error if executor options object missing "specs" key', async () => {
    jest.spyOn(console, 'error');
    const invalidOptions = {
      postProcess: '',
      // specs property intentionally omitted
    } as any;
    try {
      await executor(invalidOptions, mockContext);
    } catch (e) {
      expect(e).toBeDefined();
      expect(console.error).toHaveBeenCalled();
    }
  });
});
