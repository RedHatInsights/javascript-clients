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

*Defined in [api.ts:642](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L642)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`type`** {boolean}

**`memberof`** RemediationDetails

___

###  createdAt

• **createdAt**: *Date*

*Defined in [api.ts:654](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L654)*

**`type`** {Date}

**`memberof`** RemediationDetails

___

###  createdBy

• **createdBy**: *[UserOut](userout.md)*

*Defined in [api.ts:648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L648)*

**`type`** {UserOut}

**`memberof`** RemediationDetails

___

###  id

• **id**: *string*

*Defined in [api.ts:624](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L624)*

**`type`** {string}

**`memberof`** RemediationDetails

___

###  issues

• **issues**: *Array‹[RemediationIssue](remediationissue.md)›*

*Defined in [api.ts:672](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L672)*

**`type`** {Array<RemediationIssue>}

**`memberof`** RemediationDetails

___

###  name

• **name**: *string | null*

*Defined in [api.ts:630](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L630)*

**`type`** {string}

**`memberof`** RemediationDetails

___

###  needsReboot

• **needsReboot**: *boolean*

*Defined in [api.ts:636](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L636)*

Indicates whether any of the issues contained in the remediation require system reboot

**`type`** {boolean}

**`memberof`** RemediationDetails

___

###  updatedAt

• **updatedAt**: *Date*

*Defined in [api.ts:666](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L666)*

**`type`** {Date}

**`memberof`** RemediationDetails

___

###  updatedBy

• **updatedBy**: *[UserOut](userout.md)*

*Defined in [api.ts:660](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L660)*

**`type`** {UserOut}

**`memberof`** RemediationDetails
