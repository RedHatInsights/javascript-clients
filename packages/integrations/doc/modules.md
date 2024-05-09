[@redhat-cloud-services/integrations-client](README.md) / Exports

# @redhat-cloud-services/integrations-client

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
- [Configuration](classes/Configuration.md)
- [RequiredError](classes/RequiredError.md)

### Interfaces

- [AddAccessRequest](interfaces/AddAccessRequest.md)
- [AddApplicationRequest](interfaces/AddApplicationRequest.md)
- [AggregationEmailTemplate](interfaces/AggregationEmailTemplate.md)
- [AggregationEmailTemplateSubjectTemplate](interfaces/AggregationEmailTemplateSubjectTemplate.md)
- [ApiConfig](interfaces/ApiConfig.md)
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
- [UpdateApplicationRequest](interfaces/UpdateApplicationRequest.md)
- [UpdateBehaviorGroupRequest](interfaces/UpdateBehaviorGroupRequest.md)
- [UpdateNotificationDrawerStatus](interfaces/UpdateNotificationDrawerStatus.md)
- [WebhookProperties](interfaces/WebhookProperties.md)
- [X509Certificate](interfaces/X509Certificate.md)

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
- [endpointResourceV1CreateEndpoint](modules.md#endpointresourcev1createendpoint)
- [endpointResourceV1DeleteEndpoint](modules.md#endpointresourcev1deleteendpoint)
- [endpointResourceV1DisableEndpoint](modules.md#endpointresourcev1disableendpoint)
- [endpointResourceV1EnableEndpoint](modules.md#endpointresourcev1enableendpoint)
- [endpointResourceV1GetDetailedEndpointHistory](modules.md#endpointresourcev1getdetailedendpointhistory)
- [endpointResourceV1GetEndpoint](modules.md#endpointresourcev1getendpoint)
- [endpointResourceV1GetEndpointHistory](modules.md#endpointresourcev1getendpointhistory)
- [endpointResourceV1GetEndpoints](modules.md#endpointresourcev1getendpoints)
- [endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint](modules.md#endpointresourcev1getorcreatedrawersubscriptionendpoint)
- [endpointResourceV1GetOrCreateEmailSubscriptionEndpoint](modules.md#endpointresourcev1getorcreateemailsubscriptionendpoint)
- [endpointResourceV1TestEndpoint](modules.md#endpointresourcev1testendpoint)
- [endpointResourceV1UpdateEndpoint](modules.md#endpointresourcev1updateendpoint)
- [serializeDataIfNeeded](modules.md#serializedataifneeded)
- [setApiKeyToObject](modules.md#setapikeytoobject)
- [setBasicAuthToObject](modules.md#setbasicauthtoobject)
- [setBearerAuthToObject](modules.md#setbearerauthtoobject)
- [setOAuthToObject](modules.md#setoauthtoobject)
- [setSearchParams](modules.md#setsearchparams)
- [toPathString](modules.md#topathstring)

## Type Aliases

### ActionType

Ƭ **ActionType**: (...`config`: `any`) => `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Type declaration

▸ (`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...config` | `any` |

##### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/utils/base.ts:55](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L55)

___

### AuthTypeEnum

Ƭ **AuthTypeEnum**: typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)[keyof typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)]

#### Defined in

[packages/integrations/utils/base.ts:45](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L45)

[packages/integrations/utils/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L53)

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

[packages/integrations/utils/base.ts:45](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L45)

[packages/integrations/utils/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L53)

___

### BASE\_PATH

• `Const` **BASE\_PATH**: `string`

#### Defined in

[packages/integrations/utils/base.ts:12](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L12)

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

[packages/integrations/utils/base.ts:18](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L18)

___

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: ``"https://example.com"``

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:13](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L13)

## Functions

### APIFactory

▸ **APIFactory**\<`T`\>(`basePath?`, `config?`, `actions`): [`BaseAPI`](classes/BaseAPI.md) & `T`

Factory for creating API with option to add enpoints to the API.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, [`ActionType`](modules.md#actiontype)\> |

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

[packages/integrations/utils/base.ts:145](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/base.ts#L145)

___

### assertParamExists

▸ **assertParamExists**(`functionName`, `paramName`, `paramValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `paramName` | `string` |
| `paramValue` | `unknown` |

#### Returns

`void`

**`Throws`**

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L20)

___

### createRequestFunction

▸ **createRequestFunction**(`axiosArgs`, `globalAxios`, `BASE_PATH`, `configuration?`): \<T, R\>(`axios`: `AxiosInstance`, `basePath`: `string`) => `Promise`\<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosArgs` | [`RequestArgs`](interfaces/RequestArgs.md) |
| `globalAxios` | `AxiosInstance` |
| `BASE_PATH` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`fn`

▸ \<`T`, `R`\>(`axios?`, `basePath?`): `Promise`\<`R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `R` | `AxiosResponse`\<`T`, `any`\> |

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `axios` | `AxiosInstance` | `globalAxios` |
| `basePath` | `string` | `BASE_PATH` |

##### Returns

`Promise`\<`R`\>

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:133](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L133)

___

### endpointResourceV1CreateEndpoint

▸ **endpointResourceV1CreateEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Creates a new endpoint by providing data such as a description, a name, and the endpoint properties. Use this endpoint to create endpoints for integration with third-party services such as webhooks, Slack, or Google Chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1CreateEndpointParams`] \| [[`Endpoint`](interfaces/Endpoint.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Create a new endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1CreateEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1CreateEndpoint/index.ts#L34)

___

### endpointResourceV1DeleteEndpoint

▸ **endpointResourceV1DeleteEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Deletes an endpoint. Use this endpoint to delete an endpoint that is no longer needed. Deleting an endpoint that is already linked to a behavior group will unlink it from the behavior group. You cannot delete system endpoints.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1DeleteEndpointParams`] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Delete an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1DeleteEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1DeleteEndpoint/index.ts#L34)

___

### endpointResourceV1DisableEndpoint

▸ **endpointResourceV1DisableEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Disables an endpoint so that the endpoint will not be executed after an operation that uses the endpoint is started. An operation that is already running can still execute the endpoint. Disable an endpoint when you want to stop it from running and might want to re-enable it in the future.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`EndpointResourceV1DisableEndpointParams`] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Disable an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1DisableEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1DisableEndpoint/index.ts#L34)

___

### endpointResourceV1EnableEndpoint

▸ **endpointResourceV1EnableEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Enables an endpoint that is disabled so that the endpoint will be executed on the following operations that use the endpoint. An operation must be restarted to use the enabled endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`EndpointResourceV1EnableEndpointParams`] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Enable an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1EnableEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1EnableEndpoint/index.ts#L34)

___

### endpointResourceV1GetDetailedEndpointHistory

▸ **endpointResourceV1GetDetailedEndpointHistory**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Retrieves extended information about the outcome of an event notification related to the specified endpoint. Use this endpoint to learn why an event delivery failed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetDetailedEndpointHistoryParams`] \| [`string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve event notification details

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetDetailedEndpointHistory/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetDetailedEndpointHistory/index.ts#L40)

___

### endpointResourceV1GetEndpoint

▸ **endpointResourceV1GetEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Retrieves the public information associated with an endpoint such as its description, name, and properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`EndpointResourceV1GetEndpointParams`] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Retrieve an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpoint/index.ts#L34)

___

### endpointResourceV1GetEndpointHistory

▸ **endpointResourceV1GetEndpointHistory**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetEndpointHistoryParams`] \| [`string`, `number`, `number`, `boolean`, `number`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts:69](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts#L69)

___

### endpointResourceV1GetEndpoints

▸ **endpointResourceV1GetEndpoints**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Provides a list of endpoints. Use this endpoint to find specific endpoints.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetEndpointsParams`] \| [`number`, `number`, `boolean`, `string`, `number`, `string`, `string`, `string`[], `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

List endpoints

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpoints/index.ts:76](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpoints/index.ts#L76)

___

### endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint

▸ **endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Adds the drawer system endpoint into the system and specifies the role-based access control (RBAC) group that will receive notifications. Use this endpoint to add an animation as a notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams`] \| [[`RequestSystemSubscriptionProperties`](interfaces/RequestSystemSubscriptionProperties.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Add a drawer endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts#L34)

___

### endpointResourceV1GetOrCreateEmailSubscriptionEndpoint

▸ **endpointResourceV1GetOrCreateEmailSubscriptionEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Adds the email subscription endpoint into the system and specifies the role-based access control (RBAC) group that will receive email notifications. Use this endpoint in behavior groups to send emails when an action linked to the behavior group is triggered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`RequestSystemSubscriptionProperties`](interfaces/RequestSystemSubscriptionProperties.md), `AxiosRequestConfig`\<`any`\>] \| [`EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams`] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Create an email subscription endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts#L34)

___

### endpointResourceV1TestEndpoint

▸ **endpointResourceV1TestEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Generates a test notification for a particular endpoint. Use this endpoint to test that an integration that you created works as expected. This endpoint triggers a test notification that should be received by the target recipient. For example, if you set up a webhook as the action to take upon receiving a notification, you should receive a test notification when using this endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1TestEndpointParams`] \| [`string`, [`EndpointTestRequest`](interfaces/EndpointTestRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Generate a test notification

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1TestEndpoint/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1TestEndpoint/index.ts#L40)

___

### endpointResourceV1UpdateEndpoint

▸ **endpointResourceV1UpdateEndpoint**(`...config`): `Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

Updates the endpoint configuration. Use this to update an existing endpoint. Any changes to the endpoint take place immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1UpdateEndpointParams`] \| [`string`, [`Endpoint`](interfaces/Endpoint.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Summary`**

Update an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1UpdateEndpoint/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1UpdateEndpoint/index.ts#L40)

___

### serializeDataIfNeeded

▸ **serializeDataIfNeeded**(`value`, `requestOptions`, `configuration?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `requestOptions` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`any`

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:111](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L111)

___

### setApiKeyToObject

▸ **setApiKeyToObject**(`object`, `keyParamName`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `keyParamName` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L30)

___

### setBasicAuthToObject

▸ **setBasicAuthToObject**(`object`, `configuration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`void`

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:43](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L43)

___

### setBearerAuthToObject

▸ **setBearerAuthToObject**(`object`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L53)

___

### setOAuthToObject

▸ **setOAuthToObject**(`object`, `name`, `scopes`, `configuration?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `name` | `string` |
| `scopes` | `string`[] |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`\<`void`\>

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:66](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L66)

___

### setSearchParams

▸ **setSearchParams**(`url`, `...objects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `...objects` | `any`[] |

#### Returns

`void`

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L101)

___

### toPathString

▸ **toPathString**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`string`

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:125](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/utils/common.ts#L125)
