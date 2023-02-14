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

*Defined in [api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L809)*

**`memberof`** RemediationIssue

___

###  id

• **id**: *string*

*Defined in [api.ts:803](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L803)*

**`memberof`** RemediationIssue

___

###  resolution

• **resolution**: *[RemediationIssueResolution](remediationissueresolution.md)*

*Defined in [api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L815)*

**`memberof`** RemediationIssue

___

### `Optional` resolutions_available

• **resolutions_available**? : *number*

*Defined in [api.ts:821](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L821)*

The total number of available resolutions for this issue

**`memberof`** RemediationIssue

___

###  systems

• **systems**: *Array‹[SystemOut](systemout.md)›*

*Defined in [api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L827)*

**`memberof`** RemediationIssue
