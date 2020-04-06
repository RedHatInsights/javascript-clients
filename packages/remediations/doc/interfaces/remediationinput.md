[@redhat-cloud-services/remediations-client](../README.md) › [Globals](../globals.md) › [RemediationInput](remediationinput.md)

# Interface: RemediationInput

**`export`** 

**`interface`** RemediationInput

## Hierarchy

* **RemediationInput**

## Index

### Properties

* [add](remediationinput.md#optional-add)
* [autoReboot](remediationinput.md#optional-autoreboot)
* [name](remediationinput.md#optional-name)

## Properties

### `Optional` add

• **add**? : *[RemediationInputAdd](remediationinputadd.md)*

*Defined in [api.ts:767](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L767)*

**`type`** {RemediationInputAdd}

**`memberof`** RemediationInput

___

### `Optional` autoReboot

• **autoReboot**? : *boolean*

*Defined in [api.ts:761](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L761)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`type`** {boolean}

**`memberof`** RemediationInput

___

### `Optional` name

• **name**? : *string | null*

*Defined in [api.ts:755](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L755)*

**`type`** {string}

**`memberof`** RemediationInput
