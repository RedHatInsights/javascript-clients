[@redhat-cloud-services/notifications-client](README.md) / Exports

# @redhat-cloud-services/notifications-client

## Table of contents

### Enumerations

- [EndpointStatus](enums/EndpointStatus.md)
- [EndpointType](enums/EndpointType.md)
- [Environment](enums/Environment.md)
- [EventLogEntryActionStatus](enums/EventLogEntryActionStatus.md)
- [HttpType](enums/HttpType.md)
- [NotificationStatus](enums/NotificationStatus.md)
- [Status](enums/Status.md)
- [SubscriptionType](enums/SubscriptionType.md)

### Classes

- [BaseAPI](classes/BaseAPI.md)
- [RequiredError](classes/RequiredError.md)

### Interfaces

- [AddAccessRequest](interfaces/AddAccessRequest.md)
- [AddApplicationRequest](interfaces/AddApplicationRequest.md)
- [AggregationEmailTemplate](interfaces/AggregationEmailTemplate.md)
- [AggregationEmailTemplateSubjectTemplate](interfaces/AggregationEmailTemplateSubjectTemplate.md)
- [Application](interfaces/Application.md)
- [Application1](interfaces/Application1.md)
- [ApplicationDTO](interfaces/ApplicationDTO.md)
- [ApplicationSettingsValue](interfaces/ApplicationSettingsValue.md)
- [BasicAuthentication](interfaces/BasicAuthentication.md)
- [BehaviorGroup](interfaces/BehaviorGroup.md)
- [BehaviorGroupAction](interfaces/BehaviorGroupAction.md)
- [BehaviorGroupActionId](interfaces/BehaviorGroupActionId.md)
- [Bundle](interfaces/Bundle.md)
- [BundleSettingsValue](interfaces/BundleSettingsValue.md)
- [CamelProperties](interfaces/CamelProperties.md)
- [CreateBehaviorGroupRequest](interfaces/CreateBehaviorGroupRequest.md)
- [CreateBehaviorGroupResponse](interfaces/CreateBehaviorGroupResponse.md)
- [CurrentStatus](interfaces/CurrentStatus.md)
- [DrawerEntryPayload](interfaces/DrawerEntryPayload.md)
- [DuplicateNameMigrationReport](interfaces/DuplicateNameMigrationReport.md)
- [Endpoint](interfaces/Endpoint.md)
- [EndpointPage](interfaces/EndpointPage.md)
- [EndpointTestRequest](interfaces/EndpointTestRequest.md)
- [EventLogEntry](interfaces/EventLogEntry.md)
- [EventLogEntryAction](interfaces/EventLogEntryAction.md)
- [EventType](interfaces/EventType.md)
- [EventTypeBehavior](interfaces/EventTypeBehavior.md)
- [EventTypeBehaviorId](interfaces/EventTypeBehaviorId.md)
- [EventTypeSettingsValue](interfaces/EventTypeSettingsValue.md)
- [Facet](interfaces/Facet.md)
- [InstantEmailTemplate](interfaces/InstantEmailTemplate.md)
- [InternalApplicationUserPermission](interfaces/InternalApplicationUserPermission.md)
- [InternalRoleAccess](interfaces/InternalRoleAccess.md)
- [InternalUserPermissions](interfaces/InternalUserPermissions.md)
- [MessageValidationResponse](interfaces/MessageValidationResponse.md)
- [Meta](interfaces/Meta.md)
- [NotificationHistory](interfaces/NotificationHistory.md)
- [PageBehaviorGroup](interfaces/PageBehaviorGroup.md)
- [PageDrawerEntryPayload](interfaces/PageDrawerEntryPayload.md)
- [PageEventLogEntry](interfaces/PageEventLogEntry.md)
- [PageEventType](interfaces/PageEventType.md)
- [PageNotificationHistory](interfaces/PageNotificationHistory.md)
- [RenderEmailTemplateRequest](interfaces/RenderEmailTemplateRequest.md)
- [RequestArgs](interfaces/RequestArgs.md)
- [RequestDefaultBehaviorGroupPropertyList](interfaces/RequestDefaultBehaviorGroupPropertyList.md)
- [RequestSystemSubscriptionProperties](interfaces/RequestSystemSubscriptionProperties.md)
- [ServerInfo](interfaces/ServerInfo.md)
- [SettingsValuesByEventType](interfaces/SettingsValuesByEventType.md)
- [SystemSubscriptionProperties](interfaces/SystemSubscriptionProperties.md)
- [Template](interfaces/Template.md)
- [TriggerDailyDigestRequest](interfaces/TriggerDailyDigestRequest.md)
- [UpdateApplicationRequest](interfaces/UpdateApplicationRequest.md)
- [UpdateBehaviorGroupRequest](interfaces/UpdateBehaviorGroupRequest.md)
- [UpdateNotificationDrawerStatus](interfaces/UpdateNotificationDrawerStatus.md)
- [WebhookProperties](interfaces/WebhookProperties.md)
- [X509Certificate](interfaces/X509Certificate.md)

### Variables

- [BASE\_PATH](modules.md#base_path)
- [COLLECTION\_FORMATS](modules.md#collection_formats)

### Functions

- [drawerResourceV1GetDrawerEntries](modules.md#drawerresourcev1getdrawerentries)
- [drawerResourceV1UpdateNotificationReadStatus](modules.md#drawerresourcev1updatenotificationreadstatus)
- [eventResourceV1GetEvents](modules.md#eventresourcev1getevents)
- [notificationResourceV1AppendBehaviorGroupToEventType](modules.md#notificationresourcev1appendbehaviorgrouptoeventtype)
- [notificationResourceV1CreateBehaviorGroup](modules.md#notificationresourcev1createbehaviorgroup)
- [notificationResourceV1DeleteBehaviorGroup](modules.md#notificationresourcev1deletebehaviorgroup)
- [notificationResourceV1DeleteBehaviorGroupFromEventType](modules.md#notificationresourcev1deletebehaviorgroupfromeventtype)
- [notificationResourceV1FindBehaviorGroupsByBundleId](modules.md#notificationresourcev1findbehaviorgroupsbybundleid)
- [notificationResourceV1GetApplicationByNameAndBundleName](modules.md#notificationresourcev1getapplicationbynameandbundlename)
- [notificationResourceV1GetApplicationsFacets](modules.md#notificationresourcev1getapplicationsfacets)
- [notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint](modules.md#notificationresourcev1getbehaviorgroupsaffectedbyremovalofendpoint)
- [notificationResourceV1GetBundleByName](modules.md#notificationresourcev1getbundlebyname)
- [notificationResourceV1GetBundleFacets](modules.md#notificationresourcev1getbundlefacets)
- [notificationResourceV1GetEventTypes](modules.md#notificationresourcev1geteventtypes)
- [notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup](modules.md#notificationresourcev1geteventtypesaffectedbyremovalofbehaviorgroup)
- [notificationResourceV1GetEventTypesByNameAndBundleAndApplicationName](modules.md#notificationresourcev1geteventtypesbynameandbundleandapplicationname)
- [notificationResourceV1GetLinkedBehaviorGroups](modules.md#notificationresourcev1getlinkedbehaviorgroups)
- [notificationResourceV1UpdateBehaviorGroup](modules.md#notificationresourcev1updatebehaviorgroup)
- [notificationResourceV1UpdateBehaviorGroupActions](modules.md#notificationresourcev1updatebehaviorgroupactions)
- [notificationResourceV1UpdateEventTypeBehaviors](modules.md#notificationresourcev1updateeventtypebehaviors)
- [orgConfigResourceV1GetDailyDigestTimePreference](modules.md#orgconfigresourcev1getdailydigesttimepreference)
- [orgConfigResourceV1SaveDailyDigestTimePreference](modules.md#orgconfigresourcev1savedailydigesttimepreference)

## Variables

### BASE\_PATH

• `Const` **BASE\_PATH**: `string`

#### Defined in

[packages/notifications/base.ts:22](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/base.ts#L22)

___

### COLLECTION\_FORMATS

• `Const` **COLLECTION\_FORMATS**: `Object`

**`Export`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `csv` | `string` |
| `pipes` | `string` |
| `ssv` | `string` |
| `tsv` | `string` |

#### Defined in

[packages/notifications/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/base.ts#L28)

## Functions

### drawerResourceV1GetDrawerEntries

▸ **drawerResourceV1GetDrawerEntries**(`...config`): `Promise`\<`RequestArgs`\>

Allowed `sort_by` fields are `bundleIds`, `applicationIds`, `eventTypeIds`, `startTime`, `endTime` and `read`. The ordering can be optionally specified by appending `:asc` or `:desc` to the field, e.g. `bundle:desc`. Defaults to `desc` for the `created` field and to `asc` for all other fields.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`DrawerResourceV1GetDrawerEntriesParams`] \| [`Set`\<`string`\>, `Set`\<`string`\>, `string`, `Set`\<`string`\>, `number`, `number`, `number`, `boolean`, `string`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve drawer notifications entries.

**`Throws`**

#### Defined in

[packages/notifications/DrawerResourceV1GetDrawerEntries/index.ts:94](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/DrawerResourceV1GetDrawerEntries/index.ts#L94)

___

### drawerResourceV1UpdateNotificationReadStatus

▸ **drawerResourceV1UpdateNotificationReadStatus**(`...config`): `Promise`\<`RequestArgs`\>

Update drawer notifications status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`DrawerResourceV1UpdateNotificationReadStatusParams`] \| [[`UpdateNotificationDrawerStatus`](interfaces/UpdateNotificationDrawerStatus.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update drawer notifications status.

**`Throws`**

#### Defined in

[packages/notifications/DrawerResourceV1UpdateNotificationReadStatus/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/DrawerResourceV1UpdateNotificationReadStatus/index.ts#L34)

___

### eventResourceV1GetEvents

▸ **eventResourceV1GetEvents**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the event log entries. Use this endpoint to review a full history of the events related to the tenant. You can sort by the bundle, application, event, and created fields. You can specify the sort order by appending :asc or :desc to the field, for example bundle:desc. Sorting defaults to desc for the created field and to asc for all other fields.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EventResourceV1GetEventsParams`] \| [`Set`\<`string`\>, `Set`\<`string`\>, `string`, `Set`\<`string`\>, `string`, `boolean`, `boolean`, `boolean`, `Set`\<`boolean`\>, `number`, `number`, `number`, `string`, `string`, `string`, `Set`\<[`EventLogEntryActionStatus`](enums/EventLogEntryActionStatus.md)\>, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve the event log entrie

**`Throws`**

#### Defined in

[packages/notifications/EventResourceV1GetEvents/index.ts:124](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/EventResourceV1GetEvents/index.ts#L124)

___

### notificationResourceV1AppendBehaviorGroupToEventType

▸ **notificationResourceV1AppendBehaviorGroupToEventType**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1AppendBehaviorGroupToEventTypeParams`] \| [`string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a behavior group to the given event type.

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts#L40)

___

### notificationResourceV1CreateBehaviorGroup

▸ **notificationResourceV1CreateBehaviorGroup**(`...config`): `Promise`\<`RequestArgs`\>

Creates a behavior group that defines which notifications will be sent to external services after an event is received. Use this endpoint to control the types of events users are notified about.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1CreateBehaviorGroupParams`] \| [[`CreateBehaviorGroupRequest`](interfaces/CreateBehaviorGroupRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a behavior group

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1CreateBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1CreateBehaviorGroup/index.ts#L34)

___

### notificationResourceV1DeleteBehaviorGroup

▸ **notificationResourceV1DeleteBehaviorGroup**(`...config`): `Promise`\<`RequestArgs`\>

Deletes a behavior group and all of its configured actions. Use this endpoint when you no longer need a behavior group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1DeleteBehaviorGroupParams`] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete a behavior group

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts#L34)

___

### notificationResourceV1DeleteBehaviorGroupFromEventType

▸ **notificationResourceV1DeleteBehaviorGroupFromEventType**(`...config`): `Promise`\<`RequestArgs`\>

Adds a behavior group to the specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`\<`any`\>] \| [`NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a behavior group to an event type

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts#L40)

___

### notificationResourceV1FindBehaviorGroupsByBundleId

▸ **notificationResourceV1FindBehaviorGroupsByBundleId**(`...config`): `Promise`\<`RequestArgs`\>

Lists the behavior groups associated with a bundle. Use this endpoint to see the behavior groups that are configured for a particular bundle for a particular tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`NotificationResourceV1FindBehaviorGroupsByBundleIdParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List behavior groups in a bundle

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts#L34)

___

### notificationResourceV1GetApplicationByNameAndBundleName

▸ **notificationResourceV1GetApplicationByNameAndBundleName**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves an application by bundle and application names. Use this endpoint to  find an application by searching for the bundle that the application is part of. This is useful if you do not know the UUID of the bundle or application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`\<`any`\>] \| [`NotificationResourceV1GetApplicationByNameAndBundleNameParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve an application by bundle and application name

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts#L40)

___

### notificationResourceV1GetApplicationsFacets

▸ **notificationResourceV1GetApplicationsFacets**(`...config`): `Promise`\<`RequestArgs`\>

Returns a list of configured applications that includes the application name, the display name, and the ID. You can use this list to configure a filter in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`NotificationResourceV1GetApplicationsFacetsParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List configured application

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts#L34)

___

### notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint

▸ **notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Lists the behavior groups that are affected by the removal of an endpoint. Use this endpoint to understand how removing an endpoint affects existing behavior groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the behavior groups affected by the removal of an endpoint

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts#L34)

___

### notificationResourceV1GetBundleByName

▸ **notificationResourceV1GetBundleByName**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the details of a bundle by searching by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`NotificationResourceV1GetBundleByNameParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve a bundle by name

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetBundleByName/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBundleByName/index.ts#L34)

___

### notificationResourceV1GetBundleFacets

▸ **notificationResourceV1GetBundleFacets**(`...config`): `Promise`\<`RequestArgs`\>

Returns a list of configured bundles that includes the bundle name, the display name, and the ID. You can use this list to configure a filter in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetBundleFacetsParams`] \| [`boolean`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List configured bundle

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetBundleFacets/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetBundleFacets/index.ts#L34)

___

### notificationResourceV1GetEventTypes

▸ **notificationResourceV1GetEventTypes**(`...config`): `Promise`\<`RequestArgs`\>

Lists all event types. You can filter the returned list by bundle or application name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetEventTypesParams`] \| [`Set`\<`string`\>, `string`, `string`, `number`, `number`, `number`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List all event type

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetEventTypes/index.ts:76](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypes/index.ts#L76)

___

### notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup

▸ **notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup**(`...config`): `Promise`\<`RequestArgs`\>

Lists the event types that will be affected by the removal of a behavior group. Use this endpoint to see which event types will be removed if you delete a behavior group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the event types affected by the removal of a behavior group

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts#L34)

___

### notificationResourceV1GetEventTypesByNameAndBundleAndApplicationName

▸ **notificationResourceV1GetEventTypesByNameAndBundleAndApplicationName**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the details of an event type by specifying the bundle name, the application name, and the event type name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams`] \| [`string`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve an event type by bundle, application and event type name

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts#L46)

___

### notificationResourceV1GetLinkedBehaviorGroups

▸ **notificationResourceV1GetLinkedBehaviorGroups**(`...config`): `Promise`\<`RequestArgs`\>

Lists the behavior groups that are linked to an event type. Use this endpoint to see which behavior groups will be affected if you delete an event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetLinkedBehaviorGroupsParams`] \| [`string`, `number`, `number`, `number`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List the behavior groups linked to an event type

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1GetLinkedBehaviorGroups/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1GetLinkedBehaviorGroups/index.ts#L64)

___

### notificationResourceV1UpdateBehaviorGroup

▸ **notificationResourceV1UpdateBehaviorGroup**(`...config`): `Promise`\<`RequestArgs`\>

Updates the details of a behavior group. Use this endpoint to update the list of related endpoints and event types associated with this behavior group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateBehaviorGroupParams`] \| [`string`, [`UpdateBehaviorGroupRequest`](interfaces/UpdateBehaviorGroupRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update a behavior group

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1UpdateBehaviorGroup/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateBehaviorGroup/index.ts#L40)

___

### notificationResourceV1UpdateBehaviorGroupActions

▸ **notificationResourceV1UpdateBehaviorGroupActions**(`...config`): `Promise`\<`RequestArgs`\>

Updates the list of actions to be executed in that particular behavior group after an event is received.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateBehaviorGroupActionsParams`] \| [`string`, `string`[], `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update the list of behavior group action

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts#L40)

___

### notificationResourceV1UpdateEventTypeBehaviors

▸ **notificationResourceV1UpdateEventTypeBehaviors**(`...config`): `Promise`\<`RequestArgs`\>

Updates the list of behavior groups associated with an event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateEventTypeBehaviorsParams`] \| [`string`, `Set`\<`string`\>, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update the list of behavior groups for an event type

**`Throws`**

#### Defined in

[packages/notifications/NotificationResourceV1UpdateEventTypeBehaviors/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/NotificationResourceV1UpdateEventTypeBehaviors/index.ts#L40)

___

### orgConfigResourceV1GetDailyDigestTimePreference

▸ **orgConfigResourceV1GetDailyDigestTimePreference**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the daily digest time setting. Use this endpoint to check the time that daily emails are sent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`OrgConfigResourceV1GetDailyDigestTimePreferenceParams`] \| [`AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve the daily digest time

**`Throws`**

#### Defined in

[packages/notifications/OrgConfigResourceV1GetDailyDigestTimePreference/index.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/OrgConfigResourceV1GetDailyDigestTimePreference/index.ts#L28)

___

### orgConfigResourceV1SaveDailyDigestTimePreference

▸ **orgConfigResourceV1SaveDailyDigestTimePreference**(`...config`): `Promise`\<`RequestArgs`\>

Sets the daily digest UTC time. The accepted minute values are 00, 15, 30, and 45. Use this endpoint to set the time when daily emails are sent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`OrgConfigResourceV1SaveDailyDigestTimePreferenceParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Set the daily digest time

**`Throws`**

#### Defined in

[packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts#L34)
