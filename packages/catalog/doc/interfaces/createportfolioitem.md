[@redhat-cloud-services/catalog-client](../README.md) › [Globals](../globals.md) › [CreatePortfolioItem](createportfolioitem.md)

# Interface: CreatePortfolioItem

**`export`** 

**`interface`** CreatePortfolioItem

## Hierarchy

* **CreatePortfolioItem**

## Index

### Properties

* [portfolioId](createportfolioitem.md#portfolioid)
* [serviceOfferingRef](createportfolioitem.md#optional-serviceofferingref)

## Properties

###  portfolioId

• **portfolioId**: *string*

*Defined in [api.ts:262](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L262)*

The Portfolio this portfolio item should belong to

**`type`** {string}

**`memberof`** CreatePortfolioItem

___

### `Optional` serviceOfferingRef

• **serviceOfferingRef**? : *string*

*Defined in [api.ts:268](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/catalog/api.ts#L268)*

The service offering ref should be retrieved from a call to the Topology Service.

**`type`** {string}

**`memberof`** CreatePortfolioItem
