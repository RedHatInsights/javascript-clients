[@redhat-cloud-services/cost-management-client](../README.md) > [ReportFilter](../interfaces/reportfilter.md)

# Interface: ReportFilter

*__export__*: 

*__interface__*: ReportFilter

## Hierarchy

**ReportFilter**

## Index

### Properties

* [account](reportfilter.md#account)
* [az](reportfilter.md#az)
* [limit](reportfilter.md#limit)
* [offset](reportfilter.md#offset)
* [region](reportfilter.md#region)
* [resolution](reportfilter.md#resolution)
* [resourceScope](reportfilter.md#resourcescope)
* [service](reportfilter.md#service)
* [tag](reportfilter.md#tag)
* [timeScopeUnits](reportfilter.md#timescopeunits)
* [timeScopeValue](reportfilter.md#timescopevalue)

---

## Properties

<a id="account"></a>

### `<Optional>` account

**● account**: *`Array`<`string`>*

*Defined in [api.ts:1290](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1290)*

*__type__*: {Array}

*__memberof__*: ReportFilter

___
<a id="az"></a>

### `<Optional>` az

**● az**: *`Array`<`string`>*

*Defined in [api.ts:1308](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1308)*

*__type__*: {Array}

*__memberof__*: ReportFilter

___
<a id="limit"></a>

### `<Optional>` limit

**● limit**: *`number`*

*Defined in [api.ts:1254](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1254)*

Limits the data points returns and aggregates remaining data.

*__type__*: {number}

*__memberof__*: ReportFilter

___
<a id="offset"></a>

### `<Optional>` offset

**● offset**: *`number`*

*Defined in [api.ts:1260](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1260)*

Offsets the data points returned when using limit.

*__type__*: {number}

*__memberof__*: ReportFilter

___
<a id="region"></a>

### `<Optional>` region

**● region**: *`Array`<`string`>*

*Defined in [api.ts:1302](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1302)*

*__type__*: {Array}

*__memberof__*: ReportFilter

___
<a id="resolution"></a>

### `<Optional>` resolution

**● resolution**: *[ReportResolution](../enums/reportresolution.md)*

*Defined in [api.ts:1266](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1266)*

*__type__*: {ReportResolution}

*__memberof__*: ReportFilter

___
<a id="resourcescope"></a>

### `<Optional>` resourceScope

**● resourceScope**: *`Array`<[ReportResourceScope](../enums/reportresourcescope.md)>*

*Defined in [api.ts:1284](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1284)*

*__type__*: {Array}

*__memberof__*: ReportFilter

___
<a id="service"></a>

### `<Optional>` service

**● service**: *`Array`<`string`>*

*Defined in [api.ts:1296](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1296)*

*__type__*: {Array}

*__memberof__*: ReportFilter

___
<a id="tag"></a>

### `<Optional>` tag

**● tag**: *`Array`<`string`>*

*Defined in [api.ts:1314](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1314)*

*__type__*: {Array}

*__memberof__*: ReportFilter

___
<a id="timescopeunits"></a>

### `<Optional>` timeScopeUnits

**● timeScopeUnits**: *[ReportTimeScopeUnits](../enums/reporttimescopeunits.md)*

*Defined in [api.ts:1278](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1278)*

*__type__*: {ReportTimeScopeUnits}

*__memberof__*: ReportFilter

___
<a id="timescopevalue"></a>

### `<Optional>` timeScopeValue

**● timeScopeValue**: *[ReportTimeScopeValue](../enums/reporttimescopevalue.md)*

*Defined in [api.ts:1272](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/cost-management/api.ts#L1272)*

*__type__*: {ReportTimeScopeValue}

*__memberof__*: ReportFilter

___

