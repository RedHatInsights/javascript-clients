[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersSystemAdvisoriesDBLookup

# Interface: ControllersSystemAdvisoriesDBLookup

**`Export`**

ControllersSystemAdvisoriesDBLookup

## Table of contents

### Properties

- [advisory\_type](ControllersSystemAdvisoriesDBLookup.md#advisory_type)
- [advisory\_type\_name](ControllersSystemAdvisoriesDBLookup.md#advisory_type_name)
- [cve\_count](ControllersSystemAdvisoriesDBLookup.md#cve_count)
- [description](ControllersSystemAdvisoriesDBLookup.md#description)
- [id](ControllersSystemAdvisoriesDBLookup.md#id)
- [public\_date](ControllersSystemAdvisoriesDBLookup.md#public_date)
- [reboot\_required](ControllersSystemAdvisoriesDBLookup.md#reboot_required)
- [release\_versions](ControllersSystemAdvisoriesDBLookup.md#release_versions)
- [severity](ControllersSystemAdvisoriesDBLookup.md#severity)
- [synopsis](ControllersSystemAdvisoriesDBLookup.md#synopsis)

## Properties

### advisory\_type

• `Optional` **advisory\_type**: `number`

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1016](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1016)

___

### advisory\_type\_name

• `Optional` **advisory\_type\_name**: `string`

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1022](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1022)

___

### cve\_count

• `Optional` **cve\_count**: `number`

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1028](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1028)

___

### description

• `Optional` **description**: `string`

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1034](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1034)

___

### id

• `Optional` **id**: `string`

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1040](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1040)

___

### public\_date

• `Optional` **public\_date**: `string`

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1046](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1046)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1052](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1052)

___

### release\_versions

• `Optional` **release\_versions**: `string`[]

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1058](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1058)

___

### severity

• `Optional` **severity**: `number`

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1064](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1064)

___

### synopsis

• `Optional` **synopsis**: `string`

**`Memberof`**

ControllersSystemAdvisoriesDBLookup

#### Defined in

[api.ts:1070](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/patch/api.ts#L1070)
