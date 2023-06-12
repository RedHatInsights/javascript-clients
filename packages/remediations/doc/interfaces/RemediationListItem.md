[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationListItem

# Interface: RemediationListItem

**`Export`**

**`Interface`**

RemediationListItem

## Table of contents

### Properties

- [archived](RemediationListItem.md#archived)
- [created\_at](RemediationListItem.md#created_at)
- [created\_by](RemediationListItem.md#created_by)
- [id](RemediationListItem.md#id)
- [issue\_count](RemediationListItem.md#issue_count)
- [name](RemediationListItem.md#name)
- [needs\_reboot](RemediationListItem.md#needs_reboot)
- [playbook\_runs](RemediationListItem.md#playbook_runs)
- [resolved\_count](RemediationListItem.md#resolved_count)
- [system\_count](RemediationListItem.md#system_count)
- [updated\_at](RemediationListItem.md#updated_at)
- [updated\_by](RemediationListItem.md#updated_by)

## Properties

### archived

• **archived**: `boolean`

Indicates whether a remediation has been marked as archived

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:988](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L988)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:946](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L946)

___

### created\_by

• **created\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:940](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L940)

___

### id

• **id**: `string`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:928](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L928)

___

### issue\_count

• **issue\_count**: `number`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:964](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L964)

___

### name

• **name**: `string`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:934](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L934)

___

### needs\_reboot

• **needs\_reboot**: `boolean`

Indicates whether any of the issues contained in the remediation require system reboot

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:982](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L982)

___

### playbook\_runs

• `Optional` **playbook\_runs**: [`PlaybookRunDetails`](PlaybookRunDetails.md)[]

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:994](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L994)

___

### resolved\_count

• **resolved\_count**: `number`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:976](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L976)

___

### system\_count

• **system\_count**: `number`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:970](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L970)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:958](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L958)

___

### updated\_by

• **updated\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:952](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L952)
