[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / SystemDetailsOutData

# Interface: SystemDetailsOutData

**`Export`**

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

• **last\_evaluation**: ``null`` \| `string`

Date of last evaluation.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2504](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2504)

___

### last\_upload

• **last\_upload**: ``null`` \| `string`

Date of the latest upload of archive.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2510](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2510)

___

### opt\_out

• **opt\_out**: `boolean`

System opt out status.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2516](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2516)

___

### os

• **os**: `string`

Operating system.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2522](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2522)

___

### rules\_evaluation

• **rules\_evaluation**: ``null`` \| `string`

Date of last security rules evaluation.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2528](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2528)

___

### stale

• `Optional` **stale**: `boolean`

System stale status.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2534](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2534)

___

### tags

• **tags**: [`SystemDetailsOutDataTags`](SystemDetailsOutDataTags.md)[]

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2540](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2540)

___

### updated

• `Optional` **updated**: ``null`` \| `string`

Date of the lastest upload of archive taken from Inventory syndicated data.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2546](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2546)
