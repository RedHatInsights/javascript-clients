import { describe, expect, test } from '@jest/globals';

// imports of API-specific classes
import { NotificationsClient } from '../../api';
import { NotificationResourceV2CreateBehaviorGroupParams } from '../../NotificationResourceV2CreateBehaviorGroup';
import { NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams } from '../../NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpoint';
import { NotificationResourceV2UpdateBehaviorGroupActionsParams } from '../../NotificationResourceV2UpdateBehaviorGroupActions';
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
import { EventResourceV2GetEventsParams } from '../../EventResourceV2GetEvents';
import { NotificationResourceV2GetApplicationsFacetsParams } from '../../NotificationResourceV2GetApplicationsFacets';
import { NotificationResourceV2GetBundleFacetsParams } from '../../NotificationResourceV2GetBundleFacets';
import { OrgConfigResourceV2SaveDailyDigestTimePreferenceParams } from '../../OrgConfigResourceV2SaveDailyDigestTimePreference';
import { OrgConfigResourceV2GetDailyDigestTimePreferenceParams } from '../../OrgConfigResourceV2GetDailyDigestTimePreference';
import { CreateBehaviorGroupRequest } from '../../types';
import { UpdateBehaviorGroupRequest } from '../../types';

// client path from spec
const BASE_PATH = 'http://localhost:3002/api/notifications/v2.0';

const client = NotificationsClient(BASE_PATH);

describe('Notifications v2.0', () => {

    test('Create a behavior group', async() => {
        const createBehaviorGroupRequest : CreateBehaviorGroupRequest = { bundle_id: "09258c36-2297-4c8c-b3cd-2667d34e5780", bundle_name: "", display_name: "", endpoint_ids: [], event_type_ids: new Set<string>(), bundle_uuid_or_bundle_name_valid: true };
        const params: NotificationResourceV2CreateBehaviorGroupParams = { createBehaviorGroupRequest };
        const resp = await client.notificationResourceV2CreateBehaviorGroup(params);
        expect(resp.status).toBe(200);
    });

    test('List the behavior groups affected by the removal of an endpoint', async() => {
        
        const params: NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams = { endpointId: "ab3bab59-adb6-4582-ac96-b8e358c3a82f" };
        const resp = await client.notificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpoint(params);
        expect(resp.status).toBe(200);
    });

    test('Update the list of behavior group actions', async() => {
        
        const params: NotificationResourceV2UpdateBehaviorGroupActionsParams = { behaviorGroupId: "41381b48-4f7f-4be9-a8a3-ef94a6f07bc7", requestBody: [] };
        const resp = await client.notificationResourceV2UpdateBehaviorGroupActions(params);
        expect(resp.status).toBe(200);
    });

    test('Update a behavior group', async() => {
        const updateBehaviorGroupRequest : UpdateBehaviorGroupRequest = { display_name: "", endpoint_ids: [], event_type_ids: new Set<string>(), display_name_not_null_and_blank: true };
        const params: NotificationResourceV2UpdateBehaviorGroupParams = { id: "c50a3c34-257b-4e6b-8410-1217edb4ad4c", updateBehaviorGroupRequest };
        const resp = await client.notificationResourceV2UpdateBehaviorGroup(params);
        expect(resp.status).toBe(200);
    });

    test('Delete a behavior group', async() => {
        
        const params: NotificationResourceV2DeleteBehaviorGroupParams = { id: "0408caa3-2a2a-4d7f-96fc-91614be0149a" };
        const resp = await client.notificationResourceV2DeleteBehaviorGroup(params);
        expect(resp.status).toBe(200);
    });

    test('List behavior groups in a bundle', async() => {
        
        const params: NotificationResourceV2FindBehaviorGroupsByBundleIdParams = { bundleId: "e86268e6-60d2-4f0c-8c3c-c0de73753c1f" };
        const resp = await client.notificationResourceV2FindBehaviorGroupsByBundleId(params);
        expect(resp.status).toBe(200);
    });

    test('Retrieve a bundle by name', async() => {
        
        const params: NotificationResourceV2GetBundleByNameParams = { bundleName: "" };
        const resp = await client.notificationResourceV2GetBundleByName(params);
        expect(resp.status).toBe(200);
    });

    test('Retrieve an application by bundle and application names', async() => {
        
        const params: NotificationResourceV2GetApplicationByNameAndBundleNameParams = { applicationName: "", bundleName: "" };
        const resp = await client.notificationResourceV2GetApplicationByNameAndBundleName(params);
        expect(resp.status).toBe(200);
    });

    test('Retrieve an event type by bundle, application and event type names', async() => {
        
        const params: NotificationResourceV2GetEventTypesByNameAndBundleAndApplicationNameParams = { applicationName: "", bundleName: "", eventTypeName: "" };
        const resp = await client.notificationResourceV2GetEventTypesByNameAndBundleAndApplicationName(params);
        expect(resp.status).toBe(200);
    });

    test('List all event types', async() => {
        
        const params: NotificationResourceV2GetEventTypesParams = {  };
        const resp = await client.notificationResourceV2GetEventTypes(params);
        expect(resp.status).toBe(200);
    });

    test('List the event types affected by the removal of a behavior group', async() => {
        
        const params: NotificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroupParams = { behaviorGroupId: "6f768840-5ce4-4fe1-942c-6dd1e35308bb" };
        const resp = await client.notificationResourceV2GetEventTypesAffectedByRemovalOfBehaviorGroup(params);
        expect(resp.status).toBe(200);
    });

    test('Update the list of behavior groups for an event type', async() => {
        
        const params: NotificationResourceV2UpdateEventTypeBehaviorsParams = { eventTypeId: "7f30b8e1-0baa-40f0-b156-1c7f5b1a366a", requestBody: new Set<string>() };
        const resp = await client.notificationResourceV2UpdateEventTypeBehaviors(params);
        expect(resp.status).toBe(200);
    });

    test('Retrieve the behavior groups linked to an event type.', async() => {
        
        const params: NotificationResourceV2GetLinkedBehaviorGroupsParams = { eventTypeId: "0dae92b3-1068-4bd6-b9bd-b475eefeb2ca" };
        const resp = await client.notificationResourceV2GetLinkedBehaviorGroups(params);
        expect(resp.status).toBe(200);
    });

    test('Delete a behavior group from an event type', async() => {
        
        const params: NotificationResourceV2DeleteBehaviorGroupFromEventTypeParams = { behaviorGroupId: "4f373825-f6b8-459e-b18a-061466b05629", eventTypeId: "2e63e32f-dbaa-4e9f-bfc4-124857a4cb07" };
        const resp = await client.notificationResourceV2DeleteBehaviorGroupFromEventType(params);
        expect(resp.status).toBe(204);
    });

    test('Update the list of endpoints for an event type', async() => {
        
        const params: NotificationResourceV2UpdateEventTypeEndpointsParams = { eventTypeId: "4d18a86d-6cad-44e3-995b-e68defae19fb", requestBody: new Set<string>() };
        const resp = await client.notificationResourceV2UpdateEventTypeEndpoints(params);
        expect(resp.status).toBe(200);
    });

    test('Add a behavior group to the given event type.', async() => {
        
        const params: NotificationResourceV2AppendBehaviorGroupToEventTypeParams = { behaviorGroupUuid: "d2c07e31-e893-404c-98ca-4164c58628d7", eventTypeUuid: "3b2816e6-1d0e-4aeb-b88a-c5d56a3dc42d" };
        const resp = await client.notificationResourceV2AppendBehaviorGroupToEventType(params);
        expect(resp.status).toBe(204);
    });

    test('Retrieve the event log entries', async() => {
        
        const params: EventResourceV2GetEventsParams = {  };
        const resp = await client.eventResourceV2GetEvents(params);
        expect(resp.status).toBe(200);
    });

    test('List configured applications', async() => {
        
        const params: NotificationResourceV2GetApplicationsFacetsParams = {  };
        const resp = await client.notificationResourceV2GetApplicationsFacets(params);
        expect(resp.status).toBe(200);
    });

    test('List configured bundles', async() => {
        
        const params: NotificationResourceV2GetBundleFacetsParams = {  };
        const resp = await client.notificationResourceV2GetBundleFacets(params);
        expect(resp.status).toBe(200);
    });

    test('Set the daily digest time', async() => {
        
        const params: OrgConfigResourceV2SaveDailyDigestTimePreferenceParams = { body: "13:45:30.123456789" };
        const resp = await client.orgConfigResourceV2SaveDailyDigestTimePreference(params);
        expect(resp.status).toBe(204);
    });

    test('Retrieve the daily digest time', async() => {
        
        const params: OrgConfigResourceV2GetDailyDigestTimePreferenceParams = {  };
        const resp = await client.orgConfigResourceV2GetDailyDigestTimePreference(params);
        expect(resp.status).toBe(200);
    });
});
