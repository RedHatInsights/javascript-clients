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

*Defined in [api.ts:2254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2254)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` infrastructures

• **infrastructures**? : *Array‹string›*

*Defined in [api.ts:2278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2278)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:2212](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2212)*

Limits the data points returns and aggregates remaining data.

**`type`** {number}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` node

• **node**? : *Array‹string›*

*Defined in [api.ts:2266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2266)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:2218](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2218)*

Offsets the data points returned when using limit.

**`type`** {number}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` pod

• **pod**? : *Array‹string›*

*Defined in [api.ts:2260](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2260)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` project

• **project**? : *Array‹string›*

*Defined in [api.ts:2248](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2248)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` resolution

• **resolution**? : *[ReportResolution](../enums/reportresolution.md)*

*Defined in [api.ts:2224](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2224)*

**`type`** {ReportResolution}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` resourceScope

• **resourceScope**? : *Array‹[ReportResourceScope](../enums/reportresourcescope.md)›*

*Defined in [api.ts:2242](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2242)*

**`type`** {Array<ReportResourceScope>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` tag

• **tag**? : *Array‹string›*

*Defined in [api.ts:2272](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2272)*

**`type`** {Array<string>}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` timeScopeUnits

• **timeScopeUnits**? : *[ReportTimeScopeUnits](../enums/reporttimescopeunits.md)*

*Defined in [api.ts:2236](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2236)*

**`type`** {ReportTimeScopeUnits}

**`memberof`** ReportOpenShiftFilter

___

### `Optional` timeScopeValue

• **timeScopeValue**? : *[ReportTimeScopeValue](../enums/reporttimescopevalue.md)*

*Defined in [api.ts:2230](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L2230)*

**`type`** {ReportTimeScopeValue}

**`memberof`** ReportOpenShiftFilter
