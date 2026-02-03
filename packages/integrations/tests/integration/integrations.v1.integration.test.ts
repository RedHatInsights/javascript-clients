import { describe, expect, test } from '@jest/globals';
import { randomUUID } from 'crypto';

import { IntegrationsClient } from '../../api';
import { EndpointResourceV1CreateEndpointParams } from '../../EndpointResourceV1CreateEndpoint';
import { Endpoint, RequestSystemSubscriptionProperties } from '../../types';
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

// note the 1.0, which is different from, for example, RBAC v1
const BASE_PATH = 'http://localhost:3001';

const client = IntegrationsClient(BASE_PATH);

// Generate valid test data for OpenAPI validation
const generateTestData = {
  uuid: () => randomUUID(),
  name: () => `test-${Math.random().toString(36).substring(7)}`,
  description: () => `Test description ${Date.now()}`,
};

describe('Integrations API (v1)', () => {
  test('create endpoint', async () => {
    const endpoint: Endpoint = {
      name: generateTestData.name(),
      description: generateTestData.description(),
      type: 'ansible',
    };
    const endpointResourceV1CreateEndpointParams: EndpointResourceV1CreateEndpointParams = {
      endpoint: endpoint,
    };
    const createEndpointResp = await client.endpointResourceV1CreateEndpoint(endpointResourceV1CreateEndpointParams);
    expect(createEndpointResp.status).toEqual(200);
  });

  test('delete endpoint', async () => {
    const deleteEndpointParams: EndpointResourceV1DeleteEndpointParams = {
      id: generateTestData.uuid(),
    };
    const deleteEndpointResp = await client.endpointResourceV1DeleteEndpoint(deleteEndpointParams);
    expect(deleteEndpointResp.status).toEqual(204);
  });

  test('enable endpoint', async () => {
    const enableEndpointParams: EndpointResourceV1EnableEndpointParams = {
      id: generateTestData.uuid(),
    };
    const enableResp = await client.endpointResourceV1EnableEndpoint(enableEndpointParams);
    expect(enableResp.status).toEqual(200);
  });

  test('disable endpoint', async () => {
    const disableEndpointParams: EndpointResourceV1DisableEndpointParams = { id: generateTestData.uuid() };
    const disableResp = await client.endpointResourceV1DisableEndpoint(disableEndpointParams);
    expect(disableResp.status).toEqual(204);
  });

  test('get endpoint', async () => {
    const getEndpointParams: EndpointResourceV1GetEndpointParams = {
      id: generateTestData.uuid(),
    };
    const getEndptResp = await client.endpointResourceV1GetEndpoint(getEndpointParams);
    expect(getEndptResp.status).toEqual(200);
  });

  test('get endpoint history', async () => {
    const getEndpointHistoryParams: EndpointResourceV1GetEndpointHistoryParams = { id: generateTestData.uuid() };
    const endpointHistoryResp = await client.endpointResourceV1GetEndpointHistory(getEndpointHistoryParams);
    expect(endpointHistoryResp.status).toEqual(200);
  });

  test('get detailed endpoint history', async () => {
    const getDetailedHistoryParams: EndpointResourceV1GetDetailedEndpointHistoryParams = {
      historyId: generateTestData.uuid(),
      id: generateTestData.uuid(),
    };
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
      name: generateTestData.name(),
      description: generateTestData.description(),
      type: 'email_subscription',
    };
    const params: EndpointResourceV1UpdateEndpointParams = { id: generateTestData.uuid(), endpoint: endpt };
    const resp = await client.endpointResourceV1UpdateEndpoint(params);
    expect(resp.status).toEqual(200);
  });

  test('update event types linked to endpoint', async () => {
    const params: EndpointResourceV1UpdateEventTypesLinkedToEndpointParams = {
      endpointId: generateTestData.uuid(),
      body: [],
    };
    const resp = await client.endpointResourceV1UpdateEventTypesLinkedToEndpoint(params);
    expect(resp.status).toEqual(204);
  });
});
