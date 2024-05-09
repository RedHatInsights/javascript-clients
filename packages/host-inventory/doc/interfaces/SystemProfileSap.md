[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileSap

# Interface: SystemProfileSap

Object containing data specific to the SAP workload

**`Export`**

SystemProfileSap

## Table of contents

### Properties

- [instance\_number](SystemProfileSap.md#instance_number)
- [sap\_system](SystemProfileSap.md#sap_system)
- [sids](SystemProfileSap.md#sids)
- [version](SystemProfileSap.md#version)

## Properties

### instance\_number

• `Optional` **instance\_number**: `string`

The instance number of the SAP HANA system (a two-digit number between 00 and 99)

**`Memberof`**

SystemProfileSap

#### Defined in

[api.ts:2435](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2435)

___

### sap\_system

• `Optional` **sap\_system**: `boolean`

Indicates if SAP is installed on the system

**`Memberof`**

SystemProfileSap

#### Defined in

[api.ts:2423](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2423)

___

### sids

• `Optional` **sids**: `string`[]

**`Memberof`**

SystemProfileSap

#### Defined in

[api.ts:2429](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2429)

___

### version

• `Optional` **version**: `string`

The version of the SAP HANA lifecycle management program

**`Memberof`**

SystemProfileSap

#### Defined in

[api.ts:2441](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/host-inventory/api.ts#L2441)
