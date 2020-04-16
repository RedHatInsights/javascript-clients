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

*Defined in [packages/approval/api.ts:178](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L178)*

If the Query contains several named operations, the operationName controls which one should be executed

**`memberof`** GraphqlIn

___

###  query

• **query**: *string*

*Defined in [packages/approval/api.ts:172](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L172)*

The GraphQL query

**`memberof`** GraphqlIn

___

### `Optional` variables

• **variables**? : *object | null*

*Defined in [packages/approval/api.ts:184](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L184)*

Optional Query variables

**`memberof`** GraphqlIn
