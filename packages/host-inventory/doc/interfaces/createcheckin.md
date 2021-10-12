[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateCheckIn](createcheckin.md)

# Interface: CreateCheckIn

Data required to create a check-in record for a host.

**`export`** 

**`interface`** CreateCheckIn

## Hierarchy

* **CreateCheckIn**

## Index

### Properties

* [bios_uuid](createcheckin.md#bios_uuid)
* [checkin_frequency](createcheckin.md#optional-checkin_frequency)
* [fqdn](createcheckin.md#fqdn)
* [insights_id](createcheckin.md#insights_id)
* [ip_addresses](createcheckin.md#ip_addresses)
* [mac_addresses](createcheckin.md#mac_addresses)
* [provider_id](createcheckin.md#provider_id)
* [provider_type](createcheckin.md#provider_type)
* [satellite_id](createcheckin.md#satellite_id)
* [subscription_manager_id](createcheckin.md#subscription_manager_id)

## Properties

###  bios_uuid

• **bios_uuid**: *string*

*Defined in [packages/host-inventory/api.ts:303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L303)*

**`memberof`** CreateCheckIn

___

### `Optional` checkin_frequency

• **checkin_frequency**? : *number*

*Defined in [packages/host-inventory/api.ts:339](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L339)*

How long from now to expect another check-in (in minutes).

**`memberof`** CreateCheckIn

___

###  fqdn

• **fqdn**: *string*

*Defined in [packages/host-inventory/api.ts:315](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L315)*

**`memberof`** CreateCheckIn

___

###  insights_id

• **insights_id**: *string*

*Defined in [packages/host-inventory/api.ts:285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L285)*

**`memberof`** CreateCheckIn

___

###  ip_addresses

• **ip_addresses**: *Array‹string›*

*Defined in [packages/host-inventory/api.ts:309](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L309)*

**`memberof`** CreateCheckIn

___

###  mac_addresses

• **mac_addresses**: *Array‹string›*

*Defined in [packages/host-inventory/api.ts:321](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L321)*

**`memberof`** CreateCheckIn

___

###  provider_id

• **provider_id**: *string*

*Defined in [packages/host-inventory/api.ts:327](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L327)*

**`memberof`** CreateCheckIn

___

###  provider_type

• **provider_type**: *string*

*Defined in [packages/host-inventory/api.ts:333](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L333)*

**`memberof`** CreateCheckIn

___

###  satellite_id

• **satellite_id**: *string*

*Defined in [packages/host-inventory/api.ts:297](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L297)*

**`memberof`** CreateCheckIn

___

###  subscription_manager_id

• **subscription_manager_id**: *string*

*Defined in [packages/host-inventory/api.ts:291](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L291)*

**`memberof`** CreateCheckIn
