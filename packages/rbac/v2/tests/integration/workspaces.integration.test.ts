import { describe, expect, test } from '@jest/globals';

import { RbacClient } from '../../api';
import { WorkspacesUpdateParams } from '../../WorkspacesUpdate';
import { WorkspacesPatchParams } from '../../WorkspacesPatch';

const BASE_PATH = 'http://localhost:3002/api/rbac/v2';

const client = RbacClient(BASE_PATH);

describe('Workspaces API (v2)', () => {
  test('update workspace (PUT)', async () => {
    const params: WorkspacesUpdateParams = {
      id: 'test-workspace-id',
      workspacesUpdateWorkspaceRequest: {
        name: 'Updated Workspace Name',
        description: 'Updated workspace description',
        parent_id: '',
      },
    };
    const resp = await client.workspacesUpdate(params);
    expect(resp.status).toEqual(200);
  });

  test('patch workspace (PATCH)', async () => {
    const params: WorkspacesPatchParams = {
      id: 'test-workspace-id',
      workspacesPatchWorkspaceRequest: {
        name: 'Patched Workspace Name',
      },
    };
    const resp = await client.workspacesPatch(params);
    expect(resp.status).toEqual(200);
  });
});
