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

*Defined in [api.ts:165](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L165)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`memberof`** PlaybookDefinition

___

###  issues

• **issues**: *Array‹[PlaybookDefinitionIssues](playbookdefinitionissues.md)›*

*Defined in [api.ts:159](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L159)*

**`memberof`** PlaybookDefinition
