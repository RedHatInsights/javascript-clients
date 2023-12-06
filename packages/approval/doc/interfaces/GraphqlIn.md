[@redhat-cloud-services/approval-client](../README.md) / [Exports](../modules.md) / GraphqlIn

# Interface: GraphqlIn

**`Export`**

**`Interface`**

GraphqlIn

## Table of contents

### Properties

- [operationName](GraphqlIn.md#operationname)
- [query](GraphqlIn.md#query)
- [variables](GraphqlIn.md#variables)

## Properties

### operationName

• `Optional` **operationName**: `string`

If the query contains several named operations, the operationName controls which one should be executed

**`Memberof`**

GraphqlIn

#### Defined in

[api.ts:179](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L179)

___

### query

• **query**: `string`

The GraphQL query

**`Memberof`**

GraphqlIn

#### Defined in

[api.ts:173](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L173)

___

### variables

• `Optional` **variables**: `object`

Optional query variables

**`Memberof`**

GraphqlIn

#### Defined in

[api.ts:185](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/approval/api.ts#L185)
