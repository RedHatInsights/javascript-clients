import { ClientGeneratorSchema } from './schema';
import executor from './client-generator';
import { ExecutorContext } from '@nx/devkit';

jest.mock('child_process', () => ({
  __esModule: true,
  exec: (_command, cb) => cb(),
  execSync: () => undefined,
}));

const options: ClientGeneratorSchema = {
  postProcess: '',
  specs: {},
};

describe('Client Generator', () => {
  it('can run', async () => {
    const output = await executor(options, {} as ExecutorContext);
    expect(output.success).toBe(true);
  });

  it('logs error if executor options object missing "specs" key', async () => {
    jest.spyOn(console, 'error');
    delete options.specs;
    try {
      await executor(options, {} as ExecutorContext);
    } catch (e) {
      expect(e).toBeDefined();
      expect(console.error).toHaveBeenCalled();
    }
  });
});
