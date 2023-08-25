[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileByHostOut

# Interface: SystemProfileByHostOut

Structure of the output of the host system profile query

**`Export`**

**`Interface`**

SystemProfileByHostOut

## Table of contents

### Properties

- [count](SystemProfileByHostOut.md#count)
- [page](SystemProfileByHostOut.md#page)
- [per\_page](SystemProfileByHostOut.md#per_page)
- [results](SystemProfileByHostOut.md#results)
- [total](SystemProfileByHostOut.md#total)

## Properties

### count

• **count**: `number`

The number of items on the current page

**`Memberof`**

SystemProfileByHostOut

#### Defined in

[api.ts:1945](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1945)

___

### page

• **page**: `number`

The page number

**`Memberof`**

SystemProfileByHostOut

#### Defined in

[api.ts:1951](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1951)

___

### per\_page

• **per\_page**: `number`

The number of items to return per page

**`Memberof`**

SystemProfileByHostOut

#### Defined in

[api.ts:1957](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1957)

___

### results

• **results**: [`HostSystemProfileOut`](HostSystemProfileOut.md)[]

Actual host search query result entries.

**`Memberof`**

SystemProfileByHostOut

#### Defined in

[api.ts:1969](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1969)

___

### total

• **total**: `number`

Total number of items

**`Memberof`**

SystemProfileByHostOut

#### Defined in

[api.ts:1963](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1963)
