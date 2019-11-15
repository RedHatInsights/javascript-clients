[@redhat-cloud-services/approval-client](../README.md) > [RequestIn](../interfaces/requestin.md)

# Interface: RequestIn

Input parameters for approval request object.

*__export__*: 

*__interface__*: RequestIn

## Hierarchy

**RequestIn**

## Index

### Properties

* [content](requestin.md#content)
* [description](requestin.md#description)
* [name](requestin.md#name)
* [tagResources](requestin.md#tagresources)

---

## Properties

<a id="content"></a>

###  content

**● content**: *`any`*

*Defined in [api.ts:434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L434)*

JSON object with request content

*__type__*: {any}

*__memberof__*: RequestIn

___
<a id="description"></a>

### `<Optional>` description

**● description**: *`string`*

*Defined in [api.ts:428](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L428)*

Request description

*__type__*: {string}

*__memberof__*: RequestIn

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [api.ts:422](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L422)*

Request name

*__type__*: {string}

*__memberof__*: RequestIn

___
<a id="tagresources"></a>

###  tagResources

**● tagResources**: *`Array`<[TagResource](tagresource.md)>*

*Defined in [api.ts:440](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L440)*

collection of resources having tags that determine the workflows for the request

*__type__*: {Array}

*__memberof__*: RequestIn

___

