[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationDetails

# Interface: RemediationDetails

**`Export`**

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

[api.ts:718](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L718)

___

### auto\_reboot

• **auto\_reboot**: `boolean`

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:724](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L724)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:736](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L736)

___

### created\_by

• **created\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:730](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L730)

___

### id

• **id**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:700](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L700)

___

### issues

• **issues**: [`RemediationIssue`](RemediationIssue.md)[]

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:760](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L760)

___

### name

• **name**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:706](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L706)

___

### needs\_reboot

• **needs\_reboot**: `boolean`

Indicates whether any of the issues contained in the remediation require system reboot

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:712](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L712)

___

### resolved\_count

• **resolved\_count**: `number`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:754](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L754)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:748](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L748)

___

### updated\_by

• **updated\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:742](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/remediations/api.ts#L742)
