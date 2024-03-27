[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersAdvisoryItemAttributes

# Interface: ControllersAdvisoryItemAttributes

**`Export`**

**`Interface`**

ControllersAdvisoryItemAttributes

## Table of contents

### Properties

- [advisory\_type](ControllersAdvisoryItemAttributes.md#advisory_type)
- [advisory\_type\_name](ControllersAdvisoryItemAttributes.md#advisory_type_name)
- [applicable\_systems](ControllersAdvisoryItemAttributes.md#applicable_systems)
- [cve\_count](ControllersAdvisoryItemAttributes.md#cve_count)
- [description](ControllersAdvisoryItemAttributes.md#description)
- [public\_date](ControllersAdvisoryItemAttributes.md#public_date)
- [reboot\_required](ControllersAdvisoryItemAttributes.md#reboot_required)
- [release\_versions](ControllersAdvisoryItemAttributes.md#release_versions)
- [severity](ControllersAdvisoryItemAttributes.md#severity)
- [synopsis](ControllersAdvisoryItemAttributes.md#synopsis)

## Properties

### advisory\_type

• `Optional` **advisory\_type**: `number`

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:298](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L298)

___

### advisory\_type\_name

• `Optional` **advisory\_type\_name**: `string`

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:304](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L304)

___

### applicable\_systems

• `Optional` **applicable\_systems**: `number`

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:310](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L310)

___

### cve\_count

• `Optional` **cve\_count**: `number`

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:316](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L316)

___

### description

• `Optional` **description**: `string`

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:322](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L322)

___

### public\_date

• `Optional` **public\_date**: `string`

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:328](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L328)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:334](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L334)

___

### release\_versions

• `Optional` **release\_versions**: `string`[]

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:340](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L340)

___

### severity

• `Optional` **severity**: `number`

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:346](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L346)

___

### synopsis

• `Optional` **synopsis**: `string`

**`Memberof`**

ControllersAdvisoryItemAttributes

#### Defined in

[api.ts:352](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L352)
