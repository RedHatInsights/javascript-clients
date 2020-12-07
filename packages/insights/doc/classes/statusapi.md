[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [StatusApi](statusapi.md)

# Class: StatusApi

StatusApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **StatusApi**

## Index

### Constructors

* [constructor](statusapi.md#constructor)

### Properties

* [axios](statusapi.md#protected-axios)
* [basePath](statusapi.md#protected-basepath)
* [configuration](statusapi.md#protected-configuration)

### Methods

* [statusList](statusapi.md#statuslist)
* [statusLive](statusapi.md#statuslive)
* [statusReady](statusapi.md#statusready)

## Constructors

###  constructor

\+ **new StatusApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[StatusApi](statusapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[StatusApi](statusapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [packages/insights/base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

## Methods

###  statusList

▸ **statusList**(`options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [packages/insights/api.ts:1034](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1034)*

A list of statistics views.

**`summary`** Provide a simple list of URLs contained here.

**`throws`** {RequiredError}

**`memberof`** StatusApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  statusLive

▸ **statusLive**(`options?`: any): *Promise‹AxiosResponse‹[StatusReady](../interfaces/statusready.md)››*

*Defined in [packages/insights/api.ts:1045](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1045)*

This returns a dictionary with properties defining the status of the components Advisor relies on. At the moment this is the same as the Readiness check (see `/ready/`). In the future it may include other checks if we need to, but the properties of `/ready/` will always be included.

**`summary`** Is the Advisor API live and serving requests?

**`throws`** {RequiredError}

**`memberof`** StatusApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[StatusReady](../interfaces/statusready.md)››*

___

###  statusReady

▸ **statusReady**(`options?`: any): *Promise‹AxiosResponse‹[StatusReady](../interfaces/statusready.md)››*

*Defined in [packages/insights/api.ts:1056](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1056)*

This returns a dictionary with properties defining the status of the components Advisor relies on. * \'django\' should always be True.  If Django isn\'t ready, you can\'t get this information :-) * \'database\' is True when a database access returns successfully with valid information. * \'rbac\' is True when we can make a request to the RBAC API and get a valid response. * \'advisor\' is True if all of the above are True.

**`summary`** Is the Advisor API ready to serve requests?

**`throws`** {RequiredError}

**`memberof`** StatusApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹[StatusReady](../interfaces/statusready.md)››*
