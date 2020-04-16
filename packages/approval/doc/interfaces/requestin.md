[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [RequestIn](requestin.md)

# Interface: RequestIn

Input parameters for approval request object.

**`export`** 

**`interface`** RequestIn

## Hierarchy

* **RequestIn**

## Index

### Properties

* [content](requestin.md#content)
* [description](requestin.md#optional-description)
* [name](requestin.md#name)
* [tag_resources](requestin.md#tag_resources)

## Properties

###  content

• **content**: *object*

*Defined in [packages/approval/api.ts:380](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L380)*

JSON object with request content

**`memberof`** RequestIn

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/approval/api.ts:374](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L374)*

Request description

**`memberof`** RequestIn

___

###  name

• **name**: *string*

*Defined in [packages/approval/api.ts:368](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L368)*

Request name

**`memberof`** RequestIn

___

###  tag_resources

• **tag_resources**: *Array‹[TagResource](tagresource.md)›*

*Defined in [packages/approval/api.ts:386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L386)*

collection of resources having tags that determine the workflows for the request

**`memberof`** RequestIn
