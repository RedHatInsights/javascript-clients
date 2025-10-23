import { cleanGeneratedFiles, cleanGeneratedFilesForSpecs } from './clean-generated-files';
import * as fs from 'fs';
import * as path from 'path';

jest.mock('fs', () => ({
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
  rmSync: jest.fn(),
}));

jest.mock('path', () => ({
  join: jest.fn((...args) => args.join('/')),
}));

const mockFs = fs as jest.Mocked<typeof fs>;
const mockPath = path as jest.Mocked<typeof path>;

describe('cleanGeneratedFiles', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should clean files when FILES exists', () => {
    // Arrange
    const targetPath = '/test/package';
    const dir = '.';
    const filesContent = 'api.ts\nbase.ts\nindex.ts\n.gitignore';

    mockFs.existsSync.mockReturnValue(true);
    mockFs.readFileSync.mockReturnValue(filesContent);

    // Mock existsSync to return true for all files
    mockFs.existsSync
      .mockReturnValueOnce(true) // FILES file exists
      .mockReturnValue(true); // All generated files exist

    // Act
    cleanGeneratedFiles(targetPath, dir);

    // Assert
    expect(mockFs.existsSync).toHaveBeenCalledWith('/test/package/./.openapi-generator/FILES');
    expect(mockFs.readFileSync).toHaveBeenCalledWith('/test/package/./.openapi-generator/FILES', 'utf-8');

    // Should attempt to remove each file
    expect(mockFs.rmSync).toHaveBeenCalledWith('/test/package/./api.ts', { recursive: true, force: true });
    expect(mockFs.rmSync).toHaveBeenCalledWith('/test/package/./base.ts', { recursive: true, force: true });
    expect(mockFs.rmSync).toHaveBeenCalledWith('/test/package/./index.ts', { recursive: true, force: true });
    expect(mockFs.rmSync).toHaveBeenCalledWith('/test/package/./.gitignore', { recursive: true, force: true });

    expect(console.log).toHaveBeenCalledWith('Cleaning previously generated files in root...');
  });

  it('should handle subdirectory cleaning', () => {
    // Arrange
    const targetPath = '/test/package';
    const dir = 'v2';
    const filesContent = 'api.ts\nbase.ts';

    mockFs.existsSync.mockReturnValue(true);
    mockFs.readFileSync.mockReturnValue(filesContent);

    // Act
    cleanGeneratedFiles(targetPath, dir);

    // Assert
    expect(mockFs.existsSync).toHaveBeenCalledWith('/test/package/v2/.openapi-generator/FILES');
    expect(console.log).toHaveBeenCalledWith('Cleaning previously generated files in v2...');
    expect(mockFs.rmSync).toHaveBeenCalledWith('/test/package/v2/api.ts', { recursive: true, force: true });
  });

  it('should skip cleaning when FILES does not exist', () => {
    // Arrange
    const targetPath = '/test/package';
    const dir = '.';

    mockFs.existsSync.mockReturnValue(false);

    // Act
    cleanGeneratedFiles(targetPath, dir);

    // Assert
    expect(mockFs.existsSync).toHaveBeenCalledWith('/test/package/./.openapi-generator/FILES');
    expect(mockFs.readFileSync).not.toHaveBeenCalled();
    expect(mockFs.rmSync).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('should skip removing files that do not exist on filesystem', () => {
    // Arrange
    const targetPath = '/test/package';
    const dir = '.';
    const filesContent = 'api.ts\nmissing-file.ts\nbase.ts';

    mockFs.existsSync
      .mockReturnValueOnce(true) // FILES file exists
      .mockReturnValueOnce(true) // api.ts exists
      .mockReturnValueOnce(false) // missing-file.ts does not exist
      .mockReturnValueOnce(true); // base.ts exists

    mockFs.readFileSync.mockReturnValue(filesContent);

    // Act
    cleanGeneratedFiles(targetPath, dir);

    // Assert
    expect(mockFs.rmSync).toHaveBeenCalledWith('/test/package/./api.ts', { recursive: true, force: true });
    expect(mockFs.rmSync).toHaveBeenCalledWith('/test/package/./base.ts', { recursive: true, force: true });
    expect(mockFs.rmSync).toHaveBeenCalledTimes(2); // Should not try to remove missing-file.ts
  });

  it('should handle empty FILES content', () => {
    // Arrange
    const targetPath = '/test/package';
    const dir = '.';
    const filesContent = '\n\n  \n'; // Only whitespace and newlines

    mockFs.existsSync.mockReturnValue(true);
    mockFs.readFileSync.mockReturnValue(filesContent);

    // Act
    cleanGeneratedFiles(targetPath, dir);

    // Assert
    expect(mockFs.rmSync).not.toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Cleaning previously generated files in root...');
  });
});

describe('cleanGeneratedFilesForSpecs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should clean files for multiple specs', () => {
    // Arrange
    const targetPath = '/test/package';
    const specs = {
      default: 'spec1.json',
      v2: 'spec2.json',
      api: 'spec3.json',
    };

    mockFs.existsSync.mockReturnValue(false); // No FILES exist for simplicity

    // Act
    cleanGeneratedFilesForSpecs(targetPath, specs);

    // Assert
    expect(console.log).toHaveBeenCalledWith('Cleaning previously generated files...');

    // Should check for FILES in each directory
    expect(mockFs.existsSync).toHaveBeenCalledWith('/test/package/./.openapi-generator/FILES'); // default -> '.'
    expect(mockFs.existsSync).toHaveBeenCalledWith('/test/package/v2/.openapi-generator/FILES');
    expect(mockFs.existsSync).toHaveBeenCalledWith('/test/package/api/.openapi-generator/FILES');

    expect(mockFs.existsSync).toHaveBeenCalledTimes(3);
  });

  it('should handle single default spec', () => {
    // Arrange
    const targetPath = '/test/package';
    const specs = {
      default: 'spec.json',
    };

    mockFs.existsSync.mockReturnValue(false);

    // Act
    cleanGeneratedFilesForSpecs(targetPath, specs);

    // Assert
    expect(mockFs.existsSync).toHaveBeenCalledWith('/test/package/./.openapi-generator/FILES');
    expect(mockFs.existsSync).toHaveBeenCalledTimes(1);
  });

  it('should handle empty specs object', () => {
    // Arrange
    const targetPath = '/test/package';
    const specs = {};

    // Act
    cleanGeneratedFilesForSpecs(targetPath, specs);

    // Assert
    expect(console.log).toHaveBeenCalledWith('Cleaning previously generated files...');
    expect(mockFs.existsSync).not.toHaveBeenCalled();
  });
});
