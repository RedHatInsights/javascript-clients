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

*Defined in [api.ts:188](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L188)*

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` fqdn

• **fqdn**? : *string | null*

*Defined in [api.ts:200](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L200)*

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` insights_id

• **insights_id**? : *string | null*

*Defined in [api.ts:170](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L170)*

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` ip_addresses

• **ip_addresses**? : *Array‹string› | null*

*Defined in [api.ts:194](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L194)*

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` mac_addresses

• **mac_addresses**? : *Array‹string› | null*

*Defined in [api.ts:206](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L206)*

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` provider_id

• **provider_id**? : *string | null*

*Defined in [api.ts:212](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L212)*

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`memberof`** CanonicalFactsOut

___

### `Optional` provider_type

• **provider_type**? : *string | null*

*Defined in [api.ts:218](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L218)*

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`memberof`** CanonicalFactsOut

___

### `Optional` satellite_id

• **satellite_id**? : *string | null*

*Defined in [api.ts:182](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L182)*

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut

___

### `Optional` subscription_manager_id

• **subscription_manager_id**? : *string | null*

*Defined in [api.ts:176](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/host-inventory/api.ts#L176)*

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`memberof`** CanonicalFactsOut
