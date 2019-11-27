[@redhat-cloud-services/insights-client](../README.md) > [Rule](../interfaces/rule.md)

# Interface: Rule

*__export__*: 

*__interface__*: Rule

## Hierarchy

**Rule**

## Index

### Properties

* [active](rule.md#active)
* [category](rule.md#category)
* [createdAt](rule.md#createdat)
* [deletedAt](rule.md#deletedat)
* [description](rule.md#description)
* [generic](rule.md#generic)
* [impact](rule.md#impact)
* [likelihood](rule.md#likelihood)
* [moreInfo](rule.md#moreinfo)
* [nodeId](rule.md#nodeid)
* [publishDate](rule.md#publishdate)
* [reason](rule.md#reason)
* [rebootRequired](rule.md#rebootrequired)
* [resolutionSet](rule.md#resolutionset)
* [ruleId](rule.md#ruleid)
* [ruleset](rule.md#ruleset)
* [summary](rule.md#summary)
* [tags](rule.md#tags)
* [totalRisk](rule.md#totalrisk)
* [updatedAt](rule.md#updatedat)

---

## Properties

<a id="active"></a>

### `<Optional>` active

**● active**: *`boolean`*

*Defined in [api.ts:539](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L539)*

*__type__*: {boolean}

*__memberof__*: Rule

___
<a id="category"></a>

###  category

**● category**: *[RuleCategory](rulecategory.md)*

*Defined in [api.ts:545](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L545)*

*__type__*: {RuleCategory}

*__memberof__*: Rule

___
<a id="createdat"></a>

### `<Optional>` createdAt

**● createdAt**: *`Date`*

*Defined in [api.ts:509](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L509)*

*__type__*: {Date}

*__memberof__*: Rule

___
<a id="deletedat"></a>

### `<Optional>` deletedAt

**● deletedAt**: *`Date`*

*Defined in [api.ts:521](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L521)*

*__type__*: {Date}

*__memberof__*: Rule

___
<a id="description"></a>

###  description

**● description**: *`string`*

*Defined in [api.ts:533](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L533)*

*__type__*: {string}

*__memberof__*: Rule

___
<a id="generic"></a>

###  generic

**● generic**: *`string`*

*Defined in [api.ts:593](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L593)*

*__type__*: {string}

*__memberof__*: Rule

___
<a id="impact"></a>

###  impact

**● impact**: *[RuleImpact](ruleimpact.md)*

*Defined in [api.ts:551](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L551)*

*__type__*: {RuleImpact}

*__memberof__*: Rule

___
<a id="likelihood"></a>

### `<Optional>` likelihood

**● likelihood**: *`number`*

*Defined in [api.ts:557](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L557)*

*__type__*: {number}

*__memberof__*: Rule

___
<a id="moreinfo"></a>

### `<Optional>` moreInfo

**● moreInfo**: *`string`*

*Defined in [api.ts:605](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L605)*

*__type__*: {string}

*__memberof__*: Rule

___
<a id="nodeid"></a>

### `<Optional>` nodeId

**● nodeId**: *`string`*

*Defined in [api.ts:563](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L563)*

*__type__*: {string}

*__memberof__*: Rule

___
<a id="publishdate"></a>

### `<Optional>` publishDate

**● publishDate**: *`Date` \| `null`*

*Defined in [api.ts:581](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L581)*

*__type__*: {Date}

*__memberof__*: Rule

___
<a id="reason"></a>

###  reason

**● reason**: *`string`*

*Defined in [api.ts:599](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L599)*

*__type__*: {string}

*__memberof__*: Rule

___
<a id="rebootrequired"></a>

### `<Optional>` rebootRequired

**● rebootRequired**: *`boolean`*

*Defined in [api.ts:575](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L575)*

*__type__*: {boolean}

*__memberof__*: Rule

___
<a id="resolutionset"></a>

###  resolutionSet

**● resolutionSet**: *`Array`<[Resolution](resolution.md)>*

*Defined in [api.ts:611](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L611)*

*__type__*: {Array}

*__memberof__*: Rule

___
<a id="ruleid"></a>

###  ruleId

**● ruleId**: *`string`*

*Defined in [api.ts:503](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L503)*

Rule ID from Insights

*__type__*: {string}

*__memberof__*: Rule

___
<a id="ruleset"></a>

###  ruleset

**● ruleset**: *[RuleSet](ruleset.md)*

*Defined in [api.ts:527](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L527)*

*__type__*: {RuleSet}

*__memberof__*: Rule

___
<a id="summary"></a>

###  summary

**● summary**: *`string`*

*Defined in [api.ts:587](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L587)*

*__type__*: {string}

*__memberof__*: Rule

___
<a id="tags"></a>

### `<Optional>` tags

**● tags**: *`string`*

*Defined in [api.ts:569](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L569)*

*__type__*: {string}

*__memberof__*: Rule

___
<a id="totalrisk"></a>

### `<Optional>` totalRisk

**● totalRisk**: *`number`*

*Defined in [api.ts:617](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L617)*

*__type__*: {number}

*__memberof__*: Rule

___
<a id="updatedat"></a>

### `<Optional>` updatedAt

**● updatedAt**: *`Date`*

*Defined in [api.ts:515](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L515)*

*__type__*: {Date}

*__memberof__*: Rule

___

