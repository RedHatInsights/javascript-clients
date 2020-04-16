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

*Defined in [packages/vulnerabilities/git-api/api.ts:160](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L160)*

Business risk of the vulnerability.

**`memberof`** CveDetailOutDataAttributes

___

###  business_risk_id

• **business_risk_id**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:166](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L166)*

Internal ID of the vulnerability business risk.

**`memberof`** CveDetailOutDataAttributes

___

###  business_risk_text

• **business_risk_text**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:172](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L172)*

Complementary text to the business risk.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss2_metrics

• **cvss2_metrics**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:178](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L178)*

cvss2 metrics of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss2_score

• **cvss2_score**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:184](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L184)*

String representation of cvss2 score of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss3_metrics

• **cvss3_metrics**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:190](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L190)*

cvss3 metrics of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  cvss3_score

• **cvss3_score**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:196](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L196)*

String representation of cvss3 score of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  description

• **description**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:202](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L202)*

Description of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  impact

• **impact**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:214](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L214)*

Red Hat security impact of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  modified_date

• **modified_date**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:208](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L208)*

String representation of ISO-8601 formatted date of last modification of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  public_date

• **public_date**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:220](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L220)*

String representation of ISO-8601 formatted date of first public disclosure of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  redhat_url

• **redhat_url**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:226](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L226)*

Additional resource about the CVE, provided by Red Hat.

**`memberof`** CveDetailOutDataAttributes

___

###  rules

• **rules**: *Array‹[InsightsRule](insightsrule.md)›*

*Defined in [packages/vulnerabilities/git-api/api.ts:232](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L232)*

**`memberof`** CveDetailOutDataAttributes

___

###  secondary_url

• **secondary_url**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:238](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L238)*

Additional resources about the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  status

• **status**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:244](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L244)*

Status of the vulnerability.

**`memberof`** CveDetailOutDataAttributes

___

###  status_id

• **status_id**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:250](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L250)*

Internal ID of the vulnerability status.

**`memberof`** CveDetailOutDataAttributes

___

###  status_text

• **status_text**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:256](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L256)*

Complementary text to the status.

**`memberof`** CveDetailOutDataAttributes

___

###  synopsis

• **synopsis**: *string*

*Defined in [packages/vulnerabilities/git-api/api.ts:262](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L262)*

Synopsis of the CVE.

**`memberof`** CveDetailOutDataAttributes

___

###  systems_status_detail

• **systems_status_detail**: *object*

*Defined in [packages/vulnerabilities/git-api/api.ts:268](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L268)*

Counts of systems with given status type.

**`memberof`** CveDetailOutDataAttributes

___

###  systems_status_divergent

• **systems_status_divergent**: *number*

*Defined in [packages/vulnerabilities/git-api/api.ts:274](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L274)*

How many systems-CVE pairs have different status than CVE-level.

**`memberof`** CveDetailOutDataAttributes
