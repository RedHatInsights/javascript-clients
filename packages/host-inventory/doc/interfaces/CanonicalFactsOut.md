[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / CanonicalFactsOut

# Interface: CanonicalFactsOut

**`Export`**

**`Interface`**

CanonicalFactsOut

## Table of contents

### Properties

- [bios\_uuid](CanonicalFactsOut.md#bios_uuid)
- [fqdn](CanonicalFactsOut.md#fqdn)
- [insights\_id](CanonicalFactsOut.md#insights_id)
- [ip\_addresses](CanonicalFactsOut.md#ip_addresses)
- [mac\_addresses](CanonicalFactsOut.md#mac_addresses)
- [provider\_id](CanonicalFactsOut.md#provider_id)
- [provider\_type](CanonicalFactsOut.md#provider_type)
- [satellite\_id](CanonicalFactsOut.md#satellite_id)
- [subscription\_manager\_id](CanonicalFactsOut.md#subscription_manager_id)

## Properties

### bios\_uuid

• `Optional` **bios\_uuid**: `string`

A UUID of the host machine BIOS.  This field is considered to be a canonical fact.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:188](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L188)

___

### fqdn

• `Optional` **fqdn**: `string`

A host’s Fully Qualified Domain Name.  This field is considered to be a canonical fact.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:200](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L200)

___

### insights\_id

• `Optional` **insights\_id**: `string`

An ID defined in /etc/insights-client/machine-id. This field is considered a canonical fact.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:170](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L170)

___

### ip\_addresses

• `Optional` **ip\_addresses**: `string`[]

Host’s network IP addresses.  This field is considered to be a canonical fact.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:194](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L194)

___

### mac\_addresses

• `Optional` **mac\_addresses**: `string`[]

Host’s network interfaces MAC addresses.  This field is considered to be a canonical fact.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:206](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L206)

___

### provider\_id

• `Optional` **provider\_id**: `string`

Host’s reference in the external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM etc. This field is one of the canonical facts and does not work without provider_type.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:212](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L212)

___

### provider\_type

• `Optional` **provider\_type**: `string`

Type of external source e.g. Alibaba, AWS EC2, Azure, GCP, IBM, etc. This field is one of the canonical facts and does not workout provider_id.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L218)

___

### satellite\_id

• `Optional` **satellite\_id**: `string`

A Red Hat Satellite ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:182](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L182)

___

### subscription\_manager\_id

• `Optional` **subscription\_manager\_id**: `string`

A Red Hat Subcription Manager ID of a RHEL host.  This field is considered to be a canonical fact.

**`Memberof`**

CanonicalFactsOut

#### Defined in

[api.ts:176](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L176)
