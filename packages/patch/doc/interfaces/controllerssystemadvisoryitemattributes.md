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
* [severity](controllerssystemadvisoryitemattributes.md#optional-severity)
* [synopsis](controllerssystemadvisoryitemattributes.md#optional-synopsis)

## Properties

### `Optional` advisory_type

• **advisory_type**? : *number*

*Defined in [packages/patch/api.ts:807](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L807)*

Deprecated, not useful database ID (0 - unknown, 1 -, enhancement, 2 - bugfix, 3 - security, 4 - unspecified)

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` advisory_type_name

• **advisory_type_name**? : *string*

*Defined in [packages/patch/api.ts:813](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L813)*

Advisory type name, proper ordering ensured (unknown, unspecified, enhancement, bugfix, security)

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` cve_count

• **cve_count**? : *number*

*Defined in [packages/patch/api.ts:819](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L819)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/patch/api.ts:825](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L825)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` public_date

• **public_date**? : *string*

*Defined in [packages/patch/api.ts:831](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L831)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` reboot_required

• **reboot_required**? : *boolean*

*Defined in [packages/patch/api.ts:837](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L837)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` severity

• **severity**? : *number*

*Defined in [packages/patch/api.ts:843](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L843)*

**`memberof`** ControllersSystemAdvisoryItemAttributes

___

### `Optional` synopsis

• **synopsis**? : *string*

*Defined in [packages/patch/api.ts:849](https://github.com/RedHatInsights/javascript-clients/blob/6a9cdc7/packages/patch/api.ts#L849)*

**`memberof`** ControllersSystemAdvisoryItemAttributes
