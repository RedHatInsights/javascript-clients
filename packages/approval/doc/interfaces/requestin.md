[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [RequestIn](requestin.md)

# Interface: RequestIn

Input parameters for approval request object

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

*Defined in [packages/approval/api.ts:440](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L440)*

Content of the request in JSON format

**`memberof`** RequestIn

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/approval/api.ts:434](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L434)*

Describe the request in more details

**`memberof`** RequestIn

___

###  name

• **name**: *string*

*Defined in [packages/approval/api.ts:428](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L428)*

Name of the the request to be created

**`memberof`** RequestIn

___

###  tag_resources

• **tag_resources**: *Array‹[TagResource](tagresource.md)›*

*Defined in [packages/approval/api.ts:446](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L446)*

An array of resource tags that determine the workflows for the request

**`memberof`** RequestIn
