[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [RemediationDetails](remediationdetails.md)

# Interface: RemediationDetails

**`export`** 

**`interface`** RemediationDetails

## Hierarchy

* **RemediationDetails**

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

## Properties

###  autoReboot

• **autoReboot**: *boolean*

*Defined in [api.ts:711](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L711)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`type`** {boolean}

**`memberof`** RemediationDetails

___

###  createdAt

• **createdAt**: *Date*

*Defined in [api.ts:723](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L723)*

**`type`** {Date}

**`memberof`** RemediationDetails

___

###  createdBy

• **createdBy**: *[UserOut](userout.md)*

*Defined in [api.ts:717](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L717)*

**`type`** {UserOut}

**`memberof`** RemediationDetails

___

###  id

• **id**: *string*

*Defined in [api.ts:693](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L693)*

**`type`** {string}

**`memberof`** RemediationDetails

___

###  issues

• **issues**: *Array‹[RemediationIssue](remediationissue.md)›*

*Defined in [api.ts:741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L741)*

**`type`** {Array<RemediationIssue>}

**`memberof`** RemediationDetails

___

###  name

• **name**: *string | null*

*Defined in [api.ts:699](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L699)*

**`type`** {string}

**`memberof`** RemediationDetails

___

###  needsReboot

• **needsReboot**: *boolean*

*Defined in [api.ts:705](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L705)*

Indicates whether any of the issues contained in the remediation require system reboot

**`type`** {boolean}

**`memberof`** RemediationDetails

___

###  updatedAt

• **updatedAt**: *Date*

*Defined in [api.ts:735](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L735)*

**`type`** {Date}

**`memberof`** RemediationDetails

___

###  updatedBy

• **updatedBy**: *[UserOut](userout.md)*

*Defined in [api.ts:729](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L729)*

**`type`** {UserOut}

**`memberof`** RemediationDetails
