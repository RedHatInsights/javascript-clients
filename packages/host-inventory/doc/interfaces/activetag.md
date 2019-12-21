[@redhat-cloud-services/host-inventory-client](../README.md) > [ActiveTag](../interfaces/activetag.md)

# Interface: ActiveTag

Information about a host tag

*__export__*: 

*__interface__*: ActiveTag

## Hierarchy

**ActiveTag**

## Index

### Properties

* [count](activetag.md#count)
* [tag](activetag.md#tag)

---

## Properties

<a id="count"></a>

###  count

**● count**: *`number` \| `null`*

*Defined in [api.ts:89](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L89)*

The number of hosts with the given tag. If the value is null this indicates that the count is unknown.

*__type__*: {number}

*__memberof__*: ActiveTag

___
<a id="tag"></a>

###  tag

**● tag**: *[StructuredTag](structuredtag.md)*

*Defined in [api.ts:83](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L83)*

*__type__*: {StructuredTag}

*__memberof__*: ActiveTag

___

