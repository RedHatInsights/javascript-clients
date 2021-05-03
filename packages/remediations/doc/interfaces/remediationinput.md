[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [RemediationInput](remediationinput.md)

# Interface: RemediationInput

**`export`** 

**`interface`** RemediationInput

## Hierarchy

* **RemediationInput**

## Index

### Properties

* [add](remediationinput.md#optional-add)
* [archived](remediationinput.md#optional-archived)
* [auto_reboot](remediationinput.md#optional-auto_reboot)
* [name](remediationinput.md#optional-name)

## Properties

### `Optional` add

• **add**? : *[RemediationInputAdd](remediationinputadd.md)*

*Defined in [api.ts:720](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L720)*

**`memberof`** RemediationInput

___

### `Optional` archived

• **archived**? : *boolean*

*Defined in [api.ts:708](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L708)*

Indicates whether a remediation has been marked as archived

**`memberof`** RemediationInput

___

### `Optional` auto_reboot

• **auto_reboot**? : *boolean*

*Defined in [api.ts:714](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L714)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`memberof`** RemediationInput

___

### `Optional` name

• **name**? : *string | null*

*Defined in [api.ts:702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L702)*

**`memberof`** RemediationInput
