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
* [tagResources](requestin.md#tagresources)

## Properties

###  content

• **content**: *any*

*Defined in [api.ts:448](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L448)*

JSON object with request content

**`type`** {any}

**`memberof`** RequestIn

___

### `Optional` description

• **description**? : *string*

*Defined in [api.ts:442](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L442)*

Request description

**`type`** {string}

**`memberof`** RequestIn

___

###  name

• **name**: *string*

*Defined in [api.ts:436](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L436)*

Request name

**`type`** {string}

**`memberof`** RequestIn

___

###  tagResources

• **tagResources**: *Array‹[TagResource](tagresource.md)›*

*Defined in [api.ts:454](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L454)*

collection of resources having tags that determine the workflows for the request

**`type`** {Array<TagResource>}

**`memberof`** RequestIn
