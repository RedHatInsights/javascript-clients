[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [SystemApi](systemapi.md)

# Class: SystemApi

SystemApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **SystemApi**

## Index

### Constructors

* [constructor](systemapi.md#constructor)

### Properties

* [axios](systemapi.md#protected-axios)
* [basePath](systemapi.md#protected-basepath)
* [configuration](systemapi.md#protected-configuration)

### Methods

* [systemList](systemapi.md#systemlist)
* [systemRead](systemapi.md#systemread)
* [systemReports](systemapi.md#systemreports)

## Constructors

###  constructor

\+ **new SystemApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[SystemApi](systemapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

Defined in packages/insights/base.ts:49

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** *[SystemApi](systemapi.md)*

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

###  systemList

▸ **systemList**(`limit?`: number, `offset?`: number, `sort?`: "hits" | "last_seen" | "display_name" | "-hits" | "-last_seen" | "-display_name", `displayName?`: string, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[InlineResponse2005](../interfaces/inlineresponse2005.md)›*

*Defined in [packages/insights/api.ts:4729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4729)*

Results can be sorted and systems can be filtered by display name.

**`summary`** Returns systems with their hit count and last upload time.

**`throws`** {RequiredError}

**`memberof`** SystemApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`sort?` | "hits" &#124; "last_seen" &#124; "display_name" &#124; "-hits" &#124; "-last_seen" &#124; "-display_name" |
`displayName?` | string |
`tags?` | Array‹string› |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2005](../interfaces/inlineresponse2005.md)›*

___

###  systemRead

▸ **systemRead**(`uuid`: string, `options?`: any): *AxiosPromise‹[System](../interfaces/system.md)›*

*Defined in [packages/insights/api.ts:4741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4741)*

Retrieve the reports for a single system by Insights Inventory UUID

**`summary`** Retrieve the reports for a single system

**`throws`** {RequiredError}

**`memberof`** SystemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | The system\&#39;s Host ID in the Inventory |
`options?` | any | - |

**Returns:** *AxiosPromise‹[System](../interfaces/system.md)›*

___

###  systemReports

▸ **systemReports**(`uuid`: string, `options?`: any): *AxiosPromise‹[Report](../interfaces/report.md)[]›*

*Defined in [packages/insights/api.ts:4753](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L4753)*

Returns reports that: * are in the user\'s account * have an active, not-deleted rule * where the rule has not been acked by this account If the host ID is not found, return an empty list.

**`summary`** Returns the list of latest reports for an Inventory Host ID.

**`throws`** {RequiredError}

**`memberof`** SystemApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`uuid` | string | The system\&#39;s Host ID in the Inventory |
`options?` | any | - |

**Returns:** *AxiosPromise‹[Report](../interfaces/report.md)[]›*
