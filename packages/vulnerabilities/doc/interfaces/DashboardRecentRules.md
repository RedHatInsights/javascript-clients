[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / DashboardRecentRules

# Interface: DashboardRecentRules

Security rule.

**`Export`**

**`Interface`**

DashboardRecentRules

## Table of contents

### Properties

- [associated\_cves](DashboardRecentRules.md#associated_cves)
- [description](DashboardRecentRules.md#description)
- [id](DashboardRecentRules.md#id)
- [name](DashboardRecentRules.md#name)
- [node\_id](DashboardRecentRules.md#node_id)
- [public\_date](DashboardRecentRules.md#public_date)
- [severity](DashboardRecentRules.md#severity)
- [systems\_affected](DashboardRecentRules.md#systems_affected)

## Properties

### associated\_cves

• `Optional` **associated\_cves**: `string`[]

List of CVEs associated with the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L659)

___

### description

• `Optional` **description**: `string`

Description of the issue related with the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:665](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L665)

___

### id

• `Optional` **id**: `string`

ID of the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L671)

___

### name

• `Optional` **name**: `string`

Name of the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:677](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L677)

___

### node\_id

• `Optional` **node\_id**: `number`

Node id of access.redhat.com/node/_* article.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:683](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L683)

___

### public\_date

• `Optional` **public\_date**: `string`

String representation of ISO-8601 formatted date of release of the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:689](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L689)

___

### severity

• `Optional` **severity**: `number`

Number representation of the security rule severity.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:695](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L695)

___

### systems\_affected

• `Optional` **systems\_affected**: `number`

Number of systems triggering the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:701](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L701)
