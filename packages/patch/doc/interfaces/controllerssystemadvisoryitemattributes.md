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

*Defined in [packages/patch/api.ts:843](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L843)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [packages/patch/api.ts:849](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L849)*

Advisory type name, proper ordering ensured (unknown, unspecified, enhancement, bugfix, security)

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [packages/patch/api.ts:855](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L855)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/patch/api.ts:861](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L861)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [packages/patch/api.ts:867](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L867)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [packages/patch/api.ts:873](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L873)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` release_versions

• **release_versions**? : *Array‹string›*

*Defined in [packages/patch/api.ts:879](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L879)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` severity

• **severity**? : *number*

*Defined in [packages/patch/api.ts:885](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L885)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [packages/patch/api.ts:891](https://github.com/RedHatInsights/javascript-clients/blob/c0f4325/packages/patch/api.ts#L891)*

**`memberof`** ControllersSystemAdvisoryItemAttributes
