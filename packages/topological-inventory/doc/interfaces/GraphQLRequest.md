[@redhat-cloud-services/topological-inventory-client](../README.md) / [Exports](../modules.md) / GraphQLRequest

# Interface: GraphQLRequest

**`Export`**

**`Interface`**

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

[api.ts:1392](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1392)

___

### query

• **query**: `string`

The GraphQL query

**`Memberof`**

GraphQLRequest

#### Defined in

[api.ts:1386](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1386)

___

### variables

• `Optional` **variables**: ``null`` \| `object`

Optional Query variables

**`Memberof`**

GraphQLRequest

#### Defined in

[api.ts:1398](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1398)
