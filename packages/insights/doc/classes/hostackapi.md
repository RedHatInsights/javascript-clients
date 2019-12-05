[@redhat-cloud-services/insights-client](../README.md) > [HostackApi](../classes/hostackapi.md)

# Class: HostackApi

HostackApi - object-oriented interface

*__export__*: 

*__class__*: HostackApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ HostackApi**

## Index

### Constructors

* [constructor](hostackapi.md#constructor)

### Properties

* [axios](hostackapi.md#axios)
* [basePath](hostackapi.md#basepath)
* [configuration](hostackapi.md#configuration)

### Methods

* [hostackCreate](hostackapi.md#hostackcreate)
* [hostackDelete](hostackapi.md#hostackdelete)
* [hostackList](hostackapi.md#hostacklist)
* [hostackRead](hostackapi.md#hostackread)
* [hostackUpdate](hostackapi.md#hostackupdate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HostackApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [HostackApi](hostackapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [HostackApi](hostackapi.md)

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

<a id="hostackcreate"></a>

###  hostackCreate

▸ **hostackCreate**(hostAck: *[HostAck](../interfaces/hostack.md)*, options?: *`any`*): `AxiosPromise`<[HostAck](../interfaces/hostack.md)>

*Defined in [api.ts:2276](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2276)*

Return the new hostack. If there's already an acknowledgement of this rule by this account for a system, then return that. This does not take an 'id' number.

*__summary__*: Add an acknowledgement for a rule, by rule ID, system, and account.

*__throws__*: {RequiredError}

*__memberof__*: HostackApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hostAck | [HostAck](../interfaces/hostack.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostAck](../interfaces/hostack.md)>

___
<a id="hostackdelete"></a>

###  hostackDelete

▸ **hostackDelete**(id: *`number`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:2288](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2288)*

Takes the hostack ID (given in the hostack list) as an identifier.

*__summary__*: Delete an acknowledgement for a rule, for a system, for an account, by its ID.

*__throws__*: {RequiredError}

*__memberof__*: HostackApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `number` |  A unique integer value identifying this host ack. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="hostacklist"></a>

###  hostackList

▸ **hostackList**(limit?: *`number`*, offset?: *`number`*, ruleId?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[InlineResponse2002](../interfaces/inlineresponse2002.md)>

*Defined in [api.ts:2302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2302)*

Hostacks are retrieved, edited and deleted by the 'id' field.

*__summary__*: List host acks from this account for a system where the rule is active.

*__throws__*: {RequiredError}

*__memberof__*: HostackApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` ruleId | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2002](../interfaces/inlineresponse2002.md)>

___
<a id="hostackread"></a>

###  hostackRead

▸ **hostackRead**(id: *`number`*, options?: *`any`*): `AxiosPromise`<[HostAck](../interfaces/hostack.md)>

*Defined in [api.ts:2314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2314)*

This view handles listing, retrieving, creating and deleting hostacks.

*__summary__*: HostAcks acknowledge (and therefore hide) a rule from view in an account for a specific system.

*__throws__*: {RequiredError}

*__memberof__*: HostackApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `number` |  A unique integer value identifying this host ack. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostAck](../interfaces/hostack.md)>

___
<a id="hostackupdate"></a>

###  hostackUpdate

▸ **hostackUpdate**(id: *`number`*, hostAckJustification: *[HostAckJustification](../interfaces/hostackjustification.md)*, options?: *`any`*): `AxiosPromise`<[HostAckJustification](../interfaces/hostackjustification.md)>

*Defined in [api.ts:2327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2327)*

The justification is taken from the request body. The created\_by field is taken from the username in the x-rh-identity field, and the updated\_at field is set to the current time.

*__summary__*: Update the justification for this host acknowledgement.

*__throws__*: {RequiredError}

*__memberof__*: HostackApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | `number` |  A unique integer value identifying this host ack. |
| hostAckJustification | [HostAckJustification](../interfaces/hostackjustification.md) |  \- |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[HostAckJustification](../interfaces/hostackjustification.md)>

___

