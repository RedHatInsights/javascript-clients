[@redhat-cloud-services/patch-client](../README.md) › [Globals](../globals.md) › [ControllersAdvisoryInlineItem](controllersadvisoryinlineitem.md)

# Interface: ControllersAdvisoryInlineItem

**`export`** 

**`interface`** ControllersAdvisoryInlineItem

## Hierarchy

* **ControllersAdvisoryInlineItem**

## Index

### Properties

* [advisory_type](controllersadvisoryinlineitem.md#optional-advisory_type)
* [advisory_type_name](controllersadvisoryinlineitem.md#optional-advisory_type_name)
* [applicable_systems](controllersadvisoryinlineitem.md#optional-applicable_systems)
* [cve_count](controllersadvisoryinlineitem.md#optional-cve_count)
* [description](controllersadvisoryinlineitem.md#optional-description)
* [id](controllersadvisoryinlineitem.md#optional-id)
* [public_date](controllersadvisoryinlineitem.md#optional-public_date)
* [reboot_required](controllersadvisoryinlineitem.md#optional-reboot_required)
* [severity](controllersadvisoryinlineitem.md#optional-severity)
* [synopsis](controllersadvisoryinlineitem.md#optional-synopsis)

## Properties

### `Optional` advisory_type

• **advisory_type**? : *number*

*Defined in [packages/patch/api.ts:188](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L188)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [packages/patch/api.ts:194](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L194)*

Advisory type name, proper ordering ensured (unknown, unspecified, enhancement, bugfix, security)

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` applicable_systems

• **applicable_systems**? : *number*

*Defined in [packages/patch/api.ts:200](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L200)*

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [packages/patch/api.ts:206](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L206)*

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/patch/api.ts:212](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L212)*

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/patch/api.ts:218](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L218)*

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [packages/patch/api.ts:224](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L224)*

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [packages/patch/api.ts:230](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L230)*

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` severity

• **severity**? : *number*

*Defined in [packages/patch/api.ts:236](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L236)*

**`memberof`** ControllersAdvisoryInlineItem

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [packages/patch/api.ts:242](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L242)*

**`memberof`** ControllersAdvisoryInlineItem
