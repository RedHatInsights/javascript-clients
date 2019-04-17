[@redhat-cloud-services/vulnerabilities-client](../README.md) > [DefaultApi](../classes/defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

*__export__*: 

*__class__*: DefaultApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#axios)
* [basePath](defaultapi.md#basepath)
* [configuration](defaultapi.md#configuration)

### Methods

* [v1CvesCveIdAffectedSystemsGet](defaultapi.md#v1cvescveidaffectedsystemsget)
* [v1CvesCveIdGet](defaultapi.md#v1cvescveidget)
* [v1StatusGet](defaultapi.md#v1statusget)
* [v1StatusPatch](defaultapi.md#v1statuspatch)
* [v1SystemsGet](defaultapi.md#v1systemsget)
* [v1SystemsInventoryIdCvesGet](defaultapi.md#v1systemsinventoryidcvesget)
* [v1SystemsInventoryIdOptOutPatch](defaultapi.md#v1systemsinventoryidoptoutpatch)
* [v1VulnerabilitiesCvesGet](defaultapi.md#v1vulnerabilitiescvesget)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DefaultApi](defaultapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [DefaultApi](defaultapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L49)*

___

## Methods

<a id="v1cvescveidaffectedsystemsget"></a>

###  v1CvesCveIdAffectedSystemsGet

▸ **v1CvesCveIdAffectedSystemsGet**(cveId: *`string`*, options?: *`any`*): `AxiosPromise`<[AffectedSystemsOut](../interfaces/affectedsystemsout.md)>

*Defined in [api.ts:1501](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1501)*

Report of affected systems for a given CVE.

*__summary__*: Affected systems for a given CVE.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveId | `string` |  CVE id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AffectedSystemsOut](../interfaces/affectedsystemsout.md)>

___
<a id="v1cvescveidget"></a>

###  v1CvesCveIdGet

▸ **v1CvesCveIdGet**(cveId: *`string`*, options?: *`any`*): `AxiosPromise`<[CveDetailOut](../interfaces/cvedetailout.md)>

*Defined in [api.ts:1513](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1513)*

Show all information about given CVE.

*__summary__*: Details of a CVE.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveId | `string` |  CVE id |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CveDetailOut](../interfaces/cvedetailout.md)>

___
<a id="v1statusget"></a>

###  v1StatusGet

▸ **v1StatusGet**(options?: *`any`*): `AxiosPromise`<[StatusListOut](../interfaces/statuslistout.md)>

*Defined in [api.ts:1524](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1524)*

Returns available status and status\_id pairs where status\_id is internal ID of the status.

*__summary__*: Available status/status\_id pairs.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatusListOut](../interfaces/statuslistout.md)>

___
<a id="v1statuspatch"></a>

###  v1StatusPatch

▸ **v1StatusPatch**(statusIn: *[StatusIn](../interfaces/statusin.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1536](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1536)*

Sets status for given host and CVE.

*__summary__*: Set status for system vulnerability.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| statusIn | [StatusIn](../interfaces/statusin.md) |  Values to be set. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="v1systemsget"></a>

###  v1SystemsGet

▸ **v1SystemsGet**(filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, optOut?: *`boolean`*, options?: *`any`*): `AxiosPromise`<[SystemListOut](../interfaces/systemlistout.md)>

*Defined in [api.ts:1554](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1554)*

List systems visible to logged in account with basic information related to vulnerabilities.

*__summary__*: List systems.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` page | `number` |
| `Optional` pageSize | `number` |
| `Optional` sort | `string` |
| `Optional` optOut | `boolean` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemListOut](../interfaces/systemlistout.md)>

___
<a id="v1systemsinventoryidcvesget"></a>

###  v1SystemsInventoryIdCvesGet

▸ **v1SystemsInventoryIdCvesGet**(inventoryId: *`string`*, options?: *`any`*): `AxiosPromise`<[SystemCvesOut](../interfaces/systemcvesout.md)>

*Defined in [api.ts:1566](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1566)*

Shows detailed infomation about all CVEs the system is exposed to.

*__summary__*: CVE report for a system.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inventoryId | `string` |  Inventory ID of the host to be opted in/out. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemCvesOut](../interfaces/systemcvesout.md)>

___
<a id="v1systemsinventoryidoptoutpatch"></a>

###  v1SystemsInventoryIdOptOutPatch

▸ **v1SystemsInventoryIdOptOutPatch**(inventoryId: *`string`*, value: *`boolean`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1579](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1579)*

Opts in/out a systems. Opted out system is not shown and manageable by the vulnerability application.

*__summary__*: Opt in/out a system to/from vulnerability application.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inventoryId | `string` |  Inventory ID of the host to be opted in/out. |
| value | `boolean` |  opt\_out setting of the host. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="v1vulnerabilitiescvesget"></a>

###  v1VulnerabilitiesCvesGet

▸ **v1VulnerabilitiesCvesGet**(filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, showAll?: *`boolean`*, options?: *`any`*): `AxiosPromise`<[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)>

*Defined in [api.ts:1597](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1597)*

Overview of vulnerabilities across whole host inventory.

*__summary__*: Vulnerabilities overview.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` page | `number` |
| `Optional` pageSize | `number` |
| `Optional` sort | `string` |
| `Optional` showAll | `boolean` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)>

___

