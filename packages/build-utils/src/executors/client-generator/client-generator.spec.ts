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

  let mockContext: ExecutorContext;

  beforeEach(() => {
    jest.clearAllMocks();
    mockContext = createBaseContext();
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  describe('schema validation', () => {
    it('should throw error for invalid options - missing specs', async () => {
      const invalidOptions = {} as ClientGeneratorSchemaType;

      await expect(generateClients(invalidOptions, mockContext)).rejects.toThrow('invalid options passed to client-generator executor');
      expect(mockConsoleError).toHaveBeenCalled();
    });

    it('should throw error for invalid options - specs not an object', async () => {
      const invalidOptions = {
        specs: 'invalid' as any,
      } as ClientGeneratorSchemaType;

      await expect(generateClients(invalidOptions, mockContext)).rejects.toThrow('invalid options passed to client-generator executor');
      expect(mockConsoleError).toHaveBeenCalled();
    });

    it('should accept valid minimal options', async () => {
      const validOptions: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      const result = await generateClients(validOptions, mockContext);
      expect(result.success).toBe(true);
    });

    it('should accept valid options with all properties', async () => {
      const validOptions: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml', v2: 'spec-v2.yaml' },
        postProcess: 'npm run format',
        legacyGenerator: true,
        outputPath: 'generated',
      };

      const result = await generateClients(validOptions, mockContext);
      expect(result.success).toBe(true);
    });
  });

  describe('spec processing', () => {
    it('should handle local spec file (default namespace)', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'openapi.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i /workspace/test-project/openapi.yaml'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o /workspace/test-project'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should handle remote spec URL', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'https://api.example.com/openapi.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i https://api.example.com/openapi.yaml'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should handle http URL (not just https)', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'http://api.example.com/openapi.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-i http://api.example.com/openapi.yaml'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should handle multiple specs with different namespaces', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: {
          default: 'spec1.yaml',
          users: 'spec2.yaml',
          orders: 'spec3.yaml',
        },
      };

      await generateClients(options, mockContext);

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
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o /workspace/test-project'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should create namespace subdirectory for non-default namespace', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { users: 'spec.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o /workspace/test-project/users'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should use outputPath as full relative path when specified', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
        outputPath: 'packages/test-project/src',
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-o packages/test-project/src'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should combine outputPath with namespace for non-default namespace', async () => {
      const options: ClientGeneratorSchemaType = {
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
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(
        expect.stringContaining(
          '--custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation',
        ),
        { stdio: 'inherit' },
      );
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should use legacy generator when legacyGenerator is true', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
        legacyGenerator: true,
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('-g typescript-axios'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.not.stringContaining('--custom-generator'), { stdio: 'inherit' });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=TestClient'), { stdio: 'inherit' });
    });

    it('should use modern generator when legacyGenerator is false', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
        legacyGenerator: false,
      };

      await generateClients(options, mockContext);

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
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledTimes(1); // Only the generator call
    });

    it('should run post process command when specified', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
        postProcess: 'npm run format',
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledTimes(2);
      expect(mockExecSync).toHaveBeenCalledWith('cd /workspace/test-project && npm run format', { stdio: 'inherit' });
    });

    it('should run post process after all specs are generated', async () => {
      const options: ClientGeneratorSchemaType = {
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

  describe('client name extraction', () => {
    it('should extract client name from @redhat-cloud-services package name', async () => {
      const contextWithPackageName = {
        ...createBaseContext(),
        projectsConfigurations: {
          version: 2,
          projects: {
            'test-project': {
              root: '/workspace/test-project',
              name: '@redhat-cloud-services/rbac-client',
            },
          },
        },
      };

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, contextWithPackageName);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=RbacClient'), { stdio: 'inherit' });
    });

    it('should handle kebab-case package names correctly', async () => {
      const contextWithKebabCase = {
        ...createBaseContext(),
        projectsConfigurations: {
          version: 2,
          projects: {
            'test-project': {
              root: '/workspace/test-project',
              name: '@redhat-cloud-services/host-inventory-client',
            },
          },
        },
      };

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, contextWithKebabCase);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=HostInventoryClient'), {
        stdio: 'inherit',
      });
    });

    it('should handle single word package names', async () => {
      const contextWithSingleWord = {
        ...createBaseContext(),
        projectsConfigurations: {
          version: 2,
          projects: {
            'test-project': {
              root: '/workspace/test-project',
              name: '@redhat-cloud-services/compliance-client',
            },
          },
        },
      };

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, contextWithSingleWord);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=ComplianceClient'), { stdio: 'inherit' });
    });

    it('should throw error when project has no name', async () => {
      const contextWithoutName = {
        ...createBaseContext(),
        projectsConfigurations: {
          version: 2,
          projects: {
            'test-project': {
              root: '/workspace/test-project',
              // No name property
            },
          },
        },
      };

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await expect(generateClients(options, contextWithoutName)).rejects.toThrow('Project name is required to generate client name');
      expect(mockExecSync).not.toHaveBeenCalled();
    });

    it('should throw error for unscoped packages', async () => {
      const contextWithUnscopedPackage = {
        ...createBaseContext(),
        projectsConfigurations: {
          version: 2,
          projects: {
            'test-project': {
              root: '/workspace/test-project',
              name: 'unscoped-package',
            },
          },
        },
      };

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await expect(generateClients(options, contextWithUnscopedPackage)).rejects.toThrow(
        "Failed to extract client name from project name: unscoped-package. Project name should follow the format '@scope/package-name'",
      );
      expect(mockExecSync).not.toHaveBeenCalled();
    });

    it('should extract client name from any scoped package', async () => {
      const contextWithDifferentPattern = {
        ...createBaseContext(),
        projectsConfigurations: {
          version: 2,
          projects: {
            'test-project': {
              root: '/workspace/test-project',
              name: '@some-other-org/some-package',
            },
          },
        },
      };

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, contextWithDifferentPattern);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--additional-properties clientName=SomePackage'), { stdio: 'inherit' });
    });
  });

  describe('command construction', () => {
    it('should include all required openapi-generator-cli arguments', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, mockContext);

      const expectedCommand =
        "TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i /workspace/test-project/spec.yaml -o /workspace/test-project --openapitools /workspace/test-project/openapitools.json --skip-validate-spec --enable-post-process-file --custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation --additional-properties clientName=TestClient";

      expect(mockExecSync).toHaveBeenCalledWith(expectedCommand, { stdio: 'inherit' });
    });

    it('should include clientName in command when available', async () => {
      const contextWithPackageName = {
        ...createBaseContext(),
        projectsConfigurations: {
          version: 2,
          projects: {
            'test-project': {
              root: '/workspace/test-project',
              name: '@redhat-cloud-services/test-client',
            },
          },
        },
      };

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, contextWithPackageName);

      const expectedCommand =
        "TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i /workspace/test-project/spec.yaml -o /workspace/test-project --openapitools /workspace/test-project/openapitools.json --skip-validate-spec --enable-post-process-file --custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation --additional-properties clientName=TestClient";

      expect(mockExecSync).toHaveBeenCalledWith(expectedCommand, { stdio: 'inherit' });
    });

    it('should include environment variable TS_POST_PROCESS_FILE', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining("TS_POST_PROCESS_FILE='./postProcess.sh'"), { stdio: 'inherit' });
    });

    it('should include openapitools.json path', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--openapitools /workspace/test-project/openapitools.json'), {
        stdio: 'inherit',
      });
    });

    it('should include skip-validate-spec and enable-post-process-file flags', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await generateClients(options, mockContext);

      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('--skip-validate-spec --enable-post-process-file'), { stdio: 'inherit' });
    });
  });

  describe('return value', () => {
    it('should return success: true on successful execution', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      const result = await generateClients(options, mockContext);

      expect(result).toEqual({ success: true });
    });
  });

  describe('edge cases', () => {
    it('should handle empty specs object', async () => {
      const options: ClientGeneratorSchemaType = {
        specs: {},
      };

      const result = await generateClients(options, mockContext);

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

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await expect(generateClients(options, contextWithoutProject)).rejects.toThrow('Project name is required to generate client name');
    });

    it('should throw error when context has missing projectsConfigurations', async () => {
      const contextWithoutProjectsConfig = {
        ...createBaseContext(),
        projectsConfigurations: undefined as any,
      };

      const options: ClientGeneratorSchemaType = {
        specs: { default: 'spec.yaml' },
      };

      await expect(generateClients(options, contextWithoutProjectsConfig)).rejects.toThrow('Project name is required to generate client name');
    });
  });
});
