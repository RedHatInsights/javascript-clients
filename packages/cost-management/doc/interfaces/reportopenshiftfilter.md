[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [ReportOpenShiftFilter](reportopenshiftfilter.md)

# Interface: ReportOpenShiftFilter

**`export`** 

**`interface`** ReportOpenShiftFilter

## Hierarchy

* **ReportOpenShiftFilter**

## Index

### Properties

* [cluster](reportopenshiftfilter.md#optional-cluster)
* [infrastructures](reportopenshiftfilter.md#optional-infrastructures)
* [limit](reportopenshiftfilter.md#optional-limit)
* [node](reportopenshiftfilter.md#optional-node)
* [offset](reportopenshiftfilter.md#optional-offset)
* [pod](reportopenshiftfilter.md#optional-pod)
* [project](reportopenshiftfilter.md#optional-project)
* [resolution](reportopenshiftfilter.md#optional-resolution)
* [resourceScope](reportopenshiftfilter.md#optional-resourcescope)
* [tag](reportopenshiftfilter.md#optional-tag)
* [timeScopeUnits](reportopenshiftfilter.md#optional-timescopeunits)
* [timeScopeValue](reportopenshiftfilter.md#optional-timescopevalue)

## Properties

### `Optional` cluster

• **cluster**? : *Array‹string›*

*Defined in [api.ts:2279](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2279)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` infrastructures

• **infrastructures**? : *Array‹string›*

*Defined in [api.ts:2303](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2303)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:2237](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2237)*

Limits the data points returns and aggregates remaining data.

**`type`** {number}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` node

• **node**? : *Array‹string›*

*Defined in [api.ts:2291](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2291)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:2243](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2243)*

Offsets the data points returned when using limit.

**`type`** {number}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` pod

• **pod**? : *Array‹string›*

*Defined in [api.ts:2285](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2285)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` project

• **project**? : *Array‹string›*

*Defined in [api.ts:2273](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2273)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` resolution

• **resolution**? : *[ReportResolution](../enums/reportresolution.md)*

*Defined in [api.ts:2249](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2249)*

**`type`** {ReportResolution}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` resourceScope

• **resourceScope**? : *Array‹[ReportResourceScope](../enums/reportresourcescope.md)›*

*Defined in [api.ts:2267](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2267)*

**`type`** {Array<ReportResourceScope>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` tag

• **tag**? : *Array‹string›*

*Defined in [api.ts:2297](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2297)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` timeScopeUnits

• **timeScopeUnits**? : *[ReportTimeScopeUnits](../enums/reporttimescopeunits.md)*

*Defined in [api.ts:2261](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2261)*

**`type`** {ReportTimeScopeUnits}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` timeScopeValue

• **timeScopeValue**? : *[ReportTimeScopeValue](../enums/reporttimescopevalue.md)*

*Defined in [api.ts:2255](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2255)*

**`type`** {ReportTimeScopeValue}

**`memberof`** ReportOpenShiftFilter
