[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [CanonicalFactsOut](canonicalfactsout.md)

# Interface: CanonicalFactsOut

**`export`** 

**`interface`** CanonicalFactsOut

## Hierarchy

* **CanonicalFactsOut**

## Index

### Properties

* [bios_uuid](canonicalfactsout.md#optional-bios_uuid)
* [fqdn](canonicalfactsout.md#optional-fqdn)
* [insights_id](canonicalfactsout.md#optional-insights_id)
* [ip_addresses](canonicalfactsout.md#optional-ip_addresses)
* [mac_addresses](canonicalfactsout.md#optional-mac_addresses)
* [provider_id](canonicalfactsout.md#optional-provider_id)
* [provider_type](canonicalfactsout.md#optional-provider_type)
* [satellite_id](canonicalfactsout.md#optional-satellite_id)
* [subscription_manager_id](canonicalfactsout.md#optional-subscription_manager_id)

## Properties

### `Optional` bios_uuid

• **bios_uuid**? : *string | null*

*Defined in [packages/host-inventory/api.ts:242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L242)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [packages/host-inventory/api.ts:254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L254)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L224)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:248](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L248)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Defined in [packages/host-inventory/api.ts:260](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L260)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` provider_id

• **provider_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L266)*

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`memberof`** CanonicalFactsOut

___

### `Optional` provider_type

• **provider_type**? : *string | null*

*Defined in [packages/host-inventory/api.ts:272](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L272)*

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`memberof`** CanonicalFactsOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:236](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L236)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Defined in [packages/host-inventory/api.ts:230](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L230)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut
