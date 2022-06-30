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

*Defined in [api.ts:796](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/remediations/api.ts#L796)*

**`memberof`** RemediationIssue

___

###  id

• **id**: *string*

*Defined in [api.ts:790](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/remediations/api.ts#L790)*

**`memberof`** RemediationIssue

___

###  resolution

• **resolution**: *[RemediationIssueResolution](remediationissueresolution.md)*

*Defined in [api.ts:802](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/remediations/api.ts#L802)*

**`memberof`** RemediationIssue

___

### `Optional` resolutions_available

• **resolutions_available**? : *number*

*Defined in [api.ts:808](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/remediations/api.ts#L808)*

The total number of available resolutions for this issue

**`memberof`** RemediationIssue

___

###  systems

• **systems**: *Array‹[SystemOut](systemout.md)›*

*Defined in [api.ts:814](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/remediations/api.ts#L814)*

**`memberof`** RemediationIssue
