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

Defined in packages/approval/base.ts:49

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

Defined in packages/approval/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/approval/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/approval/base.ts:49

## Methods

###  createRequest

▸ **createRequest**(`requestIn`: [RequestIn](../interfaces/requestin.md), `options?`: any): *AxiosPromise‹[Request](../interfaces/request.md)›*

*Defined in [packages/approval/api.ts:1373](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1373)*

Add an approval request by given parameters, available to anyone

**`summary`** Add an approval request by given parameters

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestIn` | [RequestIn](../interfaces/requestin.md) | Parameters need to create a request |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Request](../interfaces/request.md)›*

___

###  listRequests

▸ **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: object, `options?`: any): *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

*Defined in [packages/approval/api.ts:1388](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1388)*

The result depends on the x-rh-persona header (approval/admin, approval/requseter, or approval/approver). Program generated child requests are not included.

**`summary`** Return an array of requester made approval requests, available to anyone

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type |
------ | ------ |
`xRhPersona?` | "approval/admin" &#124; "approval/approver" &#124; "approval/requester" |
`limit?` | number |
`offset?` | number |
`filter?` | object |
`options?` | any |

**Returns:** *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

___

###  listRequestsByRequest

▸ **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options?`: any): *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

*Defined in [packages/approval/api.ts:1401](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1401)*

Return an array of child requests of a given request id. The result depends on the x-rh-persona header (approval/admin, approval/requseter, or approval/approver).

**`summary`** Return an array of child requests of a given request id

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | Id of request |
`xRhPersona?` | "approval/admin" &#124; "approval/approver" &#124; "approval/requester" | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

___

###  showRequest

▸ **showRequest**(`id`: string, `options?`: any): *AxiosPromise‹[Request](../interfaces/request.md)›*

*Defined in [packages/approval/api.ts:1413](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1413)*

Return an approval request by given id, available to anyone who can access the request

**`summary`** Return an approval request by given id

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Request](../interfaces/request.md)›*

___

###  showRequestContent

▸ **showRequestContent**(`requestId`: string, `options?`: any): *AxiosPromise‹object›*

*Defined in [packages/approval/api.ts:1425](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1425)*

Return request content of a given request id, available to all

**`summary`** Return request content of a given request id

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | Id of request |
`options?` | any | - |

**Returns:** *AxiosPromise‹object›*
