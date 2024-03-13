[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / SystemProfileSap

# Interface: SystemProfileSap

Object containing data specific to the SAP workload

**`Export`**

**`Interface`**

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

[api.ts:2317](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L2317)

___

### sap\_system

• `Optional` **sap\_system**: `boolean`

Indicates if SAP is installed on the system

**`Memberof`**

SystemProfileSap

#### Defined in

[api.ts:2305](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L2305)

___

### sids

• `Optional` **sids**: `string`[]

**`Memberof`**

SystemProfileSap

#### Defined in

[api.ts:2311](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L2311)

___

### version

• `Optional` **version**: `string`

The version of the SAP HANA lifecycle management program

**`Memberof`**

SystemProfileSap

#### Defined in

[api.ts:2323](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/host-inventory/api.ts#L2323)
