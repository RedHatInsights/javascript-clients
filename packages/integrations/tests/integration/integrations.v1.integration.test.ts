import { describe, expect, test } from '@jest/globals';

import { IntegrationsClient } from '../../api';
import { EndpointResourceV1CreateEndpointParams } from '../../EndpointResourceV1CreateEndpoint';
import { Endpoint, EndpointType, RequestSystemSubscriptionProperties } from '../../types';
import { EndpointResourceV1AddEventTypeToEndpointParams } from '../../EndpointResourceV1AddEventTypeToEndpoint';
import { EndpointResourceV1DeleteEventTypeFromEndpointParams } from '../../EndpointResourceV1DeleteEventTypeFromEndpoint';
import { EndpointResourceV1DeleteEndpointParams } from '../../EndpointResourceV1DeleteEndpoint';
import { EndpointResourceV1EnableEndpointParams } from '../../EndpointResourceV1EnableEndpoint';
import { EndpointResourceV1DisableEndpointParams } from '../../EndpointResourceV1DisableEndpoint';
import { EndpointResourceV1GetEndpointParams } from '../../EndpointResourceV1GetEndpoint';
import { EndpointResourceV1GetEndpointHistoryParams } from '../../EndpointResourceV1GetEndpointHistory';
import { EndpointResourceV1GetDetailedEndpointHistoryParams } from '../../EndpointResourceV1GetDetailedEndpointHistory';
import { EndpointResourceV1GetEndpointsParams } from '../../EndpointResourceV1GetEndpoints';
import { EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams } from '../../EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint';
import { EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams } from '../../EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint';
import { EndpointResourceV1UpdateEndpointParams } from '../../EndpointResourceV1UpdateEndpoint';
import { EndpointResourceV1UpdateEventTypesLinkedToEndpointParams } from '../../EndpointResourceV1UpdateEventTypesLinkedToEndpoint';
import { AxiosError } from 'axios';

// note the 1.0, which is different from, for example, RBAC v1
const BASE_PATH = 'http://localhost:3001/api/integrations/v1.0/';

const client = IntegrationsClient(BASE_PATH);
const placeHolder = 'bob';

describe('Integrations API (v1)', () => {
  test('create endpoint', async () => {
    const endpoint: Endpoint = {
      name: placeHolder,
      description: placeHolder,
      type: EndpointType.Ansible,
    };
    const endpointResourceV1CreateEndpointParams: EndpointResourceV1CreateEndpointParams = {
      endpoint: endpoint,
    };
    const createEndpointResp = await client.endpointResourceV1CreateEndpoint(endpointResourceV1CreateEndpointParams);
    expect(createEndpointResp.status).toEqual(200);
  });

  test('add event type from endpoint params', async () => {
    const addEventTypeParams: EndpointResourceV1AddEventTypeToEndpointParams = {
      endpointId: placeHolder,
      eventTypeId: placeHolder,
    };
    const addEventTypeResp = await client.endpointResourceV1AddEventTypeToEndpoint(addEventTypeParams).catch((error: AxiosError) => {
      expect(error.message).toContain('404');
    });
    if (!addEventTypeResp) {
      return;
    }
    expect(addEventTypeResp.status).toEqual(204);
  });

  test('remove event type from endpoint params', async () => {
    const removeEventTypeParams: EndpointResourceV1DeleteEventTypeFromEndpointParams = {
      endpointId: placeHolder,
      eventTypeId: placeHolder,
    };
    const removeEventTypeResp = await client.endpointResourceV1DeleteEventTypeFromEndpoint(removeEventTypeParams).catch((error: AxiosError) => {
      expect(error.message).toContain('404');
    });
    if (!removeEventTypeResp) {
      return;
    }
    expect(removeEventTypeResp).toEqual(204);
  });

  test('delete event type from endpoint', async () => {
    const deleteEventTypeParams: EndpointResourceV1DeleteEventTypeFromEndpointParams = {
      endpointId: placeHolder,
      eventTypeId: placeHolder,
    };
    const deleteEventTypeResp = await client.endpointResourceV1DeleteEventTypeFromEndpoint(deleteEventTypeParams).catch((error: AxiosError) => {
      expect(error.message).toContain('404');
    });
    if (!deleteEventTypeResp) {
      return;
    }
    expect(deleteEventTypeResp.status).toEqual(204);
  });

  test('delete endpoint', async () => {
    const deleteEndpointParams: EndpointResourceV1DeleteEndpointParams = {
      id: placeHolder,
    };
    const deleteEndpointResp = await client.endpointResourceV1DeleteEndpoint(deleteEndpointParams).catch((error: AxiosError) => {
      expect(error.message).toContain('404');
    });
    if (!deleteEndpointResp) {
      return;
    }
    expect(deleteEndpointResp.status).toEqual(204);
  });

  test('enable endpoint', async () => {
    const enableEndpointParams: EndpointResourceV1EnableEndpointParams = {
      id: placeHolder,
    };
    const enableResp = await client.endpointResourceV1EnableEndpoint(enableEndpointParams);
    expect(enableResp.status).toEqual(200);
  });

  test('disable endpoint', async () => {
    const disableEndpointParams: EndpointResourceV1DisableEndpointParams = { id: placeHolder };
    const disableResp = await client.endpointResourceV1DisableEndpoint(disableEndpointParams).catch((error: AxiosError) => {
      expect(error).toContain('404');
    });
    if (!disableResp) {
      return;
    }
    expect(disableResp.status).toEqual(204);
  });

  test('get endpoint', async () => {
    const getEndpointParams: EndpointResourceV1GetEndpointParams = {
      id: placeHolder,
    };
    const getEndptResp = await client.endpointResourceV1GetEndpoint(getEndpointParams);
    expect(getEndptResp.status).toEqual(200);
  });

  test('get endpoint history', async () => {
    const getEndpointHistoryParams: EndpointResourceV1GetEndpointHistoryParams = { id: placeHolder };
    const endpointHistoryResp = await client.endpointResourceV1GetEndpointHistory(getEndpointHistoryParams);
    expect(endpointHistoryResp.status).toEqual(200);
  });

  test('get detailed endpoint history', async () => {
    const getDetailedHistoryParams: EndpointResourceV1GetDetailedEndpointHistoryParams = { historyId: placeHolder, id: placeHolder };
    const resp = await client.endpointResourceV1GetDetailedEndpointHistory(getDetailedHistoryParams);
    expect(resp.status).toEqual(200);
  });

  test('get endpoints', async () => {
    const getEndpointsParams: EndpointResourceV1GetEndpointsParams = {};
    const resp = await client.endpointResourceV1GetEndpoints(getEndpointsParams);
    expect(resp.status).toEqual(200);
  });

  test('get or create drawer subscription endpoint', async () => {
    const requestSystemSubscriptionProps: RequestSystemSubscriptionProperties = {
      only_admins: true,
    };
    const getOrCreateDrawerSubscriptionParams: EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams = {
      requestSystemSubscriptionProperties: requestSystemSubscriptionProps,
    };
    const resp = await client.endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint(getOrCreateDrawerSubscriptionParams);
    expect(resp.status).toEqual(200);
  });

  test('get or create email subscription endpoint', async () => {
    const requestSystemSubscriptionProps: RequestSystemSubscriptionProperties = {
      only_admins: false,
    };
    const params: EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams = {
      requestSystemSubscriptionProperties: requestSystemSubscriptionProps,
    };
    const resp = await client.endpointResourceV1GetOrCreateEmailSubscriptionEndpoint(params);
    expect(resp.status).toEqual(200);
  });

  test('update endpoint', async () => {
    const endpt: Endpoint = {
      name: placeHolder,
      description: placeHolder,
      type: EndpointType.EmailSubscription,
    };
    const params: EndpointResourceV1UpdateEndpointParams = { id: placeHolder, endpoint: endpt };
    const resp = await client.endpointResourceV1UpdateEndpoint(params);
    expect(resp.status).toEqual(200);
  });

  test('update event types linked to endpoint', async () => {
    const params: EndpointResourceV1UpdateEventTypesLinkedToEndpointParams = {
      endpointId: placeHolder,
    };
    const resp = await client.endpointResourceV1UpdateEventTypesLinkedToEndpoint(params);
    expect(resp.status).toEqual(204);
  });
});
