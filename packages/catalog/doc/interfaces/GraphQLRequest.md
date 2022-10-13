[@redhat-cloud-services/catalog-client](../README.md) / [Exports](../modules.md) / GraphQLRequest

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

[api.ts:259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L259)

___

### query

• **query**: `string`

The GraphQL query

**`Memberof`**

GraphQLRequest

#### Defined in

[api.ts:253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L253)

___

### variables

• `Optional` **variables**: `object`

Optional Query variables

**`Memberof`**

GraphQLRequest

#### Defined in

[api.ts:265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L265)
