[@redhat-cloud-services/cost-management-client](../README.md) > [ProviderOut](../interfaces/providerout.md)

# Interface: ProviderOut

*__export__*: 

*__interface__*: ProviderOut

## Hierarchy

**ProviderOut**

## Index

### Properties

* [authentication](providerout.md#authentication)
* [billingSource](providerout.md#billingsource)
* [createdBy](providerout.md#createdby)
* [customer](providerout.md#customer)
* [infrastructure](providerout.md#infrastructure)
* [name](providerout.md#name)
* [stats](providerout.md#stats)
* [type](providerout.md#type)
* [uuid](providerout.md#uuid)

---

## Properties

<a id="authentication"></a>

###  authentication

**● authentication**: *[ProviderAuthenticationOut](providerauthenticationout.md)*

*Defined in [api.ts:724](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L724)*

*__type__*: {ProviderAuthenticationOut}

*__memberof__*: ProviderOut

___
<a id="billingsource"></a>

###  billingSource

**● billingSource**: *[ProviderBillingSourceOut](providerbillingsourceout.md)*

*Defined in [api.ts:730](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L730)*

*__type__*: {ProviderBillingSourceOut}

*__memberof__*: ProviderOut

___
<a id="createdby"></a>

###  createdBy

**● createdBy**: *[UserOut](userout.md)*

*Defined in [api.ts:742](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L742)*

*__type__*: {UserOut}

*__memberof__*: ProviderOut

___
<a id="customer"></a>

###  customer

**● customer**: *[CustomerOut](customerout.md)*

*Defined in [api.ts:736](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L736)*

*__type__*: {CustomerOut}

*__memberof__*: ProviderOut

___
<a id="infrastructure"></a>

### `<Optional>` infrastructure

**● infrastructure**: *`string`*

*Defined in [api.ts:754](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L754)*

OpenShift foundational infrastructure type.

*__type__*: {string}

*__memberof__*: ProviderOut

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [api.ts:706](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L706)*

*__type__*: {string}

*__memberof__*: ProviderOut

___
<a id="stats"></a>

### `<Optional>` stats

**● stats**: *`any`*

*Defined in [api.ts:748](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L748)*

Dictionary key is the start of a billing month. Value is report processing statistics.

*__type__*: {any}

*__memberof__*: ProviderOut

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [api.ts:712](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L712)*

*__type__*: {string}

*__memberof__*: ProviderOut

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`string`*

*Defined in [api.ts:718](https://github.com/rvsia/javascript-clients/blob/master/packages/cost-management/api.ts#L718)*

*__type__*: {string}

*__memberof__*: ProviderOut

___

