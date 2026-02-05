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

  test('update workspace (PUT)', async () => {
    const axiosConfig = await updateConfig(config, WORKSPACES_API_BASE);
    const convertedConfig = await convertConfig(axiosConfig);

    const workspaceId = 'test-workspace-id';
    const updateRequest = {
      name: 'Updated Workspace Name',
      description: 'Updated workspace description via PUT operation',
      parent_id: '',
    };

    const updateResponse = await updateWorkspace(workspaceId, updateRequest, convertedConfig);
    expect(updateResponse.status).toEqual(200);
    expect(updateResponse.data).toBeTruthy();
    expect(updateResponse.data.id).toBeTruthy();
    expect(updateResponse.data.name).toBeTruthy();
    expect(updateResponse.data.description).toBeTruthy();
  });
});
