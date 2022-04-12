[@redhat-cloud-services/patch-client](../README.md) › [Globals](../globals.md) › [ControllersAdvisoryItemAttributes](controllersadvisoryitemattributes.md)

# Interface: ControllersAdvisoryItemAttributes

**`export`** 

**`interface`** ControllersAdvisoryItemAttributes

## Hierarchy

* **ControllersAdvisoryItemAttributes**

## Index

### Properties

* [advisory_type](controllersadvisoryitemattributes.md#optional-advisory_type)
* [advisory_type_name](controllersadvisoryitemattributes.md#optional-advisory_type_name)
* [applicable_systems](controllersadvisoryitemattributes.md#optional-applicable_systems)
* [cve_count](controllersadvisoryitemattributes.md#optional-cve_count)
* [description](controllersadvisoryitemattributes.md#optional-description)
* [public_date](controllersadvisoryitemattributes.md#optional-public_date)
* [reboot_required](controllersadvisoryitemattributes.md#optional-reboot_required)
* [release_versions](controllersadvisoryitemattributes.md#optional-release_versions)
* [severity](controllersadvisoryitemattributes.md#optional-severity)
* [synopsis](controllersadvisoryitemattributes.md#optional-synopsis)

## Properties

### `Optional` advisory_type

• **advisory_type**? : *number*

*Defined in [api.ts:298](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L298)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [api.ts:304](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L304)*

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` applicable_systems

• **applicable_systems**? : *number*

*Defined in [api.ts:310](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L310)*

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [api.ts:316](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L316)*

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:322](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L322)*

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [api.ts:328](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L328)*

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [api.ts:334](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L334)*

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` release_versions

• **release_versions**? : *Array‹string›*

*Defined in [api.ts:340](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L340)*

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` severity

• **severity**? : *number*

*Defined in [api.ts:346](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L346)*

**`memberof`** ControllersAdvisoryItemAttributes

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [api.ts:352](https://github.com/RedHatInsights/javascript-clients/blob/669b7c5/packages/patch/api.ts#L352)*

**`memberof`** ControllersAdvisoryItemAttributes
