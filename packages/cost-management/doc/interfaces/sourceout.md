[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [SourceOut](sourceout.md)

# Interface: SourceOut

**`export`** 

**`interface`** SourceOut

## Hierarchy

* **SourceOut**

## Index

### Properties

* [authentication](sourceout.md#optional-authentication)
* [billingSource](sourceout.md#optional-billingsource)
* [costModels](sourceout.md#optional-costmodels)
* [id](sourceout.md#id)
* [infrastructure](sourceout.md#optional-infrastructure)
* [name](sourceout.md#optional-name)
* [providerLinked](sourceout.md#optional-providerlinked)
* [sourceType](sourceout.md#sourcetype)
* [uuid](sourceout.md#optional-uuid)

## Properties

### `Optional` authentication

• **authentication**? : *any*

*Defined in [api.ts:2665](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2665)*

Dictionary containing resource name.

**`type`** {any}

**`memberof`** SourceOut

___

### `Optional` billingSource

• **billingSource**? : *any*

*Defined in [api.ts:2671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2671)*

Dictionary containing billing source.

**`type`** {any}

**`memberof`** SourceOut

___

### `Optional` costModels

• **costModels**? : *Array‹any›*

*Defined in [api.ts:2689](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2689)*

List of cost model name and UUIDs associated with this provider.

**`type`** {Array<any>}

**`memberof`** SourceOut

___

###  id

• **id**: *number*

*Defined in [api.ts:2641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2641)*

**`type`** {number}

**`memberof`** SourceOut

___

### `Optional` infrastructure

• **infrastructure**? : *string*

*Defined in [api.ts:2683](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2683)*

OpenShift foundational infrastructure type.

**`type`** {string}

**`memberof`** SourceOut

___

### `Optional` name

• **name**? : *string*

*Defined in [api.ts:2659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2659)*

**`type`** {string}

**`memberof`** SourceOut

___

### `Optional` providerLinked

• **providerLinked**? : *boolean*

*Defined in [api.ts:2677](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2677)*

Flag to indicate if provider is linked to source.

**`type`** {boolean}

**`memberof`** SourceOut

___

###  sourceType

• **sourceType**: *string*

*Defined in [api.ts:2647](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2647)*

**`type`** {string}

**`memberof`** SourceOut

___

### `Optional` uuid

• **uuid**? : *string*

*Defined in [api.ts:2653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2653)*

**`type`** {string}

**`memberof`** SourceOut
