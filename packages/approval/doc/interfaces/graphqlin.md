[@redhat-cloud-services/approval-client](../README.md) › [Globals](../globals.md) › [GraphqlIn](graphqlin.md)

# Interface: GraphqlIn

**`export`** 

**`interface`** GraphqlIn

## Hierarchy

* **GraphqlIn**

## Index

### Properties

* [operationName](graphqlin.md#optional-operationname)
* [query](graphqlin.md#query)
* [variables](graphqlin.md#optional-variables)

## Properties

### `Optional` operationName

• **operationName**? : *string*

*Defined in [api.ts:179](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L179)*

If the query contains several named operations, the operationName controls which one should be executed

**`memberof`** GraphqlIn

___

###  query

• **query**: *string*

*Defined in [api.ts:173](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L173)*

The GraphQL query

**`memberof`** GraphqlIn

___

### `Optional` variables

• **variables**? : *object | null*

*Defined in [api.ts:185](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/approval/api.ts#L185)*

Optional query variables

**`memberof`** GraphqlIn
