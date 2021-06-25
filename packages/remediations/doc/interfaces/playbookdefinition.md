[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [PlaybookDefinition](playbookdefinition.md)

# Interface: PlaybookDefinition

**`export`** 

**`interface`** PlaybookDefinition

## Hierarchy

* **PlaybookDefinition**

## Index

### Properties

* [auto_reboot](playbookdefinition.md#optional-auto_reboot)
* [issues](playbookdefinition.md#issues)

## Properties

### `Optional` auto_reboot

• **auto_reboot**? : *boolean*

*Defined in [api.ts:152](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L152)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`memberof`** PlaybookDefinition

___

###  issues

• **issues**: *Array‹[PlaybookDefinitionIssues](playbookdefinitionissues.md)›*

*Defined in [api.ts:146](https://github.com/fhlavac/javascript-clients/blob/master/packages/remediations/api.ts#L146)*

**`memberof`** PlaybookDefinition
