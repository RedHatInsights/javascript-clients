[@redhat-cloud-services/patch-client](../README.md) › [Globals](../globals.md) › [ControllersSystemAdvisoryItemAttributes](controllerssystemadvisoryitemattributes.md)

# Interface: ControllersSystemAdvisoryItemAttributes

**`export`** 

**`interface`** ControllersSystemAdvisoryItemAttributes

## Hierarchy

* **ControllersSystemAdvisoryItemAttributes**

## Index

### Properties

* [advisory_type](controllerssystemadvisoryitemattributes.md#optional-advisory_type)
* [advisory_type_name](controllerssystemadvisoryitemattributes.md#optional-advisory_type_name)
* [cve_count](controllerssystemadvisoryitemattributes.md#optional-cve_count)
* [description](controllerssystemadvisoryitemattributes.md#optional-description)
* [public_date](controllerssystemadvisoryitemattributes.md#optional-public_date)
* [reboot_required](controllerssystemadvisoryitemattributes.md#optional-reboot_required)
* [release_versions](controllerssystemadvisoryitemattributes.md#optional-release_versions)
* [severity](controllerssystemadvisoryitemattributes.md#optional-severity)
* [synopsis](controllerssystemadvisoryitemattributes.md#optional-synopsis)

## Properties

### `Optional` advisory_type

• **advisory_type**? : *number*

*Defined in [api.ts:1133](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1133)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [api.ts:1139](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1139)*

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [api.ts:1145](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1145)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:1151](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1151)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [api.ts:1157](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1157)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [api.ts:1163](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1163)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` release_versions

• **release_versions**? : *Array‹string›*

*Defined in [api.ts:1169](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1169)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` severity

• **severity**? : *number*

*Defined in [api.ts:1175](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1175)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [api.ts:1181](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1181)*

**`memberof`** ControllersSystemAdvisoryItemAttributes
