[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [CollectionMetadata](collectionmetadata.md)

# Interface: CollectionMetadata

**`export`** 

**`interface`** CollectionMetadata

## Hierarchy

* **CollectionMetadata**

## Index

### Properties

* [count](collectionmetadata.md#optional-count)
* [limit](collectionmetadata.md#optional-limit)
* [offset](collectionmetadata.md#optional-offset)

## Properties

### `Optional` count

• **count**? : *number*

*Defined in [api.ts:205](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L205)*

This is the total number of items in the result set, of which only a subset is returned defined by the QueryLimit parameter

**`type`** {number}

**`memberof`** CollectionMetadata

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:211](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L211)*

This is the number of items each page can display

**`type`** {number}

**`memberof`** CollectionMetadata

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:217](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L217)*

This is the offset from beginning of the result set

**`type`** {number}

**`memberof`** CollectionMetadata
