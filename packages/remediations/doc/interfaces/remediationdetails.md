[@redhat-cloud-services/remediations-client](../README.md) > [RemediationDetails](../interfaces/remediationdetails.md)

# Interface: RemediationDetails

*__export__*: 

*__interface__*: RemediationDetails

## Hierarchy

**RemediationDetails**

## Index

### Properties

* [autoReboot](remediationdetails.md#autoreboot)
* [createdAt](remediationdetails.md#createdat)
* [createdBy](remediationdetails.md#createdby)
* [id](remediationdetails.md#id)
* [issues](remediationdetails.md#issues)
* [name](remediationdetails.md#name)
* [needsReboot](remediationdetails.md#needsreboot)
* [updatedAt](remediationdetails.md#updatedat)
* [updatedBy](remediationdetails.md#updatedby)

---

## Properties

<a id="autoreboot"></a>

###  autoReboot

**● autoReboot**: *`boolean`*

*Defined in [api.ts:317](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L317)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

*__type__*: {boolean}

*__memberof__*: RemediationDetails

___
<a id="createdat"></a>

###  createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:329](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L329)*

*__type__*: {Date}

*__memberof__*: RemediationDetails

___
<a id="createdby"></a>

###  createdBy

**● createdBy**: *[UserOut](userout.md)*

*Defined in [api.ts:323](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L323)*

*__type__*: {UserOut}

*__memberof__*: RemediationDetails

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Defined in [api.ts:299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L299)*

*__type__*: {string}

*__memberof__*: RemediationDetails

___
<a id="issues"></a>

###  issues

**● issues**: *`Array`<[RemediationIssue](remediationissue.md)>*

*Defined in [api.ts:347](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L347)*

*__type__*: {Array}

*__memberof__*: RemediationDetails

___
<a id="name"></a>

###  name

**● name**: *`string` \| `null`*

*Defined in [api.ts:305](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L305)*

*__type__*: {string}

*__memberof__*: RemediationDetails

___
<a id="needsreboot"></a>

###  needsReboot

**● needsReboot**: *`boolean`*

*Defined in [api.ts:311](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L311)*

Indicates whether any of the issues contained in the remediation require system reboot

*__type__*: {boolean}

*__memberof__*: RemediationDetails

___
<a id="updatedat"></a>

###  updatedAt

**● updatedAt**: *`Date`*

*Defined in [api.ts:341](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L341)*

*__type__*: {Date}

*__memberof__*: RemediationDetails

___
<a id="updatedby"></a>

###  updatedBy

**● updatedBy**: *[UserOut](userout.md)*

*Defined in [api.ts:335](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L335)*

*__type__*: {UserOut}

*__memberof__*: RemediationDetails

___

