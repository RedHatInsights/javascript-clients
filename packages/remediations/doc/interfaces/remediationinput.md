[@redhat-cloud-services/remediations-client](../README.md) > [RemediationInput](../interfaces/remediationinput.md)

# Interface: RemediationInput

*__export__*: 

*__interface__*: RemediationInput

## Hierarchy

**RemediationInput**

## Index

### Properties

* [add](remediationinput.md#add)
* [autoReboot](remediationinput.md#autoreboot)
* [name](remediationinput.md#name)

---

## Properties

<a id="add"></a>

### `<Optional>` add

**● add**: *[RemediationInputAdd](remediationinputadd.md)*

*Defined in [api.ts:373](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L373)*

*__type__*: {RemediationInputAdd}

*__memberof__*: RemediationInput

___
<a id="autoreboot"></a>

### `<Optional>` autoReboot

**● autoReboot**: *`boolean`*

*Defined in [api.ts:367](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L367)*

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

*__type__*: {boolean}

*__memberof__*: RemediationInput

___
<a id="name"></a>

### `<Optional>` name

**● name**: *`string` \| `null`*

*Defined in [api.ts:361](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L361)*

*__type__*: {string}

*__memberof__*: RemediationInput

___

