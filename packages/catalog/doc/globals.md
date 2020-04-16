[@redhat-cloud-services/catalog-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/catalog-client

## Index

### Enumerations

* [ApprovalRequestStateEnum](enums/approvalrequeststateenum.md)
* [OrderItemStateEnum](enums/orderitemstateenum.md)
* [OrderStateEnum](enums/orderstateenum.md)
* [ProgressMessageLevelEnum](enums/progressmessagelevelenum.md)
* [ShareInfoPermissionsEnum](enums/shareinfopermissionsenum.md)
* [SharePolicyPermissionsEnum](enums/sharepolicypermissionsenum.md)
* [UnsharePolicyPermissionsEnum](enums/unsharepolicypermissionsenum.md)

### Classes

* [BaseAPI](classes/baseapi.md)
* [Configuration](classes/configuration.md)
* [DefaultApi](classes/defaultapi.md)
* [IconApi](classes/iconapi.md)
* [OrderApi](classes/orderapi.md)
* [OrderItemApi](classes/orderitemapi.md)
* [PortfolioApi](classes/portfolioapi.md)
* [PortfolioItemApi](classes/portfolioitemapi.md)
* [RequiredError](classes/requirederror.md)
* [ServicePlansApi](classes/serviceplansapi.md)
* [SettingsApi](classes/settingsapi.md)
* [TagsApi](classes/tagsapi.md)
* [TenantApi](classes/tenantapi.md)

### Interfaces

* [ApprovalRequest](interfaces/approvalrequest.md)
* [ApprovalRequestsCollection](interfaces/approvalrequestscollection.md)
* [CollectionLinks](interfaces/collectionlinks.md)
* [CollectionMetadata](interfaces/collectionmetadata.md)
* [ConfigurationParameters](interfaces/configurationparameters.md)
* [CopyPortfolioItem](interfaces/copyportfolioitem.md)
* [CreateIcon](interfaces/createicon.md)
* [CreatePortfolioItem](interfaces/createportfolioitem.md)
* [GraphQLRequest](interfaces/graphqlrequest.md)
* [GraphQLResponse](interfaces/graphqlresponse.md)
* [Icon](interfaces/icon.md)
* [ImportServicePlan](interfaces/importserviceplan.md)
* [Order](interfaces/order.md)
* [OrderItem](interfaces/orderitem.md)
* [OrderItemsCollection](interfaces/orderitemscollection.md)
* [OrdersCollection](interfaces/orderscollection.md)
* [PatchModifiedServicePlan](interfaces/patchmodifiedserviceplan.md)
* [Portfolio](interfaces/portfolio.md)
* [PortfolioItem](interfaces/portfolioitem.md)
* [PortfolioItemNextName](interfaces/portfolioitemnextname.md)
* [PortfolioItemsCollection](interfaces/portfolioitemscollection.md)
* [PortfoliosCollection](interfaces/portfolioscollection.md)
* [ProgressMessage](interfaces/progressmessage.md)
* [ProgressMessagesCollection](interfaces/progressmessagescollection.md)
* [RequestArgs](interfaces/requestargs.md)
* [RestoreKey](interfaces/restorekey.md)
* [ServicePlan](interfaces/serviceplan.md)
* [Setting](interfaces/setting.md)
* [ShareInfo](interfaces/shareinfo.md)
* [SharePolicy](interfaces/sharepolicy.md)
* [Tag](interfaces/tag.md)
* [TagsCollection](interfaces/tagscollection.md)
* [Tenant](interfaces/tenant.md)
* [TenantSettings](interfaces/tenantsettings.md)
* [TenantsCollection](interfaces/tenantscollection.md)
* [UnsharePolicy](interfaces/unsharepolicy.md)

### Variables

* [BASE_PATH](globals.md#const-base_path)

### Functions

* [DefaultApiAxiosParamCreator](globals.md#const-defaultapiaxiosparamcreator)
* [DefaultApiFactory](globals.md#const-defaultapifactory)
* [DefaultApiFp](globals.md#const-defaultapifp)
* [IconApiAxiosParamCreator](globals.md#const-iconapiaxiosparamcreator)
* [IconApiFactory](globals.md#const-iconapifactory)
* [IconApiFp](globals.md#const-iconapifp)
* [OrderApiAxiosParamCreator](globals.md#const-orderapiaxiosparamcreator)
* [OrderApiFactory](globals.md#const-orderapifactory)
* [OrderApiFp](globals.md#const-orderapifp)
* [OrderItemApiAxiosParamCreator](globals.md#const-orderitemapiaxiosparamcreator)
* [OrderItemApiFactory](globals.md#const-orderitemapifactory)
* [OrderItemApiFp](globals.md#const-orderitemapifp)
* [PortfolioApiAxiosParamCreator](globals.md#const-portfolioapiaxiosparamcreator)
* [PortfolioApiFactory](globals.md#const-portfolioapifactory)
* [PortfolioApiFp](globals.md#const-portfolioapifp)
* [PortfolioItemApiAxiosParamCreator](globals.md#const-portfolioitemapiaxiosparamcreator)
* [PortfolioItemApiFactory](globals.md#const-portfolioitemapifactory)
* [PortfolioItemApiFp](globals.md#const-portfolioitemapifp)
* [ServicePlansApiAxiosParamCreator](globals.md#const-serviceplansapiaxiosparamcreator)
* [ServicePlansApiFactory](globals.md#const-serviceplansapifactory)
* [ServicePlansApiFp](globals.md#const-serviceplansapifp)
* [SettingsApiAxiosParamCreator](globals.md#const-settingsapiaxiosparamcreator)
* [SettingsApiFactory](globals.md#const-settingsapifactory)
* [SettingsApiFp](globals.md#const-settingsapifp)
* [TagsApiAxiosParamCreator](globals.md#const-tagsapiaxiosparamcreator)
* [TagsApiFactory](globals.md#const-tagsapifactory)
* [TagsApiFp](globals.md#const-tagsapifp)
* [TenantApiAxiosParamCreator](globals.md#const-tenantapiaxiosparamcreator)
* [TenantApiFactory](globals.md#const-tenantapifactory)
* [TenantApiFp](globals.md#const-tenantapifp)

### Object literals

* [COLLECTION_FORMATS](globals.md#const-collection_formats)

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* = "https://cloud.redhat.com//api/catalog/v1.0".replace(/\/+$/, "")

Defined in packages/catalog/base.ts:20

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:1116](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1116)*

DefaultApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getDocumentation**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` DefaultApiFactory

▸ **DefaultApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:1242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1242)*

DefaultApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **getDocumentation**(`options?`: any): *AxiosPromise‹object›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options?`: any): *AxiosPromise‹[GraphQLResponse](interfaces/graphqlresponse.md)›*

___

### `Const` DefaultApiFp

▸ **DefaultApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:1206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1206)*

DefaultApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **getDocumentation**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹object›*

* **postGraphQL**(`graphQLRequest`: [GraphQLRequest](interfaces/graphqlrequest.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[GraphQLResponse](interfaces/graphqlresponse.md)›*

___

### `Const` IconApiAxiosParamCreator

▸ **IconApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:1303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1303)*

IconApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createIcon**(`content?`: any, `portfolioId?`: string, `portfolioItemId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroyIcon**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getIcon**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showIconData**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateIcon**(`id`: string, `icon`: [Icon](interfaces/icon.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` IconApiFactory

▸ **IconApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:1626](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1626)*

IconApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createIcon**(`content?`: any, `portfolioId?`: string, `portfolioItemId?`: string, `options?`: any): *AxiosPromise‹[Icon](interfaces/icon.md)›*

* **destroyIcon**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **getIcon**(`id`: string, `options?`: any): *AxiosPromise‹[Icon](interfaces/icon.md)›*

* **showIconData**(`id`: string, `options?`: any): *AxiosPromise‹any›*

* **updateIcon**(`id`: string, `icon`: [Icon](interfaces/icon.md), `options?`: any): *AxiosPromise‹[Icon](interfaces/icon.md)›*

___

### `Const` IconApiFp

▸ **IconApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:1544](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1544)*

IconApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createIcon**(`content?`: any, `portfolioId?`: string, `portfolioItemId?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Icon](interfaces/icon.md)›*

* **destroyIcon**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **getIcon**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Icon](interfaces/icon.md)›*

* **showIconData**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹any›*

* **updateIcon**(`id`: string, `icon`: [Icon](interfaces/icon.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Icon](interfaces/icon.md)›*

___

### `Const` OrderApiAxiosParamCreator

▸ **OrderApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:1761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1761)*

OrderApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addToOrder**(`orderId`: string, `orderItem`: [OrderItem](interfaces/orderitem.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **cancelOrder**(`orderId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createOrder**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroyOrder**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrders**(`limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **restoreOrder**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showOrder**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showOrderItemFromOrder**(`orderId`: string, `id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **submitOrder**(`orderId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` OrderApiFactory

▸ **OrderApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:2388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2388)*

OrderApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **addToOrder**(`orderId`: string, `orderItem`: [OrderItem](interfaces/orderitem.md), `options?`: any): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **cancelOrder**(`orderId`: string, `options?`: any): *AxiosPromise‹[Order](interfaces/order.md)›*

* **createOrder**(`options?`: any): *AxiosPromise‹[Order](interfaces/order.md)›*

* **destroyOrder**(`id`: string, `options?`: any): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[OrderItemsCollection](interfaces/orderitemscollection.md)›*

* **listOrders**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[OrdersCollection](interfaces/orderscollection.md)›*

* **restoreOrder**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[Order](interfaces/order.md)›*

* **showOrder**(`id`: string, `options?`: any): *AxiosPromise‹[Order](interfaces/order.md)›*

* **showOrderItemFromOrder**(`orderId`: string, `id`: string, `options?`: any): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **submitOrder**(`orderId`: string, `options?`: any): *AxiosPromise‹[Order](interfaces/order.md)›*

___

### `Const` OrderApiFp

▸ **OrderApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:2232](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2232)*

OrderApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addToOrder**(`orderId`: string, `orderItem`: [OrderItem](interfaces/orderitem.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **cancelOrder**(`orderId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Order](interfaces/order.md)›*

* **createOrder**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Order](interfaces/order.md)›*

* **destroyOrder**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItemsCollection](interfaces/orderitemscollection.md)›*

* **listOrders**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrdersCollection](interfaces/orderscollection.md)›*

* **restoreOrder**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Order](interfaces/order.md)›*

* **showOrder**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Order](interfaces/order.md)›*

* **showOrderItemFromOrder**(`orderId`: string, `id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **submitOrder**(`orderId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Order](interfaces/order.md)›*

___

### `Const` OrderItemApiAxiosParamCreator

▸ **OrderItemApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:2641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2641)*

OrderItemApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **destroyOrderItem**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listApprovalRequests**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrderItems**(`limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listProgressMessages**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **restoreOrderItem**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showOrderItem**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` OrderItemApiFactory

▸ **OrderItemApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:3052](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3052)*

OrderItemApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **destroyOrderItem**(`id`: string, `options?`: any): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **listApprovalRequests**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[ApprovalRequestsCollection](interfaces/approvalrequestscollection.md)›*

* **listOrderItems**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[OrderItemsCollection](interfaces/orderitemscollection.md)›*

* **listProgressMessages**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[ProgressMessagesCollection](interfaces/progressmessagescollection.md)›*

* **restoreOrderItem**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **showOrderItem**(`id`: string, `options?`: any): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

___

### `Const` OrderItemApiFp

▸ **OrderItemApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:2950](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2950)*

OrderItemApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **destroyOrderItem**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **listApprovalRequests**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ApprovalRequestsCollection](interfaces/approvalrequestscollection.md)›*

* **listOrderItems**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItemsCollection](interfaces/orderitemscollection.md)›*

* **listProgressMessages**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ProgressMessagesCollection](interfaces/progressmessagescollection.md)›*

* **restoreOrderItem**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **showOrderItem**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

___

### `Const` PortfolioApiAxiosParamCreator

▸ **PortfolioApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:3221](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3221)*

PortfolioApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addPortfolioTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createPortfolio**(`portfolio`: [Portfolio](interfaces/portfolio.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroyPortfolio**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **fetchPortfolioItemsWithPortfolio**(`portfolioId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPortfolioTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPortfolios**(`limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **postCopyPortfolio**(`portfolioId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **removePortfolioTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **shareInfo**(`portfolioId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **sharePortfolio**(`portfolioId`: string, `sharePolicy`: [SharePolicy](interfaces/sharepolicy.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showPortfolio**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showPortfolioIcon**(`portfolioId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unDeletePortfolio**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unsharePortfolio**(`portfolioId`: string, `unsharePolicy`: [UnsharePolicy](interfaces/unsharepolicy.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updatePortfolio**(`id`: string, `portfolio`: [Portfolio](interfaces/portfolio.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` PortfolioApiFactory

▸ **PortfolioApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:4189](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4189)*

PortfolioApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **addPortfolioTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *AxiosPromise‹Array‹[Tag](interfaces/tag.md)››*

* **createPortfolio**(`portfolio`: [Portfolio](interfaces/portfolio.md), `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **destroyPortfolio**(`id`: string, `options?`: any): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **fetchPortfolioItemsWithPortfolio**(`portfolioId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[PortfolioItemsCollection](interfaces/portfolioitemscollection.md)›*

* **listPortfolioTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listPortfolios**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[PortfoliosCollection](interfaces/portfolioscollection.md)›*

* **postCopyPortfolio**(`portfolioId`: string, `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **removePortfolioTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *AxiosPromise‹void›*

* **shareInfo**(`portfolioId`: string, `options?`: any): *AxiosPromise‹Array‹[ShareInfo](interfaces/shareinfo.md)››*

* **sharePortfolio**(`portfolioId`: string, `sharePolicy`: [SharePolicy](interfaces/sharepolicy.md), `options?`: any): *AxiosPromise‹void›*

* **showPortfolio**(`id`: string, `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **showPortfolioIcon**(`portfolioId`: string, `options?`: any): *AxiosPromise‹any›*

* **unDeletePortfolio**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **unsharePortfolio**(`portfolioId`: string, `unsharePolicy`: [UnsharePolicy](interfaces/unsharepolicy.md), `options?`: any): *AxiosPromise‹void›*

* **updatePortfolio**(`id`: string, `portfolio`: [Portfolio](interfaces/portfolio.md), `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

___

### `Const` PortfolioApiFp

▸ **PortfolioApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:3956](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3956)*

PortfolioApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addPortfolioTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[Tag](interfaces/tag.md)››*

* **createPortfolio**(`portfolio`: [Portfolio](interfaces/portfolio.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **destroyPortfolio**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **fetchPortfolioItemsWithPortfolio**(`portfolioId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItemsCollection](interfaces/portfolioitemscollection.md)›*

* **listPortfolioTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listPortfolios**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfoliosCollection](interfaces/portfolioscollection.md)›*

* **postCopyPortfolio**(`portfolioId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **removePortfolioTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **shareInfo**(`portfolioId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[ShareInfo](interfaces/shareinfo.md)››*

* **sharePortfolio**(`portfolioId`: string, `sharePolicy`: [SharePolicy](interfaces/sharepolicy.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **showPortfolio**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **showPortfolioIcon**(`portfolioId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹any›*

* **unDeletePortfolio**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **unsharePortfolio**(`portfolioId`: string, `unsharePolicy`: [UnsharePolicy](interfaces/unsharepolicy.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **updatePortfolio**(`id`: string, `portfolio`: [Portfolio](interfaces/portfolio.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

___

### `Const` PortfolioItemApiAxiosParamCreator

▸ **PortfolioItemApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:4566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4566)*

PortfolioItemApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addPortfolioItemTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createPortfolioItem**(`createPortfolioItem`: [CreatePortfolioItem](interfaces/createportfolioitem.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroyPortfolioItem**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **getPortfolioItemNextName**(`portfolioItemId`: string, `destinationPortfolioId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPortfolioItemTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPortfolioItems**(`limit?`: number, `offset?`: number, `filter?`: object, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listProviderControlParameters**(`portfolioItemId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServicePlans**(`portfolioItemId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **postCopyPortfolioItem**(`portfolioItemId`: string, `copyPortfolioItem?`: [CopyPortfolioItem](interfaces/copyportfolioitem.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **removePortfolioItemTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showPortfolioItem**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showPortfolioItemIcon**(`portfolioItemId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unDeletePortfolioItem**(`portfolioItemId`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updatePortfolioItem**(`id`: string, `portfolioItem`: [PortfolioItem](interfaces/portfolioitem.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` PortfolioItemApiFactory

▸ **PortfolioItemApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:5452](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5452)*

PortfolioItemApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **addPortfolioItemTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *AxiosPromise‹Array‹[Tag](interfaces/tag.md)››*

* **createPortfolioItem**(`createPortfolioItem`: [CreatePortfolioItem](interfaces/createportfolioitem.md), `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **destroyPortfolioItem**(`id`: string, `options?`: any): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **getPortfolioItemNextName**(`portfolioItemId`: string, `destinationPortfolioId?`: string, `options?`: any): *AxiosPromise‹[PortfolioItemNextName](interfaces/portfolioitemnextname.md)›*

* **listPortfolioItemTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listPortfolioItems**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[PortfolioItemsCollection](interfaces/portfolioitemscollection.md)›*

* **listProviderControlParameters**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹object›*

* **listServicePlans**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹Array‹[ServicePlan](interfaces/serviceplan.md)››*

* **postCopyPortfolioItem**(`portfolioItemId`: string, `copyPortfolioItem?`: [CopyPortfolioItem](interfaces/copyportfolioitem.md), `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **removePortfolioItemTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *AxiosPromise‹void›*

* **showPortfolioItem**(`id`: string, `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **showPortfolioItemIcon**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹any›*

* **unDeletePortfolioItem**(`portfolioItemId`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **updatePortfolioItem**(`id`: string, `portfolioItem`: [PortfolioItem](interfaces/portfolioitem.md), `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

___

### `Const` PortfolioItemApiFp

▸ **PortfolioItemApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:5236](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5236)*

PortfolioItemApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addPortfolioItemTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[Tag](interfaces/tag.md)››*

* **createPortfolioItem**(`createPortfolioItem`: [CreatePortfolioItem](interfaces/createportfolioitem.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **destroyPortfolioItem**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **getPortfolioItemNextName**(`portfolioItemId`: string, `destinationPortfolioId?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItemNextName](interfaces/portfolioitemnextname.md)›*

* **listPortfolioItemTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listPortfolioItems**(`limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItemsCollection](interfaces/portfolioitemscollection.md)›*

* **listProviderControlParameters**(`portfolioItemId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹object›*

* **listServicePlans**(`portfolioItemId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[ServicePlan](interfaces/serviceplan.md)››*

* **postCopyPortfolioItem**(`portfolioItemId`: string, `copyPortfolioItem?`: [CopyPortfolioItem](interfaces/copyportfolioitem.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **removePortfolioItemTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **showPortfolioItem**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **showPortfolioItemIcon**(`portfolioItemId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹any›*

* **unDeletePortfolioItem**(`portfolioItemId`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **updatePortfolioItem**(`id`: string, `portfolioItem`: [PortfolioItem](interfaces/portfolioitem.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

___

### `Const` ServicePlansApiAxiosParamCreator

▸ **ServicePlansApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:5801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5801)*

ServicePlansApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createServicePlan**(`importServicePlan?`: [ImportServicePlan](interfaces/importserviceplan.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **patchServicePlanModified**(`id`: string, `patchModifiedServicePlan?`: [PatchModifiedServicePlan](interfaces/patchmodifiedserviceplan.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **resetServicePlanModified**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServicePlan**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServicePlanBase**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showServicePlanModified**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` ServicePlansApiFactory

▸ **ServicePlansApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:6160](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6160)*

ServicePlansApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createServicePlan**(`importServicePlan?`: [ImportServicePlan](interfaces/importserviceplan.md), `options?`: any): *AxiosPromise‹Array‹[ServicePlan](interfaces/serviceplan.md)››*

* **patchServicePlanModified**(`id`: string, `patchModifiedServicePlan?`: [PatchModifiedServicePlan](interfaces/patchmodifiedserviceplan.md), `options?`: any): *AxiosPromise‹object›*

* **resetServicePlanModified**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **showServicePlan**(`id`: string, `options?`: any): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showServicePlanBase**(`id`: string, `options?`: any): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showServicePlanModified**(`id`: string, `options?`: any): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

___

### `Const` ServicePlansApiFp

▸ **ServicePlansApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:6066](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6066)*

ServicePlansApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createServicePlan**(`importServicePlan?`: [ImportServicePlan](interfaces/importserviceplan.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[ServicePlan](interfaces/serviceplan.md)››*

* **patchServicePlanModified**(`id`: string, `patchModifiedServicePlan?`: [PatchModifiedServicePlan](interfaces/patchmodifiedserviceplan.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹object›*

* **resetServicePlanModified**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **showServicePlan**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showServicePlanBase**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showServicePlanModified**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

___

### `Const` SettingsApiAxiosParamCreator

▸ **SettingsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:6313](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6313)*

SettingsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createSetting**(`setting`: [Setting](interfaces/setting.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroySetting**(`name`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listSettings**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showSetting**(`name`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateSetting**(`name`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` SettingsApiFactory

▸ **SettingsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:6607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6607)*

SettingsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **createSetting**(`setting`: [Setting](interfaces/setting.md), `options?`: any): *AxiosPromise‹void›*

* **destroySetting**(`name`: string, `options?`: any): *AxiosPromise‹void›*

* **listSettings**(`options?`: any): *AxiosPromise‹[TenantSettings](interfaces/tenantsettings.md)›*

* **showSetting**(`name`: string, `options?`: any): *AxiosPromise‹void›*

* **updateSetting**(`name`: string, `options?`: any): *AxiosPromise‹void›*

___

### `Const` SettingsApiFp

▸ **SettingsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:6529](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6529)*

SettingsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createSetting**(`setting`: [Setting](interfaces/setting.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **destroySetting**(`name`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **listSettings**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TenantSettings](interfaces/tenantsettings.md)›*

* **showSetting**(`name`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **updateSetting**(`name`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

___

### `Const` TagsApiAxiosParamCreator

▸ **TagsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:6734](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6734)*

TagsApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listTags**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` TagsApiFactory

▸ **TagsApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:6801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6801)*

TagsApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **listTags**(`options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

___

### `Const` TagsApiFp

▸ **TagsApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:6779](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6779)*

TagsApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listTags**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

___

### `Const` TenantApiAxiosParamCreator

▸ **TenantApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:6840](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6840)*

TenantApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listTenants**(`options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showTenant**(`tenantId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **tenantSeed**(`tenantId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` TenantApiFactory

▸ **TenantApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:7019](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7019)*

TenantApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **listTenants**(`options?`: any): *AxiosPromise‹[TenantsCollection](interfaces/tenantscollection.md)›*

* **showTenant**(`tenantId`: string, `options?`: any): *AxiosPromise‹[Tenant](interfaces/tenant.md)›*

* **tenantSeed**(`tenantId`: string, `options?`: any): *AxiosPromise‹void›*

___

### `Const` TenantApiFp

▸ **TenantApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:6969](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6969)*

TenantApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **listTenants**(`options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TenantsCollection](interfaces/tenantscollection.md)›*

* **showTenant**(`tenantId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[Tenant](interfaces/tenant.md)›*

* **tenantSeed**(`tenantId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

Defined in packages/catalog/base.ts:26

**`export`** 

###  csv

• **csv**: *string* = ","

Defined in packages/catalog/base.ts:27

###  pipes

• **pipes**: *string* = "|"

Defined in packages/catalog/base.ts:30

###  ssv

• **ssv**: *string* = " "

Defined in packages/catalog/base.ts:28

###  tsv

• **tsv**: *string* = "	"

Defined in packages/catalog/base.ts:29
