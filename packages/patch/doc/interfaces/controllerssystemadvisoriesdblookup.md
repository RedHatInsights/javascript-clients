[@redhat-cloud-services/patch-client](../README.md) › [Globals](../globals.md) › [ControllersSystemAdvisoriesDBLookup](controllerssystemadvisoriesdblookup.md)

# Interface: ControllersSystemAdvisoriesDBLookup

**`export`** 

**`interface`** ControllersSystemAdvisoriesDBLookup

## Hierarchy

* **ControllersSystemAdvisoriesDBLookup**

## Index

### Properties

* [advisory_type](controllerssystemadvisoriesdblookup.md#optional-advisory_type)
* [advisory_type_name](controllerssystemadvisoriesdblookup.md#optional-advisory_type_name)
* [cve_count](controllerssystemadvisoriesdblookup.md#optional-cve_count)
* [description](controllerssystemadvisoriesdblookup.md#optional-description)
* [id](controllerssystemadvisoriesdblookup.md#optional-id)
* [public_date](controllerssystemadvisoriesdblookup.md#optional-public_date)
* [reboot_required](controllerssystemadvisoriesdblookup.md#optional-reboot_required)
* [release_versions](controllerssystemadvisoriesdblookup.md#optional-release_versions)
* [severity](controllerssystemadvisoriesdblookup.md#optional-severity)
* [synopsis](controllerssystemadvisoriesdblookup.md#optional-synopsis)

## Properties

### `Optional` advisory_type

• **advisory_type**? : *number*

*Defined in [api.ts:1016](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1016)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [api.ts:1022](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1022)*

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [api.ts:1028](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1028)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:1034](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1034)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:1040](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1040)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [api.ts:1046](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1046)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [api.ts:1052](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1052)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` release_versions

• **release_versions**? : *Array‹string›*

*Defined in [api.ts:1058](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1058)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` severity

• **severity**? : *number*

*Defined in [api.ts:1064](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1064)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [api.ts:1070](https://github.com/RedHatInsights/javascript-clients/blob/b3a33353/packages/patch/api.ts#L1070)*

**`memberof`** ControllersSystemAdvisoriesDBLookup
