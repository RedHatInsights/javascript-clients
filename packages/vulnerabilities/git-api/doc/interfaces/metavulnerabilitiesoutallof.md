[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [MetaVulnerabilitiesOutAllOf](metavulnerabilitiesoutallof.md)

# Interface: MetaVulnerabilitiesOutAllOf

**`export`** 

**`interface`** MetaVulnerabilitiesOutAllOf

## Hierarchy

* **MetaVulnerabilitiesOutAllOf**

## Index

### Properties

* [business_risk_id](metavulnerabilitiesoutallof.md#business_risk_id)
* [cvss_from](metavulnerabilitiesoutallof.md#cvss_from)
* [cvss_to](metavulnerabilitiesoutallof.md#cvss_to)
* [impact](metavulnerabilitiesoutallof.md#impact)
* [public_from](metavulnerabilitiesoutallof.md#public_from)
* [public_to](metavulnerabilitiesoutallof.md#public_to)
* [show_all](metavulnerabilitiesoutallof.md#show_all)

## Properties

###  business_risk_id

• **business_risk_id**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:942](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L942)*

Filter based on business risk IDs.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  cvss_from

• **cvss_from**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:948](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L948)*

Filter based on cvss score, starting from the value.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  cvss_to

• **cvss_to**: *number | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:954](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L954)*

Filter based on cvss score, up to the value.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  impact

• **impact**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:978](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L978)*

Filter based on impact IDs.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  public_from

• **public_from**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:966](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L966)*

Filter CVEs based on their published date, starting from the date.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  public_to

• **public_to**: *string | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:972](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L972)*

Filter CVEs based on their published date, up to the date.

**`memberof`** MetaVulnerabilitiesOutAllOf

___

###  show_all

• **show_all**: *boolean | null*

*Defined in [packages/vulnerabilities/git-api/api.ts:960](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L960)*

Show all known vulnerabilities, regardless of number of affected systems.

**`memberof`** MetaVulnerabilitiesOutAllOf
