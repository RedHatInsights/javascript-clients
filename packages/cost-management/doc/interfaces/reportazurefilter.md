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

*Defined in [api.ts:835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L835)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:781](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L781)*

Limits the data points returns and aggregates remaining data.

**`type`** {number}

**`memberof`** ReportAzureFilter

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:787](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L787)*

Offsets the data points returned when using limit.

**`type`** {number}

**`memberof`** ReportAzureFilter

___

### `Optional` resolution

• **resolution**? : *[ReportResolution](../enums/reportresolution.md)*

*Defined in [api.ts:793](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L793)*

**`type`** {ReportResolution}

**`memberof`** ReportAzureFilter

___

### `Optional` resourceLocation

• **resourceLocation**? : *Array‹string›*

*Defined in [api.ts:829](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L829)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` resourceScope

• **resourceScope**? : *Array‹[ReportResourceScope](../enums/reportresourcescope.md)›*

*Defined in [api.ts:811](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L811)*

**`type`** {Array<ReportResourceScope>}

**`memberof`** ReportAzureFilter

___

### `Optional` serviceName

• **serviceName**? : *Array‹string›*

*Defined in [api.ts:823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L823)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` subscriptionGuid

• **subscriptionGuid**? : *Array‹string›*

*Defined in [api.ts:817](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L817)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` tag

• **tag**? : *Array‹string›*

*Defined in [api.ts:841](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L841)*

**`type`** {Array<string>}

**`memberof`** ReportAzureFilter

___

### `Optional` timeScopeUnits

• **timeScopeUnits**? : *[ReportTimeScopeUnits](../enums/reporttimescopeunits.md)*

*Defined in [api.ts:805](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L805)*

**`type`** {ReportTimeScopeUnits}

**`memberof`** ReportAzureFilter

___

### `Optional` timeScopeValue

• **timeScopeValue**? : *[ReportTimeScopeValue](../enums/reporttimescopevalue.md)*

*Defined in [api.ts:799](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L799)*

**`type`** {ReportTimeScopeValue}

**`memberof`** ReportAzureFilter
