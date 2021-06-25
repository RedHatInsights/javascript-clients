[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CanonicalFactsOut](canonicalfactsout.md)

# Interface: CanonicalFactsOut

**`export`** 

**`interface`** CanonicalFactsOut

## Hierarchy

* **CanonicalFactsOut**

## Index

### Properties

* [bios_uuid](canonicalfactsout.md#optional-bios_uuid)
* [external_id](canonicalfactsout.md#optional-external_id)
* [fqdn](canonicalfactsout.md#optional-fqdn)
* [insights_id](canonicalfactsout.md#optional-insights_id)
* [ip_addresses](canonicalfactsout.md#optional-ip_addresses)
* [mac_addresses](canonicalfactsout.md#optional-mac_addresses)
* [provider_id](canonicalfactsout.md#optional-provider_id)
* [provider_type](canonicalfactsout.md#optional-provider_type)
* [rhel_machine_id](canonicalfactsout.md#optional-rhel_machine_id)
* [satellite_id](canonicalfactsout.md#optional-satellite_id)
* [subscription_manager_id](canonicalfactsout.md#optional-subscription_manager_id)

## Properties

### `Optional` bios_uuid

• **bios_uuid**? : *string | null*

*Defined in [packages/host-inventory/api.ts:259](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L259)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` external_id

• **external_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:283](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L283)*

Host’s reference in the external source e.g. AWS EC2, Azure, OpenStack, etc. This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [packages/host-inventory/api.ts:271](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L271)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:235](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L235)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:265](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L265)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:277](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L277)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` provider_id

• **provider_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:289](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L289)*

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`memberof`** CanonicalFactsOut

___

### `Optional` provider_type

• **provider_type**? : *string | null*

*Defined in [packages/host-inventory/api.ts:295](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L295)*

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`memberof`** CanonicalFactsOut

___

### `Optional` rhel_machine_id

• **rhel_machine_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:241](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L241)*

A Machine ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:253](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L253)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:247](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L247)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut
