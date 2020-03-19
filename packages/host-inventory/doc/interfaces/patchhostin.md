[@redhat-cloud-services/host-inventory-client](../README.md) › [Globals](../globals.md) › [PatchHostIn](patchhostin.md)

# Interface: PatchHostIn

Data of a single host to be updated.

**`export`** 

**`interface`** PatchHostIn

## Hierarchy

* **PatchHostIn**

## Index

### Properties

* [ansibleHost](patchhostin.md#optional-ansiblehost)
* [displayName](patchhostin.md#optional-displayname)

## Properties

### `Optional` ansibleHost

• **ansibleHost**? : *string*

*Defined in [api.ts:809](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L809)*

The ansible host name for remediations

**`type`** {string}

**`memberof`** PatchHostIn

___

### `Optional` displayName

• **displayName**? : *string*

*Defined in [api.ts:815](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L815)*

A host’s human-readable display name, e.g. in a form of a domain name.

**`type`** {string}

**`memberof`** PatchHostIn
