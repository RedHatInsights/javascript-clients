[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationIssue

# Interface: RemediationIssue

**`Export`**

RemediationIssue

## Table of contents

### Properties

- [description](RemediationIssue.md#description)
- [id](RemediationIssue.md#id)
- [resolution](RemediationIssue.md#resolution)
- [resolutions\_available](RemediationIssue.md#resolutions_available)
- [systems](RemediationIssue.md#systems)

## Properties

### description

• **description**: `string`

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:854](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L854)

___

### id

• **id**: `string`

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:848](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L848)

___

### resolution

• **resolution**: [`RemediationIssueResolution`](RemediationIssueResolution.md)

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:860](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L860)

___

### resolutions\_available

• `Optional` **resolutions\_available**: `number`

The total number of available resolutions for this issue

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:866](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L866)

___

### systems

• **systems**: [`SystemOut`](SystemOut.md)[]

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:872](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L872)
