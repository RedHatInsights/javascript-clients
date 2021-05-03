[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [RemediationIssue](remediationissue.md)

# Interface: RemediationIssue

**`export`** 

**`interface`** RemediationIssue

## Hierarchy

* **RemediationIssue**

## Index

### Properties

* [description](remediationissue.md#description)
* [id](remediationissue.md#id)
* [resolution](remediationissue.md#resolution)
* [resolutions_available](remediationissue.md#optional-resolutions_available)
* [systems](remediationissue.md#systems)

## Properties

###  description

• **description**: *string*

*Defined in [api.ts:783](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L783)*

**`memberof`** RemediationIssue

___

###  id

• **id**: *string*

*Defined in [api.ts:777](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L777)*

**`memberof`** RemediationIssue

___

###  resolution

• **resolution**: *[RemediationIssueResolution](remediationissueresolution.md)*

*Defined in [api.ts:789](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L789)*

**`memberof`** RemediationIssue

___

### `Optional` resolutions_available

• **resolutions_available**? : *number*

*Defined in [api.ts:795](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L795)*

The total number of available resolutions for this issue

**`memberof`** RemediationIssue

___

###  systems

• **systems**: *Array‹[SystemOut](systemout.md)›*

*Defined in [api.ts:801](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L801)*

**`memberof`** RemediationIssue
