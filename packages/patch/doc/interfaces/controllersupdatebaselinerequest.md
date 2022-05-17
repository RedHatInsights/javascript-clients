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

*Defined in [api.ts:1720](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L1720)*

**`memberof`** ControllersUpdateBaselineRequest

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:1726](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L1726)*

Description of the baseline (optional).

**`memberof`** ControllersUpdateBaselineRequest

___

### `Optional` inventory_ids

• **inventory_ids**? : *object*

*Defined in [api.ts:1732](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L1732)*

Map of inventories to add to (true) or remove (false) from given baseline (optional)

**`memberof`** ControllersUpdateBaselineRequest

#### Type declaration:

* \[ **key**: *string*\]: boolean

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:1738](https://github.com/RedHatInsights/javascript-clients/blob/22e0c417/packages/patch/api.ts#L1738)*

Updated baseline name (optional)

**`memberof`** ControllersUpdateBaselineRequest
