import { ExecutorContext } from '@nx/devkit';
import executor from './clean';
import { CleanSchemaType } from './clean';

// Mock the shared utility
jest.mock('../../utils/clean-generated-files', () => ({
  cleanGeneratedFilesForSpecs: jest.fn(),
}));

import { cleanGeneratedFilesForSpecs } from '../../utils/clean-generated-files';
const mockCleanGeneratedFilesForSpecs = cleanGeneratedFilesForSpecs as jest.MockedFunction<typeof cleanGeneratedFilesForSpecs>;

const mockContext: ExecutorContext = {
  projectName: 'test-project',
  root: '/test/workspace',
  cwd: '/test/workspace',
  isVerbose: false,
  projectGraph: {} as ExecutorContext['projectGraph'],
  nxJsonConfiguration: {} as ExecutorContext['nxJsonConfiguration'],
  projectsConfigurations: {
    version: 2,
    projects: {
      'test-project': {
        root: '/test/path',
        targets: {
          generate: {
            executor: '@redhat-cloud-services/build-utils:client-generator',
            options: {
              specs: {
                default: 'spec1.json',
                v2: 'spec2.json',
              },
            },
          },
        },
      },
    },
  },
};

describe('Clean Executor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully clean files by reading specs from generate target', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const expectedSpecs = {
      default: 'spec1.json',
      v2: 'spec2.json',
    };

    // Act
    const result = await executor(options, mockContext);

    // Assert
    expect(result.success).toBe(true);
    expect(mockCleanGeneratedFilesForSpecs).toHaveBeenCalledWith('/test/path', expectedSpecs);
    expect(mockCleanGeneratedFilesForSpecs).toHaveBeenCalledTimes(1);
  });

  it('should handle single spec from generate target', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const contextWithSingleSpec = {
      ...mockContext,
      projectsConfigurations: {
        version: 2,
        projects: {
          'test-project': {
            root: '/test/path',
            targets: {
              generate: {
                executor: '@redhat-cloud-services/build-utils:client-generator',
                options: {
                  specs: {
                    default: 'openapi.json',
                  },
                },
              },
            },
          },
        },
      },
    };

    // Act
    const result = await executor(options, contextWithSingleSpec);

    // Assert
    expect(result.success).toBe(true);
    expect(mockCleanGeneratedFilesForSpecs).toHaveBeenCalledWith('/test/path', { default: 'openapi.json' });
  });

  it('should handle empty specs object from generate target', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const contextWithEmptySpecs = {
      ...mockContext,
      projectsConfigurations: {
        version: 2,
        projects: {
          'test-project': {
            root: '/test/path',
            targets: {
              generate: {
                executor: '@redhat-cloud-services/build-utils:client-generator',
                options: {
                  specs: {},
                },
              },
            },
          },
        },
      },
    };

    // Act
    const result = await executor(options, contextWithEmptySpecs);

    // Assert
    expect(result.success).toBe(true);
    expect(mockCleanGeneratedFilesForSpecs).toHaveBeenCalledWith('/test/path', {});
  });

  it('should throw error when generate target is missing', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const contextWithoutGenerate = {
      ...mockContext,
      projectsConfigurations: {
        version: 2,
        projects: {
          'test-project': {
            root: '/test/path',
            targets: {},
          },
        },
      },
    };

    // Act & Assert
    await expect(executor(options, contextWithoutGenerate)).rejects.toThrow('No generate target with specs found for project: test-project');
    expect(mockCleanGeneratedFilesForSpecs).not.toHaveBeenCalled();
  });

  it('should throw error when generate target has no specs', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const contextWithoutSpecs = {
      ...mockContext,
      projectsConfigurations: {
        version: 2,
        projects: {
          'test-project': {
            root: '/test/path',
            targets: {
              generate: {
                executor: '@redhat-cloud-services/build-utils:client-generator',
                options: {},
              },
            },
          },
        },
      },
    };

    // Act & Assert
    await expect(executor(options, contextWithoutSpecs)).rejects.toThrow('No generate target with specs found for project: test-project');
    expect(mockCleanGeneratedFilesForSpecs).not.toHaveBeenCalled();
  });

  it('should throw error when project name is not defined', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const contextWithoutProject = {
      ...mockContext,
      projectName: undefined,
    };

    // Act & Assert
    await expect(executor(options, contextWithoutProject)).rejects.toThrow('Project name is not defined in the executor context');
    expect(mockCleanGeneratedFilesForSpecs).not.toHaveBeenCalled();
  });

  it('should throw error when project root cannot be found', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const contextWithoutRoot = {
      ...mockContext,
      projectsConfigurations: {
        version: 2,
        projects: {
          'other-project': {
            root: '/other/path',
          },
        },
      },
    };

    jest.spyOn(console, 'error').mockImplementation(() => undefined);

    // Act & Assert
    await expect(executor(options, contextWithoutRoot)).rejects.toThrow('Unable to find project root for project: test-project');
    expect(console.error).toHaveBeenCalledWith('Available projects:', ['other-project']);
    expect(console.error).toHaveBeenCalledWith('Looking for project:', 'test-project');
    expect(mockCleanGeneratedFilesForSpecs).not.toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it('should pass the correct target path to cleaning function', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const customContext = {
      ...mockContext,
      projectsConfigurations: {
        version: 2,
        projects: {
          'test-project': {
            root: '/custom/project/path',
            targets: {
              generate: {
                executor: '@redhat-cloud-services/build-utils:client-generator',
                options: {
                  specs: { api: 'api-spec.json' },
                },
              },
            },
          },
        },
      },
    };

    // Act
    const result = await executor(options, customContext);

    // Assert
    expect(result.success).toBe(true);
    expect(mockCleanGeneratedFilesForSpecs).toHaveBeenCalledWith('/custom/project/path', { api: 'api-spec.json' });
  });

  it('should handle complex specs configuration from generate target', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const complexSpecs = {
      default: 'main-api.json',
      v1: 'legacy-api.json',
      v2: 'new-api.json',
      admin: 'admin-api.json',
    };
    const contextWithComplexSpecs = {
      ...mockContext,
      projectsConfigurations: {
        version: 2,
        projects: {
          'test-project': {
            root: '/test/path',
            targets: {
              generate: {
                executor: '@redhat-cloud-services/build-utils:client-generator',
                options: {
                  specs: complexSpecs,
                },
              },
            },
          },
        },
      },
    };

    // Act
    const result = await executor(options, contextWithComplexSpecs);

    // Assert
    expect(result.success).toBe(true);
    expect(mockCleanGeneratedFilesForSpecs).toHaveBeenCalledWith('/test/path', complexSpecs);
    expect(mockCleanGeneratedFilesForSpecs).toHaveBeenCalledTimes(1);
  });

  it('should log specs from generate target', async () => {
    // Arrange
    const options: CleanSchemaType = {};
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);

    // Act
    const result = await executor(options, mockContext);

    // Assert
    expect(result.success).toBe(true);
    expect(consoleSpy).toHaveBeenCalledWith('Using specs from generate target:', ['default', 'v2']);
    expect(mockCleanGeneratedFilesForSpecs).toHaveBeenCalledTimes(1);

    consoleSpy.mockRestore();
  });
});
