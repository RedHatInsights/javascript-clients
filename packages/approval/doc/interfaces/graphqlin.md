[@redhat-cloud-services/approval-client](../README.md) > [GraphqlIn](../interfaces/graphqlin.md)

# Interface: GraphqlIn

*__export__*: 

*__interface__*: GraphqlIn

## Hierarchy

**GraphqlIn**

## Index

### Properties

* [operationName](graphqlin.md#operationname)
* [query](graphqlin.md#query)
* [variables](graphqlin.md#variables)

---

## Properties

<a id="operationname"></a>

### `<Optional>` operationName

**● operationName**: *`string`*

*Defined in [api.ts:237](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L237)*

If the Query contains several named operations, the operationName controls which one should be executed

*__type__*: {string}

*__memberof__*: GraphqlIn

___
<a id="query"></a>

###  query

**● query**: *`string`*

*Defined in [api.ts:231](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L231)*

The GraphQL query

*__type__*: {string}

*__memberof__*: GraphqlIn

___
<a id="variables"></a>

### `<Optional>` variables

**● variables**: *`any` \| `null`*

*Defined in [api.ts:243](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L243)*

Optional Query variables

*__type__*: {any}

*__memberof__*: GraphqlIn

___

