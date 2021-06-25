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

*Defined in [api.ts:647](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L647)*

Indicates whether a remediation has been marked as archived

**`memberof`** RemediationDetails

___

###  auto_reboot

• **auto_reboot**: *boolean*

*Defined in [api.ts:653](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L653)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`memberof`** RemediationDetails

___

###  created_at

• **created_at**: *string*

*Defined in [api.ts:665](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L665)*

**`memberof`** RemediationDetails

___

###  created_by

• **created_by**: *[UserOut](userout.md)*

*Defined in [api.ts:659](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L659)*

**`memberof`** RemediationDetails

___

###  id

• **id**: *string*

*Defined in [api.ts:629](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L629)*

**`memberof`** RemediationDetails

___

###  issues

• **issues**: *Array‹[RemediationIssue](remediationissue.md)›*

*Defined in [api.ts:689](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L689)*

**`memberof`** RemediationDetails

___

###  name

• **name**: *string | null*

*Defined in [api.ts:635](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L635)*

**`memberof`** RemediationDetails

___

###  needs_reboot

• **needs_reboot**: *boolean*

*Defined in [api.ts:641](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L641)*

Indicates whether any of the issues contained in the remediation require system reboot

**`memberof`** RemediationDetails

___

###  resolved_count

• **resolved_count**: *number*

*Defined in [api.ts:683](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L683)*

**`memberof`** RemediationDetails

___

###  updated_at

• **updated_at**: *string*

*Defined in [api.ts:677](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L677)*

**`memberof`** RemediationDetails

___

###  updated_by

• **updated_by**: *[UserOut](userout.md)*

*Defined in [api.ts:671](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L671)*

**`memberof`** RemediationDetails
