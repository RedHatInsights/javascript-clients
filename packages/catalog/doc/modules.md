[@redhat-cloud-services/catalog-client](README.md) / Exports

# @redhat-cloud-services/catalog-client

## Table of contents

### Enumerations

- [ApprovalRequestStateEnum](enums/ApprovalRequestStateEnum.md)
- [OrderItemStateEnum](enums/OrderItemStateEnum.md)
- [OrderProcessAssociationsToRemoveAssociationsToRemoveEnum](enums/OrderProcessAssociationsToRemoveAssociationsToRemoveEnum.md)
- [OrderStateEnum](enums/OrderStateEnum.md)
- [ProgressMessageLevelEnum](enums/ProgressMessageLevelEnum.md)
- [RepositionPlacementEnum](enums/RepositionPlacementEnum.md)
- [ShareInfoPermissionsEnum](enums/ShareInfoPermissionsEnum.md)
- [SharePolicyPermissionsEnum](enums/SharePolicyPermissionsEnum.md)
- [SubstitutionParametersAttributesEnum](enums/SubstitutionParametersAttributesEnum.md)
- [UnsharePolicyPermissionsEnum](enums/UnsharePolicyPermissionsEnum.md)

### Classes

- [Configuration](classes/Configuration.md)
- [DefaultApi](classes/DefaultApi.md)
- [IconApi](classes/IconApi.md)
- [OrderApi](classes/OrderApi.md)
- [OrderItemApi](classes/OrderItemApi.md)
- [OrderProcessApi](classes/OrderProcessApi.md)
- [PortfolioApi](classes/PortfolioApi.md)
- [PortfolioItemApi](classes/PortfolioItemApi.md)
- [ServicePlansApi](classes/ServicePlansApi.md)
- [SettingsApi](classes/SettingsApi.md)
- [TagsApi](classes/TagsApi.md)
- [TenantApi](classes/TenantApi.md)

### Interfaces

- [ApiError](interfaces/ApiError.md)
- [ApiErrorCollection](interfaces/ApiErrorCollection.md)
- [ApprovalRequest](interfaces/ApprovalRequest.md)
- [ApprovalRequestsCollection](interfaces/ApprovalRequestsCollection.md)
- [CollectionLinks](interfaces/CollectionLinks.md)
- [CollectionMetadata](interfaces/CollectionMetadata.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [CopyPortfolioItem](interfaces/CopyPortfolioItem.md)
- [CreateIcon](interfaces/CreateIcon.md)
- [CreatePortfolioItem](interfaces/CreatePortfolioItem.md)
- [GraphQLRequest](interfaces/GraphQLRequest.md)
- [GraphQLResponse](interfaces/GraphQLResponse.md)
- [Icon](interfaces/Icon.md)
- [ImportServicePlan](interfaces/ImportServicePlan.md)
- [Order](interfaces/Order.md)
- [OrderItem](interfaces/OrderItem.md)
- [OrderItemsCollection](interfaces/OrderItemsCollection.md)
- [OrderProcess](interfaces/OrderProcess.md)
- [OrderProcessAssociationsToRemove](interfaces/OrderProcessAssociationsToRemove.md)
- [OrderProcessCollection](interfaces/OrderProcessCollection.md)
- [OrderProcessPortfolioItemId](interfaces/OrderProcessPortfolioItemId.md)
- [OrdersCollection](interfaces/OrdersCollection.md)
- [PatchModifiedServicePlan](interfaces/PatchModifiedServicePlan.md)
- [Portfolio](interfaces/Portfolio.md)
- [PortfolioItem](interfaces/PortfolioItem.md)
- [PortfolioItemNextName](interfaces/PortfolioItemNextName.md)
- [PortfolioItemsCollection](interfaces/PortfolioItemsCollection.md)
- [PortfoliosCollection](interfaces/PortfoliosCollection.md)
- [ProgressMessage](interfaces/ProgressMessage.md)
- [ProgressMessagesCollection](interfaces/ProgressMessagesCollection.md)
- [Reposition](interfaces/Reposition.md)
- [ResourceObject](interfaces/ResourceObject.md)
- [RestoreKey](interfaces/RestoreKey.md)
- [ServicePlan](interfaces/ServicePlan.md)
- [Setting](interfaces/Setting.md)
- [ShareInfo](interfaces/ShareInfo.md)
- [SharePolicy](interfaces/SharePolicy.md)
- [SubstitutionParameters](interfaces/SubstitutionParameters.md)
- [Tag](interfaces/Tag.md)
- [TagsCollection](interfaces/TagsCollection.md)
- [Tenant](interfaces/Tenant.md)
- [TenantSettings](interfaces/TenantSettings.md)
- [TenantsCollection](interfaces/TenantsCollection.md)
- [UnsharePolicy](interfaces/UnsharePolicy.md)

### Functions

- [DefaultApiAxiosParamCreator](modules.md#defaultapiaxiosparamcreator)
- [DefaultApiFactory](modules.md#defaultapifactory)
- [DefaultApiFp](modules.md#defaultapifp)
- [IconApiAxiosParamCreator](modules.md#iconapiaxiosparamcreator)
- [IconApiFactory](modules.md#iconapifactory)
- [IconApiFp](modules.md#iconapifp)
- [OrderApiAxiosParamCreator](modules.md#orderapiaxiosparamcreator)
- [OrderApiFactory](modules.md#orderapifactory)
- [OrderApiFp](modules.md#orderapifp)
- [OrderItemApiAxiosParamCreator](modules.md#orderitemapiaxiosparamcreator)
- [OrderItemApiFactory](modules.md#orderitemapifactory)
- [OrderItemApiFp](modules.md#orderitemapifp)
- [OrderProcessApiAxiosParamCreator](modules.md#orderprocessapiaxiosparamcreator)
- [OrderProcessApiFactory](modules.md#orderprocessapifactory)
- [OrderProcessApiFp](modules.md#orderprocessapifp)
- [PortfolioApiAxiosParamCreator](modules.md#portfolioapiaxiosparamcreator)
- [PortfolioApiFactory](modules.md#portfolioapifactory)
- [PortfolioApiFp](modules.md#portfolioapifp)
- [PortfolioItemApiAxiosParamCreator](modules.md#portfolioitemapiaxiosparamcreator)
- [PortfolioItemApiFactory](modules.md#portfolioitemapifactory)
- [PortfolioItemApiFp](modules.md#portfolioitemapifp)
- [ServicePlansApiAxiosParamCreator](modules.md#serviceplansapiaxiosparamcreator)
- [ServicePlansApiFactory](modules.md#serviceplansapifactory)
- [ServicePlansApiFp](modules.md#serviceplansapifp)
- [SettingsApiAxiosParamCreator](modules.md#settingsapiaxiosparamcreator)
- [SettingsApiFactory](modules.md#settingsapifactory)
- [SettingsApiFp](modules.md#settingsapifp)
- [TagsApiAxiosParamCreator](modules.md#tagsapiaxiosparamcreator)
- [TagsApiFactory](modules.md#tagsapifactory)
- [TagsApiFp](modules.md#tagsapifp)
- [TenantApiAxiosParamCreator](modules.md#tenantapiaxiosparamcreator)
- [TenantApiFactory](modules.md#tenantapifactory)
- [TenantApiFp](modules.md#tenantapifp)

## Functions

### DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`): `Object`

DefaultApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDocumentation` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:1413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1413)

___

### DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

DefaultApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDocumentation` | (`options?`: `any`) => `AxiosPromise`<`object`\> |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `AxiosPromise`<[`GraphQLResponse`](interfaces/GraphQLResponse.md)\> |

#### Defined in

[api.ts:1539](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1539)

___

### DefaultApiFp

▸ **DefaultApiFp**(`configuration?`): `Object`

DefaultApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDocumentation` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`object`\>\> |
| `postGraphQL` | (`graphQLRequest`: [`GraphQLRequest`](interfaces/GraphQLRequest.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GraphQLResponse`](interfaces/GraphQLResponse.md)\>\> |

#### Defined in

[api.ts:1503](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1503)

___

### IconApiAxiosParamCreator

▸ **IconApiAxiosParamCreator**(`configuration?`): `Object`

IconApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createIcon` | (`content?`: `any`, `portfolioId?`: `string`, `portfolioItemId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `destroyIcon` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:1600](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1600)

___

### IconApiFactory

▸ **IconApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

IconApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createIcon` | (`content?`: `any`, `portfolioId?`: `string`, `portfolioItemId?`: `string`, `options?`: `any`) => `AxiosPromise`<[`Icon`](interfaces/Icon.md)\> |
| `destroyIcon` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:1745](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1745)

___

### IconApiFp

▸ **IconApiFp**(`configuration?`): `Object`

IconApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createIcon` | (`content?`: `any`, `portfolioId?`: `string`, `portfolioItemId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Icon`](interfaces/Icon.md)\>\> |
| `destroyIcon` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:1706](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1706)

___

### OrderApiAxiosParamCreator

▸ **OrderApiAxiosParamCreator**(`configuration?`): `Object`

OrderApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addToOrder` | (`orderId`: `string`, `orderItem`: [`OrderItem`](interfaces/OrderItem.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `cancelOrder` | (`orderId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `createOrder` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `destroyOrder` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrderItemsFromOrder` | (`orderId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrderProgressMessages` | (`orderId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrders` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `restoreOrder` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showOrder` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showOrderItemFromOrder` | (`orderId`: `string`, `id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `submitOrder` | (`orderId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:1812](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1812)

___

### OrderApiFactory

▸ **OrderApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

OrderApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addToOrder` | (`orderId`: `string`, `orderItem`: [`OrderItem`](interfaces/OrderItem.md), `options?`: `any`) => `AxiosPromise`<[`OrderItem`](interfaces/OrderItem.md)\> |
| `cancelOrder` | (`orderId`: `string`, `options?`: `any`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\> |
| `createOrder` | (`options?`: `any`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\> |
| `destroyOrder` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`RestoreKey`](interfaces/RestoreKey.md)\> |
| `listOrderItemsFromOrder` | (`orderId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`OrderItemsCollection`](interfaces/OrderItemsCollection.md)\> |
| `listOrderProgressMessages` | (`orderId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ProgressMessagesCollection`](interfaces/ProgressMessagesCollection.md)\> |
| `listOrders` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`OrdersCollection`](interfaces/OrdersCollection.md)\> |
| `restoreOrder` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\> |
| `showOrder` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\> |
| `showOrderItemFromOrder` | (`orderId`: `string`, `id`: `string`, `options?`: `any`) => `AxiosPromise`<[`OrderItem`](interfaces/OrderItem.md)\> |
| `submitOrder` | (`orderId`: `string`, `options?`: `any`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\> |

#### Defined in

[api.ts:2531](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2531)

___

### OrderApiFp

▸ **OrderApiFp**(`configuration?`): `Object`

OrderApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addToOrder` | (`orderId`: `string`, `orderItem`: [`OrderItem`](interfaces/OrderItem.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderItem`](interfaces/OrderItem.md)\>\> |
| `cancelOrder` | (`orderId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\>\> |
| `createOrder` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\>\> |
| `destroyOrder` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RestoreKey`](interfaces/RestoreKey.md)\>\> |
| `listOrderItemsFromOrder` | (`orderId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderItemsCollection`](interfaces/OrderItemsCollection.md)\>\> |
| `listOrderProgressMessages` | (`orderId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ProgressMessagesCollection`](interfaces/ProgressMessagesCollection.md)\>\> |
| `listOrders` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrdersCollection`](interfaces/OrdersCollection.md)\>\> |
| `restoreOrder` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\>\> |
| `showOrder` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\>\> |
| `showOrderItemFromOrder` | (`orderId`: `string`, `id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderItem`](interfaces/OrderItem.md)\>\> |
| `submitOrder` | (`orderId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\>\> |

#### Defined in

[api.ts:2355](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2355)

___

### OrderItemApiAxiosParamCreator

▸ **OrderItemApiAxiosParamCreator**(`configuration?`): `Object`

OrderItemApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `destroyOrderItem` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listApprovalRequests` | (`orderItemId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrderItemProgressMessages` | (`orderItemId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrderItems` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `restoreOrderItem` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showOrderItem` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:2818](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2818)

___

### OrderItemApiFactory

▸ **OrderItemApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

OrderItemApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `destroyOrderItem` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`RestoreKey`](interfaces/RestoreKey.md)\> |
| `listApprovalRequests` | (`orderItemId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ApprovalRequestsCollection`](interfaces/ApprovalRequestsCollection.md)\> |
| `listOrderItemProgressMessages` | (`orderItemId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ProgressMessagesCollection`](interfaces/ProgressMessagesCollection.md)\> |
| `listOrderItems` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`OrderItemsCollection`](interfaces/OrderItemsCollection.md)\> |
| `restoreOrderItem` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `AxiosPromise`<[`OrderItem`](interfaces/OrderItem.md)\> |
| `showOrderItem` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`OrderItem`](interfaces/OrderItem.md)\> |

#### Defined in

[api.ts:3247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3247)

___

### OrderItemApiFp

▸ **OrderItemApiFp**(`configuration?`): `Object`

OrderItemApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `destroyOrderItem` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RestoreKey`](interfaces/RestoreKey.md)\>\> |
| `listApprovalRequests` | (`orderItemId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ApprovalRequestsCollection`](interfaces/ApprovalRequestsCollection.md)\>\> |
| `listOrderItemProgressMessages` | (`orderItemId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ProgressMessagesCollection`](interfaces/ProgressMessagesCollection.md)\>\> |
| `listOrderItems` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderItemsCollection`](interfaces/OrderItemsCollection.md)\>\> |
| `restoreOrderItem` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderItem`](interfaces/OrderItem.md)\>\> |
| `showOrderItem` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderItem`](interfaces/OrderItem.md)\>\> |

#### Defined in

[api.ts:3142](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3142)

___

### OrderProcessApiAxiosParamCreator

▸ **OrderProcessApiAxiosParamCreator**(`configuration?`): `Object`

OrderProcessApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addOrderProcessAfterItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `addOrderProcessBeforeItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `addOrderProcessReturnItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `createOrderProcess` | (`orderProcess`: [`OrderProcess`](interfaces/OrderProcess.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `destroyOrderProcess` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `linkTagToOrderProcess` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listOrderProcesses` | (`appName?`: `string`, `objectId?`: `string`, `objectType?`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `removeOrderProcessAssociation` | (`id`: `string`, `orderProcessAssociationsToRemove`: [`OrderProcessAssociationsToRemove`](interfaces/OrderProcessAssociationsToRemove.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `reposition` | (`id`: `string`, `reposition`: [`Reposition`](interfaces/Reposition.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showOrderProcess` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `unlinkTagFromOrderProcess` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `updateOrderProcess` | (`id`: `string`, `orderProcess`: [`OrderProcess`](interfaces/OrderProcess.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:3422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3422)

___

### OrderProcessApiFactory

▸ **OrderProcessApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

OrderProcessApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addOrderProcessAfterItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\> |
| `addOrderProcessBeforeItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\> |
| `addOrderProcessReturnItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\> |
| `createOrderProcess` | (`orderProcess`: [`OrderProcess`](interfaces/OrderProcess.md), `options?`: `any`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\> |
| `destroyOrderProcess` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `linkTagToOrderProcess` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `listOrderProcesses` | (`appName?`: `string`, `objectId?`: `string`, `objectType?`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`OrderProcessCollection`](interfaces/OrderProcessCollection.md)\> |
| `removeOrderProcessAssociation` | (`id`: `string`, `orderProcessAssociationsToRemove`: [`OrderProcessAssociationsToRemove`](interfaces/OrderProcessAssociationsToRemove.md), `options?`: `any`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\> |
| `reposition` | (`id`: `string`, `reposition`: [`Reposition`](interfaces/Reposition.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `showOrderProcess` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\> |
| `unlinkTagFromOrderProcess` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `updateOrderProcess` | (`id`: `string`, `orderProcess`: [`OrderProcess`](interfaces/OrderProcess.md), `options?`: `any`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\> |

#### Defined in

[api.ts:4230](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4230)

___

### OrderProcessApiFp

▸ **OrderProcessApiFp**(`configuration?`): `Object`

OrderProcessApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addOrderProcessAfterItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\>\> |
| `addOrderProcessBeforeItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\>\> |
| `addOrderProcessReturnItem` | (`id`: `string`, `orderProcessPortfolioItemId`: [`OrderProcessPortfolioItemId`](interfaces/OrderProcessPortfolioItemId.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\>\> |
| `createOrderProcess` | (`orderProcess`: [`OrderProcess`](interfaces/OrderProcess.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\>\> |
| `destroyOrderProcess` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `linkTagToOrderProcess` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `listOrderProcesses` | (`appName?`: `string`, `objectId?`: `string`, `objectType?`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderProcessCollection`](interfaces/OrderProcessCollection.md)\>\> |
| `removeOrderProcessAssociation` | (`id`: `string`, `orderProcessAssociationsToRemove`: [`OrderProcessAssociationsToRemove`](interfaces/OrderProcessAssociationsToRemove.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\>\> |
| `reposition` | (`id`: `string`, `reposition`: [`Reposition`](interfaces/Reposition.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `showOrderProcess` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\>\> |
| `unlinkTagFromOrderProcess` | (`id`: `string`, `resourceObject`: [`ResourceObject`](interfaces/ResourceObject.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `updateOrderProcess` | (`id`: `string`, `orderProcess`: [`OrderProcess`](interfaces/OrderProcess.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`OrderProcess`](interfaces/OrderProcess.md)\>\> |

#### Defined in

[api.ts:4039](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4039)

___

### PortfolioApiAxiosParamCreator

▸ **PortfolioApiAxiosParamCreator**(`configuration?`): `Object`

PortfolioApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addPortfolioTag` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `createPortfolio` | (`portfolio`: [`Portfolio`](interfaces/Portfolio.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `destroyPortfolio` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `fetchPortfolioItemsWithPortfolio` | (`portfolioId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listPortfolioTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listPortfolios` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `postCopyPortfolio` | (`portfolioId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `removePortfolioTags` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `shareInfo` | (`portfolioId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `sharePortfolio` | (`portfolioId`: `string`, `sharePolicy`: [`SharePolicy`](interfaces/SharePolicy.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showPortfolio` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showPortfolioIcon` | (`portfolioId`: `string`, `cacheId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `unDeletePortfolio` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `unsharePortfolio` | (`portfolioId`: `string`, `unsharePolicy`: [`UnsharePolicy`](interfaces/UnsharePolicy.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `updatePortfolio` | (`id`: `string`, `portfolio`: [`Portfolio`](interfaces/Portfolio.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:4541](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4541)

___

### PortfolioApiFactory

▸ **PortfolioApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

PortfolioApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addPortfolioTag` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `AxiosPromise`<[`Tag`](interfaces/Tag.md)[]\> |
| `createPortfolio` | (`portfolio`: [`Portfolio`](interfaces/Portfolio.md), `options?`: `any`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\> |
| `destroyPortfolio` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`RestoreKey`](interfaces/RestoreKey.md)\> |
| `fetchPortfolioItemsWithPortfolio` | (`portfolioId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`PortfolioItemsCollection`](interfaces/PortfolioItemsCollection.md)\> |
| `listPortfolioTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listPortfolios` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`PortfoliosCollection`](interfaces/PortfoliosCollection.md)\> |
| `postCopyPortfolio` | (`portfolioId`: `string`, `options?`: `any`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\> |
| `removePortfolioTags` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `AxiosPromise`<`void`\> |
| `shareInfo` | (`portfolioId`: `string`, `options?`: `any`) => `AxiosPromise`<[`ShareInfo`](interfaces/ShareInfo.md)[]\> |
| `sharePortfolio` | (`portfolioId`: `string`, `sharePolicy`: [`SharePolicy`](interfaces/SharePolicy.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `showPortfolio` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\> |
| `showPortfolioIcon` | (`portfolioId`: `string`, `cacheId?`: `string`, `options?`: `any`) => `AxiosPromise`<`any`\> |
| `unDeletePortfolio` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\> |
| `unsharePortfolio` | (`portfolioId`: `string`, `unsharePolicy`: [`UnsharePolicy`](interfaces/UnsharePolicy.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `updatePortfolio` | (`id`: `string`, `portfolio`: [`Portfolio`](interfaces/Portfolio.md), `options?`: `any`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\> |

#### Defined in

[api.ts:5533](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5533)

___

### PortfolioApiFp

▸ **PortfolioApiFp**(`configuration?`): `Object`

PortfolioApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addPortfolioTag` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Tag`](interfaces/Tag.md)[]\>\> |
| `createPortfolio` | (`portfolio`: [`Portfolio`](interfaces/Portfolio.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\>\> |
| `destroyPortfolio` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RestoreKey`](interfaces/RestoreKey.md)\>\> |
| `fetchPortfolioItemsWithPortfolio` | (`portfolioId`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfolioItemsCollection`](interfaces/PortfolioItemsCollection.md)\>\> |
| `listPortfolioTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listPortfolios` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfoliosCollection`](interfaces/PortfoliosCollection.md)\>\> |
| `postCopyPortfolio` | (`portfolioId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\>\> |
| `removePortfolioTags` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `shareInfo` | (`portfolioId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ShareInfo`](interfaces/ShareInfo.md)[]\>\> |
| `sharePortfolio` | (`portfolioId`: `string`, `sharePolicy`: [`SharePolicy`](interfaces/SharePolicy.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `showPortfolio` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\>\> |
| `showPortfolioIcon` | (`portfolioId`: `string`, `cacheId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`any`\>\> |
| `unDeletePortfolio` | (`id`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\>\> |
| `unsharePortfolio` | (`portfolioId`: `string`, `unsharePolicy`: [`UnsharePolicy`](interfaces/UnsharePolicy.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `updatePortfolio` | (`id`: `string`, `portfolio`: [`Portfolio`](interfaces/Portfolio.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Portfolio`](interfaces/Portfolio.md)\>\> |

#### Defined in

[api.ts:5296](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5296)

___

### PortfolioItemApiAxiosParamCreator

▸ **PortfolioItemApiAxiosParamCreator**(`configuration?`): `Object`

PortfolioItemApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addPortfolioItemTag` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `createPortfolioItem` | (`createPortfolioItem`: [`CreatePortfolioItem`](interfaces/CreatePortfolioItem.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `destroyPortfolioItem` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `getPortfolioItemNextName` | (`portfolioItemId`: `string`, `destinationPortfolioId?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listPortfolioItemTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listPortfolioItems` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listServicePlans` | (`portfolioItemId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `postCopyPortfolioItem` | (`portfolioItemId`: `string`, `copyPortfolioItem?`: [`CopyPortfolioItem`](interfaces/CopyPortfolioItem.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `removePortfolioItemTags` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showPortfolioItem` | (`id`: `string`, `showDiscarded?`: `boolean`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showPortfolioItemIcon` | (`portfolioItemId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `unDeletePortfolioItem` | (`portfolioItemId`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `updatePortfolioItem` | (`id`: `string`, `portfolioItem`: [`PortfolioItem`](interfaces/PortfolioItem.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:5918](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5918)

___

### PortfolioItemApiFactory

▸ **PortfolioItemApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

PortfolioItemApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addPortfolioItemTag` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `AxiosPromise`<[`Tag`](interfaces/Tag.md)[]\> |
| `createPortfolioItem` | (`createPortfolioItem`: [`CreatePortfolioItem`](interfaces/CreatePortfolioItem.md), `options?`: `any`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\> |
| `destroyPortfolioItem` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`RestoreKey`](interfaces/RestoreKey.md)\> |
| `getPortfolioItemNextName` | (`portfolioItemId`: `string`, `destinationPortfolioId?`: `string`, `options?`: `any`) => `AxiosPromise`<[`PortfolioItemNextName`](interfaces/PortfolioItemNextName.md)\> |
| `listPortfolioItemTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |
| `listPortfolioItems` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `AxiosPromise`<[`PortfolioItemsCollection`](interfaces/PortfolioItemsCollection.md)\> |
| `listServicePlans` | (`portfolioItemId`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)[]\> |
| `postCopyPortfolioItem` | (`portfolioItemId`: `string`, `copyPortfolioItem?`: [`CopyPortfolioItem`](interfaces/CopyPortfolioItem.md), `options?`: `any`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\> |
| `removePortfolioItemTags` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `AxiosPromise`<`void`\> |
| `showPortfolioItem` | (`id`: `string`, `showDiscarded?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\> |
| `showPortfolioItemIcon` | (`portfolioItemId`: `string`, `options?`: `any`) => `AxiosPromise`<`any`\> |
| `unDeletePortfolioItem` | (`portfolioItemId`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\> |
| `updatePortfolioItem` | (`id`: `string`, `portfolioItem`: [`PortfolioItem`](interfaces/PortfolioItem.md), `options?`: `any`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\> |

#### Defined in

[api.ts:6766](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6766)

___

### PortfolioItemApiFp

▸ **PortfolioItemApiFp**(`configuration?`): `Object`

PortfolioItemApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addPortfolioItemTag` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Tag`](interfaces/Tag.md)[]\>\> |
| `createPortfolioItem` | (`createPortfolioItem`: [`CreatePortfolioItem`](interfaces/CreatePortfolioItem.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\>\> |
| `destroyPortfolioItem` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RestoreKey`](interfaces/RestoreKey.md)\>\> |
| `getPortfolioItemNextName` | (`portfolioItemId`: `string`, `destinationPortfolioId?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfolioItemNextName`](interfaces/PortfolioItemNextName.md)\>\> |
| `listPortfolioItemTags` | (`id`: `string`, `limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |
| `listPortfolioItems` | (`limit?`: `number`, `offset?`: `number`, `filter?`: `object`, `sortBy?`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfolioItemsCollection`](interfaces/PortfolioItemsCollection.md)\>\> |
| `listServicePlans` | (`portfolioItemId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)[]\>\> |
| `postCopyPortfolioItem` | (`portfolioItemId`: `string`, `copyPortfolioItem?`: [`CopyPortfolioItem`](interfaces/CopyPortfolioItem.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\>\> |
| `removePortfolioItemTags` | (`id`: `string`, `tag`: [`Tag`](interfaces/Tag.md)[], `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `showPortfolioItem` | (`id`: `string`, `showDiscarded?`: `boolean`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\>\> |
| `showPortfolioItemIcon` | (`portfolioItemId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`any`\>\> |
| `unDeletePortfolioItem` | (`portfolioItemId`: `string`, `restoreKey`: [`RestoreKey`](interfaces/RestoreKey.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\>\> |
| `updatePortfolioItem` | (`id`: `string`, `portfolioItem`: [`PortfolioItem`](interfaces/PortfolioItem.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`PortfolioItem`](interfaces/PortfolioItem.md)\>\> |

#### Defined in

[api.ts:6561](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6561)

___

### ServicePlansApiAxiosParamCreator

▸ **ServicePlansApiAxiosParamCreator**(`configuration?`): `Object`

ServicePlansApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createServicePlan` | (`importServicePlan?`: [`ImportServicePlan`](interfaces/ImportServicePlan.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `patchServicePlanModified` | (`id`: `string`, `patchModifiedServicePlan?`: [`PatchModifiedServicePlan`](interfaces/PatchModifiedServicePlan.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `resetServicePlanModified` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServicePlan` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServicePlanBase` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showServicePlanModified` | (`id`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:7099](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7099)

___

### ServicePlansApiFactory

▸ **ServicePlansApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ServicePlansApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createServicePlan` | (`importServicePlan?`: [`ImportServicePlan`](interfaces/ImportServicePlan.md), `options?`: `any`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)[]\> |
| `patchServicePlanModified` | (`id`: `string`, `patchModifiedServicePlan?`: [`PatchModifiedServicePlan`](interfaces/PatchModifiedServicePlan.md), `options?`: `any`) => `AxiosPromise`<`object`\> |
| `resetServicePlanModified` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)[]\> |
| `showServicePlan` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)\> |
| `showServicePlanBase` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)\> |
| `showServicePlanModified` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)\> |

#### Defined in

[api.ts:7458](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7458)

___

### ServicePlansApiFp

▸ **ServicePlansApiFp**(`configuration?`): `Object`

ServicePlansApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createServicePlan` | (`importServicePlan?`: [`ImportServicePlan`](interfaces/ImportServicePlan.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)[]\>\> |
| `patchServicePlanModified` | (`id`: `string`, `patchModifiedServicePlan?`: [`PatchModifiedServicePlan`](interfaces/PatchModifiedServicePlan.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`object`\>\> |
| `resetServicePlanModified` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)[]\>\> |
| `showServicePlan` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)\>\> |
| `showServicePlanBase` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)\>\> |
| `showServicePlanModified` | (`id`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ServicePlan`](interfaces/ServicePlan.md)\>\> |

#### Defined in

[api.ts:7364](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7364)

___

### SettingsApiAxiosParamCreator

▸ **SettingsApiAxiosParamCreator**(`configuration?`): `Object`

SettingsApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createSetting` | (`setting`: [`Setting`](interfaces/Setting.md), `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `destroySetting` | (`name`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `listSettings` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showSetting` | (`name`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `updateSetting` | (`name`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:7611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7611)

___

### SettingsApiFactory

▸ **SettingsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

SettingsApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createSetting` | (`setting`: [`Setting`](interfaces/Setting.md), `options?`: `any`) => `AxiosPromise`<`void`\> |
| `destroySetting` | (`name`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `listSettings` | (`options?`: `any`) => `AxiosPromise`<[`TenantSettings`](interfaces/TenantSettings.md)\> |
| `showSetting` | (`name`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |
| `updateSetting` | (`name`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:7905](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7905)

___

### SettingsApiFp

▸ **SettingsApiFp**(`configuration?`): `Object`

SettingsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createSetting` | (`setting`: [`Setting`](interfaces/Setting.md), `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `destroySetting` | (`name`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `listSettings` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TenantSettings`](interfaces/TenantSettings.md)\>\> |
| `showSetting` | (`name`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |
| `updateSetting` | (`name`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:7827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7827)

___

### TagsApiAxiosParamCreator

▸ **TagsApiAxiosParamCreator**(`configuration?`): `Object`

TagsApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTags` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:8032](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8032)

___

### TagsApiFactory

▸ **TagsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

TagsApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTags` | (`options?`: `any`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\> |

#### Defined in

[api.ts:8099](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8099)

___

### TagsApiFp

▸ **TagsApiFp**(`configuration?`): `Object`

TagsApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTags` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TagsCollection`](interfaces/TagsCollection.md)\>\> |

#### Defined in

[api.ts:8077](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8077)

___

### TenantApiAxiosParamCreator

▸ **TenantApiAxiosParamCreator**(`configuration?`): `Object`

TenantApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTenants` | (`options?`: `any`) => `Promise`<`RequestArgs`\> |
| `showTenant` | (`tenantId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |
| `tenantSeed` | (`tenantId`: `string`, `options?`: `any`) => `Promise`<`RequestArgs`\> |

#### Defined in

[api.ts:8138](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8138)

___

### TenantApiFactory

▸ **TenantApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

TenantApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTenants` | (`options?`: `any`) => `AxiosPromise`<[`TenantsCollection`](interfaces/TenantsCollection.md)\> |
| `showTenant` | (`tenantId`: `string`, `options?`: `any`) => `AxiosPromise`<[`Tenant`](interfaces/Tenant.md)\> |
| `tenantSeed` | (`tenantId`: `string`, `options?`: `any`) => `AxiosPromise`<`void`\> |

#### Defined in

[api.ts:8317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8317)

___

### TenantApiFp

▸ **TenantApiFp**(`configuration?`): `Object`

TenantApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `listTenants` | (`options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TenantsCollection`](interfaces/TenantsCollection.md)\>\> |
| `showTenant` | (`tenantId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Tenant`](interfaces/Tenant.md)\>\> |
| `tenantSeed` | (`tenantId`: `string`, `options?`: `any`) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`void`\>\> |

#### Defined in

[api.ts:8267](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8267)
