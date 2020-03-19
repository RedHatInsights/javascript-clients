[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [ProviderOut](providerout.md)

# Interface: ProviderOut

**`export`** 

**`interface`** ProviderOut

## Hierarchy

* **ProviderOut**

## Index

### Properties

* [active](providerout.md#optional-active)
* [authentication](providerout.md#authentication)
* [billingSource](providerout.md#billingsource)
* [costModels](providerout.md#optional-costmodels)
* [createdBy](providerout.md#createdby)
* [customer](providerout.md#customer)
* [infrastructure](providerout.md#optional-infrastructure)
* [name](providerout.md#name)
* [stats](providerout.md#optional-stats)
* [type](providerout.md#type)
* [uuid](providerout.md#uuid)

## Properties

### `Optional` active

• **active**? : *boolean*

*Defined in [api.ts:689](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L689)*

Flag to indicate when the provider is configured correctly

**`type`** {boolean}

**`memberof`** ProviderOut

___

###  authentication

• **authentication**: *[ProviderAuthenticationOut](providerauthenticationout.md)*

*Defined in [api.ts:653](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L653)*

**`type`** {ProviderAuthenticationOut}

**`memberof`** ProviderOut

___

###  billingSource

• **billingSource**: *[ProviderBillingSourceOut](providerbillingsourceout.md)*

*Defined in [api.ts:659](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L659)*

**`type`** {ProviderBillingSourceOut}

**`memberof`** ProviderOut

___

### `Optional` costModels

• **costModels**? : *Array‹any›*

*Defined in [api.ts:695](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L695)*

List of cost model name and UUIDs associated with this provider.

**`type`** {Array<any>}

**`memberof`** ProviderOut

___

###  createdBy

• **createdBy**: *[UserOut](userout.md)*

*Defined in [api.ts:671](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L671)*

**`type`** {UserOut}

**`memberof`** ProviderOut

___

###  customer

• **customer**: *[CustomerOut](customerout.md)*

*Defined in [api.ts:665](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L665)*

**`type`** {CustomerOut}

**`memberof`** ProviderOut

___

### `Optional` infrastructure

• **infrastructure**? : *string*

*Defined in [api.ts:683](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L683)*

OpenShift foundational infrastructure type.

**`type`** {string}

**`memberof`** ProviderOut

___

###  name

• **name**: *string*

*Defined in [api.ts:635](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L635)*

**`type`** {string}

**`memberof`** ProviderOut

___

### `Optional` stats

• **stats**? : *any*

*Defined in [api.ts:677](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L677)*

Dictionary key is the start of a billing month.  Value is report processing statistics.

**`type`** {any}

**`memberof`** ProviderOut

___

###  type

• **type**: *string*

*Defined in [api.ts:641](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L641)*

**`type`** {string}

**`memberof`** ProviderOut

___

###  uuid

• **uuid**: *string*

*Defined in [api.ts:647](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L647)*

**`type`** {string}

**`memberof`** ProviderOut
