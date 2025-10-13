import { describe, expect, test } from '@jest/globals';

// imports of API-specific classes
import { NotificationsClient } from '../../api';
import { NotificationResourceV2CreateBehaviorGroupParams } from '../../NotificationResourceV2CreateBehaviorGroup';
import { NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams } from '../../NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpoint';
import { NotificationResourceV2UpdateBehaviorGroupParams } from '../../NotificationResourceV2UpdateBehaviorGroup';
import { NotificationResourceV2DeleteBehaviorGroupParams } from '../../NotificationResourceV2DeleteBehaviorGroup';
import { NotificationResourceV2FindBehaviorGroupsByBundleIdParams } from '../../NotificationResourceV2FindBehaviorGroupsByBundleId';
import { NotificationResourceV2GetBundleByNameParams } from '../../NotificationResourceV2GetBundleByName';
import { NotificationResourceV2GetApplicationByNameAndBundleNameParams } from '../../NotificationResourceV2GetApplicationByNameAndBundleName';
import { NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams } from '../../NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationName';
import { NotificationResourceV2GetEventTypesParams } from '../../NotificationResourceV2GetEventTypes';
import { NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams } from '../../NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroup';
import { NotificationResourceV2UpdateEventTypeBehaviorsParams } from '../../NotificationResourceV2UpdateEventTypeBehaviors';
import { NotificationResourceV2GetLinkedBehaviorGroupsParams } from '../../NotificationResourceV2GetLinkedBehaviorGroups';
import { NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams } from '../../NotificationResourceV2DeleteBehaviorGroupFromEventType';
import { NotificationResourceV2UpdateEventTypeEndpointsParams } from '../../NotificationResourceV2UpdateEventTypeEndpoints';
import { NotificationResourceV2AppendBehaviorGroupToEventTypeParams } from '../../NotificationResourceV2AppendBehaviorGroupToEventType';
import { NotificationResourceV2GetApplicationsFacetsParams } from '../../NotificationResourceV2GetApplicationsFacets';
import { NotificationResourceV2GetBundleFacetsParams } from '../../NotificationResourceV2GetBundleFacets';
import { CreateBehaviorGroupRequest } from '../../types';
import { UpdateBehaviorGroupRequest } from '../../types';
import { NotificationResourceV1UpdateBehaviorGroupActionsParams } from '../../NotificationResourceV1UpdateBehaviorGroupActions';
import { NotificationResourceV1UpdateEventTypeBehaviorsParams } from '../../NotificationResourceV1UpdateEventTypeBehaviors';
import { NotificationResourceV1UpdateEventTypeEndpointsParams } from '../../NotificationResourceV1UpdateEventTypeEndpoints';

// client path from spec
const BASE_PATH = 'http://localhost:3002/api/notifications/v2.0';

const client = NotificationsClient(BASE_PATH);

describe('Notifications v2.0', () => {
  test('Create a behavior group', async () => {
    const createBehaviorGroupRequest: CreateBehaviorGroupRequest = {
      bundle_id: '7464f4e8-e84a-405b-877b-ad62ad395595',
      bundle_name: '',
      display_name: '',
      endpoint_ids: [],
      event_type_ids: new Set<string>(),
      bundle_uuid_or_bundle_name_valid: true,
    };
    const params: NotificationResourceV2CreateBehaviorGroupParams = { createBehaviorGroupRequest };
    const resp = await client.notificationResourceV1CreateBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('List the behavior groups affected by the removal of an endpoint', async () => {
    const params: NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams = { endpointId: 'b1d0a37f-6dd5-4cb0-9d9b-47a63711a25d' };
    const resp = await client.notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint(params);
    expect(resp.status).toBe(200);
  });

  test('Update the list of behavior group actions', async () => {
    const params: NotificationResourceV1UpdateBehaviorGroupActionsParams = {
      behaviorGroupId: 'c89a38e8-f13f-4599-b1e8-284c318404ff',
      body: [],
    };
    const resp = await client.notificationResourceV1UpdateBehaviorGroupActions(params);
    expect(resp.status).toBe(200);
  });

  test('Update a behavior group', async () => {
    const updateBehaviorGroupRequest: UpdateBehaviorGroupRequest = {
      display_name: '',
      endpoint_ids: [],
      event_type_ids: new Set<string>(),
      display_name_not_null_and_blank: true,
    };
    const params: NotificationResourceV2UpdateBehaviorGroupParams = { id: 'd6b117bc-725e-41b3-8292-ea48ab4291d5', updateBehaviorGroupRequest };
    const resp = await client.notificationResourceV1UpdateBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('Delete a behavior group', async () => {
    const params: NotificationResourceV2DeleteBehaviorGroupParams = { id: 'b123896b-88dc-4ec7-a3c1-d89fdc1236e9' };
    const resp = await client.notificationResourceV1DeleteBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('List behavior groups in a bundle', async () => {
    const params: NotificationResourceV2FindBehaviorGroupsByBundleIdParams = { bundleId: '48d9484b-d192-4ca2-8f49-d4bcd2503086' };
    const resp = await client.notificationResourceV1FindBehaviorGroupsByBundleId(params);
    expect(resp.status).toBe(200);
  });

  test('Retrieve a bundle by name', async () => {
    const params: NotificationResourceV2GetBundleByNameParams = { bundleName: '' };
    const resp = await client.notificationResourceV1GetBundleByName(params);
    expect(resp.status).toBe(200);
  });

  test('Retrieve an application by bundle and application names', async () => {
    const params: NotificationResourceV2GetApplicationByNameAndBundleNameParams = { applicationName: '', bundleName: '' };
    const resp = await client.notificationResourceV1GetApplicationByNameAndBundleName(params);
    expect(resp.status).toBe(200);
  });

  test('Retrieve an event type by bundle, application and event type names', async () => {
    const params: NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams = {
      applicationName: '',
      bundleName: '',
      eventTypeName: '',
    };
    const resp = await client.notificationResourceV1GetEventTypesByNameAndBundleAndApplicationName(params);
    expect(resp.status).toBe(200);
  });

  test('List all event types', async () => {
    const params: NotificationResourceV2GetEventTypesParams = {};
    const resp = await client.notificationResourceV1GetEventTypes(params);
    expect(resp.status).toBe(200);
  });

  test('List the event types affected by the removal of a behavior group', async () => {
    const params: NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams = {
      behaviorGroupId: '16087f1c-94b7-4d23-a19a-a447595b44a8',
    };
    const resp = await client.notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup(params);
    expect(resp.status).toBe(200);
  });

  test('Update the list of behavior groups for an event type', async () => {
    const params: NotificationResourceV1UpdateEventTypeBehaviorsParams = {
      eventTypeId: '51512695-4d25-43aa-9631-2bfffc5fd92f',
      body: new Set<string>(),
    };
    const resp = await client.notificationResourceV1UpdateEventTypeBehaviors(params);
    expect(resp.status).toBe(200);
  });

  test('Retrieve the behavior groups linked to an event type.', async () => {
    const params: NotificationResourceV2GetLinkedBehaviorGroupsParams = { eventTypeId: 'ad1a7cd7-0b42-4210-8093-b6c58a23d4b0' };
    const resp = await client.notificationResourceV1GetLinkedBehaviorGroups(params);
    expect(resp.status).toBe(200);
  });

  test('Delete a behavior group from an event type', async () => {
    const params: NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams = {
      behaviorGroupId: '98d38280-0589-4072-aaa5-0977e95fb31a',
      eventTypeId: '38a3f0d4-f5cf-4411-8702-9b89ee26d2b2',
    };
    const resp = await client.notificationResourceV1DeleteBehaviorGroupFromEventType(params);
    expect(resp.status).toBe(204);
  });

  test('Update the list of endpoints for an event type', async () => {
    const params: NotificationResourceV1UpdateEventTypeEndpointsParams = {
      eventTypeId: 'e6756939-0f1e-40bf-aff4-f1f8888aef91',
      body: new Set<string>(),
    };
    const resp = await client.notificationResourceV1UpdateEventTypeEndpoints(params);
    expect(resp.status).toBe(200);
  });

  test('Add a behavior group to the given event type.', async () => {
    const params: NotificationResourceV2AppendBehaviorGroupToEventTypeParams = {
      behaviorGroupUuid: '878a5716-f4c9-4430-aa36-ce54613b425c',
      eventTypeUuid: '15785bd9-102f-4bc8-b71c-d048215ba995',
    };
    const resp = await client.notificationResourceV1AppendBehaviorGroupToEventType(params);
    expect(resp.status).toBe(204);
  });

  test('List configured applications', async () => {
    const params: NotificationResourceV2GetApplicationsFacetsParams = {};
    const resp = await client.notificationResourceV1GetApplicationsFacets(params);
    expect(resp.status).toBe(200);
  });

  test('List configured bundles', async () => {
    const params: NotificationResourceV2GetBundleFacetsParams = {};
    const resp = await client.notificationResourceV1GetBundleFacets(params);
    expect(resp.status).toBe(200);
  });
});
