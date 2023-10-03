[@redhat-cloud-services/notifications-client](README.md) / Exports

# @redhat-cloud-services/notifications-client

## Table of contents

### Enumerations

- [EmailSubscriptionType](enums/EmailSubscriptionType.md)
- [EndpointStatus](enums/EndpointStatus.md)
- [EndpointType](enums/EndpointType.md)
- [Environment](enums/Environment.md)
- [EventLogEntryActionStatus](enums/EventLogEntryActionStatus.md)
- [HttpType](enums/HttpType.md)
- [NotificationStatus](enums/NotificationStatus.md)
- [Status](enums/Status.md)

### Classes

- [BaseAPI](classes/BaseAPI.md)
- [Configuration](classes/Configuration.md)
- [RequiredError](classes/RequiredError.md)

### Interfaces

- [AddAccessRequest](interfaces/AddAccessRequest.md)
- [AddApplicationRequest](interfaces/AddApplicationRequest.md)
- [AggregationEmailTemplate](interfaces/AggregationEmailTemplate.md)
- [ApiConfig](interfaces/ApiConfig.md)
- [Application](interfaces/Application.md)
- [Application1](interfaces/Application1.md)
- [ApplicationSettingsValue](interfaces/ApplicationSettingsValue.md)
- [BasicAuthentication](interfaces/BasicAuthentication.md)
- [BehaviorGroup](interfaces/BehaviorGroup.md)
- [BehaviorGroupAction](interfaces/BehaviorGroupAction.md)
- [BehaviorGroupActionId](interfaces/BehaviorGroupActionId.md)
- [Bundle](interfaces/Bundle.md)
- [BundleSettingsValue](interfaces/BundleSettingsValue.md)
- [CamelProperties](interfaces/CamelProperties.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
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
- [UpdateBehaviorGroupRequest](interfaces/UpdateBehaviorGroupRequest.md)
- [UpdateNotificationDrawerStatus](interfaces/UpdateNotificationDrawerStatus.md)
- [WebhookProperties](interfaces/WebhookProperties.md)

### Type Aliases

- [ActionType](modules.md#actiontype)
- [AuthTypeEnum](modules.md#authtypeenum)

### Variables

- [AuthTypeEnum](modules.md#authtypeenum-1)
- [BASE\_PATH](modules.md#base_path)
- [COLLECTION\_FORMATS](modules.md#collection_formats)
- [DUMMY\_BASE\_URL](modules.md#dummy_base_url)

### Functions

- [APIFactory](modules.md#apifactory)
- [assertParamExists](modules.md#assertparamexists)
- [createRequestFunction](modules.md#createrequestfunction)
- [drawerResourceV1GetDrawerEntriesParamCreator](modules.md#drawerresourcev1getdrawerentriesparamcreator)
- [drawerResourceV1UpdateNotificationReadStatusParamCreator](modules.md#drawerresourcev1updatenotificationreadstatusparamcreator)
- [eventResourceV1GetEventsParamCreator](modules.md#eventresourcev1geteventsparamcreator)
- [notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator](modules.md#notificationresourcev1appendbehaviorgrouptoeventtypeparamcreator)
- [notificationResourceV1CreateBehaviorGroupParamCreator](modules.md#notificationresourcev1createbehaviorgroupparamcreator)
- [notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator](modules.md#notificationresourcev1deletebehaviorgroupfromeventtypeparamcreator)
- [notificationResourceV1DeleteBehaviorGroupParamCreator](modules.md#notificationresourcev1deletebehaviorgroupparamcreator)
- [notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator](modules.md#notificationresourcev1findbehaviorgroupsbybundleidparamcreator)
- [notificationResourceV1GetApplicationByNameAndBundleNameParamCreator](modules.md#notificationresourcev1getapplicationbynameandbundlenameparamcreator)
- [notificationResourceV1GetApplicationsFacetsParamCreator](modules.md#notificationresourcev1getapplicationsfacetsparamcreator)
- [notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator](modules.md#notificationresourcev1getbehaviorgroupsaffectedbyremovalofendpointparamcreator)
- [notificationResourceV1GetBundleByNameParamCreator](modules.md#notificationresourcev1getbundlebynameparamcreator)
- [notificationResourceV1GetBundleFacetsParamCreator](modules.md#notificationresourcev1getbundlefacetsparamcreator)
- [notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator](modules.md#notificationresourcev1geteventtypesaffectedbyremovalofbehaviorgroupparamcreator)
- [notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator](modules.md#notificationresourcev1geteventtypesbynameandbundleandapplicationnameparamcreator)
- [notificationResourceV1GetEventTypesParamCreator](modules.md#notificationresourcev1geteventtypesparamcreator)
- [notificationResourceV1GetLinkedBehaviorGroupsParamCreator](modules.md#notificationresourcev1getlinkedbehaviorgroupsparamcreator)
- [notificationResourceV1UpdateBehaviorGroupActionsParamCreator](modules.md#notificationresourcev1updatebehaviorgroupactionsparamcreator)
- [notificationResourceV1UpdateBehaviorGroupParamCreator](modules.md#notificationresourcev1updatebehaviorgroupparamcreator)
- [notificationResourceV1UpdateEventTypeBehaviorsParamCreator](modules.md#notificationresourcev1updateeventtypebehaviorsparamcreator)
- [orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator](modules.md#orgconfigresourcev1getdailydigesttimepreferenceparamcreator)
- [orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator](modules.md#orgconfigresourcev1savedailydigesttimepreferenceparamcreator)
- [serializeDataIfNeeded](modules.md#serializedataifneeded)
- [setApiKeyToObject](modules.md#setapikeytoobject)
- [setBasicAuthToObject](modules.md#setbasicauthtoobject)
- [setBearerAuthToObject](modules.md#setbearerauthtoobject)
- [setOAuthToObject](modules.md#setoauthtoobject)
- [setSearchParams](modules.md#setsearchparams)
- [toPathString](modules.md#topathstring)

## Type Aliases

### ActionType

Ƭ **ActionType**: (...`config`: `any`) => `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Type declaration

▸ (...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...config` | `any` |

##### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/utils/base.ts:55](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/base.ts#L55)

___

### AuthTypeEnum

Ƭ **AuthTypeEnum**: typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)[keyof typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)]

#### Defined in

[packages/notifications/utils/base.ts:45](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/base.ts#L45)

[packages/notifications/utils/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/base.ts#L53)

## Variables

### AuthTypeEnum

• `Const` **AuthTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Basic` | ``"basic"`` |
| `Bearer` | ``"bearer"`` |
| `InHeader` | ``"inHeader"`` |
| `InQuery` | ``"inQuery"`` |
| `Oauth` | ``"oath"`` |

#### Defined in

[packages/notifications/utils/base.ts:45](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/base.ts#L45)

[packages/notifications/utils/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/base.ts#L53)

___

### BASE\_PATH

• `Const` **BASE\_PATH**: `string`

#### Defined in

[packages/notifications/utils/base.ts:12](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/base.ts#L12)

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

[packages/notifications/utils/base.ts:18](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/base.ts#L18)

___

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: ``"https://example.com"``

**`Export`**

#### Defined in

[packages/notifications/utils/common.ts:13](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L13)

## Functions

### APIFactory

▸ **APIFactory**<`T`\>(`basePath?`, `config?`, `actions`): [`BaseAPI`](classes/BaseAPI.md) & `T`

Factory for creating API with option to add enpoints to the API.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, [`ActionType`](modules.md#actiontype)\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `basePath` | `string` | `BASE_PATH` | basePath of api requests. |
| `config` | [`ApiConfig`](interfaces/ApiConfig.md) | `undefined` | to be passed down to axios. |
| `actions` | `T` | `undefined` | object with actions to send with axios. |

#### Returns

[`BaseAPI`](classes/BaseAPI.md) & `T`

created base API.

#### Defined in

[packages/notifications/utils/base.ts:145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/base.ts#L145)

___

### assertParamExists

▸ **assertParamExists**(`functionName`, `paramName`, `paramValue`): `void`

**`Throws`**

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `paramName` | `string` |
| `paramValue` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/notifications/utils/common.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L20)

___

### createRequestFunction

▸ **createRequestFunction**(`axiosArgs`, `globalAxios`, `BASE_PATH`, `configuration?`): <T, R\>(`axios`: `AxiosInstance`, `basePath`: `string`) => `Promise`<`R`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosArgs` | [`RequestArgs`](interfaces/RequestArgs.md) |
| `globalAxios` | `AxiosInstance` |
| `BASE_PATH` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`fn`

▸ <`T`, `R`\>(`axios?`, `basePath?`): `Promise`<`R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `R` | `AxiosResponse`<`T`, `any`\> |

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `axios` | `AxiosInstance` | `globalAxios` |
| `basePath` | `string` | `BASE_PATH` |

##### Returns

`Promise`<`R`\>

#### Defined in

[packages/notifications/utils/common.ts:133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L133)

___

### drawerResourceV1GetDrawerEntriesParamCreator

▸ **drawerResourceV1GetDrawerEntriesParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Allowed `sort_by` fields are `bundleIds`, `applicationIds`, `eventTypeIds`, `startTime`, `endTime` and `read`. The ordering can be optionally specified by appending `:asc` or `:desc` to the field, e.g. `bundle:desc`. Defaults to `desc` for the `created` field and to `asc` for all other fields.

**`Summary`**

Retrieve drawer notifications entries.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`DrawerResourceV1GetDrawerEntriesParams`] \| [`Set`<`string`\>, `Set`<`string`\>, `string`, `Set`<`string`\>, `number`, `number`, `number`, `boolean`, `string`, `string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/DrawerResourceV1GetDrawerEntries/index.ts:94](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/DrawerResourceV1GetDrawerEntries/index.ts#L94)

___

### drawerResourceV1UpdateNotificationReadStatusParamCreator

▸ **drawerResourceV1UpdateNotificationReadStatusParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Update drawer notifications status.

**`Summary`**

Update drawer notifications status.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`DrawerResourceV1UpdateNotificationReadStatusParams`] \| [[`UpdateNotificationDrawerStatus`](interfaces/UpdateNotificationDrawerStatus.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/DrawerResourceV1UpdateNotificationReadStatus/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/DrawerResourceV1UpdateNotificationReadStatus/index.ts#L34)

___

### eventResourceV1GetEventsParamCreator

▸ **eventResourceV1GetEventsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Retrieves the event log entries. Use this endpoint to review a full history of the events related to the tenant. You can sort by the bundle, application, event, and created fields. You can specify the sort order by appending :asc or :desc to the field, for example bundle:desc. Sorting defaults to desc for the created field and to asc for all other fields.

**`Summary`**

Retrieve the event log entries

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EventResourceV1GetEventsParams`] \| [`Set`<`string`\>, `Set`<`string`\>, `string`, `Set`<`string`\>, `string`, `boolean`, `boolean`, `boolean`, `Set`<`boolean`\>, `number`, `number`, `number`, `string`, `string`, `string`, `Set`<[`EventLogEntryActionStatus`](enums/EventLogEntryActionStatus.md)\>, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/EventResourceV1GetEvents/index.ts:124](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/EventResourceV1GetEvents/index.ts#L124)

___

### notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator

▸ **notificationResourceV1AppendBehaviorGroupToEventTypeParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Add a behavior group to the given event type.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1AppendBehaviorGroupToEventTypeParams`] \| [`string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts#L40)

___

### notificationResourceV1CreateBehaviorGroupParamCreator

▸ **notificationResourceV1CreateBehaviorGroupParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Creates a behavior group that defines which notifications will be sent to external services after an event is received. Use this endpoint to control the types of events users are notified about.

**`Summary`**

Create a behavior group

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1CreateBehaviorGroupParams`] \| [[`CreateBehaviorGroupRequest`](interfaces/CreateBehaviorGroupRequest.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1CreateBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1CreateBehaviorGroup/index.ts#L34)

___

### notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator

▸ **notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Adds a behavior group to the specified event type.

**`Summary`**

Add a behavior group to an event type

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts#L40)

___

### notificationResourceV1DeleteBehaviorGroupParamCreator

▸ **notificationResourceV1DeleteBehaviorGroupParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Deletes a behavior group and all of its configured actions. Use this endpoint when you no longer need a behavior group.

**`Summary`**

Delete a behavior group

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1DeleteBehaviorGroupParams`] \| [`string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts#L34)

___

### notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator

▸ **notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Lists the behavior groups associated with a bundle. Use this endpoint to see the behavior groups that are configured for a particular bundle for a particular tenant.

**`Summary`**

List behavior groups in a bundle

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1FindBehaviorGroupsByBundleIdParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts#L34)

___

### notificationResourceV1GetApplicationByNameAndBundleNameParamCreator

▸ **notificationResourceV1GetApplicationByNameAndBundleNameParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Retrieves an application by bundle and application names. Use this endpoint to  find an application by searching for the bundle that the application is part of. This is useful if you do not know the UUID of the bundle or application.

**`Summary`**

Retrieve an application by bundle and application names

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetApplicationByNameAndBundleNameParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts#L40)

___

### notificationResourceV1GetApplicationsFacetsParamCreator

▸ **notificationResourceV1GetApplicationsFacetsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Returns a list of configured applications that includes the application name, the display name, and the ID. You can use this list to configure a filter in the UI.

**`Summary`**

List configured applications

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetApplicationsFacetsParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts#L34)

___

### notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator

▸ **notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Lists the behavior groups that are affected by the removal of an endpoint. Use this endpoint to understand how removing an endpoint affects existing behavior groups.

**`Summary`**

List the behavior groups affected by the removal of an endpoint

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts#L34)

___

### notificationResourceV1GetBundleByNameParamCreator

▸ **notificationResourceV1GetBundleByNameParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Retrieves the details of a bundle by searching by its name.

**`Summary`**

Retrieve a bundle by name

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetBundleByNameParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetBundleByName/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetBundleByName/index.ts#L34)

___

### notificationResourceV1GetBundleFacetsParamCreator

▸ **notificationResourceV1GetBundleFacetsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Returns a list of configured bundles that includes the bundle name, the display name, and the ID. You can use this list to configure a filter in the UI.

**`Summary`**

List configured bundles

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetBundleFacetsParams`] \| [`boolean`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetBundleFacets/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetBundleFacets/index.ts#L34)

___

### notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator

▸ **notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Lists the event types that will be affected by the removal of a behavior group. Use this endpoint to see which event types will be removed if you delete a behavior group.

**`Summary`**

List the event types affected by the removal of a behavior group

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts#L34)

___

### notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator

▸ **notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Retrieves the details of an event type by specifying the bundle name, the application name, and the event type name.

**`Summary`**

Retrieve an event type by bundle, application and event type names

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams`] \| [`string`, `string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts#L46)

___

### notificationResourceV1GetEventTypesParamCreator

▸ **notificationResourceV1GetEventTypesParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Lists all event types. You can filter the returned list by bundle or application name.

**`Summary`**

List all event types

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetEventTypesParams`] \| [`Set`<`string`\>, `string`, `string`, `number`, `number`, `number`, `string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetEventTypes/index.ts:76](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetEventTypes/index.ts#L76)

___

### notificationResourceV1GetLinkedBehaviorGroupsParamCreator

▸ **notificationResourceV1GetLinkedBehaviorGroupsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Lists the behavior groups that are linked to an event type. Use this endpoint to see which behavior groups will be affected if you delete an event type.

**`Summary`**

List the behavior groups linked to an event type

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetLinkedBehaviorGroupsParams`] \| [`string`, `number`, `number`, `number`, `string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1GetLinkedBehaviorGroups/index.ts:64](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1GetLinkedBehaviorGroups/index.ts#L64)

___

### notificationResourceV1UpdateBehaviorGroupActionsParamCreator

▸ **notificationResourceV1UpdateBehaviorGroupActionsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Updates the list of actions to be executed in that particular behavior group after an event is received.

**`Summary`**

Update the list of behavior group actions

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateBehaviorGroupActionsParams`] \| [`string`, `string`[], `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts#L40)

___

### notificationResourceV1UpdateBehaviorGroupParamCreator

▸ **notificationResourceV1UpdateBehaviorGroupParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Updates the details of a behavior group. Use this endpoint to update the list of related endpoints and event types associated with this behavior group.

**`Summary`**

Update a behavior group

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateBehaviorGroupParams`] \| [`string`, [`UpdateBehaviorGroupRequest`](interfaces/UpdateBehaviorGroupRequest.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1UpdateBehaviorGroup/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1UpdateBehaviorGroup/index.ts#L40)

___

### notificationResourceV1UpdateEventTypeBehaviorsParamCreator

▸ **notificationResourceV1UpdateEventTypeBehaviorsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Updates the list of behavior groups associated with an event type.

**`Summary`**

Update the list of behavior groups for an event type

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateEventTypeBehaviorsParams`] \| [`string`, `Set`<`string`\>, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/NotificationResourceV1UpdateEventTypeBehaviors/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/NotificationResourceV1UpdateEventTypeBehaviors/index.ts#L40)

___

### orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator

▸ **orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Retrieves the daily digest time setting. Use this endpoint to check the time that daily emails are sent.

**`Summary`**

Retrieve the daily digest time

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`OrgConfigResourceV1GetDailyDigestTimePreferenceParams`] \| [`AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/OrgConfigResourceV1GetDailyDigestTimePreference/index.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/OrgConfigResourceV1GetDailyDigestTimePreference/index.ts#L28)

___

### orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator

▸ **orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Sets the daily digest UTC time. The accepted minute values are 00, 15, 30, and 45. Use this endpoint to set the time when daily emails are sent.

**`Summary`**

Set the daily digest time

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`OrgConfigResourceV1SaveDailyDigestTimePreferenceParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts#L34)

___

### serializeDataIfNeeded

▸ **serializeDataIfNeeded**(`value`, `requestOptions`, `configuration?`): `any`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `requestOptions` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`any`

#### Defined in

[packages/notifications/utils/common.ts:111](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L111)

___

### setApiKeyToObject

▸ **setApiKeyToObject**(`object`, `keyParamName`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `keyParamName` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/notifications/utils/common.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L30)

___

### setBasicAuthToObject

▸ **setBasicAuthToObject**(`object`, `configuration?`): `void`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`void`

#### Defined in

[packages/notifications/utils/common.ts:43](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L43)

___

### setBearerAuthToObject

▸ **setBearerAuthToObject**(`object`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/notifications/utils/common.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L53)

___

### setOAuthToObject

▸ **setOAuthToObject**(`object`, `name`, `scopes`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `name` | `string` |
| `scopes` | `string`[] |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/notifications/utils/common.ts:66](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L66)

___

### setSearchParams

▸ **setSearchParams**(`url`, ...`objects`): `void`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `...objects` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/notifications/utils/common.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L101)

___

### toPathString

▸ **toPathString**(`url`): `string`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`string`

#### Defined in

[packages/notifications/utils/common.ts:125](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/notifications/utils/common.ts#L125)
