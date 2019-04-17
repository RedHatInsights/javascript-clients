[@redhat-cloud-services/remediations-client](../README.md) > [RemediationIssue](../interfaces/remediationissue.md)

# Interface: RemediationIssue

*__export__*: 

*__interface__*: RemediationIssue

## Hierarchy

**RemediationIssue**

## Index

### Properties

* [description](remediationissue.md#description)
* [id](remediationissue.md#id)
* [resolution](remediationissue.md#resolution)
* [resolutionsAvailable](remediationissue.md#resolutionsavailable)
* [systems](remediationissue.md#systems)

---

## Properties

<a id="description"></a>

###  description

**● description**: *`string`*

*Defined in [api.ts:329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L329)*

*__type__*: {string}

*__memberof__*: RemediationIssue

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Defined in [api.ts:323](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L323)*

*__type__*: {string}

*__memberof__*: RemediationIssue

___
<a id="resolution"></a>

###  resolution

**● resolution**: *[RemediationIssueResolution](remediationissueresolution.md)*

*Defined in [api.ts:335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L335)*

*__type__*: {RemediationIssueResolution}

*__memberof__*: RemediationIssue

___
<a id="resolutionsavailable"></a>

### `<Optional>` resolutionsAvailable

**● resolutionsAvailable**: *`number`*

*Defined in [api.ts:341](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L341)*

The total number of available resolutions for this issue

*__type__*: {number}

*__memberof__*: RemediationIssue

___
<a id="systems"></a>

###  systems

**● systems**: *`Array`<[SystemOut](systemout.md)>*

*Defined in [api.ts:347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L347)*

*__type__*: {Array}

*__memberof__*: RemediationIssue

___

