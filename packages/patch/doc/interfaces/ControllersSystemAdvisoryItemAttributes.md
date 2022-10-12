[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersSystemAdvisoryItemAttributes

# Interface: ControllersSystemAdvisoryItemAttributes

**`Export`**

**`Interface`**

ControllersSystemAdvisoryItemAttributes

## Table of contents

### Properties

- [advisory\_type](ControllersSystemAdvisoryItemAttributes.md#advisory_type)
- [advisory\_type\_name](ControllersSystemAdvisoryItemAttributes.md#advisory_type_name)
- [cve\_count](ControllersSystemAdvisoryItemAttributes.md#cve_count)
- [description](ControllersSystemAdvisoryItemAttributes.md#description)
- [public\_date](ControllersSystemAdvisoryItemAttributes.md#public_date)
- [reboot\_required](ControllersSystemAdvisoryItemAttributes.md#reboot_required)
- [release\_versions](ControllersSystemAdvisoryItemAttributes.md#release_versions)
- [severity](ControllersSystemAdvisoryItemAttributes.md#severity)
- [synopsis](ControllersSystemAdvisoryItemAttributes.md#synopsis)

## Properties

### advisory\_type

• `Optional` **advisory\_type**: `number`

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1133)

___

### advisory\_type\_name

• `Optional` **advisory\_type\_name**: `string`

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1139](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1139)

___

### cve\_count

• `Optional` **cve\_count**: `number`

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1145)

___

### description

• `Optional` **description**: `string`

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1151](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1151)

___

### public\_date

• `Optional` **public\_date**: `string`

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1157](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1157)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1163)

___

### release\_versions

• `Optional` **release\_versions**: `string`[]

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1169](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1169)

___

### severity

• `Optional` **severity**: `number`

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1175](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1175)

___

### synopsis

• `Optional` **synopsis**: `string`

**`Memberof`**

ControllersSystemAdvisoryItemAttributes

#### Defined in

[api.ts:1181](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/patch/api.ts#L1181)
