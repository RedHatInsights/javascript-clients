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

*Defined in [api.ts:768](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L768)*

**`memberof`** RemediationIssue

___

###  id

• **id**: *string*

*Defined in [api.ts:762](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L762)*

**`memberof`** RemediationIssue

___

###  resolution

• **resolution**: *[RemediationIssueResolution](remediationissueresolution.md)*

*Defined in [api.ts:774](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L774)*

**`memberof`** RemediationIssue

___

### `Optional` resolutions_available

• **resolutions_available**? : *number*

*Defined in [api.ts:780](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L780)*

The total number of available resolutions for this issue

**`memberof`** RemediationIssue

___

###  systems

• **systems**: *Array‹[SystemOut](systemout.md)›*

*Defined in [api.ts:786](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L786)*

**`memberof`** RemediationIssue
