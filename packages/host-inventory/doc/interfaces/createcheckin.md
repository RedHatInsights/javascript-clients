[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CreateCheckIn](createcheckin.md)

# Interface: CreateCheckIn

Data required to create a check-in record for a host.

**`export`** 

**`interface`** CreateCheckIn

## Hierarchy

* **CreateCheckIn**

## Index

### Properties

* [bios_uuid](createcheckin.md#optional-bios_uuid)
* [checkin_frequency](createcheckin.md#optional-checkin_frequency)
* [external_id](createcheckin.md#optional-external_id)
* [fqdn](createcheckin.md#optional-fqdn)
* [insights_id](createcheckin.md#optional-insights_id)
* [ip_addresses](createcheckin.md#optional-ip_addresses)
* [mac_addresses](createcheckin.md#optional-mac_addresses)
* [rhel_machine_id](createcheckin.md#optional-rhel_machine_id)
* [satellite_id](createcheckin.md#optional-satellite_id)
* [subscription_manager_id](createcheckin.md#optional-subscription_manager_id)

## Properties

### `Optional` bios_uuid

• **bios_uuid**? : *string*

*Defined in [packages/host-inventory/api.ts:113](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L113)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn

___

### `Optional` checkin_frequency

• **checkin_frequency**? : *number*

*Defined in [packages/host-inventory/api.ts:143](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L143)*

How long from now to expect another check-in (in minutes).

**`memberof`** CreateCheckIn

___

### `Optional` external_id

• **external_id**? : *string*

*Defined in [packages/host-inventory/api.ts:137](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L137)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn

___

### `Optional` fqdn

• **fqdn**? : *string*

*Defined in [packages/host-inventory/api.ts:125](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L125)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn

___

### `Optional` insights_id

• **insights_id**? : *string*

*Defined in [packages/host-inventory/api.ts:89](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L89)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CreateCheckIn

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:119](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L119)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string›*

*Defined in [packages/host-inventory/api.ts:131](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L131)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn

___

### `Optional` rhel_machine_id

• **rhel_machine_id**? : *string*

*Defined in [packages/host-inventory/api.ts:95](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L95)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn

___

### `Optional` satellite_id

• **satellite_id**? : *string*

*Defined in [packages/host-inventory/api.ts:107](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L107)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string*

*Defined in [packages/host-inventory/api.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L101)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CreateCheckIn
