[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationListItem

# Interface: RemediationListItem

**`Export`**

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

[api.ts:1033](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1033)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:991](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L991)

___

### created\_by

• **created\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:985](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L985)

___

### id

• **id**: `string`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:973](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L973)

___

### issue\_count

• **issue\_count**: `number`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:1009](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1009)

___

### name

• **name**: `string`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:979](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L979)

___

### needs\_reboot

• **needs\_reboot**: `boolean`

Indicates whether any of the issues contained in the remediation require system reboot

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:1027](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1027)

___

### playbook\_runs

• `Optional` **playbook\_runs**: [`PlaybookRunDetails`](PlaybookRunDetails.md)[]

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:1039](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1039)

___

### resolved\_count

• **resolved\_count**: `number`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:1021](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1021)

___

### system\_count

• **system\_count**: `number`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:1015](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1015)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:1003](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L1003)

___

### updated\_by

• **updated\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationListItem

#### Defined in

[api.ts:997](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L997)
