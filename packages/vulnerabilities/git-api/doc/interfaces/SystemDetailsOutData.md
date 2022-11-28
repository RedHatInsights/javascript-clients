[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / SystemDetailsOutData

# Interface: SystemDetailsOutData

**`Export`**

**`Interface`**

SystemDetailsOutData

## Table of contents

### Properties

- [last\_evaluation](SystemDetailsOutData.md#last_evaluation)
- [last\_upload](SystemDetailsOutData.md#last_upload)
- [opt\_out](SystemDetailsOutData.md#opt_out)
- [os](SystemDetailsOutData.md#os)
- [rules\_evaluation](SystemDetailsOutData.md#rules_evaluation)
- [stale](SystemDetailsOutData.md#stale)
- [tags](SystemDetailsOutData.md#tags)
- [updated](SystemDetailsOutData.md#updated)

## Properties

### last\_evaluation

• **last\_evaluation**: `string`

Date of last evaluation.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2362](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2362)

___

### last\_upload

• **last\_upload**: `string`

Date of the latest upload of archive.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2368](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2368)

___

### opt\_out

• **opt\_out**: `boolean`

System opt out status.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2374)

___

### os

• **os**: `string`

Operating system.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2380](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2380)

___

### rules\_evaluation

• **rules\_evaluation**: `string`

Date of last security rules evaluation.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2386)

___

### stale

• `Optional` **stale**: `boolean`

System stale status.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2392)

___

### tags

• **tags**: [`SystemDetailsOutDataTags`](SystemDetailsOutDataTags.md)[]

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2398)

___

### updated

• `Optional` **updated**: `string`

Date of the lastest upload of archive taken from Inventory syndicated data.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2404](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2404)
