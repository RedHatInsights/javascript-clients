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

[api.ts:686](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L686)

___

### auto\_reboot

• **auto\_reboot**: `boolean`

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:692](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L692)

___

### created\_at

• **created\_at**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:704](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L704)

___

### created\_by

• **created\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:698](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L698)

___

### id

• **id**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:668](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L668)

___

### issues

• **issues**: [`RemediationIssue`](RemediationIssue.md)[]

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:728](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L728)

___

### name

• **name**: ``null`` \| `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:674](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L674)

___

### needs\_reboot

• **needs\_reboot**: `boolean`

Indicates whether any of the issues contained in the remediation require system reboot

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:680](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L680)

___

### resolved\_count

• **resolved\_count**: `number`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:722](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L722)

___

### updated\_at

• **updated\_at**: `string`

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:716](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L716)

___

### updated\_by

• **updated\_by**: [`UserOut`](UserOut.md)

**`Memberof`**

RemediationDetails

#### Defined in

[api.ts:710](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L710)
