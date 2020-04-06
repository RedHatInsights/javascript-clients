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

*Defined in [api.ts:207](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L207)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`type`** {boolean}

**`memberof`** PlaybookDefinition

___

###  issues

• **issues**: *Array‹[PlaybookDefinitionIssues](playbookdefinitionissues.md)›*

*Defined in [api.ts:201](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L201)*

**`type`** {Array<PlaybookDefinitionIssues>}

**`memberof`** PlaybookDefinition
