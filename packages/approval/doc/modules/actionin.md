[@redhat-cloud-services/approval-client](../README.md) > [ActionIn](../modules/actionin.md)

# Module: ActionIn

*__export__*: 

*__namespace__*: ActionIn

## Index

### Enumerations

* [OperationEnum](../enums/actionin.operationenum.md)

### Properties

* [comments](actionin.md#comments)
* [operation](actionin.md#operation)
* [processedBy](actionin.md#processedby)

---

## Properties

<a id="comments"></a>

### `<Optional>` comments

**● comments**: *`string`*

*Defined in [api.ts:95](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L95)*

Comments for action

*__type__*: {string}

*__memberof__*: ActionIn

___
<a id="operation"></a>

###  operation

**● operation**: *[OperationEnum](../enums/actionin.operationenum.md)*

*Defined in [api.ts:89](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L89)*

Types of action, may be one of the value (approve, deny, notify, memo, or skip). The stage will be updated according to the operation.

*__type__*: {string}

*__memberof__*: ActionIn

___
<a id="processedby"></a>

### `<Optional>` processedBy

**● processedBy**: *`string`*

*Defined in [api.ts:83](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/approval/api.ts#L83)*

The person who performs the action

*__type__*: {string}

*__memberof__*: ActionIn

___

