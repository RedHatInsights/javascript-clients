[@redhat-cloud-services/catalog-client](README.md) › [Globals](globals.md)

# @redhat-cloud-services/catalog-client

## Index

### Enumerations

* [ApprovalRequestStateEnum](enums/approvalrequeststateenum.md)
* [OrderItemStateEnum](enums/orderitemstateenum.md)
* [OrderProcessAssociationsToRemoveAssociationsToRemoveEnum](enums/orderprocessassociationstoremoveassociationstoremoveenum.md)
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
* [OrderProcessApi](classes/orderprocessapi.md)
* [PortfolioApi](classes/portfolioapi.md)
* [PortfolioItemApi](classes/portfolioitemapi.md)
* [RequiredError](classes/requirederror.md)
* [ServicePlansApi](classes/serviceplansapi.md)
* [SettingsApi](classes/settingsapi.md)
* [TagsApi](classes/tagsapi.md)
* [TenantApi](classes/tenantapi.md)

### Interfaces

* [ApiError](interfaces/apierror.md)
* [ApiErrorCollection](interfaces/apierrorcollection.md)
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
* [OrderProcess](interfaces/orderprocess.md)
* [OrderProcessAssociationsToRemove](interfaces/orderprocessassociationstoremove.md)
* [OrderProcessCollection](interfaces/orderprocesscollection.md)
* [OrderProcessPortfolioItemId](interfaces/orderprocessportfolioitemid.md)
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
* [ResourceObject](interfaces/resourceobject.md)
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
* [OrderProcessApiAxiosParamCreator](globals.md#const-orderprocessapiaxiosparamcreator)
* [OrderProcessApiFactory](globals.md#const-orderprocessapifactory)
* [OrderProcessApiFp](globals.md#const-orderprocessapifp)
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

• **BASE_PATH**: *string* = "https://cloud.redhat.com//api/catalog/v1.2".replace(/\/+$/, "")

*Defined in [packages/catalog/base.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L20)*

## Functions

### `Const` DefaultApiAxiosParamCreator

▸ **DefaultApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:1321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1321)*

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

*Defined in [packages/catalog/api.ts:1447](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1447)*

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

*Defined in [packages/catalog/api.ts:1411](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1411)*

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

*Defined in [packages/catalog/api.ts:1508](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1508)*

IconApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **createIcon**(`content?`: any, `portfolioId?`: string, `portfolioItemId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroyIcon**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` IconApiFactory

▸ **IconApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:1653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1653)*

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

___

### `Const` IconApiFp

▸ **IconApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:1614](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1614)*

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

___

### `Const` OrderApiAxiosParamCreator

▸ **OrderApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:1720](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L1720)*

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

* **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrders**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **restoreOrder**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showOrder**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showOrderItemFromOrder**(`orderId`: string, `id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **submitOrder**(`orderId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` OrderApiFactory

▸ **OrderApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:2359](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2359)*

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

* **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[OrderItemsCollection](interfaces/orderitemscollection.md)›*

* **listOrders**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[OrdersCollection](interfaces/orderscollection.md)›*

* **restoreOrder**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[Order](interfaces/order.md)›*

* **showOrder**(`id`: string, `options?`: any): *AxiosPromise‹[Order](interfaces/order.md)›*

* **showOrderItemFromOrder**(`orderId`: string, `id`: string, `options?`: any): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **submitOrder**(`orderId`: string, `options?`: any): *AxiosPromise‹[Order](interfaces/order.md)›*

___

### `Const` OrderApiFp

▸ **OrderApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:2201](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2201)*

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

* **listOrderItemsFromOrder**(`orderId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItemsCollection](interfaces/orderitemscollection.md)›*

* **listOrders**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

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

*Defined in [packages/catalog/api.ts:2616](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2616)*

OrderItemApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **destroyOrderItem**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listApprovalRequests**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrderItems**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listProgressMessages**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **restoreOrderItem**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showOrderItem**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` OrderItemApiFactory

▸ **OrderItemApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:3045](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3045)*

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

* **listApprovalRequests**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[ApprovalRequestsCollection](interfaces/approvalrequestscollection.md)›*

* **listOrderItems**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[OrderItemsCollection](interfaces/orderitemscollection.md)›*

* **listProgressMessages**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[ProgressMessagesCollection](interfaces/progressmessagescollection.md)›*

* **restoreOrderItem**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **showOrderItem**(`id`: string, `options?`: any): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

___

### `Const` OrderItemApiFp

▸ **OrderItemApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:2940](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L2940)*

OrderItemApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **destroyOrderItem**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[RestoreKey](interfaces/restorekey.md)›*

* **listApprovalRequests**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ApprovalRequestsCollection](interfaces/approvalrequestscollection.md)›*

* **listOrderItems**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItemsCollection](interfaces/orderitemscollection.md)›*

* **listProgressMessages**(`orderItemId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ProgressMessagesCollection](interfaces/progressmessagescollection.md)›*

* **restoreOrderItem**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

* **showOrderItem**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderItem](interfaces/orderitem.md)›*

___

### `Const` OrderProcessApiAxiosParamCreator

▸ **OrderProcessApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:3220](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3220)*

OrderProcessApi - axios parameter creator

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addOrderProcessAfterItem**(`id`: string, `orderProcessPortfolioItemId`: [OrderProcessPortfolioItemId](interfaces/orderprocessportfolioitemid.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **addOrderProcessBeforeItem**(`id`: string, `orderProcessPortfolioItemId`: [OrderProcessPortfolioItemId](interfaces/orderprocessportfolioitemid.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **addOrderProcessTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **createOrderProcess**(`orderProcess`: [OrderProcess](interfaces/orderprocess.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **destroyOrderProcess**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **linkTagToOrderProcess**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrderProcessTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listOrderProcesses**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **removeOrderProcessAssociation**(`id`: string, `orderProcessAssociationsToRemove`: [OrderProcessAssociationsToRemove](interfaces/orderprocessassociationstoremove.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **removeOrderProcessTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showOrderProcess**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unlinkTagFromOrderProcess**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updateOrderProcess**(`id`: string, `orderProcess`: [OrderProcess](interfaces/orderprocess.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` OrderProcessApiFactory

▸ **OrderProcessApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:4108](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4108)*

OrderProcessApi - factory interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |
`basePath?` | string |
`axios?` | AxiosInstance |

**Returns:** *object*

* **addOrderProcessAfterItem**(`id`: string, `orderProcessPortfolioItemId`: [OrderProcessPortfolioItemId](interfaces/orderprocessportfolioitemid.md), `options?`: any): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **addOrderProcessBeforeItem**(`id`: string, `orderProcessPortfolioItemId`: [OrderProcessPortfolioItemId](interfaces/orderprocessportfolioitemid.md), `options?`: any): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **addOrderProcessTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *AxiosPromise‹Array‹[Tag](interfaces/tag.md)››*

* **createOrderProcess**(`orderProcess`: [OrderProcess](interfaces/orderprocess.md), `options?`: any): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **destroyOrderProcess**(`id`: string, `options?`: any): *AxiosPromise‹void›*

* **linkTagToOrderProcess**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹void›*

* **listOrderProcessTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listOrderProcesses**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[OrderProcessCollection](interfaces/orderprocesscollection.md)›*

* **removeOrderProcessAssociation**(`id`: string, `orderProcessAssociationsToRemove`: [OrderProcessAssociationsToRemove](interfaces/orderprocessassociationstoremove.md), `options?`: any): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **removeOrderProcessTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *AxiosPromise‹void›*

* **showOrderProcess**(`id`: string, `options?`: any): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **unlinkTagFromOrderProcess**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *AxiosPromise‹void›*

* **updateOrderProcess**(`id`: string, `orderProcess`: [OrderProcess](interfaces/orderprocess.md), `options?`: any): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

___

### `Const` OrderProcessApiFp

▸ **OrderProcessApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:3899](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L3899)*

OrderProcessApi - functional programming interface

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](classes/configuration.md) |

**Returns:** *object*

* **addOrderProcessAfterItem**(`id`: string, `orderProcessPortfolioItemId`: [OrderProcessPortfolioItemId](interfaces/orderprocessportfolioitemid.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **addOrderProcessBeforeItem**(`id`: string, `orderProcessPortfolioItemId`: [OrderProcessPortfolioItemId](interfaces/orderprocessportfolioitemid.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **addOrderProcessTag**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[Tag](interfaces/tag.md)››*

* **createOrderProcess**(`orderProcess`: [OrderProcess](interfaces/orderprocess.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **destroyOrderProcess**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **linkTagToOrderProcess**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **listOrderProcessTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listOrderProcesses**(`appName?`: string, `objectId?`: string, `objectType?`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderProcessCollection](interfaces/orderprocesscollection.md)›*

* **removeOrderProcessAssociation**(`id`: string, `orderProcessAssociationsToRemove`: [OrderProcessAssociationsToRemove](interfaces/orderprocessassociationstoremove.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **removeOrderProcessTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **showOrderProcess**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

* **unlinkTagFromOrderProcess**(`id`: string, `resourceObject`: [ResourceObject](interfaces/resourceobject.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **updateOrderProcess**(`id`: string, `orderProcess`: [OrderProcess](interfaces/orderprocess.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[OrderProcess](interfaces/orderprocess.md)›*

___

### `Const` PortfolioApiAxiosParamCreator

▸ **PortfolioApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:4449](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L4449)*

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

* **fetchPortfolioItemsWithPortfolio**(`portfolioId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPortfolioTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPortfolios**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **postCopyPortfolio**(`portfolioId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **removePortfolioTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **shareInfo**(`portfolioId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **sharePortfolio**(`portfolioId`: string, `sharePolicy`: [SharePolicy](interfaces/sharepolicy.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showPortfolio**(`id`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showPortfolioIcon**(`portfolioId`: string, `cacheId?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unDeletePortfolio**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unsharePortfolio**(`portfolioId`: string, `unsharePolicy`: [UnsharePolicy](interfaces/unsharepolicy.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updatePortfolio**(`id`: string, `portfolio`: [Portfolio](interfaces/portfolio.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` PortfolioApiFactory

▸ **PortfolioApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:5441](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5441)*

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

* **fetchPortfolioItemsWithPortfolio**(`portfolioId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[PortfolioItemsCollection](interfaces/portfolioitemscollection.md)›*

* **listPortfolioTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listPortfolios**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[PortfoliosCollection](interfaces/portfolioscollection.md)›*

* **postCopyPortfolio**(`portfolioId`: string, `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **removePortfolioTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *AxiosPromise‹void›*

* **shareInfo**(`portfolioId`: string, `options?`: any): *AxiosPromise‹Array‹[ShareInfo](interfaces/shareinfo.md)››*

* **sharePortfolio**(`portfolioId`: string, `sharePolicy`: [SharePolicy](interfaces/sharepolicy.md), `options?`: any): *AxiosPromise‹void›*

* **showPortfolio**(`id`: string, `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **showPortfolioIcon**(`portfolioId`: string, `cacheId?`: string, `options?`: any): *AxiosPromise‹any›*

* **unDeletePortfolio**(`id`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

* **unsharePortfolio**(`portfolioId`: string, `unsharePolicy`: [UnsharePolicy](interfaces/unsharepolicy.md), `options?`: any): *AxiosPromise‹void›*

* **updatePortfolio**(`id`: string, `portfolio`: [Portfolio](interfaces/portfolio.md), `options?`: any): *AxiosPromise‹[Portfolio](interfaces/portfolio.md)›*

___

### `Const` PortfolioApiFp

▸ **PortfolioApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:5204](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5204)*

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

* **fetchPortfolioItemsWithPortfolio**(`portfolioId`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItemsCollection](interfaces/portfolioitemscollection.md)›*

* **listPortfolioTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listPortfolios**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

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

* **showPortfolioIcon**(`portfolioId`: string, `cacheId?`: string, `options?`: any): *function*

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

*Defined in [packages/catalog/api.ts:5826](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L5826)*

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

* **listPortfolioItemTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listPortfolioItems**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listProviderControlParameters**(`portfolioItemId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **listServicePlans**(`portfolioItemId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **postCopyPortfolioItem**(`portfolioItemId`: string, `copyPortfolioItem?`: [CopyPortfolioItem](interfaces/copyportfolioitem.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **removePortfolioItemTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showPortfolioItem**(`id`: string, `showDiscarded?`: boolean, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **showPortfolioItemIcon**(`portfolioItemId`: string, `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **unDeletePortfolioItem**(`portfolioItemId`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

* **updatePortfolioItem**(`id`: string, `portfolioItem`: [PortfolioItem](interfaces/portfolioitem.md), `options`: any): *[RequestArgs](interfaces/requestargs.md)*

___

### `Const` PortfolioItemApiFactory

▸ **PortfolioItemApiFactory**(`configuration?`: [Configuration](classes/configuration.md), `basePath?`: string, `axios?`: AxiosInstance): *object*

*Defined in [packages/catalog/api.ts:6730](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6730)*

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

* **listPortfolioItemTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listPortfolioItems**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[PortfolioItemsCollection](interfaces/portfolioitemscollection.md)›*

* **listProviderControlParameters**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹object›*

* **listServicePlans**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹Array‹[ServicePlan](interfaces/serviceplan.md)››*

* **postCopyPortfolioItem**(`portfolioItemId`: string, `copyPortfolioItem?`: [CopyPortfolioItem](interfaces/copyportfolioitem.md), `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **removePortfolioItemTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *AxiosPromise‹void›*

* **showPortfolioItem**(`id`: string, `showDiscarded?`: boolean, `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **showPortfolioItemIcon**(`portfolioItemId`: string, `options?`: any): *AxiosPromise‹any›*

* **unDeletePortfolioItem**(`portfolioItemId`: string, `restoreKey`: [RestoreKey](interfaces/restorekey.md), `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **updatePortfolioItem**(`id`: string, `portfolioItem`: [PortfolioItem](interfaces/portfolioitem.md), `options?`: any): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

___

### `Const` PortfolioItemApiFp

▸ **PortfolioItemApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:6511](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L6511)*

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

* **listPortfolioItemTags**(`id`: string, `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[TagsCollection](interfaces/tagscollection.md)›*

* **listPortfolioItems**(`limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItemsCollection](interfaces/portfolioitemscollection.md)›*

* **listProviderControlParameters**(`portfolioItemId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹object›*

* **listServicePlans**(`portfolioItemId`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[ServicePlan](interfaces/serviceplan.md)››*

* **postCopyPortfolioItem**(`portfolioItemId`: string, `copyPortfolioItem?`: [CopyPortfolioItem](interfaces/copyportfolioitem.md), `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[PortfolioItem](interfaces/portfolioitem.md)›*

* **removePortfolioItemTags**(`id`: string, `tag`: Array‹[Tag](interfaces/tag.md)›, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹void›*

* **showPortfolioItem**(`id`: string, `showDiscarded?`: boolean, `options?`: any): *function*

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

*Defined in [packages/catalog/api.ts:7085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7085)*

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

*Defined in [packages/catalog/api.ts:7444](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7444)*

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

* **resetServicePlanModified**(`id`: string, `options?`: any): *AxiosPromise‹Array‹[ServicePlan](interfaces/serviceplan.md)››*

* **showServicePlan**(`id`: string, `options?`: any): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showServicePlanBase**(`id`: string, `options?`: any): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showServicePlanModified**(`id`: string, `options?`: any): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

___

### `Const` ServicePlansApiFp

▸ **ServicePlansApiFp**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:7350](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7350)*

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

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹Array‹[ServicePlan](interfaces/serviceplan.md)››*

* **showServicePlan**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showServicePlanBase**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

* **showServicePlanModified**(`id`: string, `options?`: any): *function*

  * (`axios?`: AxiosInstance, `basePath?`: string): *AxiosPromise‹[ServicePlan](interfaces/serviceplan.md)›*

___

### `Const` SettingsApiAxiosParamCreator

▸ **SettingsApiAxiosParamCreator**(`configuration?`: [Configuration](classes/configuration.md)): *object*

*Defined in [packages/catalog/api.ts:7597](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7597)*

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

*Defined in [packages/catalog/api.ts:7891](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7891)*

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

*Defined in [packages/catalog/api.ts:7813](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L7813)*

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

*Defined in [packages/catalog/api.ts:8018](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8018)*

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

*Defined in [packages/catalog/api.ts:8085](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8085)*

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

*Defined in [packages/catalog/api.ts:8063](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8063)*

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

*Defined in [packages/catalog/api.ts:8124](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8124)*

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

*Defined in [packages/catalog/api.ts:8303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8303)*

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

*Defined in [packages/catalog/api.ts:8253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L8253)*

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

*Defined in [packages/catalog/base.ts:26](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L26)*

**`export`** 

###  csv

• **csv**: *string* = ","

*Defined in [packages/catalog/base.ts:27](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L27)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [packages/catalog/base.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L30)*

###  ssv

• **ssv**: *string* = " "

*Defined in [packages/catalog/base.ts:28](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L28)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [packages/catalog/base.ts:29](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/base.ts#L29)*
