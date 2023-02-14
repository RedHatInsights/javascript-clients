[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [RemediationDetails](remediationdetails.md)

# Interface: RemediationDetails

**`export`** 

**`interface`** RemediationDetails

## Hierarchy

* **RemediationDetails**

## Index

### Properties

* [archived](remediationdetails.md#archived)
* [auto_reboot](remediationdetails.md#auto_reboot)
* [created_at](remediationdetails.md#created_at)
* [created_by](remediationdetails.md#created_by)
* [id](remediationdetails.md#id)
* [issues](remediationdetails.md#issues)
* [name](remediationdetails.md#name)
* [needs_reboot](remediationdetails.md#needs_reboot)
* [resolved_count](remediationdetails.md#resolved_count)
* [updated_at](remediationdetails.md#updated_at)
* [updated_by](remediationdetails.md#updated_by)

## Properties

###  archived

• **archived**: *boolean*

*Defined in [api.ts:673](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L673)*

Indicates whether a remediation has been marked as archived

**`memberof`** RemediationDetails

___

###  auto_reboot

• **auto_reboot**: *boolean*

*Defined in [api.ts:679](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L679)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`memberof`** RemediationDetails

___

###  created_at

• **created_at**: *string*

*Defined in [api.ts:691](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L691)*

**`memberof`** RemediationDetails

___

###  created_by

• **created_by**: *[UserOut](userout.md)*

*Defined in [api.ts:685](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L685)*

**`memberof`** RemediationDetails

___

###  id

• **id**: *string*

*Defined in [api.ts:655](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L655)*

**`memberof`** RemediationDetails

___

###  issues

• **issues**: *Array‹[RemediationIssue](remediationissue.md)›*

*Defined in [api.ts:715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L715)*

**`memberof`** RemediationDetails

___

###  name

• **name**: *string | null*

*Defined in [api.ts:661](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L661)*

**`memberof`** RemediationDetails

___

###  needs_reboot

• **needs_reboot**: *boolean*

*Defined in [api.ts:667](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L667)*

Indicates whether any of the issues contained in the remediation require system reboot

**`memberof`** RemediationDetails

___

###  resolved_count

• **resolved_count**: *number*

*Defined in [api.ts:709](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L709)*

**`memberof`** RemediationDetails

___

###  updated_at

• **updated_at**: *string*

*Defined in [api.ts:703](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L703)*

**`memberof`** RemediationDetails

___

###  updated_by

• **updated_by**: *[UserOut](userout.md)*

*Defined in [api.ts:697](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L697)*

**`memberof`** RemediationDetails
