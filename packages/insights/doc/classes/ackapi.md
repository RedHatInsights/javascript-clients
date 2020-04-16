[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [AckApi](ackapi.md)

# Class: AckApi

AckApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AckApi**

## Index

### Constructors

* [constructor](ackapi.md#constructor)

### Properties

* [axios](ackapi.md#protected-axios)
* [basePath](ackapi.md#protected-basepath)
* [configuration](ackapi.md#protected-configuration)

### Methods

* [ackCreate](ackapi.md#ackcreate)
* [ackDelete](ackapi.md#ackdelete)
* [ackList](ackapi.md#acklist)
* [ackRead](ackapi.md#ackread)
* [ackUpdate](ackapi.md#ackupdate)

## Constructors

###  constructor

\+ **new AckApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[AckApi](ackapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/insights/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[AckApi](ackapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

Defined in packages/insights/base.ts:51

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

Defined in packages/insights/base.ts:51

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

Defined in packages/insights/base.ts:49

## Methods

###  ackCreate

▸ **ackCreate**(`ackInput`: [AckInput](../interfaces/ackinput.md), `options?`: any): *AxiosPromise‹[Ack](../interfaces/ack.md)›*

*Defined in [packages/insights/api.ts:1768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1768)*

If there\'s already an acknowledgement of this rule by this account, then return that.  Otherwise, a new ack is created.

**`summary`** Add an acknowledgement for a rule, by rule ID.

**`throws`** {RequiredError}

**`memberof`** AckApi

**Parameters:**

Name | Type |
------ | ------ |
`ackInput` | [AckInput](../interfaces/ackinput.md) |
`options?` | any |

**Returns:** *AxiosPromise‹[Ack](../interfaces/ack.md)›*

___

###  ackDelete

▸ **ackDelete**(`ruleId`: string, `options?`: any): *AxiosPromise‹void›*

*Defined in [packages/insights/api.ts:1780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1780)*

If the ack existed, it is deleted and a 204 is returned.  Otherwise, a 404 is returned.

**`summary`** Delete an acknowledgement for a rule, by its rule ID.

**`throws`** {RequiredError}

**`memberof`** AckApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ruleId` | string | Rule ID defined by Insights ruleset |
`options?` | any | - |

**Returns:** *AxiosPromise‹void›*

___

###  ackList

▸ **ackList**(`limit?`: number, `offset?`: number, `options?`: any): *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

*Defined in [packages/insights/api.ts:1793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1793)*

Will return an empty list if this account has no acks.

**`summary`** List acks from this account where the rule is active

**`throws`** {RequiredError}

**`memberof`** AckApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse200](../interfaces/inlineresponse200.md)›*

___

###  ackRead

▸ **ackRead**(`ruleId`: string, `options?`: any): *AxiosPromise‹[Ack](../interfaces/ack.md)›*

*Defined in [packages/insights/api.ts:1805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1805)*

This view handles listing, retrieving, creating and deleting acks.  Acks are created and deleted by Insights rule ID, not by their own ack ID.

**`summary`** Acks acknowledge (and therefore hide) a rule from view in an account.

**`throws`** {RequiredError}

**`memberof`** AckApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ruleId` | string | Rule ID defined by Insights ruleset |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Ack](../interfaces/ack.md)›*

___

###  ackUpdate

▸ **ackUpdate**(`ruleId`: string, `ackJustification`: [AckJustification](../interfaces/ackjustification.md), `options?`: any): *AxiosPromise‹[Ack](../interfaces/ack.md)›*

*Defined in [packages/insights/api.ts:1818](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1818)*

A new justification can be supplied.  The username is taken from the authenticated request.  The updated ack is returned.

**`summary`** Update an acknowledgement for a rule, by rule ID.

**`throws`** {RequiredError}

**`memberof`** AckApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ruleId` | string | Rule ID defined by Insights ruleset |
`ackJustification` | [AckJustification](../interfaces/ackjustification.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Ack](../interfaces/ack.md)›*
