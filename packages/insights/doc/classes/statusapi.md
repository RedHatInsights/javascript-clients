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

* [statusLiveRetrieve](statusapi.md#statusliveretrieve)
* [statusReadyRetrieve](statusapi.md#statusreadyretrieve)
* [statusRetrieve](statusapi.md#statusretrieve)

## Constructors

###  constructor

\+ **new StatusApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[StatusApi](statusapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

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

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

## Methods

###  statusLiveRetrieve

▸ **statusLiveRetrieve**(`options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:609](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L609)*

Is the Advisor API live and serving requests?  This returns a dictionary with properties defining the status of the components Advisor relies on.  At the moment this is the same as the Readiness check (see `/ready/`). In the future it may include other checks if we need to, but the properties of `/ready/` will always be included.

**`throws`** {RequiredError}

**`memberof`** StatusApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  statusReadyRetrieve

▸ **statusReadyRetrieve**(`options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:619](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L619)*

Is the Advisor API ready to serve requests?  This returns a dictionary with properties defining the status of the components Advisor relies on.  * \'django\' should always be True.  If Django isn\'t ready, you can\'t   get this information :-) * \'database\' is True when a database access returns successfully with   valid information. * \'rbac\' is True when we can make a request to the RBAC API and get   a valid response. * \'advisor\' is True if all of the above are True.

**`throws`** {RequiredError}

**`memberof`** StatusApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹void››*

___

###  statusRetrieve

▸ **statusRetrieve**(`options?`: any): *Promise‹AxiosResponse‹void››*

*Defined in [api.ts:629](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L629)*

Provide a simple list of URLs contained here.  A list of statistics views.

**`throws`** {RequiredError}

**`memberof`** StatusApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹AxiosResponse‹void››*
