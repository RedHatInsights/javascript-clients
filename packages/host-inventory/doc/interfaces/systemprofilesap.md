[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [SystemProfileSap](systemprofilesap.md)

# Interface: SystemProfileSap

Object containing data specific to the SAP workload

**`export`** 

**`interface`** SystemProfileSap

## Hierarchy

* **SystemProfileSap**

## Index

### Properties

* [instance_number](systemprofilesap.md#optional-instance_number)
* [sap_system](systemprofilesap.md#optional-sap_system)
* [sids](systemprofilesap.md#optional-sids)
* [version](systemprofilesap.md#optional-version)

## Properties

### `Optional` instance_number

• **instance_number**? : *string*

*Defined in [api.ts:1948](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1948)*

The instance number of the SAP HANA system (a two-digit number between 00 and 99)

**`memberof`** SystemProfileSap

___

### `Optional` sap_system

• **sap_system**? : *boolean*

*Defined in [api.ts:1936](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1936)*

Indicates if SAP is installed on the system

**`memberof`** SystemProfileSap

___

### `Optional` sids

• **sids**? : *Array‹string›*

*Defined in [api.ts:1942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1942)*

**`memberof`** SystemProfileSap

___

### `Optional` version

• **version**? : *string*

*Defined in [api.ts:1954](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1954)*

The version of the SAP HANA lifecycle management program

**`memberof`** SystemProfileSap
