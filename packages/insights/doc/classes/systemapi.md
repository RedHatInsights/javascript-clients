[@redhat-cloud-services/insights-client](../README.md) > [SystemApi](../classes/systemapi.md)

# Class: SystemApi

SystemApi - object-oriented interface

*__export__*: 

*__class__*: SystemApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ SystemApi**

## Index

### Constructors

* [constructor](systemapi.md#constructor)

### Properties

* [axios](systemapi.md#axios)
* [basePath](systemapi.md#basepath)
* [configuration](systemapi.md#configuration)

### Methods

* [systemList](systemapi.md#systemlist)
* [systemRead](systemapi.md#systemread)
* [systemReports](systemapi.md#systemreports)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SystemApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [SystemApi](systemapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [SystemApi](systemapi.md)

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

<a id="systemlist"></a>

###  systemList

▸ **systemList**(limit?: *`number`*, offset?: *`number`*, sort?: *"hits" \| "last_seen" \| "display_name" \| "-hits" \| "-last_seen" \| "-display_name"*, displayName?: *`string`*, tags?: *`Array`<`string`>*, options?: *`any`*): `AxiosPromise`<[InlineResponse2005](../interfaces/inlineresponse2005.md)>

*Defined in [api.ts:5060](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5060)*

Results can be sorted and systems can be filtered by display name.

*__summary__*: Returns systems with their hit count and last upload time.

*__throws__*: {RequiredError}

*__memberof__*: SystemApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` sort | "hits" \| "last_seen" \| "display_name" \| "-hits" \| "-last_seen" \| "-display_name" |
| `Optional` displayName | `string` |
| `Optional` tags | `Array`<`string`> |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[InlineResponse2005](../interfaces/inlineresponse2005.md)>

___
<a id="systemread"></a>

###  systemRead

▸ **systemRead**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<[System](../interfaces/system.md)>

*Defined in [api.ts:5072](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5072)*

Retrieve the reports for a single system by Insights Inventory UUID

*__summary__*: Retrieve the reports for a single system

*__throws__*: {RequiredError}

*__memberof__*: SystemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  The system&#39;s Host ID in the Inventory |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[System](../interfaces/system.md)>

___
<a id="systemreports"></a>

###  systemReports

▸ **systemReports**(uuid: *`string`*, options?: *`any`*): `AxiosPromise`<[Report](../interfaces/report.md)[]>

*Defined in [api.ts:5084](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L5084)*

Returns reports that: \* are in the user's account \* have an active, not-deleted rule \* where the rule has not been acked by this account If the host ID is not found, return an empty list.

*__summary__*: Returns the list of latest reports for an Inventory Host ID.

*__throws__*: {RequiredError}

*__memberof__*: SystemApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  The system&#39;s Host ID in the Inventory |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[Report](../interfaces/report.md)[]>

___

