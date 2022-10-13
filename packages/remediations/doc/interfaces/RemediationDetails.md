[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationDetails

# Interface: RemediationDetails

**`Export`**

**`Interface`**

RemediationDetails

## Table of contents

### Properties

- [archived](RemediationDetails.md#archived)
- [auto\_reboot](RemediationDetails.md#auto_reboot)
- [created\_at](RemediationDetails.md#created_at)
- [created\_by](RemediationDetails.md#created_by)
- [id](RemediationDetails.md#id)
- [issues](RemediationDetails.md#issues)
- [name](RemediationDetails.md#name)
- [needs\_reboot](RemediationDetails.md#needs_reboot)
- [resolved\_count](RemediationDetails.md#resolved_count)
- [updated\_at](RemediationDetails.md#updated_at)
- [updated\_by](RemediationDetails.md#updated_by)

## Properties

### archived

• **archived**: `boolean`

Indicates whether a remediation has been marked as archived

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:660](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L660)

___

### auto\_reboot

• **auto\_reboot**: `boolean`

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:666](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L666)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:678](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L678)

___

### created\_by

• **created\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:672](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L672)

___

### id

• **id**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:642](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L642)

___

### issues

• **issues**: [`RemediationIssue`](RemediationIssue.md)[]

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L702)

___

### name

• **name**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:648](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L648)

___

### needs\_reboot

• **needs\_reboot**: `boolean`

Indicates whether any of the issues contained in the remediation require system reboot

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:654](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L654)

___

### resolved\_count

• **resolved\_count**: `number`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:696](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L696)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:690](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L690)

___

### updated\_by

• **updated\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:684](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L684)
