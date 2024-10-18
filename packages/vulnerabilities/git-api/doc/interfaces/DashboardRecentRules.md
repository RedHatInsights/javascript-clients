[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / DashboardRecentRules

# Interface: DashboardRecentRules

Security rule.

**`Export`**

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

[api.ts:673](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L673)

___

### description

• `Optional` **description**: `string`

Description of the issue related with the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:679](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L679)

___

### id

• `Optional` **id**: `string`

ID of the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:685](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L685)

___

### name

• `Optional` **name**: `string`

Name of the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:691](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L691)

___

### node\_id

• `Optional` **node\_id**: ``null`` \| `number`

Node id of access.redhat.com/node/_* article.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:697](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L697)

___

### public\_date

• `Optional` **public\_date**: ``null`` \| `string`

String representation of ISO-8601 formatted date of release of the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:703](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L703)

___

### severity

• `Optional` **severity**: `number`

Number representation of the security rule severity.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:709](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L709)

___

### systems\_affected

• `Optional` **systems\_affected**: `number`

Number of systems triggering the security rule.

**`Memberof`**

DashboardRecentRules

#### Defined in

[api.ts:715](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L715)
