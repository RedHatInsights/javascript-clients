[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / RequestIn

# Interface: RequestIn

Input parameters for approval request object

**`Export`**

**`Interface`**

RequestIn

## Table of contents

### Properties

- [content](RequestIn.md#content)
- [description](RequestIn.md#description)
- [name](RequestIn.md#name)
- [tag\_resources](RequestIn.md#tag_resources)

## Properties

### content

• **content**: `object`

Content of the request in JSON format

**`Memberof`**

RequestIn

#### Defined in

[api.ts:469](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L469)

___

### description

• `Optional` **description**: `string`

Describe the request in more details

**`Memberof`**

RequestIn

#### Defined in

[api.ts:463](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L463)

___

### name

• **name**: `string`

Name of the the request to be created

**`Memberof`**

RequestIn

#### Defined in

[api.ts:457](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L457)

___

### tag\_resources

• **tag\_resources**: [`TagResource`](TagResource.md)[]

An array of resource tags that determine the workflows for the request

**`Memberof`**

RequestIn

#### Defined in

[api.ts:475](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L475)
