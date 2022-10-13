[@redhat-cloud-services/patch-client](../README.md) › [Globals](../globals.md) › [ControllersUpdateBaselineRequest](controllersupdatebaselinerequest.md)

# Interface: ControllersUpdateBaselineRequest

**`export`** 

**`interface`** ControllersUpdateBaselineRequest

## Hierarchy

* **ControllersUpdateBaselineRequest**

## Index

### Properties

* [config](controllersupdatebaselinerequest.md#optional-config)
* [description](controllersupdatebaselinerequest.md#optional-description)
* [inventory_ids](controllersupdatebaselinerequest.md#optional-inventory_ids)
* [name](controllersupdatebaselinerequest.md#optional-name)

## Properties

### `Optional` config

• **config**? : *[ControllersBaselineConfig](controllersbaselineconfig.md)*

*Defined in [api.ts:1733](https://github.com/RedHatInsights/javascript-clients/blob/898b2150/packages/patch/api.ts#L1733)*

**`memberof`** ControllersUpdateBaselineRequest

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:1739](https://github.com/RedHatInsights/javascript-clients/blob/898b2150/packages/patch/api.ts#L1739)*

Description of the baseline (optional).

**`memberof`** ControllersUpdateBaselineRequest

___

### `Optional` inventory_ids

• **inventory_ids**? : *object*

*Defined in [api.ts:1745](https://github.com/RedHatInsights/javascript-clients/blob/898b2150/packages/patch/api.ts#L1745)*

Map of inventories to add to (true) or remove (false) from given baseline (optional)

**`memberof`** ControllersUpdateBaselineRequest

#### Type declaration:

* \[ **key**: *string*\]: boolean

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:1751](https://github.com/RedHatInsights/javascript-clients/blob/898b2150/packages/patch/api.ts#L1751)*

Updated baseline name (optional)

**`memberof`** ControllersUpdateBaselineRequest
