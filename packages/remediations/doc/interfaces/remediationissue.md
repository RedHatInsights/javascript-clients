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
* [resolutionsAvailable](remediationissue.md#optional-resolutionsavailable)
* [systems](remediationissue.md#systems)

## Properties

###  description

• **description**: *string*

*Defined in [api.ts:833](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L833)*

**`type`** {string}

**`memberof`** RemediationIssue

___

###  id

• **id**: *string*

*Defined in [api.ts:827](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L827)*

**`type`** {string}

**`memberof`** RemediationIssue

___

###  resolution

• **resolution**: *[RemediationIssueResolution](remediationissueresolution.md)*

*Defined in [api.ts:839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L839)*

**`type`** {RemediationIssueResolution}

**`memberof`** RemediationIssue

___

### `Optional` resolutionsAvailable

• **resolutionsAvailable**? : *number*

*Defined in [api.ts:845](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L845)*

The total number of available resolutions for this issue

**`type`** {number}

**`memberof`** RemediationIssue

___

###  systems

• **systems**: *Array‹[SystemOut](systemout.md)›*

*Defined in [api.ts:851](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L851)*

**`type`** {Array<SystemOut>}

**`memberof`** RemediationIssue
