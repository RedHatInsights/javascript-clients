[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [CveDetailOutDataAttributes](cvedetailoutdataattributes.md)

# Interface: CveDetailOutDataAttributes

**`export`** 

**`interface`** CveDetailOutDataAttributes

## Hierarchy

* **CveDetailOutDataAttributes**

## Index

### Properties

* [business_risk](cvedetailoutdataattributes.md#business_risk)
* [business_risk_id](cvedetailoutdataattributes.md#business_risk_id)
* [business_risk_text](cvedetailoutdataattributes.md#business_risk_text)
* [cvss2_metrics](cvedetailoutdataattributes.md#cvss2_metrics)
* [cvss2_score](cvedetailoutdataattributes.md#cvss2_score)
* [cvss3_metrics](cvedetailoutdataattributes.md#cvss3_metrics)
* [cvss3_score](cvedetailoutdataattributes.md#cvss3_score)
* [description](cvedetailoutdataattributes.md#description)
* [impact](cvedetailoutdataattributes.md#impact)
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

###  business_risk

• **business_risk**: *string*

*Defined in [packages/vulnerabilities/api.ts:185](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L185)*

Business risk of the vulnerability.

**`memberof`** CveDetailOutDataAttributes

___

###  business_risk_id

• **business_risk_id**: *number*

*Defined in [packages/vulnerabilities/api.ts:191](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L191)*

Internal ID of the vulnerability business risk.

**`memberof`** CveDetailOutDataAttributes

___

###  business_risk_text

• **business_risk_text**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:197](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L197)*

Complementary text to the business risk.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss2_metrics

• **cvss2_metrics**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:203](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L203)*

cvss2 metrics of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss2_score

• **cvss2_score**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:209](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L209)*

String representation of cvss2 score of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss3_metrics

• **cvss3_metrics**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:215](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L215)*

cvss3 metrics of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss3_score

• **cvss3_score**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:221](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L221)*

String representation of cvss3 score of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  description

• **description**: *string*

*Defined in [packages/vulnerabilities/api.ts:227](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L227)*

Description of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  impact

• **impact**: *string*

*Defined in [packages/vulnerabilities/api.ts:239](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L239)*

Red Hat security impact of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  modified_date

• **modified_date**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:233](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L233)*

String representation of ISO-8601 formatted date of last modification of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  public_date

• **public_date**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:245](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L245)*

String representation of ISO-8601 formatted date of first public disclosure of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  redhat_url

• **redhat_url**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:251](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L251)*

Additional resource about the CVE, provided by Red Hat.

**`memberof`** CveDetailOutDataAttributes

___

###  rules

• **rules**: *Array‹[InsightsRule](insightsrule.md)›*

*Defined in [packages/vulnerabilities/api.ts:257](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L257)*

**`memberof`** CveDetailOutDataAttributes

___

###  secondary_url

• **secondary_url**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:263](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L263)*

Additional resources about the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  status

• **status**: *string*

*Defined in [packages/vulnerabilities/api.ts:269](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L269)*

Status of the vulnerability.

**`memberof`** CveDetailOutDataAttributes

___

###  status_id

• **status_id**: *number*

*Defined in [packages/vulnerabilities/api.ts:275](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L275)*

Internal ID of the vulnerability status.

**`memberof`** CveDetailOutDataAttributes

___

###  status_text

• **status_text**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:281](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L281)*

Complementary text to the status.

**`memberof`** CveDetailOutDataAttributes

___

###  synopsis

• **synopsis**: *string*

*Defined in [packages/vulnerabilities/api.ts:287](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L287)*

Synopsis of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  systems_status_detail

• **systems_status_detail**: *object*

*Defined in [packages/vulnerabilities/api.ts:293](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L293)*

Counts of systems with given status type.

**`memberof`** CveDetailOutDataAttributes

___

###  systems_status_divergent

• **systems_status_divergent**: *number*

*Defined in [packages/vulnerabilities/api.ts:299](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L299)*

How many systems-CVE pairs have different status than CVE-level.

**`memberof`** CveDetailOutDataAttributes
