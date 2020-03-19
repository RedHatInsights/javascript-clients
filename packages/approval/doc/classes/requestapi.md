[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [RequestApi](requestapi.md)

# Class: RequestApi

RequestApi - object-oriented interface

**`export`** 

**`class`** RequestApi

**`extends`** {BaseAPI}

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

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[RequestApi](requestapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L49)*

## Methods

###  createRequest

▸ **createRequest**(`requestIn`: [RequestIn](../interfaces/requestin.md), `options?`: any): *AxiosPromise‹[Request](../modules/request.md)›*

*Defined in [api.ts:1420](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1420)*

Add an approval request by given parameters, available to anyone

**`summary`** Add an approval request by given parameters

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestIn` | [RequestIn](../interfaces/requestin.md) | Parameters need to create a request |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Request](../modules/request.md)›*

___

###  listRequests

▸ **listRequests**(`xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `limit?`: number, `offset?`: number, `filter?`: any, `options?`: any): *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

*Defined in [api.ts:1435](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1435)*

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
`filter?` | any |
`options?` | any |

**Returns:** *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

___

###  listRequestsByRequest

▸ **listRequestsByRequest**(`requestId`: string, `xRhPersona?`: "approval/admin" | "approval/approver" | "approval/requester", `options?`: any): *AxiosPromise‹[RequestCollection](../interfaces/requestcollection.md)›*

*Defined in [api.ts:1448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1448)*

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

▸ **showRequest**(`id`: string, `options?`: any): *AxiosPromise‹[Request](../modules/request.md)›*

*Defined in [api.ts:1460](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1460)*

Return an approval request by given id, available to anyone who can access the request

**`summary`** Return an approval request by given id

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Query by id |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Request](../modules/request.md)›*

___

###  showRequestContent

▸ **showRequestContent**(`requestId`: string, `options?`: any): *AxiosPromise‹any›*

*Defined in [api.ts:1472](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L1472)*

Return request content of a given request id, available to all

**`summary`** Return request content of a given request id

**`throws`** {RequiredError}

**`memberof`** RequestApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`requestId` | string | Id of request |
`options?` | any | - |

**Returns:** *AxiosPromise‹any›*
