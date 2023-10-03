[@redhat-cloud-services/insights-client](../README.md) / [Exports](../modules.md) / AccountApi

# Class: AccountApi

AccountApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`AccountApi`**

## Table of contents

### Constructors

- [constructor](AccountApi.md#constructor)

### Properties

- [axios](AccountApi.md#axios)
- [basePath](AccountApi.md#basepath)
- [configuration](AccountApi.md#configuration)

### Methods

- [accountHostsRetrieve](AccountApi.md#accounthostsretrieve)
- [accountList](AccountApi.md#accountlist)
- [accountRetrieve](AccountApi.md#accountretrieve)

## Constructors

### constructor

• **new AccountApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/base.ts#L49)

## Methods

### accountHostsRetrieve

▸ **accountHostsRetrieve**(`orgId`, `options?`): `Promise`<`AxiosResponse`<[`OrgId`](../interfaces/OrgId.md), `any`\>\>

List details about the number of hosts in this account by org_id.  As well as the total number of hosts, we report on the number of hosts in various states of staleness:   * fresh: hosts that have updated in the last 26 hours   * stale: hosts not updated in the last 26 hours - we display the     results for these hosts but a warning is shown to say they are     not updating   * warn: hosts not updated in the last week - these are not shown     in any queries  This may have other aggregate data added in the future.

**`Throws`**

**`Memberof`**

AccountApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orgId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrgId`](../interfaces/OrgId.md), `any`\>\>

#### Defined in

[api.ts:2633](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2633)

___

### accountList

▸ **accountList**(`limit?`, `offset?`, `options?`): `Promise`<`AxiosResponse`<[`PaginatedOrgIdList`](../interfaces/PaginatedOrgIdList.md), `any`\>\>

List all accounts by org_id we know about (through the host table).  No other information about the accounts is provided in this view.

**`Throws`**

**`Memberof`**

AccountApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Number of results to return per page. |
| `offset?` | `number` | The initial index from which to return the results. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PaginatedOrgIdList`](../interfaces/PaginatedOrgIdList.md), `any`\>\>

#### Defined in

[api.ts:2645](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2645)

___

### accountRetrieve

▸ **accountRetrieve**(`orgId`, `options?`): `Promise`<`AxiosResponse`<[`OrgId`](../interfaces/OrgId.md), `any`\>\>

List information relating to other accounts.  This allows us to collect data that requires the user to specify an org_id number, such as number of systems currently registered to that org.  param: org_id: Org ID number of a Red Hat customer.

**`Throws`**

**`Memberof`**

AccountApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orgId` | `string` |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`OrgId`](../interfaces/OrgId.md), `any`\>\>

#### Defined in

[api.ts:2656](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L2656)
