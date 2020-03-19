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

*Defined in [api.ts:237](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L237)*

If the Query contains several named operations, the operationName controls which one should be executed

**`type`** {string}

**`memberof`** GraphqlIn

___

###  query

• **query**: *string*

*Defined in [api.ts:231](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L231)*

The GraphQL query

**`type`** {string}

**`memberof`** GraphqlIn

___

### `Optional` variables

• **variables**? : *any | null*

*Defined in [api.ts:243](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L243)*

Optional Query variables

**`type`** {any}

**`memberof`** GraphqlIn
