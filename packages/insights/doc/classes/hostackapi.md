[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [HostackApi](hostackapi.md)

# Class: HostackApi

HostackApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **HostackApi**

## Index

### Constructors

* [constructor](hostackapi.md#constructor)

### Properties

* [axios](hostackapi.md#protected-axios)
* [basePath](hostackapi.md#protected-basepath)
* [configuration](hostackapi.md#protected-configuration)

### Methods

* [hostackCreate](hostackapi.md#hostackcreate)
* [hostackDelete](hostackapi.md#hostackdelete)
* [hostackList](hostackapi.md#hostacklist)
* [hostackRead](hostackapi.md#hostackread)
* [hostackUpdate](hostackapi.md#hostackupdate)

## Constructors

###  constructor

\+ **new HostackApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[HostackApi](hostackapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [packages/insights/base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[HostackApi](hostackapi.md)*

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

###  hostackCreate

▸ **hostackCreate**(`hostAck`: [HostAck](../interfaces/hostack.md), `options?`: any): *AxiosPromise‹[HostAck](../interfaces/hostack.md)›*

*Defined in [packages/insights/api.ts:2595](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2595)*

Return the new hostack.  If there\'s already an acknowledgement of this rule by this account for a system, then return that.  This does not take an \'id\' number.

**`summary`** Add an acknowledgement for a rule, by rule ID, system, and account.

**`throws`** {RequiredError}

**`memberof`** HostackApi

**Parameters:**

Name | Type |
------ | ------ |
`hostAck` | [HostAck](../interfaces/hostack.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[HostAck](../interfaces/hostack.md)›*

___

###  hostackDelete

▸ **hostackDelete**(`id`: number, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/insights/api.ts:2607](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2607)*

Takes the hostack ID (given in the hostack list) as an identifier.

**`summary`** Delete an acknowledgement for a rule, for a system, for an account, by its ID.

**`throws`** {RequiredError}

**`memberof`** HostackApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | A unique integer value identifying this host ack. |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  hostackList

▸ **hostackList**(`limit?`: number, `offset?`: number, `ruleId?`: Array‹string›, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[InlineResponse2002](../interfaces/inlineresponse2002.md)›*

*Defined in [packages/insights/api.ts:2622](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2622)*

Hostacks are retrieved, edited and deleted by the \'id\' field.

**`summary`** List host acks from this account for a system where the rule is active.

**`throws`** {RequiredError}

**`memberof`** HostackApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`ruleId?` | Array‹string› |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2002](../interfaces/inlineresponse2002.md)›*

___

###  hostackRead

▸ **hostackRead**(`id`: number, `options?`: any): *AxiosPromise‹[HostAck](../interfaces/hostack.md)›*

*Defined in [packages/insights/api.ts:2634](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2634)*

This view handles listing, retrieving, creating and deleting hostacks.

**`summary`** HostAcks acknowledge (and therefore hide) a rule from view in an account for a specific system.

**`throws`** {RequiredError}

**`memberof`** HostackApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | A unique integer value identifying this host ack. |
`options?` | any | - |

**Returns:** *AxiosPromise‹[HostAck](../interfaces/hostack.md)›*

___

###  hostackUpdate

▸ **hostackUpdate**(`id`: number, `hostAckJustification`: [HostAckJustification](../interfaces/hostackjustification.md), `options?`: any): *AxiosPromise‹[HostAckJustification](../interfaces/hostackjustification.md)›*

*Defined in [packages/insights/api.ts:2647](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2647)*

The justification is taken from the request body.  The created_by field is taken from the username in the x-rh-identity field, and the updated_at field is set to the current time.

**`summary`** Update the justification for this host acknowledgement.

**`throws`** {RequiredError}

**`memberof`** HostackApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | A unique integer value identifying this host ack. |
`hostAckJustification` | [HostAckJustification](../interfaces/hostackjustification.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[HostAckJustification](../interfaces/hostackjustification.md)›*
