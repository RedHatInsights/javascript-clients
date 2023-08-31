[notifications-client](README.md) / Exports

# notifications-client

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
- [DuplicateNameMigrationReport](interfaces/DuplicateNameMigrationReport.md)
- [Endpoint](interfaces/Endpoint.md)
- [EndpointPage](interfaces/EndpointPage.md)
- [EventLogEntry](interfaces/EventLogEntry.md)
- [EventLogEntryAction](interfaces/EventLogEntryAction.md)
- [EventType](interfaces/EventType.md)
- [EventTypeBehavior](interfaces/EventTypeBehavior.md)
- [EventTypeBehaviorId](interfaces/EventTypeBehaviorId.md)
- [Facet](interfaces/Facet.md)
- [InstantEmailTemplate](interfaces/InstantEmailTemplate.md)
- [InternalApplicationUserPermission](interfaces/InternalApplicationUserPermission.md)
- [InternalRoleAccess](interfaces/InternalRoleAccess.md)
- [InternalUserPermissions](interfaces/InternalUserPermissions.md)
- [MessageValidationResponse](interfaces/MessageValidationResponse.md)
- [Meta](interfaces/Meta.md)
- [NotificationHistory](interfaces/NotificationHistory.md)
- [PageBehaviorGroup](interfaces/PageBehaviorGroup.md)
- [PageEventLogEntry](interfaces/PageEventLogEntry.md)
- [PageEventType](interfaces/PageEventType.md)
- [PageNotificationHistory](interfaces/PageNotificationHistory.md)
- [RenderEmailTemplateRequest](interfaces/RenderEmailTemplateRequest.md)
- [RequestArgs](interfaces/RequestArgs.md)
- [RequestDefaultBehaviorGroupPropertyList](interfaces/RequestDefaultBehaviorGroupPropertyList.md)
- [RequestSystemSubscriptionProperties](interfaces/RequestSystemSubscriptionProperties.md)
- [ServerInfo](interfaces/ServerInfo.md)
- [SettingsValues](interfaces/SettingsValues.md)
- [SystemSubscriptionProperties](interfaces/SystemSubscriptionProperties.md)
- [Template](interfaces/Template.md)
- [TriggerDailyDigestRequest](interfaces/TriggerDailyDigestRequest.md)
- [UpdateBehaviorGroupRequest](interfaces/UpdateBehaviorGroupRequest.md)
- [UserConfigPreferences](interfaces/UserConfigPreferences.md)
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
- [userConfigResourceV1GetPreferencesParamCreator](modules.md#userconfigresourcev1getpreferencesparamcreator)
- [userConfigResourceV1GetSettingsSchemaParamCreator](modules.md#userconfigresourcev1getsettingsschemaparamcreator)
- [userConfigResourceV1SaveSettingsParamCreator](modules.md#userconfigresourcev1savesettingsparamcreator)

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

packages/notifications/utils/base.ts:55

___

### AuthTypeEnum

Ƭ **AuthTypeEnum**: typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)[keyof typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)]

#### Defined in

packages/notifications/utils/base.ts:45

packages/notifications/utils/base.ts:53

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

packages/notifications/utils/base.ts:45

packages/notifications/utils/base.ts:53

___

### BASE\_PATH

• `Const` **BASE\_PATH**: `string`

#### Defined in

packages/notifications/utils/base.ts:12

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

packages/notifications/utils/base.ts:18

___

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: ``"https://example.com"``

**`Export`**

#### Defined in

packages/notifications/utils/common.ts:13

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

packages/notifications/utils/base.ts:145

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

packages/notifications/utils/common.ts:20

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

packages/notifications/utils/common.ts:133

___

### eventResourceV1GetEventsParamCreator

▸ **eventResourceV1GetEventsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Allowed `sort_by` fields are `bundle`, `application`, `event` and `created`. The ordering can be optionally specified by appending `:asc` or `:desc` to the field, e.g. `bundle:desc`. Defaults to `desc` for the `created` field and to `asc` for all other fields.

**`Summary`**

Retrieve the event log entries.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EventResourceV1GetEventsParams`] \| [`Set`<`string`\>, `Set`<`string`\>, `string`, `Set`<`string`\>, `string`, `boolean`, `boolean`, `boolean`, `Set`<`boolean`\>, `number`, `number`, `number`, `string`, `string`, `string`, `Set`<[`EventLogEntryActionStatus`](enums/EventLogEntryActionStatus.md)\>, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/EventResourceV1GetEvents/index.ts:124

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

packages/notifications/NotificationResourceV1AppendBehaviorGroupToEventType/index.ts:40

___

### notificationResourceV1CreateBehaviorGroupParamCreator

▸ **notificationResourceV1CreateBehaviorGroupParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Create a behavior group - assigning actions and linking to event types as requested

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1CreateBehaviorGroupParams`] \| [[`CreateBehaviorGroupRequest`](interfaces/CreateBehaviorGroupRequest.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1CreateBehaviorGroup/index.ts:34

___

### notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator

▸ **notificationResourceV1DeleteBehaviorGroupFromEventTypeParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Delete a behavior group from the given event type.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1DeleteBehaviorGroupFromEventTypeParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1DeleteBehaviorGroupFromEventType/index.ts:40

___

### notificationResourceV1DeleteBehaviorGroupParamCreator

▸ **notificationResourceV1DeleteBehaviorGroupParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Delete a behavior group.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1DeleteBehaviorGroupParams`] \| [`string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1DeleteBehaviorGroup/index.ts:34

___

### notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator

▸ **notificationResourceV1FindBehaviorGroupsByBundleIdParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve the behavior groups of a bundle.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1FindBehaviorGroupsByBundleIdParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1FindBehaviorGroupsByBundleId/index.ts:34

___

### notificationResourceV1GetApplicationByNameAndBundleNameParamCreator

▸ **notificationResourceV1GetApplicationByNameAndBundleNameParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve the application by name of a given bundle name

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetApplicationByNameAndBundleNameParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetApplicationByNameAndBundleName/index.ts:40

___

### notificationResourceV1GetApplicationsFacetsParamCreator

▸ **notificationResourceV1GetApplicationsFacetsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Return a thin list of configured applications. This can be used to configure a filter in the UI

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetApplicationsFacetsParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetApplicationsFacets/index.ts:34

___

### notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator

▸ **notificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve the behavior groups affected by the removal of an endpoint.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpointParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetBehaviorGroupsAffectedByRemovalOfEndpoint/index.ts:34

___

### notificationResourceV1GetBundleByNameParamCreator

▸ **notificationResourceV1GetBundleByNameParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve the bundle by name

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetBundleByNameParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetBundleByName/index.ts:34

___

### notificationResourceV1GetBundleFacetsParamCreator

▸ **notificationResourceV1GetBundleFacetsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Return a thin list of configured bundles. This can be used to configure a filter in the UI

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetBundleFacetsParams`] \| [`boolean`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetBundleFacets/index.ts:34

___

### notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator

▸ **notificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve the event types affected by the removal of a behavior group.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroupParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetEventTypesAffectedByRemovalOfBehaviorGroup/index.ts:34

___

### notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator

▸ **notificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve the event type by name of a given bundle name and application name

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationNameParams`] \| [`string`, `string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetEventTypesByNameAndBundleAndApplicationName/index.ts:46

___

### notificationResourceV1GetEventTypesParamCreator

▸ **notificationResourceV1GetEventTypesParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve all event types. The returned list can be filtered by bundle or application.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetEventTypesParams`] \| [`Set`<`string`\>, `string`, `string`, `number`, `number`, `number`, `string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetEventTypes/index.ts:76

___

### notificationResourceV1GetLinkedBehaviorGroupsParamCreator

▸ **notificationResourceV1GetLinkedBehaviorGroupsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve the behavior groups linked to an event type.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1GetLinkedBehaviorGroupsParams`] \| [`string`, `number`, `number`, `number`, `string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1GetLinkedBehaviorGroups/index.ts:64

___

### notificationResourceV1UpdateBehaviorGroupActionsParamCreator

▸ **notificationResourceV1UpdateBehaviorGroupActionsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Update the list of actions of a behavior group.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateBehaviorGroupActionsParams`] \| [`string`, `string`[], `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1UpdateBehaviorGroupActions/index.ts:40

___

### notificationResourceV1UpdateBehaviorGroupParamCreator

▸ **notificationResourceV1UpdateBehaviorGroupParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Update a behavior group.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateBehaviorGroupParams`] \| [`string`, [`UpdateBehaviorGroupRequest`](interfaces/UpdateBehaviorGroupRequest.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1UpdateBehaviorGroup/index.ts:40

___

### notificationResourceV1UpdateEventTypeBehaviorsParamCreator

▸ **notificationResourceV1UpdateEventTypeBehaviorsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Update the list of behavior groups of an event type.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`NotificationResourceV1UpdateEventTypeBehaviorsParams`] \| [`string`, `Set`<`string`\>, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/NotificationResourceV1UpdateEventTypeBehaviors/index.ts:40

___

### orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator

▸ **orgConfigResourceV1GetDailyDigestTimePreferenceParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`OrgConfigResourceV1GetDailyDigestTimePreferenceParams`] \| [`AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/OrgConfigResourceV1GetDailyDigestTimePreference/index.ts:27

___

### orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator

▸ **orgConfigResourceV1SaveDailyDigestTimePreferenceParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Save the daily digest UTC time preference. To cover all time zones conversion to UTC, the accepted minute values are 00, 15, 30 and 45.

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`OrgConfigResourceV1SaveDailyDigestTimePreferenceParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/OrgConfigResourceV1SaveDailyDigestTimePreference/index.ts:34

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

packages/notifications/utils/common.ts:111

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

packages/notifications/utils/common.ts:30

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

packages/notifications/utils/common.ts:43

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

packages/notifications/utils/common.ts:53

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

packages/notifications/utils/common.ts:66

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

packages/notifications/utils/common.ts:101

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

packages/notifications/utils/common.ts:125

___

### userConfigResourceV1GetPreferencesParamCreator

▸ **userConfigResourceV1GetPreferencesParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, `AxiosRequestConfig`<`any`\>] \| [`UserConfigResourceV1GetPreferencesParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/UserConfigResourceV1GetPreferences/index.ts:39

___

### userConfigResourceV1GetSettingsSchemaParamCreator

▸ **userConfigResourceV1GetSettingsSchemaParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`UserConfigResourceV1GetSettingsSchemaParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/UserConfigResourceV1GetSettingsSchema/index.ts:33

___

### userConfigResourceV1SaveSettingsParamCreator

▸ **userConfigResourceV1SaveSettingsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`UserConfigResourceV1SaveSettingsParams`] \| [[`SettingsValues`](interfaces/SettingsValues.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

packages/notifications/UserConfigResourceV1SaveSettings/index.ts:33
