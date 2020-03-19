[@redhat-cloud-services/cost-management-client](../README.md) › [Globals](../globals.md) › [ReportFilter](reportfilter.md)

# Interface: ReportFilter

**`export`** 

**`interface`** ReportFilter

## Hierarchy

* **ReportFilter**

## Index

### Properties

* [account](reportfilter.md#optional-account)
* [az](reportfilter.md#optional-az)
* [limit](reportfilter.md#optional-limit)
* [offset](reportfilter.md#optional-offset)
* [region](reportfilter.md#optional-region)
* [resolution](reportfilter.md#optional-resolution)
* [resourceScope](reportfilter.md#optional-resourcescope)
* [service](reportfilter.md#optional-service)
* [tag](reportfilter.md#optional-tag)
* [timeScopeUnits](reportfilter.md#optional-timescopeunits)
* [timeScopeValue](reportfilter.md#optional-timescopevalue)

## Properties

### `Optional` account

• **account**? : *Array‹string›*

*Defined in [api.ts:1179](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1179)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` az

• **az**? : *Array‹string›*

*Defined in [api.ts:1197](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1197)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:1143](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1143)*

Limits the data points returns and aggregates remaining data.

**`type`** {number}

**`memberof`** ReportFilter

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:1149](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1149)*

Offsets the data points returned when using limit.

**`type`** {number}

**`memberof`** ReportFilter

___

### `Optional` region

• **region**? : *Array‹string›*

*Defined in [api.ts:1191](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1191)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` resolution

• **resolution**? : *[ReportResolution](../enums/reportresolution.md)*

*Defined in [api.ts:1155](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1155)*

**`type`** {ReportResolution}

**`memberof`** ReportFilter

___

### `Optional` resourceScope

• **resourceScope**? : *Array‹[ReportResourceScope](../enums/reportresourcescope.md)›*

*Defined in [api.ts:1173](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1173)*

**`type`** {Array<ReportResourceScope>}

**`memberof`** ReportFilter

___

### `Optional` service

• **service**? : *Array‹string›*

*Defined in [api.ts:1185](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1185)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` tag

• **tag**? : *Array‹string›*

*Defined in [api.ts:1203](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1203)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` timeScopeUnits

• **timeScopeUnits**? : *[ReportTimeScopeUnits](../enums/reporttimescopeunits.md)*

*Defined in [api.ts:1167](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1167)*

**`type`** {ReportTimeScopeUnits}

**`memberof`** ReportFilter

___

### `Optional` timeScopeValue

• **timeScopeValue**? : *[ReportTimeScopeValue](../enums/reporttimescopevalue.md)*

*Defined in [api.ts:1161](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1161)*

**`type`** {ReportTimeScopeValue}

**`memberof`** ReportFilter
