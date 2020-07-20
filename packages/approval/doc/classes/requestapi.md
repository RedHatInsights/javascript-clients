[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [RequestApi](requestapi.md)

# Class: RequestApi

RequestApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **RequestApi**

## Index

### Constructors

* [constructor](requestapi.md#constructor)

### Properties

* [axios](requestapi.md#protected-axios)
* [basePath](requestapi.md#protected-basepath)
* [configuration](requestapi.md#protected-configuration)

### Methods

* [createRequest](requestapi.md#createrequest)
* [listRequests](requestapi.md#listrequests)
* [listRequestsByRequest](requestapi.md#listrequestsbyrequest)
* [showRequest](requestapi.md#showrequest)
* [showRequestContent](requestapi.md#showrequestcontent)

## Constructors

###  constructor

\+ **new RequestApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[RequestApi](requestapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/approval/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[RequestApi](requestapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/approval/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/approval/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/approval/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/base.ts#L49)*

## Methods

###  createRequest

▸ **createRequest**(`requestIn`: [RequestIn](../interfaces/requestin.md), `options?`: any): *AxiosPromise‹[Request](../interfaces/request.md)›*

*Defined in [packages/approval/api.ts:1527](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1527)*

Create an approval request using given parameters, available to everyone

**`summary`** Create a new approval request

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestIn` | [RequestIn](../interfaces/requestin.md) | Parameters needed to create a request |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Request](../interfaces/request.md)›*

___

###  listRequests

▸ **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: object, `sortBy?`: string, `options?`: any): *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

*Defined in [packages/approval/api.ts:1543](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1543)*

The result depends on the x-rh-persona header (approval/admin, approval/requseter, or approval/approver). Program generated child requests are not included.

**`summary`** List filtered requests, available to everyone

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type |
------ | ------ |
`xRhPersona?` | "approval/admin" &#124; "approval/approver" &#124; "approval/requester" |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`sortBy?` | string |
`options?` | any |

**Returns:** *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

___

###  listRequestsByRequest

▸ **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options?`: any): *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

*Defined in [packages/approval/api.ts:1556](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1556)*

Find child requests based on the parent request id. The result depends on the x-rh-persona header (approval/admin, approval/requseter, or approval/approver).

**`summary`** List filtered child requests of a request

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | ID of a request |
`xRhPersona?` | "approval/admin" &#124; "approval/approver" &#124; "approval/requester" | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

___

###  showRequest

▸ **showRequest**(`id`: string, `options?`: any): *AxiosPromise‹[Request](../interfaces/request.md)›*

*Defined in [packages/approval/api.ts:1568](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1568)*

Find an approval request by its id, available to anyone who can access the request

**`summary`** Return an approval request

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID used to select a resource |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Request](../interfaces/request.md)›*

___

###  showRequestContent

▸ **showRequestContent**(`requestId`: string, `options?`: any): *AxiosPromise‹object›*

*Defined in [packages/approval/api.ts:1580](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1580)*

Find the request content based on a request id, available to everyone

**`summary`** Return the request content of a request

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | ID of a request |
`options?` | any | - |

**Returns:** *AxiosPromise‹object›*
