[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [PlaybookDefinition](playbookdefinition.md)

# Interface: PlaybookDefinition

**`export`** 

**`interface`** PlaybookDefinition

## Hierarchy

* **PlaybookDefinition**

## Index

### Properties

* [autoReboot](playbookdefinition.md#optional-autoreboot)
* [issues](playbookdefinition.md#issues)

## Properties

### `Optional` autoReboot

• **autoReboot**? : *boolean*

*Defined in [api.ts:169](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L169)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`type`** {boolean}

**`memberof`** PlaybookDefinition

___

###  issues

• **issues**: *Array‹[PlaybookDefinitionIssues](playbookdefinitionissues.md)›*

*Defined in [api.ts:163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L163)*

**`type`** {Array<PlaybookDefinitionIssues>}

**`memberof`** PlaybookDefinition
