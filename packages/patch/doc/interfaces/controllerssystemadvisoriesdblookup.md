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

*Defined in [packages/patch/api.ts:726](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L726)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [packages/patch/api.ts:732](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L732)*

Advisory type name, proper ordering ensured (unknown, unspecified, enhancement, bugfix, security)

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [packages/patch/api.ts:738](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L738)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/patch/api.ts:744](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L744)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/patch/api.ts:750](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L750)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [packages/patch/api.ts:756](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L756)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [packages/patch/api.ts:762](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L762)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` release_versions

• **release_versions**? : *Array‹string›*

*Defined in [packages/patch/api.ts:768](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L768)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` severity

• **severity**? : *number*

*Defined in [packages/patch/api.ts:774](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L774)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [packages/patch/api.ts:780](https://github.com/RedHatInsights/javascript-clients/blob/9192949/packages/patch/api.ts#L780)*

**`memberof`** ControllersSystemAdvisoriesDBLookup
