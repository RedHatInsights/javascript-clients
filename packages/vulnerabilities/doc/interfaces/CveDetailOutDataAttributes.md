[@redhat-cloud-services/vulnerabilities-client](../README.md) / [Exports](../modules.md) / CveDetailOutDataAttributes

# Interface: CveDetailOutDataAttributes

**`Export`**

**`Interface`**

CveDetailOutDataAttributes

## Table of contents

### Properties

- [advisories\_list](CveDetailOutDataAttributes.md#advisories_list)
- [affected\_but\_not\_vulnerable](CveDetailOutDataAttributes.md#affected_but_not_vulnerable)
- [affected\_systems](CveDetailOutDataAttributes.md#affected_systems)
- [business\_risk](CveDetailOutDataAttributes.md#business_risk)
- [business\_risk\_id](CveDetailOutDataAttributes.md#business_risk_id)
- [business\_risk\_text](CveDetailOutDataAttributes.md#business_risk_text)
- [celebrity\_name](CveDetailOutDataAttributes.md#celebrity_name)
- [cvss2\_metrics](CveDetailOutDataAttributes.md#cvss2_metrics)
- [cvss2\_score](CveDetailOutDataAttributes.md#cvss2_score)
- [cvss3\_metrics](CveDetailOutDataAttributes.md#cvss3_metrics)
- [cvss3\_score](CveDetailOutDataAttributes.md#cvss3_score)
- [description](CveDetailOutDataAttributes.md#description)
- [impact](CveDetailOutDataAttributes.md#impact)
- [known\_exploit](CveDetailOutDataAttributes.md#known_exploit)
- [modified\_date](CveDetailOutDataAttributes.md#modified_date)
- [public\_date](CveDetailOutDataAttributes.md#public_date)
- [redhat\_url](CveDetailOutDataAttributes.md#redhat_url)
- [rules](CveDetailOutDataAttributes.md#rules)
- [secondary\_url](CveDetailOutDataAttributes.md#secondary_url)
- [status](CveDetailOutDataAttributes.md#status)
- [status\_id](CveDetailOutDataAttributes.md#status_id)
- [status\_text](CveDetailOutDataAttributes.md#status_text)
- [synopsis](CveDetailOutDataAttributes.md#synopsis)
- [systems\_status\_detail](CveDetailOutDataAttributes.md#systems_status_detail)
- [systems\_status\_divergent](CveDetailOutDataAttributes.md#systems_status_divergent)

## Properties

### advisories\_list

• **advisories\_list**: (`string` \| `object`)[]

List of advisory names or detailed advisory information

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:216](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L216)

___

### affected\_but\_not\_vulnerable

• **affected\_but\_not\_vulnerable**: `number`

Number of systems that are affected by given CVE but are not vulnerable.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:222](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L222)

___

### affected\_systems

• `Optional` **affected\_systems**: `number`

Number of systems that are overall affected by given CVE

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:228](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L228)

___

### business\_risk

• **business\_risk**: `string`

Business risk of the vulnerability.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:234](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L234)

___

### business\_risk\_id

• **business\_risk\_id**: `number`

Internal ID of the vulnerability business risk.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:240](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L240)

___

### business\_risk\_text

• **business\_risk\_text**: `string`

Complementary text to the business risk.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:246](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L246)

___

### celebrity\_name

• **celebrity\_name**: `string`

\"Celebrity\" name of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:252](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L252)

___

### cvss2\_metrics

• **cvss2\_metrics**: `string`

cvss2 metrics of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:258](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L258)

___

### cvss2\_score

• **cvss2\_score**: `string`

String representation of cvss2 score of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:264](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L264)

___

### cvss3\_metrics

• **cvss3\_metrics**: `string`

cvss3 metrics of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:270](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L270)

___

### cvss3\_score

• **cvss3\_score**: `string`

String representation of cvss3 score of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:276](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L276)

___

### description

• **description**: `string`

Description of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:282](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L282)

___

### impact

• **impact**: `string`

Red Hat security impact of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:288](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L288)

___

### known\_exploit

• **known\_exploit**: `boolean`

Shows whether a CVE has known exploits or not

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:294](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L294)

___

### modified\_date

• **modified\_date**: `string`

String representation of ISO-8601 formatted date of last modification of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:300](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L300)

___

### public\_date

• **public\_date**: `string`

String representation of ISO-8601 formatted date of first public disclosure of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:306](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L306)

___

### redhat\_url

• **redhat\_url**: `string`

Additional resource about the CVE, provided by Red Hat.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:312](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L312)

___

### rules

• **rules**: [`InsightsRule`](InsightsRule.md)[]

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:318](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L318)

___

### secondary\_url

• **secondary\_url**: `string`

Additional resources about the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:324](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L324)

___

### status

• **status**: `string`

Status of the vulnerability.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:330](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L330)

___

### status\_id

• **status\_id**: `number`

Internal ID of the vulnerability status.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:336](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L336)

___

### status\_text

• **status\_text**: `string`

Complementary text to the status.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:342](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L342)

___

### synopsis

• **synopsis**: `string`

Synopsis of the CVE.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:348](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L348)

___

### systems\_status\_detail

• **systems\_status\_detail**: `object`

Counts of systems with given status type.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:354](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L354)

___

### systems\_status\_divergent

• **systems\_status\_divergent**: `number`

How many systems-CVE pairs have different status than CVE-level.

**`Memberof`**

CveDetailOutDataAttributes

#### Defined in

[api.ts:360](https://github.com/mkholjuraev/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L360)
