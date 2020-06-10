[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaCvesAllOf](metacvesallof.md)

# Interface: MetaCvesAllOf

**`export`** 

**`interface`** MetaCvesAllOf

## Hierarchy

* **MetaCvesAllOf**

## Index

### Properties

* [business_risk_id](metacvesallof.md#business_risk_id)
* [cvss_from](metacvesallof.md#cvss_from)
* [cvss_to](metacvesallof.md#cvss_to)
* [impact](metacvesallof.md#impact)
* [public_from](metacvesallof.md#public_from)
* [public_to](metacvesallof.md#public_to)
* [security_rule](metacvesallof.md#security_rule)
* [status_id](metacvesallof.md#status_id)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:823](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L823)*

Filter based on business risk IDs.

**`memberof`** MetaCvesAllOf

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:829](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L829)*

Filter based on cvss score, starting from the value.

**`memberof`** MetaCvesAllOf

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/api.ts:835](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L835)*

Filter based on cvss score, up to the value.

**`memberof`** MetaCvesAllOf

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:853](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L853)*

Filter based on impact IDs.

**`memberof`** MetaCvesAllOf

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:841](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L841)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaCvesAllOf

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:847](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L847)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaCvesAllOf

___

###  security_rule

• **security_rule**: *boolean | null*

*Defined in [packages/vulnerabilities/api.ts:859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L859)*

Filter based on presence of security rule

**`memberof`** MetaCvesAllOf

___

###  status_id

• **status_id**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:865](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L865)*

Filer based on CVE status ID.

**`memberof`** MetaCvesAllOf
