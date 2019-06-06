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

* [getAffectedSystemsByCve](defaultapi.md#getaffectedsystemsbycve)
* [getCveDetails](defaultapi.md#getcvedetails)
* [getCveList](defaultapi.md#getcvelist)
* [getCveListBySystem](defaultapi.md#getcvelistbysystem)
* [getStatusList](defaultapi.md#getstatuslist)
* [getSystemsList](defaultapi.md#getsystemslist)
* [getVersion](defaultapi.md#getversion)
* [setStatus](defaultapi.md#setstatus)
* [setSystemOptOut](defaultapi.md#setsystemoptout)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DefaultApi](defaultapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in base.ts:48*

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

*Defined in base.ts:50*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in base.ts:50*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in base.ts:48*

___

## Methods

<a id="getaffectedsystemsbycve"></a>

###  getAffectedSystemsByCve

▸ **getAffectedSystemsByCve**(cveId: *`string`*, filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, statusId?: *`string`*, dataFormat?: *`string`*, options?: *`any`*): `AxiosPromise`<[AffectedSystemsOut](../interfaces/affectedsystemsout.md)>

*Defined in [api.ts:1636](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1636)*

Report of affected systems for a given CVE.

*__summary__*: Affected systems for a given CVE.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveId | `string` |  CVE id. |
| `Optional` filter | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` page | `number` |
| `Optional` pageSize | `number` |
| `Optional` sort | `string` |
| `Optional` statusId | `string` |
| `Optional` dataFormat | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AffectedSystemsOut](../interfaces/affectedsystemsout.md)>

___
<a id="getcvedetails"></a>

###  getCveDetails

▸ **getCveDetails**(cveId: *`string`*, options?: *`any`*): `AxiosPromise`<[CveDetailOut](../interfaces/cvedetailout.md)>

*Defined in [api.ts:1648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1648)*

Show all information about given CVE.

*__summary__*: Details of a CVE.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveId | `string` |  CVE id. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CveDetailOut](../interfaces/cvedetailout.md)>

___
<a id="getcvelist"></a>

###  getCveList

▸ **getCveList**(filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, cvssFrom?: *`number`*, cvssTo?: *`number`*, publicFrom?: *`string`*, publicTo?: *`string`*, severity?: *`string`*, dataFormat?: *`string`*, showAll?: *`boolean`*, options?: *`any`*): `AxiosPromise`<[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)>

*Defined in [api.ts:1672](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1672)*

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
| `Optional` cvssFrom | `number` |
| `Optional` cvssTo | `number` |
| `Optional` publicFrom | `string` |
| `Optional` publicTo | `string` |
| `Optional` severity | `string` |
| `Optional` dataFormat | `string` |
| `Optional` showAll | `boolean` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)>

___
<a id="getcvelistbysystem"></a>

###  getCveListBySystem

▸ **getCveListBySystem**(inventoryId: *`string`*, filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, cvssFrom?: *`number`*, cvssTo?: *`number`*, publicFrom?: *`string`*, publicTo?: *`string`*, severity?: *`string`*, statusId?: *`string`*, dataFormat?: *`string`*, options?: *`any`*): `AxiosPromise`<[SystemCvesOut](../interfaces/systemcvesout.md)>

*Defined in [api.ts:1697](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1697)*

Shows detailed infomation about all CVEs the system is exposed to.

*__summary__*: CVE report for a system.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inventoryId | `string` |  Inventory ID of the host to be opted in/out. |
| `Optional` filter | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` page | `number` |
| `Optional` pageSize | `number` |
| `Optional` sort | `string` |
| `Optional` cvssFrom | `number` |
| `Optional` cvssTo | `number` |
| `Optional` publicFrom | `string` |
| `Optional` publicTo | `string` |
| `Optional` severity | `string` |
| `Optional` statusId | `string` |
| `Optional` dataFormat | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemCvesOut](../interfaces/systemcvesout.md)>

___
<a id="getstatuslist"></a>

###  getStatusList

▸ **getStatusList**(options?: *`any`*): `AxiosPromise`<[StatusListOut](../interfaces/statuslistout.md)>

*Defined in [api.ts:1708](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1708)*

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
<a id="getsystemslist"></a>

###  getSystemsList

▸ **getSystemsList**(filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, dataFormat?: *`string`*, optOut?: *`boolean`*, options?: *`any`*): `AxiosPromise`<[SystemListOut](../interfaces/systemlistout.md)>

*Defined in [api.ts:1727](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1727)*

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
| `Optional` dataFormat | `string` |
| `Optional` optOut | `boolean` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemListOut](../interfaces/systemlistout.md)>

___
<a id="getversion"></a>

###  getVersion

▸ **getVersion**(options?: *`any`*): `AxiosPromise`<`Object`>

*Defined in [api.ts:1738](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1738)*

Get application version.

*__summary__*: Application version

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Object`>

___
<a id="setstatus"></a>

###  setStatus

▸ **setStatus**(statusIn: *[StatusIn](../interfaces/statusin.md)*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1750](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1750)*

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
<a id="setsystemoptout"></a>

###  setSystemOptOut

▸ **setSystemOptOut**(inventoryId: *`string`*, value: *`boolean`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [api.ts:1763](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L1763)*

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

