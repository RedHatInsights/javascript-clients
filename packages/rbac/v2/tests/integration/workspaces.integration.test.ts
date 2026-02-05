import { describe, expect, test } from '@jest/globals';
import { createWorkspace, deleteWorkspace, listWorkspaces, readWorkspace, updateWorkspace, config, WORKSPACES_API_BASE } from './client';
import { WorkspacesWorkspaceTypesQueryParam } from '../../types';
import { updateConfig, convertConfig } from './util';

describe('Workspaces API endpoints', () => {
  const TEST_WORKSPACE_NAME = 'JSClientsTestWorkspace';
  const TEST_WORKSPACE_DESC = 'Test workspace created by JS Clients test automation';

  test('create, list, read, and delete', async () => {
    const axiosConfig = await updateConfig(config, WORKSPACES_API_BASE);
    const convertedConfig = await convertConfig(axiosConfig);

    // Create workspace
    const createResponse = await createWorkspace('', TEST_WORKSPACE_NAME, TEST_WORKSPACE_DESC, convertedConfig);
    expect(createResponse.status).toEqual(201);
    const workspaceId = createResponse.data.id;
    expect(workspaceId).toBeTruthy();

    // List workspaces
    const findResult2 = await listWorkspaces(100, 0, WorkspacesWorkspaceTypesQueryParam.All, convertedConfig);
    expect(findResult2).toBeTruthy();

    // Read workspace
    const readResult = await readWorkspace(workspaceId, false, convertedConfig);
    // response matches example response
    expect(readResult.status).toEqual(200);
    expect(readResult.data.name).toEqual('Workspace A');
    expect(readResult.data.description).toEqual('Description of Workspace A');

    // Delete workspace
    const deleteResult = await deleteWorkspace(workspaceId, convertedConfig);
    expect(deleteResult.status).toEqual(204);
  });

  test('create, update (PUT), read, and delete', async () => {
    const axiosConfig = await updateConfig(config, WORKSPACES_API_BASE);
    const convertedConfig = await convertConfig(axiosConfig);

    // Create workspace
    const createResponse = await createWorkspace('', TEST_WORKSPACE_NAME, TEST_WORKSPACE_DESC, convertedConfig);
    expect(createResponse.status).toEqual(201);
    const workspaceId = createResponse.data.id;
    expect(workspaceId).toBeTruthy();

    // Read initial workspace state
    const initialReadResult = await readWorkspace(workspaceId, false, convertedConfig);
    expect(initialReadResult.status).toEqual(200);
    const initialName = initialReadResult.data.name;
    const initialDescription = initialReadResult.data.description;
    const parentId = initialReadResult.data.parent_id || '';

    // Update workspace using PUT
    const updatedName = 'Updated Workspace Name';
    const updatedDescription = 'Updated workspace description via PUT operation';
    const updateRequest = {
      name: updatedName,
      description: updatedDescription,
      parent_id: parentId,
    };

    const updateResponse = await updateWorkspace(workspaceId, updateRequest, convertedConfig);
    expect(updateResponse.status).toEqual(200);

    // Read updated workspace to verify changes
    const updatedReadResult = await readWorkspace(workspaceId, false, convertedConfig);
    expect(updatedReadResult.status).toEqual(200);
    expect(updatedReadResult.data.name).toEqual(updatedName);
    expect(updatedReadResult.data.description).toEqual(updatedDescription);
    expect(updatedReadResult.data.id).toEqual(workspaceId);

    // Verify that the values actually changed
    expect(updatedReadResult.data.name).not.toEqual(initialName);
    expect(updatedReadResult.data.description).not.toEqual(initialDescription);

    // Delete workspace
    const deleteResult = await deleteWorkspace(workspaceId, convertedConfig);
    expect(deleteResult.status).toEqual(204);
  });
});
