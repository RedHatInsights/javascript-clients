import { describe, expect, test } from '@jest/globals';
import { randomUUID } from 'crypto';

import { IntegrationsClient } from '../../src/v2/api';
import { EndpointResourceV2GetEndpointParams } from '../../src/v2/EndpointResourceV2GetEndpoint';
import { EndpointResourceV2GetEndpointHistoryParams } from '../../src/v2/EndpointResourceV2GetEndpointHistory';
import { EndpointResourceV2GetEndpointsParams } from '../../src/v2/EndpointResourceV2GetEndpoints';

// note the v2 endpoint path - Prism serves mock endpoints at root level
const BASE_PATH = 'http://localhost:3001';

const client = IntegrationsClient(BASE_PATH);

// Generate valid test data for OpenAPI validation
const generateTestData = {
  uuid: () => randomUUID(),
};

describe('Integrations API (v2)', () => {
  test('get endpoint', async () => {
    const getEndpointParams: EndpointResourceV2GetEndpointParams = {
      id: generateTestData.uuid(),
    };
    const getEndptResp = await client.endpointResourceV2GetEndpoint(getEndpointParams);
    expect(getEndptResp.status).toEqual(200);
  });

  test('get endpoint history', async () => {
    const getEndpointHistoryParams: EndpointResourceV2GetEndpointHistoryParams = {
      id: generateTestData.uuid(),
    };
    const endpointHistoryResp = await client.endpointResourceV2GetEndpointHistory(getEndpointHistoryParams);
    expect(endpointHistoryResp.status).toEqual(200);
  });

  test('get endpoints', async () => {
    const getEndpointsParams: EndpointResourceV2GetEndpointsParams = {};
    const resp = await client.endpointResourceV2GetEndpoints(getEndpointsParams);
    expect(resp.status).toEqual(200);
  });
});
