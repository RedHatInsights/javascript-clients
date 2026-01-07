import { describe, expect, test } from '@jest/globals';

import { IntegrationsClient } from '../../api';
import { EndpointResourceV2V2GetEndpointParams } from '../../EndpointResourceV2V2GetEndpoint';
import { EndpointResourceV2V2GetEndpointHistoryParams } from '../../EndpointResourceV2V2GetEndpointHistory';
import { EndpointResourceV2V2GetEndpointsParams } from '../../EndpointResourceV2V2GetEndpoints';

const BASE_PATH = 'http://localhost:3002/api/integrations/v2.0/';

const client = IntegrationsClient(BASE_PATH);
const placeHolder = 'bob';

describe('Integrations API (v2)', () => {
  test('get endpoint', async () => {
    const getEndpointParams: EndpointResourceV2V2GetEndpointParams = {
      id: placeHolder,
    };
    const getEndptResp = await client.endpointResourceV2V2GetEndpoint(getEndpointParams);
    expect(getEndptResp.status).toEqual(200);
  });

  test('get endpoint history', async () => {
    const getEndpointHistoryParams: EndpointResourceV2V2GetEndpointHistoryParams = { id: placeHolder };
    const endpointHistoryResp = await client.endpointResourceV2V2GetEndpointHistory(getEndpointHistoryParams);
    expect(endpointHistoryResp.status).toEqual(200);
  });

  test('get endpoints', async () => {
    const getEndpointsParams: EndpointResourceV2V2GetEndpointsParams = {};
    const resp = await client.endpointResourceV2V2GetEndpoints(getEndpointsParams);
    expect(resp.status).toEqual(200);
  });
});
