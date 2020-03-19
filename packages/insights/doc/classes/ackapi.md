[@redhat-cloud-services/insights-client](../README.md) > [AckApi](../classes/ackapi.md)

# Class: AckApi

AckApi - object-oriented interface

*__export__*: 

*__class__*: AckApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ AckApi**

## Index

### Constructors

* [constructor](ackapi.md#constructor)

### Properties

* [axios](ackapi.md#axios)
* [basePath](ackapi.md#basepath)
* [configuration](ackapi.md#configuration)

### Methods

* [ackCreate](ackapi.md#ackcreate)
* [ackDelete](ackapi.md#ackdelete)
* [ackList](ackapi.md#acklist)
* [ackRead](ackapi.md#ackread)
* [ackUpdate](ackapi.md#ackupdate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AckApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [AckApi](ackapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [AckApi](ackapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

___

## Methods

<a id="ackcreate"></a>

###  ackCreate

▸ **ackCreate**(ackInput: *[AckInput](../interfaces/ackinput.md)*, options?: *`any`*): `AxiosPromise`<[Ack](../interfaces/ack.md)>

*Defined in [api.ts:1834](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1834)*

If there's already an acknowledgement of this rule by this account, then return that. Otherwise, a new ack is created.

*__summary__*: Add an acknowledgement for a rule, by rule ID.

*__throws__*: {RequiredError}

*__memberof__*: AckApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ackInput | [AckInput](../interfaces/ackinput.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Ack](../interfaces/ack.md)>

___
<a id="ackdelete"></a>

###  ackDelete

▸ **ackDelete**(ruleId: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1846](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1846)*

If the ack existed, it is deleted and a 204 is returned. Otherwise, a 404 is returned.

*__summary__*: Delete an acknowledgement for a rule, by its rule ID.

*__throws__*: {RequiredError}

*__memberof__*: AckApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ruleId | `string` |  Rule ID defined by Insights ruleset |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="acklist"></a>

###  ackList

▸ **ackList**(limit?: *`number`*, offset?: *`number`*, options?: *`any`*): `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

*Defined in [api.ts:1859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1859)*

Will return an empty list if this account has no acks.

*__summary__*: List acks from this account where the rule is active

*__throws__*: {RequiredError}

*__memberof__*: AckApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse200](../interfaces/inlineresponse200.md)>

___
<a id="ackread"></a>

###  ackRead

▸ **ackRead**(ruleId: *`string`*, options?: *`any`*): `AxiosPromise`<[Ack](../interfaces/ack.md)>

*Defined in [api.ts:1871](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1871)*

This view handles listing, retrieving, creating and deleting acks. Acks are created and deleted by Insights rule ID, not by their own ack ID.

*__summary__*: Acks acknowledge (and therefore hide) a rule from view in an account.

*__throws__*: {RequiredError}

*__memberof__*: AckApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ruleId | `string` |  Rule ID defined by Insights ruleset |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Ack](../interfaces/ack.md)>

___
<a id="ackupdate"></a>

###  ackUpdate

▸ **ackUpdate**(ruleId: *`string`*, ackJustification: *[AckJustification](../interfaces/ackjustification.md)*, options?: *`any`*): `AxiosPromise`<[Ack](../interfaces/ack.md)>

*Defined in [api.ts:1884](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L1884)*

A new justification can be supplied. The username is taken from the authenticated request. The updated ack is returned.

*__summary__*: Update an acknowledgement for a rule, by rule ID.

*__throws__*: {RequiredError}

*__memberof__*: AckApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ruleId | `string` |  Rule ID defined by Insights ruleset |
| ackJustification | [AckJustification](../interfaces/ackjustification.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Ack](../interfaces/ack.md)>

___

