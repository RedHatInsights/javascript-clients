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

## Variables

### BASE\_PATH

• `Const` **BASE\_PATH**: `string`

#### Defined in

[packages/integrations/base.ts:22](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/base.ts#L22)

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

[packages/integrations/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/base.ts#L28)

## Functions

### endpointResourceV1CreateEndpoint

▸ **endpointResourceV1CreateEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Creates a new endpoint by providing data such as a description, a name, and the endpoint properties. Use this endpoint to create endpoints for integration with third-party services such as webhooks, Slack, or Google Chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1CreateEndpointParams`] \| [[`Endpoint`](interfaces/Endpoint.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create a new endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1CreateEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1CreateEndpoint/index.ts#L34)

___

### endpointResourceV1DeleteEndpoint

▸ **endpointResourceV1DeleteEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Deletes an endpoint. Use this endpoint to delete an endpoint that is no longer needed. Deleting an endpoint that is already linked to a behavior group will unlink it from the behavior group. You cannot delete system endpoints.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1DeleteEndpointParams`] \| [`string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Delete an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1DeleteEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1DeleteEndpoint/index.ts#L34)

___

### endpointResourceV1DisableEndpoint

▸ **endpointResourceV1DisableEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Disables an endpoint so that the endpoint will not be executed after an operation that uses the endpoint is started. An operation that is already running can still execute the endpoint. Disable an endpoint when you want to stop it from running and might want to re-enable it in the future.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`EndpointResourceV1DisableEndpointParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Disable an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1DisableEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1DisableEndpoint/index.ts#L34)

___

### endpointResourceV1EnableEndpoint

▸ **endpointResourceV1EnableEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Enables an endpoint that is disabled so that the endpoint will be executed on the following operations that use the endpoint. An operation must be restarted to use the enabled endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`EndpointResourceV1EnableEndpointParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Enable an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1EnableEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1EnableEndpoint/index.ts#L34)

___

### endpointResourceV1GetDetailedEndpointHistory

▸ **endpointResourceV1GetDetailedEndpointHistory**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves extended information about the outcome of an event notification related to the specified endpoint. Use this endpoint to learn why an event delivery failed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetDetailedEndpointHistoryParams`] \| [`string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve event notification detail

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetDetailedEndpointHistory/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetDetailedEndpointHistory/index.ts#L40)

___

### endpointResourceV1GetEndpoint

▸ **endpointResourceV1GetEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Retrieves the public information associated with an endpoint such as its description, name, and properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`\<`any`\>] \| [`EndpointResourceV1GetEndpointParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Retrieve an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpoint/index.ts#L34)

___

### endpointResourceV1GetEndpointHistory

▸ **endpointResourceV1GetEndpointHistory**(`...config`): `Promise`\<`RequestArgs`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetEndpointHistoryParams`] \| [`string`, `number`, `number`, `boolean`, `number`, `string`, `string`, `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts:69](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts#L69)

___

### endpointResourceV1GetEndpoints

▸ **endpointResourceV1GetEndpoints**(`...config`): `Promise`\<`RequestArgs`\>

Provides a list of endpoints. Use this endpoint to find specific endpoints.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetEndpointsParams`] \| [`number`, `number`, `boolean`, `string`, `number`, `string`, `string`, `string`[], `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

List endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpoints/index.ts:76](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetEndpoints/index.ts#L76)

___

### endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint

▸ **endpointResourceV1GetOrCreateDrawerSubscriptionEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Adds the drawer system endpoint into the system and specifies the role-based access control (RBAC) group that will receive notifications. Use this endpoint to add an animation as a notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams`] \| [[`RequestSystemSubscriptionProperties`](interfaces/RequestSystemSubscriptionProperties.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Add a drawer endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts#L34)

___

### endpointResourceV1GetOrCreateEmailSubscriptionEndpoint

▸ **endpointResourceV1GetOrCreateEmailSubscriptionEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Adds the email subscription endpoint into the system and specifies the role-based access control (RBAC) group that will receive email notifications. Use this endpoint in behavior groups to send emails when an action linked to the behavior group is triggered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`RequestSystemSubscriptionProperties`](interfaces/RequestSystemSubscriptionProperties.md), `AxiosRequestConfig`\<`any`\>] \| [`EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams`] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Create an email subscription endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts#L34)

___

### endpointResourceV1TestEndpoint

▸ **endpointResourceV1TestEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Generates a test notification for a particular endpoint. Use this endpoint to test that an integration that you created works as expected. This endpoint triggers a test notification that should be received by the target recipient. For example, if you set up a webhook as the action to take upon receiving a notification, you should receive a test notification when using this endpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1TestEndpointParams`] \| [`string`, [`EndpointTestRequest`](interfaces/EndpointTestRequest.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Generate a test notification

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1TestEndpoint/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1TestEndpoint/index.ts#L40)

___

### endpointResourceV1UpdateEndpoint

▸ **endpointResourceV1UpdateEndpoint**(`...config`): `Promise`\<`RequestArgs`\>

Updates the endpoint configuration. Use this to update an existing endpoint. Any changes to the endpoint take place immediately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1UpdateEndpointParams`] \| [`string`, [`Endpoint`](interfaces/Endpoint.md), `AxiosRequestConfig`\<`any`\>] | with all available params. |

#### Returns

`Promise`\<`RequestArgs`\>

**`Summary`**

Update an endpoint

**`Throws`**

#### Defined in

[packages/integrations/EndpointResourceV1UpdateEndpoint/index.ts:40](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/integrations/EndpointResourceV1UpdateEndpoint/index.ts#L40)
