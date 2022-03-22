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

*Defined in [api.ts:1108](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1108)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [api.ts:1114](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1114)*

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [api.ts:1120](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1120)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:1126](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1126)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [api.ts:1132](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1132)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [api.ts:1138](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1138)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` release_versions

• **release_versions**? : *Array‹string›*

*Defined in [api.ts:1144](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1144)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` severity

• **severity**? : *number*

*Defined in [api.ts:1150](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1150)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [api.ts:1156](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1156)*

**`memberof`** ControllersSystemAdvisoryItemAttributes
