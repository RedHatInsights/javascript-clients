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

*Defined in [api.ts:1032](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1032)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` az

• **az**? : *Array‹string›*

*Defined in [api.ts:1050](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1050)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` limit

• **limit**? : *number*

*Defined in [api.ts:996](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L996)*

Limits the data points returns and aggregates remaining data.

**`type`** {number}

**`memberof`** ReportFilter

___

### `Optional` offset

• **offset**? : *number*

*Defined in [api.ts:1002](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1002)*

Offsets the data points returned when using limit.

**`type`** {number}

**`memberof`** ReportFilter

___

### `Optional` region

• **region**? : *Array‹string›*

*Defined in [api.ts:1044](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1044)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` resolution

• **resolution**? : *[ReportResolution](../enums/reportresolution.md)*

*Defined in [api.ts:1008](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1008)*

**`type`** {ReportResolution}

**`memberof`** ReportFilter

___

### `Optional` resourceScope

• **resourceScope**? : *Array‹[ReportResourceScope](../enums/reportresourcescope.md)›*

*Defined in [api.ts:1026](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1026)*

**`type`** {Array<ReportResourceScope>}

**`memberof`** ReportFilter

___

### `Optional` service

• **service**? : *Array‹string›*

*Defined in [api.ts:1038](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1038)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` tag

• **tag**? : *Array‹string›*

*Defined in [api.ts:1056](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1056)*

**`type`** {Array<string>}

**`memberof`** ReportFilter

___

### `Optional` timeScopeUnits

• **timeScopeUnits**? : *[ReportTimeScopeUnits](../enums/reporttimescopeunits.md)*

*Defined in [api.ts:1020](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1020)*

**`type`** {ReportTimeScopeUnits}

**`memberof`** ReportFilter

___

### `Optional` timeScopeValue

• **timeScopeValue**? : *[ReportTimeScopeValue](../enums/reporttimescopevalue.md)*

*Defined in [api.ts:1014](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1014)*

**`type`** {ReportTimeScopeValue}

**`memberof`** ReportFilter
