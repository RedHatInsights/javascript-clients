[@redhat-cloud-services/remediations-client](../README.md) > [PlaybookDefinition](../interfaces/playbookdefinition.md)

# Interface: PlaybookDefinition

*__export__*: 

*__interface__*: PlaybookDefinition

## Hierarchy

**PlaybookDefinition**

## Index

### Properties

* [autoReboot](playbookdefinition.md#autoreboot)
* [issues](playbookdefinition.md#issues)

---

## Properties

<a id="autoreboot"></a>

### `<Optional>` autoReboot

**● autoReboot**: *`boolean`*

*Defined in [api.ts:169](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L169)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

*__type__*: {boolean}

*__memberof__*: PlaybookDefinition

___
<a id="issues"></a>

###  issues

**● issues**: *`Array`<[PlaybookDefinitionIssues](playbookdefinitionissues.md)>*

*Defined in [api.ts:163](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L163)*

*__type__*: {Array}

*__memberof__*: PlaybookDefinition

___

