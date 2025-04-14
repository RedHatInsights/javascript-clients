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
- [rhsm\_lock](SystemDetailsOutData.md#rhsm_lock)
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

[api.ts:2558](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2558)

___

### last\_upload

• **last\_upload**: ``null`` \| `string`

Date of the latest upload of archive.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2576](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2576)

___

### opt\_out

• **opt\_out**: `boolean`

System opt out status.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2570](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2570)

___

### os

• **os**: `string`

Operating system.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2594](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2594)

___

### rhsm\_lock

• **rhsm\_lock**: ``null`` \| `string`

System is locked to following RHSM version.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2600](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2600)

___

### rules\_evaluation

• **rules\_evaluation**: ``null`` \| `string`

Date of last security rules evaluation.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2564](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2564)

___

### stale

• `Optional` **stale**: `boolean`

System stale status.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2582](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2582)

___

### tags

• **tags**: [`SystemDetailsOutDataTags`](SystemDetailsOutDataTags.md)[]

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2606](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2606)

___

### updated

• `Optional` **updated**: ``null`` \| `string`

Date of the lastest upload of archive taken from Inventory syndicated data.

**`Memberof`**

SystemDetailsOutData

#### Defined in

[api.ts:2588](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2588)
