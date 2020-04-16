[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [ReportAzureFilter](reportazurefilter.md)

# Interface: ReportAzureFilter

**`export`** 

**`interface`** ReportAzureFilter

## Hierarchy

* **ReportAzureFilter**

## Index

### Properties

* [instanceType](reportazurefilter.md#optional-instancetype)
* [limit](reportazurefilter.md#optional-limit)
* [offset](reportazurefilter.md#optional-offset)
* [resolution](reportazurefilter.md#optional-resolution)
* [resourceLocation](reportazurefilter.md#optional-resourcelocation)
* [resourceScope](reportazurefilter.md#optional-resourcescope)
* [serviceName](reportazurefilter.md#optional-servicename)
* [subscriptionGuid](reportazurefilter.md#optional-subscriptionguid)
* [tag](reportazurefilter.md#optional-tag)
* [timeScopeUnits](reportazurefilter.md#optional-timescopeunits)
* [timeScopeValue](reportazurefilter.md#optional-timescopevalue)

## Properties

### `Optional` instanceType

• **instanceType**? : *Array‹string›*

*Defined in [api.ts:632](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L632)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:578](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L578)*

Limits the data points returns and aggregates remaining data.

**`type`** {number}

**`memberof`** ReportAzureFilter

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:584](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L584)*

Offsets the data points returned when using limit.

**`type`** {number}

**`memberof`** ReportAzureFilter

___

### `Optional` resolution

• **resolution**? : *[ReportResolution](../enums/reportresolution.md)*

*Defined in [api.ts:590](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L590)*

**`type`** {ReportResolution}

**`memberof`** ReportAzureFilter

___

### `Optional` resourceLocation

• **resourceLocation**? : *Array‹string›*

*Defined in [api.ts:626](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L626)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` resourceScope

• **resourceScope**? : *Array‹[ReportResourceScope](../enums/reportresourcescope.md)›*

*Defined in [api.ts:608](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L608)*

**`type`** {Array<ReportResourceScope>}

**`memberof`** ReportAzureFilter

___

### `Optional` serviceName

• **serviceName**? : *Array‹string›*

*Defined in [api.ts:620](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L620)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` subscriptionGuid

• **subscriptionGuid**? : *Array‹string›*

*Defined in [api.ts:614](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L614)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` tag

• **tag**? : *Array‹string›*

*Defined in [api.ts:638](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L638)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` timeScopeUnits

• **timeScopeUnits**? : *[ReportTimeScopeUnits](../enums/reporttimescopeunits.md)*

*Defined in [api.ts:602](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L602)*

**`type`** {ReportTimeScopeUnits}

**`memberof`** ReportAzureFilter

___

### `Optional` timeScopeValue

• **timeScopeValue**? : *[ReportTimeScopeValue](../enums/reporttimescopevalue.md)*

*Defined in [api.ts:596](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L596)*

**`type`** {ReportTimeScopeValue}

**`memberof`** ReportAzureFilter
