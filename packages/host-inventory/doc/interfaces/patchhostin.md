[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [PatchHostIn](patchhostin.md)

# Interface: PatchHostIn

Data of a single host to be updated.

**`export`** 

**`interface`** PatchHostIn

## Hierarchy

* **PatchHostIn**

## Index

### Properties

* [ansible_host](patchhostin.md#optional-ansible_host)
* [display_name](patchhostin.md#optional-display_name)

## Properties

### `Optional` ansible_host

• **ansible_host**? : *string*

*Defined in [api.ts:1081](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1081)*

The ansible host name for remediations

**`memberof`** PatchHostIn

___

### `Optional` display_name

• **display_name**? : *string*

*Defined in [api.ts:1087](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L1087)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`memberof`** PatchHostIn
