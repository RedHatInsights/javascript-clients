[@redhat-cloud-services/sources-client](../README.md) / [Exports](../modules.md) / GraphQLRequest

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

[api.ts:551](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L551)

___

### query

• **query**: `string`

The GraphQL query

**`Memberof`**

GraphQLRequest

#### Defined in

[api.ts:545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L545)

___

### variables

• `Optional` **variables**: ``null`` \| `object`

Optional Query variables

**`Memberof`**

GraphQLRequest

#### Defined in

[api.ts:557](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/sources/api.ts#L557)
