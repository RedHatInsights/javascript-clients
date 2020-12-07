[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateCheckIn](createcheckin.md)

# Interface: CreateCheckIn

Data required to create a check-in record for a host.

**`export`** 

**`interface`** CreateCheckIn

## Hierarchy

* **CreateCheckIn**

## Index

### Properties

* [Fqdn](createcheckin.md#optional-fqdn)
* [bios_uuid](createcheckin.md#bios_uuid)
* [checkin_frequency](createcheckin.md#optional-checkin_frequency)
* [external_id](createcheckin.md#external_id)
* [fqdn](createcheckin.md#fqdn)
* [insights_id](createcheckin.md#insights_id)
* [ip_addresses](createcheckin.md#ip_addresses)
* [mac_addresses](createcheckin.md#mac_addresses)
* [rhel_machine_id](createcheckin.md#rhel_machine_id)
* [satellite_id](createcheckin.md#satellite_id)
* [subscription_manager_id](createcheckin.md#subscription_manager_id)

## Properties

### `Optional` Fqdn

• **Fqdn**? : *string | null*

*Defined in [packages/host-inventory/api.ts:314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L314)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn

___

###  bios_uuid

• **bios_uuid**: *string*

*Defined in [packages/host-inventory/api.ts:302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L302)*

**`memberof`** CreateCheckIn

___

### `Optional` checkin_frequency

• **checkin_frequency**? : *number*

*Defined in [packages/host-inventory/api.ts:338](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L338)*

How long from now to expect another check-in (in minutes).

**`memberof`** CreateCheckIn

___

###  external_id

• **external_id**: *string*

*Defined in [packages/host-inventory/api.ts:326](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L326)*

**`memberof`** CreateCheckIn

___

###  fqdn

• **fqdn**: *string*

*Defined in [packages/host-inventory/api.ts:332](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L332)*

**`memberof`** CreateCheckIn

___

###  insights_id

• **insights_id**: *string*

*Defined in [packages/host-inventory/api.ts:278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L278)*

**`memberof`** CreateCheckIn

___

###  ip_addresses

• **ip_addresses**: *Array‹string›*

*Defined in [packages/host-inventory/api.ts:308](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L308)*

**`memberof`** CreateCheckIn

___

###  mac_addresses

• **mac_addresses**: *Array‹string›*

*Defined in [packages/host-inventory/api.ts:320](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L320)*

**`memberof`** CreateCheckIn

___

###  rhel_machine_id

• **rhel_machine_id**: *string*

*Defined in [packages/host-inventory/api.ts:284](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L284)*

**`memberof`** CreateCheckIn

___

###  satellite_id

• **satellite_id**: *string*

*Defined in [packages/host-inventory/api.ts:296](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L296)*

**`memberof`** CreateCheckIn

___

###  subscription_manager_id

• **subscription_manager_id**: *string*

*Defined in [packages/host-inventory/api.ts:290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L290)*

**`memberof`** CreateCheckIn
