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

*Defined in [api.ts:764](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L764)*

*__type__*: {string}

*__memberof__*: RemediationIssue

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Defined in [api.ts:758](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L758)*

*__type__*: {string}

*__memberof__*: RemediationIssue

___
<a id="resolution"></a>

###  resolution

**● resolution**: *[RemediationIssueResolution](remediationissueresolution.md)*

*Defined in [api.ts:770](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L770)*

*__type__*: {RemediationIssueResolution}

*__memberof__*: RemediationIssue

___
<a id="resolutionsavailable"></a>

### `<Optional>` resolutionsAvailable

**● resolutionsAvailable**: *`number`*

*Defined in [api.ts:776](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L776)*

The total number of available resolutions for this issue

*__type__*: {number}

*__memberof__*: RemediationIssue

___
<a id="systems"></a>

###  systems

**● systems**: *`Array`<[SystemOut](systemout.md)>*

*Defined in [api.ts:782](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L782)*

*__type__*: {Array}

*__memberof__*: RemediationIssue

___

