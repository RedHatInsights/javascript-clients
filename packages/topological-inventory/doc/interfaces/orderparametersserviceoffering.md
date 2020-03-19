[@redhat-cloud-services/topological-inventory-client](../README.md) › [Globals](../globals.md) › [OrderParametersServiceOffering](orderparametersserviceoffering.md)

# Interface: OrderParametersServiceOffering

**`export`** 

**`interface`** OrderParametersServiceOffering

## Hierarchy

* **OrderParametersServiceOffering**

## Index

### Properties

* [providerControlParameters](orderparametersserviceoffering.md#optional-providercontrolparameters)
* [serviceParameters](orderparametersserviceoffering.md#optional-serviceparameters)
* [servicePlanId](orderparametersserviceoffering.md#optional-serviceplanid)

## Properties

### `Optional` providerControlParameters

• **providerControlParameters**? : *any*

*Defined in [api.ts:2185](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L2185)*

The provider specific parameters needed to provision this service. This might include namespaces, special keys

**`type`** {any}

**`memberof`** OrderParametersServiceOffering

___

### `Optional` serviceParameters

• **serviceParameters**? : *any*

*Defined in [api.ts:2179](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L2179)*

JSON object with provisioning parameters

**`type`** {any}

**`memberof`** OrderParametersServiceOffering

___

### `Optional` servicePlanId

• **servicePlanId**? : *string*

*Defined in [api.ts:2191](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L2191)*

ID of the resource

**`type`** {string}

**`memberof`** OrderParametersServiceOffering
