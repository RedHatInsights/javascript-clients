[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateCheckIn](createcheckin.md)

# Interface: CreateCheckIn

Data required to create a check-in record for a host.

**`export`** 

**`interface`** CreateCheckIn

## Hierarchy

* **CreateCheckIn**

## Index

### Properties

* [canonical_facts](createcheckin.md#canonical_facts)
* [checkin_frequency](createcheckin.md#optional-checkin_frequency)

## Properties

###  canonical_facts

• **canonical_facts**: *object*

*Defined in [packages/host-inventory/api.ts:145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L145)*

A set of string facts about a host.

**`memberof`** CreateCheckIn

___

### `Optional` checkin_frequency

• **checkin_frequency**? : *number*

*Defined in [packages/host-inventory/api.ts:151](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L151)*

Defines how far in the future the host becomes stale (in minutes).

**`memberof`** CreateCheckIn
