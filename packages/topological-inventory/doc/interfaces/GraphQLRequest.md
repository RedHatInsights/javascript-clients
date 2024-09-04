[@redhat-cloud-services/topological-inventory-client](../README.md) / [Exports](../modules.md) / GraphQLRequest

# Interface: GraphQLRequest

**`Export`**

GraphQLRequest

## Table of contents

### Properties

- [operationName](GraphQLRequest.md#operationname)
- [query](GraphQLRequest.md#query)
- [variables](GraphQLRequest.md#variables)

## Properties

### operationName

• `Optional` **operationName**: `string`

If the Query contains several named operations, the operationName controls which one should be executed

**`Memberof`**

GraphQLRequest

#### Defined in

types/index.ts:1384

___

### query

• **query**: `string`

The GraphQL query

**`Memberof`**

GraphQLRequest

#### Defined in

types/index.ts:1378

___

### variables

• `Optional` **variables**: ``null`` \| `object`

Optional Query variables

**`Memberof`**

GraphQLRequest

#### Defined in

types/index.ts:1390
