[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [ActiveTag](activetag.md)

# Interface: ActiveTag

Information about a host tag

**`export`** 

**`interface`** ActiveTag

## Hierarchy

* **ActiveTag**

## Index

### Properties

* [count](activetag.md#count)
* [tag](activetag.md#tag)

## Properties

###  count

• **count**: *number | null*

*Defined in [api.ts:39](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L39)*

The number of hosts with the given tag. If the value is null this indicates that the count is unknown.

**`memberof`** ActiveTag

___

###  tag

• **tag**: *[StructuredTag](structuredtag.md)*

*Defined in [api.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L33)*

**`memberof`** ActiveTag
