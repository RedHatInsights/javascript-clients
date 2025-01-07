import { describe, expect, test } from '@jest/globals';

import { IntegrationsClient } from '../../api';
import { Endpoint, EndpointType, RequestSystemSubscriptionProperties } from '../../types';
import { EndpointResourceV2CreateEndpointParams } from '../../EndpointResourceV2CreateEndpoint';
import { EndpointResourceV2AddEventTypeToEndpointParams } from '../../EndpointResourceV2AddEventTypeToEndpoint';
import { EndpointResourceV2DeleteEventTypeFromEndpointParams } from '../../EndpointResourceV2DeleteEventTypeFromEndpoint';
import { EndpointResourceV2DeleteEndpointParams } from '../../EndpointResourceV2DeleteEndpoint';
import { EndpointResourceV2EnableEndpointParams } from '../../EndpointResourceV2EnableEndpoint';
import { EndpointResourceV2DisableEndpointParams } from '../../EndpointResourceV2DisableEndpoint';
import { EndpointResourceV2GetEndpointParams } from '../../EndpointResourceV2GetEndpoint';
import { EndpointResourceV2GetEndpointHistoryParams } from '../../EndpointResourceV2GetEndpointHistory';
import { EndpointResourceV2GetDetailedEndpointHistoryParams } from '../../EndpointResourceV2GetDetailedEndpointHistory';
import { EndpointResourceV2GetEndpointsParams } from '../../EndpointResourceV2GetEndpoints';
import { EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams } from '../../EndpointResourceV2GetOrCreateDrawerSubscriptionEndpoint';
import { EndpointResourceV2GetOrCreateEmailSubscriptionEndpointParams } from '../../EndpointResourceV2GetOrCreateEmailSubscriptionEndpoint';
import { EndpointResourceV2UpdateEndpointParams } from '../../EndpointResourceV2UpdateEndpoint';
import { EndpointResourceV2UpdateEventTypesLinkedToEndpointParams } from '../../EndpointResourceV2UpdateEventTypesLinkedToEndpoint';
import { AxiosError } from 'axios';

const BASE_PATH = 'http://localhost:3002/api/integrations/v2.0/';

const client = IntegrationsClient(BASE_PATH);
const placeHolder = 'bob';

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

  test('add event type from endpoint params', async () => {
    const addEventTypeParams: EndpointResourceV2AddEventTypeToEndpointParams = {
      endpointId: placeHolder,
      eventTypeId: placeHolder,
    };
    const addEventTypeResp = await client.endpointResourceV2AddEventTypeToEndpoint(addEventTypeParams).catch((error: AxiosError) => {
      expect(error.message).toContain('404');
    });
    if (!addEventTypeResp) {
      return;
    }
    expect(addEventTypeResp.status).toEqual(204);
  });

  test('remove event type from endpoint params', async () => {
    const removeEventTypeParams: EndpointResourceV2DeleteEventTypeFromEndpointParams = {
      endpointId: placeHolder,
      eventTypeId: placeHolder,
    };
    const removeEventTypeResp = await client.endpointResourceV2DeleteEventTypeFromEndpoint(removeEventTypeParams).catch((error: AxiosError) => {
      expect(error.message).toContain('404');
    });
    if (!removeEventTypeResp) {
      return;
    }
    expect(removeEventTypeResp.status).toEqual(204);
  });

  test('delete event type from endpoint', async () => {
    const deleteEventTypeParams: EndpointResourceV2DeleteEventTypeFromEndpointParams = {
      endpointId: placeHolder,
      eventTypeId: placeHolder,
    };
    const deleteEventTypeResp = await client.endpointResourceV2DeleteEventTypeFromEndpoint(deleteEventTypeParams).catch((error: AxiosError) => {
      expect(error.message).toContain('404');
    });
    if (!deleteEventTypeResp) {
      return;
    }
    expect(deleteEventTypeResp.status).toEqual(204);
  });

  test('delete endpoint', async () => {
    const deleteEndpointParams: EndpointResourceV2DeleteEndpointParams = {
      id: placeHolder,
    };
    const deleteEndpointResp = await client.endpointResourceV2DeleteEndpoint(deleteEndpointParams);
    expect(deleteEndpointResp.status).toEqual(204);
  });

  test('enable endpoint', async () => {
    const enableEndpointParams: EndpointResourceV2EnableEndpointParams = {
      id: placeHolder,
    };
    const enableResp = await client.endpointResourceV2EnableEndpoint(enableEndpointParams);
    expect(enableResp.status).toEqual(200);
  });

  test('disable endpoint', async () => {
    const disableEndpointParams: EndpointResourceV2DisableEndpointParams = { id: placeHolder };
    const disableResp = await client.endpointResourceV2DisableEndpoint(disableEndpointParams);
    expect(disableResp.status).toEqual(204);
  });

  test('get endpoint', async () => {
    const getEndpointParams: EndpointResourceV2GetEndpointParams = {
      id: placeHolder,
    };
    const getEndptResp = await client.endpointResourceV2GetEndpoint(getEndpointParams);
    expect(getEndptResp.status).toEqual(200);
  });

  test('get endpoint history', async () => {
    const getEndpointHistoryParams: EndpointResourceV2GetEndpointHistoryParams = { id: placeHolder };
    const endpointHistoryResp = await client.endpointResourceV2GetEndpointHistory(getEndpointHistoryParams);
    expect(endpointHistoryResp.status).toEqual(200);
  });

  test('get detailed endpoint history', async () => {
    const getDetailedHistoryParams: EndpointResourceV2GetDetailedEndpointHistoryParams = { historyId: placeHolder, id: placeHolder };
    const resp = await client.endpointResourceV2GetDetailedEndpointHistory(getDetailedHistoryParams);
    expect(resp.status).toEqual(200);
  });

  test('get endpoints', async () => {
    const getEndpointsParams: EndpointResourceV2GetEndpointsParams = {};
    const resp = await client.endpointResourceV2GetEndpoints(getEndpointsParams);
    expect(resp.status).toEqual(200);
  });

  test('get or create drawer subscription endpoint', async () => {
    const requestSystemSubscriptionProps: RequestSystemSubscriptionProperties = {
      only_admins: true,
    };
    const getOrCreateDrawerSubscriptionParams: EndpointResourceV2GetOrCreateDrawerSubscriptionEndpointParams = {
      requestSystemSubscriptionProperties: requestSystemSubscriptionProps,
    };
    const resp = await client.endpointResourceV2GetOrCreateDrawerSubscriptionEndpoint(getOrCreateDrawerSubscriptionParams);
    expect(resp.status).toEqual(200);
  });

  test('get or create email subscription endpoint', async () => {
    const requestSystemSubscriptionProps: RequestSystemSubscriptionProperties = {
      only_admins: false,
    };
    const params: EndpointResourceV2GetOrCreateEmailSubscriptionEndpointParams = {
      requestSystemSubscriptionProperties: requestSystemSubscriptionProps,
    };
    const resp = await client.endpointResourceV2GetOrCreateEmailSubscriptionEndpoint(params);
    expect(resp.status).toEqual(200);
  });

  test('update endpoint', async () => {
    const endpt: Endpoint = {
      name: placeHolder,
      description: placeHolder,
      type: EndpointType.EmailSubscription,
    };
    const params: EndpointResourceV2UpdateEndpointParams = { id: placeHolder, endpoint: endpt };
    const resp = await client.endpointResourceV2UpdateEndpoint(params);
    expect(resp.status).toEqual(200);
  });

  test('update event types linked to endpoint', async () => {
    const params: EndpointResourceV2UpdateEventTypesLinkedToEndpointParams = {
      endpointId: placeHolder,
    };
    const resp = await client.endpointResourceV2UpdateEventTypesLinkedToEndpoint(params);
    expect(resp.status).toEqual(204);
  });
});
