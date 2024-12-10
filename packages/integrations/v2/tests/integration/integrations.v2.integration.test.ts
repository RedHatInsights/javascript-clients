import { describe, expect, test } from '@jest/globals';

import { IntegrationsClient } from '../../api';
import { EndpointResourceV2CreateEndpointParams } from '../../EndpointResourceV2CreateEndpoint';
import { Endpoint, EndpointType } from '../../types';
// import { EndpointResourceV2AddEventTypeToEndpointParams } from '../../EndpointResourceV2AddEventTypeToEndpoint';
// import { EndpointResourceV2DeleteEventTypeFromEndpointParams } from '../../EndpointResourceV2DeleteEventTypeFromEndpoint';
// import { EndpointResourceV2DeleteEndpointParams } from '../../EndpointResourceV2DeleteEndpoint';
// import { EndpointResourceV2EnableEndpointParams } from '../../EndpointResourceV2EnableEndpoint';
// import { EndpointResourceV2DisableEndpointParams } from '../../EndpointResourceV2DisableEndpoint';
// import { EndpointResourceV2GetEndpointParams } from '../../EndpointResourceV2GetEndpoint';
// import { EndpointResourceV2GetEndpointHistoryParams } from '../../EndpointResourceV2GetEndpointHistory';
// import { EndpointResourceV2GetDetailedEndpointHistoryParams } from '../../EndpointResourceV2GetDetailedEndpointHistory';
// import { EndpointResourceV2GetEndpointsParams } from '../../EndpointResourceV2GetEndpoints';
// import { EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams } from '../../EndpointResourceV2GetOrCreateDrawerSubscriptionEndpoint';
// import { EndpointResourceV2GetOrCreateEmailSubscriptionEndpointParams } from '../../EndpointResourceV2GetOrCreateEmailSubscriptionEndpoint';
// import { EndpointResourceV2UpdateEndpointParams } from '../../EndpointResourceV2UpdateEndpoint';
// import { EndpointResourceV2UpdateEventTypesLinkedToEndpointParams } from '../../EndpointResourceV2UpdateEventTypesLinkedToEndpoint';
// import { EndpointResourceV1CreateEndpointParams } from '../../../EndpointResourceV1CreateEndpoint';

// note the 1.0, which is different from, for example, RBAC v1
const BASE_PATH = 'http://localhost:3002/api/integrations/v2.0/';

const client = IntegrationsClient(BASE_PATH);
const placeHolder = 'amVmZgo=';

describe('Integrations API (v2)', () => {
  test('create endpoint', async () => {
    const endpoint: Endpoint = {
      name: placeHolder,
      description: placeHolder,
      type: EndpointType.Ansible,
    };
    const endpointResourceV2CreateEndpointParams: EndpointResourceV2CreateEndpointParams = {
      endpoint: endpoint,
    };
    const createEndpointResp = await client.endpointResourceV2CreateEndpoint(endpointResourceV2CreateEndpointParams);
    expect(createEndpointResp.status).toEqual(200);
  });
});
