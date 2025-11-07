import { ExecutorContext } from '@nx/devkit';
import { execSync } from 'child_process';
import generateClients, { ClientGeneratorSchemaType } from './client-generator';

// Mock child_process
jest.mock('child_process');
const mockExecSync = execSync as jest.MockedFunction<typeof execSync>;

// Mock console.error
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {
  return undefined;
});

describe('generateClients', () => {
  const createBaseContext = (): ExecutorContext => ({
    projectName: 'test-project',
    root: '/workspace',
    cwd: '/workspace',
    isVerbose: false,
    projectGraph: {} as any,
    nxJsonConfiguration: {} as any,
    projectsConfigurations: {
      version: 2,
      projects: {
        'test-project': {
          root: '/workspace/test-project',
          name: '@redhat-cloud-services/test-client',
        },
      },
    },
  });

  const createBaseOptions = (): ClientGeneratorSchemaType => ({
    specs: { default: 'spec.yaml' },
    clientName: 'TestClient',
  });

  let mockContext: ExecutorContext;
  let mockOptions: ClientGeneratorSchemaType;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContext = createBaseContext();
    mockOptions = createBaseOptions();
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  describe('schema validation', () => {
    it('should throw error for invalid options - missing specs', async () => {
      delete mockOptions.specs;

      await expect(generateClients(mockOptions, mockContext)).rejects.toThrow('invalid options passed to client-generator executor');
      expect(mockConsoleError).toHaveBeenCalled();
    });

    it('should throw error for invalid options - missing clientName', async () => {
      delete mockOptions.clientName;

      await expect(generateClients(mockOptions, mockContext)).rejects.toThrow('invalid options passed to client-generator executor');
      expect(mockConsoleError).toHaveBeenCalled();
    });

    it('should throw error for invalid clientName format - camelCase', async () => {
      mockOptions.clientName = 'testClient';

      await expect(generateClients(mockOptions, mockContext)).rejects.toThrow('invalid options passed to client-generator executor');
      expect(mockConsoleError).toHaveBeenCalled();
    });

    it('should throw error for invalid clientName format - missing Client suffix', async () => {
      mockOptions.clientName = 'Test';

      await expect(generateClients(mockOptions, mockContext)).rejects.toThrow('invalid options passed to client-generator executor');
      expect(mockConsoleError).toHaveBeenCalled();
    });

    it('should accept valid minimal options', async () => {
      const result = await generateClients(mockOptions, mockContext);
      expect(result.success).toBe(true);
    });

    it('should accept valid options with all properties', async () => {
      const options = {
        ...mockOptions,
        specs: { default: 'spec.yaml', v2: 'spec-v2.yaml' },
        postProcess: 'npm run format',
        legacyGenerator: true,
        outputPath: 'generated',
      };

      const result = await generateClients(options, mockContext);
      expect(result.success).toBe(true);
    });
  });

  describe('spec processing', () => {
    it('should handle local spec file (default namespace)', async () => {
      mockOptions.specs = { default: 'openapi.yaml' };

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i /workspace/test-project/openapi.yaml'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o /workspace/test-project'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should handle remote spec URL', async () => {
      mockOptions.specs = { default: 'https://api.example.com/openapi.yaml' };

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i https://api.example.com/openapi.yaml'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should handle http URL (not just https)', async () => {
      mockOptions.specs = { default: 'http://api.example.com/openapi.yaml' };

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i http://api.example.com/openapi.yaml'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should handle multiple specs with different namespaces', async () => {
      mockOptions.specs = {
        default: 'spec1.yaml',
        users: 'spec2.yaml',
        orders: 'spec3.yaml',
      };

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledTimes(3);
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i /workspace/test-project/spec1.yaml'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i /workspace/test-project/spec2.yaml'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i /workspace/test-project/spec3.yaml'), { stdio: 'inherit' });
      // All calls should include clientName
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });
  });

  describe('output directory logic', () => {
    it('should use root directory for default namespace without outputPath', async () => {
      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o /workspace/test-project'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should create namespace subdirectory for non-default namespace', async () => {
      mockOptions.specs = { users: 'spec.yaml' };

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o /workspace/test-project/users'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should use outputPath as full relative path when specified', async () => {
      mockOptions.outputPath = 'packages/test-project/src';

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o packages/test-project/src'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should combine outputPath with namespace for non-default namespace', async () => {
      const options = {
        ...mockOptions,
        specs: { users: 'spec.yaml' },
        outputPath: 'packages/test-project/src',
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o packages/test-project/src/users'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });
  });

  describe('generator type', () => {
    it('should use modern generator by default', async () => {
      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(
        expect.stringContaining(
          '--custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation',
        ),
        { stdio: 'inherit' },
      );
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should use legacy generator when legacyGenerator is true', async () => {
      mockOptions.legacyGenerator = true;

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-g typescript-axios'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.not.stringContaining('--custom-generator'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should use modern generator when legacyGenerator is false', async () => {
      mockOptions.legacyGenerator = false;

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(
        expect.stringContaining(
          '--custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation',
        ),
        { stdio: 'inherit' },
      );
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });
  });

  describe('post processing', () => {
    it('should not run post process when not specified', async () => {
      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledTimes(1); // Only the generator call
    });

    it('should run post process command when specified', async () => {
      mockOptions.postProcess = 'npm run format';

      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledTimes(2);
      expect(mockExecSync).toHaveBeenCalledWith('cd /workspace/test-project && npm run format', { stdio: 'inherit' });
    });

    it('should run post process after all specs are generated', async () => {
      const options = {
        ...mockOptions,
        specs: {
          default: 'spec1.yaml',
          users: 'spec2.yaml',
        },
        postProcess: 'npm run lint',
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledTimes(3);
      // Post process should be the last call
      expect(mockExecSync).toHaveBeenLastCalledWith('cd /workspace/test-project && npm run lint', { stdio: 'inherit' });
    });
  });

  describe('command construction', () => {
    it('should include all required openapi-generator-cli arguments', async () => {
      await generateClients(mockOptions, mockContext);

      const expectedCommand =
        "TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i /workspace/test-project/spec.yaml -o /workspace/test-project --openapitools /workspace/test-project/openapitools.json --skip-validate-spec --enable-post-process-file --custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation --additional-properties clientName=TestClient";

      expect(mockExecSync).toHaveBeenCalledWith(expectedCommand, { stdio: 'inherit' });
    });

    it('should include environment variable TS_POST_PROCESS_FILE', async () => {
      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining("TS_POST_PROCESS_FILE='./postProcess.sh'"), { stdio: 'inherit' });
    });

    it('should include openapitools.json path', async () => {
      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--openapitools /workspace/test-project/openapitools.json'), {
        stdio: 'inherit',
      });
    });

    it('should include skip-validate-spec and enable-post-process-file flags', async () => {
      await generateClients(mockOptions, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--skip-validate-spec --enable-post-process-file'), { stdio: 'inherit' });
    });
  });

  describe('return value', () => {
    it('should return success: true on successful execution', async () => {
      const result = await generateClients(mockOptions, mockContext);

      expect(result).toEqual({ success: true });
    });
  });

  describe('edge cases', () => {
    it('should handle empty specs object', async () => {
      mockOptions.specs = {};

      const result = await generateClients(mockOptions, mockContext);

      expect(mockExecSync).not.toHaveBeenCalled();
      expect(result.success).toBe(true);
    });

    it('should throw error when context has no project configuration', async () => {
      const contextWithoutProject = {
        ...createBaseContext(),
        projectsConfigurations: {
          version: 2,
          projects: {},
        },
      };

      await expect(generateClients(mockOptions, contextWithoutProject)).rejects.toThrow('Project configuration not found');
    });

    it('should throw error when context has missing projectsConfigurations', async () => {
      const contextWithoutProjectsConfig = {
        ...createBaseContext(),
        projectsConfigurations: undefined as any,
      };

      await expect(generateClients(mockOptions, contextWithoutProjectsConfig)).rejects.toThrow('Project configuration not found');
    });
  });
});
