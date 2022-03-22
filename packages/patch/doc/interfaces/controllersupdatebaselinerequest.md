[@redhat-cloud-services/patch-client](../README.md) › [Globals](../globals.md) › [ControllersUpdateBaselineRequest](controllersupdatebaselinerequest.md)

# Interface: ControllersUpdateBaselineRequest

**`export`** 

**`interface`** ControllersUpdateBaselineRequest

## Hierarchy

* **ControllersUpdateBaselineRequest**

## Index

### Properties

* [config](controllersupdatebaselinerequest.md#optional-config)
* [inventory_ids](controllersupdatebaselinerequest.md#optional-inventory_ids)
* [name](controllersupdatebaselinerequest.md#optional-name)

## Properties

### `Optional` config

• **config**? : *[ControllersBaselineConfig](controllersbaselineconfig.md)*

*Defined in [api.ts:1708](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1708)*

**`memberof`** ControllersUpdateBaselineRequest

___

### `Optional` inventory_ids

• **inventory_ids**? : *object*

*Defined in [api.ts:1714](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1714)*

Map of inventories to add to (true) or remove (false) from given baseline (optional)

**`memberof`** ControllersUpdateBaselineRequest

#### Type declaration:

* \[ **key**: *string*\]: boolean

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:1720](https://github.com/RedHatInsights/javascript-clients/blob/63c8a77/packages/patch/api.ts#L1720)*

Updated baseline name (optional)

**`memberof`** ControllersUpdateBaselineRequest
