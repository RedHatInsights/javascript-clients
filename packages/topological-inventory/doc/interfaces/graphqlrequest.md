[@redhat-cloud-services/topological-inventory-client](../README.md) > [GraphQLRequest](../interfaces/graphqlrequest.md)

# Interface: GraphQLRequest

*__export__*: 

*__interface__*: GraphQLRequest

## Hierarchy

**GraphQLRequest**

## Index

### Properties

* [operationName](graphqlrequest.md#operationname)
* [query](graphqlrequest.md#query)
* [variables](graphqlrequest.md#variables)

---

## Properties

<a id="operationname"></a>

### `<Optional>` operationName

**● operationName**: *`string`*

*Defined in [api.ts:1469](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1469)*

If the Query contains several named operations, the operationName controls which one should be executed

*__type__*: {string}

*__memberof__*: GraphQLRequest

___
<a id="query"></a>

###  query

**● query**: *`string`*

*Defined in [api.ts:1463](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1463)*

The GraphQL query

*__type__*: {string}

*__memberof__*: GraphQLRequest

___
<a id="variables"></a>

### `<Optional>` variables

**● variables**: *`any` \| `null`*

*Defined in [api.ts:1475](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/topological-inventory/api.ts#L1475)*

Optional Query variables

*__type__*: {any}

*__memberof__*: GraphQLRequest

___

