[@redhat-cloud-services/cost-management-client](../README.md) > [ProviderOut](../interfaces/providerout.md)

# Interface: ProviderOut

*__export__*: 

*__interface__*: ProviderOut

## Hierarchy

**ProviderOut**

## Index

### Properties

* [active](providerout.md#active)
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

<a id="active"></a>

### `<Optional>` active

**● active**: *`boolean`*

*Defined in [api.ts:806](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L806)*

Flag to indicate when the provider is configured correctly

*__type__*: {boolean}

*__memberof__*: ProviderOut

___
<a id="authentication"></a>

###  authentication

**● authentication**: *[ProviderAuthenticationOut](providerauthenticationout.md)*

*Defined in [api.ts:770](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L770)*

*__type__*: {ProviderAuthenticationOut}

*__memberof__*: ProviderOut

___
<a id="billingsource"></a>

###  billingSource

**● billingSource**: *[ProviderBillingSourceOut](providerbillingsourceout.md)*

*Defined in [api.ts:776](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L776)*

*__type__*: {ProviderBillingSourceOut}

*__memberof__*: ProviderOut

___
<a id="createdby"></a>

###  createdBy

**● createdBy**: *[UserOut](userout.md)*

*Defined in [api.ts:788](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L788)*

*__type__*: {UserOut}

*__memberof__*: ProviderOut

___
<a id="customer"></a>

###  customer

**● customer**: *[CustomerOut](customerout.md)*

*Defined in [api.ts:782](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L782)*

*__type__*: {CustomerOut}

*__memberof__*: ProviderOut

___
<a id="infrastructure"></a>

### `<Optional>` infrastructure

**● infrastructure**: *`string`*

*Defined in [api.ts:800](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L800)*

OpenShift foundational infrastructure type.

*__type__*: {string}

*__memberof__*: ProviderOut

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [api.ts:752](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L752)*

*__type__*: {string}

*__memberof__*: ProviderOut

___
<a id="stats"></a>

### `<Optional>` stats

**● stats**: *`any`*

*Defined in [api.ts:794](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L794)*

Dictionary key is the start of a billing month. Value is report processing statistics.

*__type__*: {any}

*__memberof__*: ProviderOut

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [api.ts:758](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L758)*

*__type__*: {string}

*__memberof__*: ProviderOut

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`string`*

*Defined in [api.ts:764](https://github.com/karelhala/javascript-clients/blob/master/packages/cost-management/api.ts#L764)*

*__type__*: {string}

*__memberof__*: ProviderOut

___

