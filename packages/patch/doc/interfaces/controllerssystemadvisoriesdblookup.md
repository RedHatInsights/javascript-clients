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

*Defined in [api.ts:991](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L991)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [api.ts:997](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L997)*

Advisory type name, proper ordering ensured (unknown, unspecified, other, enhancement, bugfix, security)

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [api.ts:1003](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1003)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:1009](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1009)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` id

• **id**? : *string*

*Defined in [api.ts:1015](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1015)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [api.ts:1021](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1021)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [api.ts:1027](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1027)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` release_versions

• **release_versions**? : *Array‹string›*

*Defined in [api.ts:1033](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1033)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` severity

• **severity**? : *number*

*Defined in [api.ts:1039](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1039)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [api.ts:1045](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1045)*

**`memberof`** ControllersSystemAdvisoriesDBLookup
