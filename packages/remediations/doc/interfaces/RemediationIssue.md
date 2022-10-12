[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationIssue

# Interface: RemediationIssue

**`Export`**

**`Interface`**

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

[api.ts:796](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L796)

___

### id

• **id**: `string`

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:790](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L790)

___

### resolution

• **resolution**: [`RemediationIssueResolution`](RemediationIssueResolution.md)

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:802](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L802)

___

### resolutions\_available

• `Optional` **resolutions\_available**: `number`

The total number of available resolutions for this issue

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:808](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L808)

___

### systems

• **systems**: [`SystemOut`](SystemOut.md)[]

**`Memberof`**

RemediationIssue

#### Defined in

[api.ts:814](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L814)
