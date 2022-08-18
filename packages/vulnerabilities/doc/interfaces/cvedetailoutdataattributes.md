[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [CveDetailOutDataAttributes](cvedetailoutdataattributes.md)

# Interface: CveDetailOutDataAttributes

**`export`** 

**`interface`** CveDetailOutDataAttributes

## Hierarchy

* **CveDetailOutDataAttributes**

## Index

### Properties

* [advisories_list](cvedetailoutdataattributes.md#advisories_list)
* [business_risk](cvedetailoutdataattributes.md#business_risk)
* [business_risk_id](cvedetailoutdataattributes.md#business_risk_id)
* [business_risk_text](cvedetailoutdataattributes.md#business_risk_text)
* [celebrity_name](cvedetailoutdataattributes.md#celebrity_name)
* [cvss2_metrics](cvedetailoutdataattributes.md#cvss2_metrics)
* [cvss2_score](cvedetailoutdataattributes.md#cvss2_score)
* [cvss3_metrics](cvedetailoutdataattributes.md#cvss3_metrics)
* [cvss3_score](cvedetailoutdataattributes.md#cvss3_score)
* [description](cvedetailoutdataattributes.md#description)
* [impact](cvedetailoutdataattributes.md#impact)
* [known_exploit](cvedetailoutdataattributes.md#known_exploit)
* [modified_date](cvedetailoutdataattributes.md#modified_date)
* [public_date](cvedetailoutdataattributes.md#public_date)
* [redhat_url](cvedetailoutdataattributes.md#redhat_url)
* [rules](cvedetailoutdataattributes.md#rules)
* [secondary_url](cvedetailoutdataattributes.md#secondary_url)
* [status](cvedetailoutdataattributes.md#status)
* [status_id](cvedetailoutdataattributes.md#status_id)
* [status_text](cvedetailoutdataattributes.md#status_text)
* [synopsis](cvedetailoutdataattributes.md#synopsis)
* [systems_status_detail](cvedetailoutdataattributes.md#systems_status_detail)
* [systems_status_divergent](cvedetailoutdataattributes.md#systems_status_divergent)

## Properties

###  advisories_list

• **advisories_list**: *Array‹string | object› | null*

*Defined in [api.ts:222](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L222)*

List of advisory names or detailed advisory information

**`memberof`** CveDetailOutDataAttributes

___

###  business_risk

• **business_risk**: *string*

*Defined in [api.ts:228](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L228)*

Business risk of the vulnerability.

**`memberof`** CveDetailOutDataAttributes

___

###  business_risk_id

• **business_risk_id**: *number*

*Defined in [api.ts:234](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L234)*

Internal ID of the vulnerability business risk.

**`memberof`** CveDetailOutDataAttributes

___

###  business_risk_text

• **business_risk_text**: *string | null*

*Defined in [api.ts:240](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L240)*

Complementary text to the business risk.

**`memberof`** CveDetailOutDataAttributes

___

###  celebrity_name

• **celebrity_name**: *string | null*

*Defined in [api.ts:246](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L246)*

\"Celebrity\" name of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss2_metrics

• **cvss2_metrics**: *string | null*

*Defined in [api.ts:252](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L252)*

cvss2 metrics of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss2_score

• **cvss2_score**: *string | null*

*Defined in [api.ts:258](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L258)*

String representation of cvss2 score of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss3_metrics

• **cvss3_metrics**: *string | null*

*Defined in [api.ts:264](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L264)*

cvss3 metrics of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss3_score

• **cvss3_score**: *string | null*

*Defined in [api.ts:270](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L270)*

String representation of cvss3 score of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  description

• **description**: *string*

*Defined in [api.ts:276](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L276)*

Description of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  impact

• **impact**: *string*

*Defined in [api.ts:282](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L282)*

Red Hat security impact of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  known_exploit

• **known_exploit**: *boolean*

*Defined in [api.ts:288](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L288)*

Shows whether a CVE has known exploits or not

**`memberof`** CveDetailOutDataAttributes

___

###  modified_date

• **modified_date**: *string | null*

*Defined in [api.ts:294](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L294)*

String representation of ISO-8601 formatted date of last modification of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  public_date

• **public_date**: *string | null*

*Defined in [api.ts:300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L300)*

String representation of ISO-8601 formatted date of first public disclosure of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  redhat_url

• **redhat_url**: *string | null*

*Defined in [api.ts:306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L306)*

Additional resource about the CVE, provided by Red Hat.

**`memberof`** CveDetailOutDataAttributes

___

###  rules

• **rules**: *Array‹[InsightsRule](insightsrule.md)›*

*Defined in [api.ts:312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L312)*

**`memberof`** CveDetailOutDataAttributes

___

###  secondary_url

• **secondary_url**: *string | null*

*Defined in [api.ts:318](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L318)*

Additional resources about the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  status

• **status**: *string*

*Defined in [api.ts:324](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L324)*

Status of the vulnerability.

**`memberof`** CveDetailOutDataAttributes

___

###  status_id

• **status_id**: *number*

*Defined in [api.ts:330](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L330)*

Internal ID of the vulnerability status.

**`memberof`** CveDetailOutDataAttributes

___

###  status_text

• **status_text**: *string | null*

*Defined in [api.ts:336](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L336)*

Complementary text to the status.

**`memberof`** CveDetailOutDataAttributes

___

###  synopsis

• **synopsis**: *string*

*Defined in [api.ts:342](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L342)*

Synopsis of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  systems_status_detail

• **systems_status_detail**: *object*

*Defined in [api.ts:348](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L348)*

Counts of systems with given status type.

**`memberof`** CveDetailOutDataAttributes

___

###  systems_status_divergent

• **systems_status_divergent**: *number*

*Defined in [api.ts:354](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L354)*

How many systems-CVE pairs have different status than CVE-level.

**`memberof`** CveDetailOutDataAttributes
