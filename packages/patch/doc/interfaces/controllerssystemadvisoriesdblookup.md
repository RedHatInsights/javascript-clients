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
* [severity](controllerssystemadvisoriesdblookup.md#optional-severity)
* [synopsis](controllerssystemadvisoriesdblookup.md#optional-synopsis)

## Properties

### `Optional` advisory_type

• **advisory_type**? : *number*

*Defined in [packages/patch/api.ts:696](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L696)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [packages/patch/api.ts:702](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L702)*

Advisory type name, proper ordering ensured (unknown, unspecified, enhancement, bugfix, security)

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [packages/patch/api.ts:708](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L708)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/patch/api.ts:714](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L714)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` id

• **id**? : *string*

*Defined in [packages/patch/api.ts:720](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L720)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [packages/patch/api.ts:726](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L726)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [packages/patch/api.ts:732](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L732)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` severity

• **severity**? : *number*

*Defined in [packages/patch/api.ts:738](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L738)*

**`memberof`** ControllersSystemAdvisoriesDBLookup

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [packages/patch/api.ts:744](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L744)*

**`memberof`** ControllersSystemAdvisoriesDBLookup
