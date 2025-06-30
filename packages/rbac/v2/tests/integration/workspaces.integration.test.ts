import { describe, expect, test } from '@jest/globals';
import { config, createWorkspace, deleteWorkspace, listWorkspaces, readWorkspace, WORKSPACES_API_BASE } from './client';

import { AxiosRequestConfig } from 'axios';
import { WorkspacesWorkspaceTypesQueryParam } from '../../types';
import { convertConfig, updateConfig } from './util';

describe.skip('Workspaces API endpoints', () => {
  const TEST_WORKSPACE_NAME = 'JSClientsTestWorkspace';
  const TEST_WORKSPACE_DESC = 'Test workspace created by JS Clients test automation';

  test('create, list, read, and delete', async () => {
    const axiosConfig = await updateConfig(config, WORKSPACES_API_BASE);
    const convertedConfig: AxiosRequestConfig = await convertConfig(axiosConfig);

    // create it
    const createResponse = await createWorkspace('', TEST_WORKSPACE_NAME, TEST_WORKSPACE_DESC, convertedConfig);
    expect(createResponse.status).toEqual(201);
    const workspaceId = createResponse.data.id;
    expect(workspaceId).toBeTruthy();

    // list it
    const findResult2 = await listWorkspaces(100, 0, WorkspacesWorkspaceTypesQueryParam.All, convertedConfig);
    expect(findResult2).toBeTruthy();

    // update it
    // const updateResult = await updateWorkspace(workspaceId, {name: TEST_WORKSPACE_UPDATED_NAME, description: TEST_WORKSPACE_UPDATED_DESC, parent_id: ""}, convertedConfig)

    // read it
    const readResult = await readWorkspace(workspaceId, false, convertedConfig);
    // response matches example response
    expect(readResult.status).toEqual(200);
    expect(readResult.data.name).toEqual('Workspace A');
    expect(readResult.data.description).toEqual('Description of Workspace A');

    // delete it
    const deleteResult = await deleteWorkspace(workspaceId, convertedConfig);
    expect(deleteResult.status).toEqual(204);
  });
});
