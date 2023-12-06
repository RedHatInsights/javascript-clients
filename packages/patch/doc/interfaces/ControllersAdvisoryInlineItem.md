[@redhat-cloud-services/patch-client](../README.md) / [Exports](../modules.md) / ControllersAdvisoryInlineItem

# Interface: ControllersAdvisoryInlineItem

**`Export`**

**`Interface`**

ControllersAdvisoryInlineItem

## Table of contents

### Properties

- [advisory\_type](ControllersAdvisoryInlineItem.md#advisory_type)
- [advisory\_type\_name](ControllersAdvisoryInlineItem.md#advisory_type_name)
- [applicable\_systems](ControllersAdvisoryInlineItem.md#applicable_systems)
- [cve\_count](ControllersAdvisoryInlineItem.md#cve_count)
- [description](ControllersAdvisoryInlineItem.md#description)
- [id](ControllersAdvisoryInlineItem.md#id)
- [public\_date](ControllersAdvisoryInlineItem.md#public_date)
- [reboot\_required](ControllersAdvisoryInlineItem.md#reboot_required)
- [release\_versions](ControllersAdvisoryInlineItem.md#release_versions)
- [severity](ControllersAdvisoryInlineItem.md#severity)
- [synopsis](ControllersAdvisoryInlineItem.md#synopsis)

## Properties

### advisory\_type

• `Optional` **advisory\_type**: `number`

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:200](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L200)

___

### advisory\_type\_name

• `Optional` **advisory\_type\_name**: `string`

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:206](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L206)

___

### applicable\_systems

• `Optional` **applicable\_systems**: `number`

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:212](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L212)

___

### cve\_count

• `Optional` **cve\_count**: `number`

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:218](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L218)

___

### description

• `Optional` **description**: `string`

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:224](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L224)

___

### id

• `Optional` **id**: `string`

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:230](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L230)

___

### public\_date

• `Optional` **public\_date**: `string`

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:236](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L236)

___

### reboot\_required

• `Optional` **reboot\_required**: `boolean`

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:242](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L242)

___

### release\_versions

• `Optional` **release\_versions**: `string`[]

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:248](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L248)

___

### severity

• `Optional` **severity**: `number`

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:254](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L254)

___

### synopsis

• `Optional` **synopsis**: `string`

**`Memberof`**

ControllersAdvisoryInlineItem

#### Defined in

[api.ts:260](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/patch/api.ts#L260)
