[@redhat-cloud-services/insights-client](../README.md) › [Globals](../globals.md) › [RuleApi](ruleapi.md)

# Class: RuleApi

RuleApi - object-oriented interface

**`export`** 

**`class`** RuleApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **RuleApi**

## Index

### Constructors

* [constructor](ruleapi.md#constructor)

### Properties

* [axios](ruleapi.md#protected-axios)
* [basePath](ruleapi.md#protected-basepath)
* [configuration](ruleapi.md#protected-configuration)

### Methods

* [ruleAckHosts](ruleapi.md#ruleackhosts)
* [ruleList](ruleapi.md#rulelist)
* [ruleRead](ruleapi.md#ruleread)
* [ruleSystems](ruleapi.md#rulesystems)
* [ruleUnackHosts](ruleapi.md#ruleunackhosts)

## Constructors

###  constructor

\+ **new RuleApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `axios`: AxiosInstance): *[RuleApi](ruleapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`axios` | AxiosInstance |  globalAxios |

**Returns:** *[RuleApi](ruleapi.md)*

## Properties

### `Protected` axios

• **axios**: *AxiosInstance*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#protected-axios)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

*Defined in [api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L51)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md) | undefined*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

*Defined in [api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L49)*

## Methods

###  ruleAckHosts

▸ **ruleAckHosts**(`ruleId`: string, `multiHostAck`: [MultiHostAck](../interfaces/multihostack.md), `options?`: any): *AxiosPromise‹[MultiAckResponse](../interfaces/multiackresponse.md)›*

*Defined in [api.ts:3675](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3675)*

Host acknowledgements will be added to this rule in this account for the system UUIDs supplied.  The justification supplied will be given for all host acks created.  Any existing host acknowledgements for a host on this rule will be updated.  The count of created hosts acknowledgements, and the list of systems now impacted by this rule, will be returned.  Account-wide acks are unaffected.

**`summary`** Add acknowledgements for one or more hosts to this rule.

**`throws`** {RequiredError}

**`memberof`** RuleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ruleId` | string | Rule ID from Insights |
`multiHostAck` | [MultiHostAck](../interfaces/multihostack.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[MultiAckResponse](../interfaces/multiackresponse.md)›*

___

###  ruleList

▸ **ruleList**(`limit?`: number, `offset?`: number, `category?`: Array‹1 | 2 | 3 | 4›, `hasTag?`: Array‹string›, `tags?`: Array‹string›, `impact?`: Array‹1 | 2 | 3 | 4›, `impacting?`: boolean, `incident?`: boolean, `likelihood?`: Array‹1 | 2 | 3 | 4›, `reportsShown?`: boolean, `resRisk?`: Array‹1 | 2 | 3 | 4›, `sort?`: "category" | "description" | "impact" | "impacted_count" | "likelihood" | "playbook_count" | "publish_date" | "rule_id" | "total_risk" | "resolution_risk" | "-category" | "-description" | "-impact" | "-impacted_count" | "-likelihood" | "-playbook_count" | "-publish_date" | "-rule_id" | "-total_risk" | "-resolution_risk", `text?`: string, `topic?`: string, `totalRisk?`: Array‹1 | 2 | 3 | 4›, `hasPlaybook?`: boolean, `options?`: any): *AxiosPromise‹[InlineResponse2004](../interfaces/inlineresponse2004.md)›*

*Defined in [api.ts:3702](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3702)*

If 'acked' is False or not given, then only rules that are not acked will be shown.  If acked is set and 'true' as a string or evaluates to a true value, then all rules including those that are acked will be shown.

**`summary`** List all active rules for this account.

**`throws`** {RequiredError}

**`memberof`** RuleApi

**Parameters:**

Name | Type |
------ | ------ |
`limit?` | number |
`offset?` | number |
`category?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`hasTag?` | Array‹string› |
`tags?` | Array‹string› |
`impact?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`impacting?` | boolean |
`incident?` | boolean |
`likelihood?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`reportsShown?` | boolean |
`resRisk?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`sort?` | "category" &#124; "description" &#124; "impact" &#124; "impacted_count" &#124; "likelihood" &#124; "playbook_count" &#124; "publish_date" &#124; "rule_id" &#124; "total_risk" &#124; "resolution_risk" &#124; "-category" &#124; "-description" &#124; "-impact" &#124; "-impacted_count" &#124; "-likelihood" &#124; "-playbook_count" &#124; "-publish_date" &#124; "-rule_id" &#124; "-total_risk" &#124; "-resolution_risk" |
`text?` | string |
`topic?` | string |
`totalRisk?` | Array‹1 &#124; 2 &#124; 3 &#124; 4› |
`hasPlaybook?` | boolean |
`options?` | any |

**Returns:** *AxiosPromise‹[InlineResponse2004](../interfaces/inlineresponse2004.md)›*

___

###  ruleRead

▸ **ruleRead**(`ruleId`: string, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[RuleForAccount](../interfaces/ruleforaccount.md)›*

*Defined in [api.ts:3715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3715)*

This includes the account-relevant details such as number of impacted systems and host acknowledgements.

**`summary`** Retrieve a single rule and its associated details.

**`throws`** {RequiredError}

**`memberof`** RuleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ruleId` | string | Rule ID from Insights |
`tags?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[RuleForAccount](../interfaces/ruleforaccount.md)›*

___

###  ruleSystems

▸ **ruleSystems**(`ruleId`: string, `tags?`: Array‹string›, `options?`: any): *AxiosPromise‹[SystemsForRule](../interfaces/systemsforrule.md)›*

*Defined in [api.ts:3728](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3728)*

All systems owned by the user's account, with a current upload reporting the given rule, are listed.  Systems are simply listed by Insights Inventory UUID.

**`summary`** List all systems affected by this rule.

**`throws`** {RequiredError}

**`memberof`** RuleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ruleId` | string | Rule ID from Insights |
`tags?` | Array‹string› | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[SystemsForRule](../interfaces/systemsforrule.md)›*

___

###  ruleUnackHosts

▸ **ruleUnackHosts**(`ruleId`: string, `multiHostUnAck`: [MultiHostUnAck](../interfaces/multihostunack.md), `options?`: any): *AxiosPromise‹[MultiAckResponse](../interfaces/multiackresponse.md)›*

*Defined in [api.ts:3741](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/insights/api.ts#L3741)*

Any host acknowledgements for this rule in this account for the given system are deleted.  Hosts that do not have an acknowledgement for this rule in this account are ignored.  The count of deleted host acknowledgements, and the list of hosts now impacted by this rule, will be returned.  Account-wide acks are unaffected.

**`summary`** Delete acknowledgements for one or more hosts to this rule.

**`throws`** {RequiredError}

**`memberof`** RuleApi

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ruleId` | string | Rule ID from Insights |
`multiHostUnAck` | [MultiHostUnAck](../interfaces/multihostunack.md) | - |
`options?` | any | - |

**Returns:** *AxiosPromise‹[MultiAckResponse](../interfaces/multiackresponse.md)›*
