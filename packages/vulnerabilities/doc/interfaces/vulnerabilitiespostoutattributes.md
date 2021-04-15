[@redhat-cloud-services/vulnerabilities-client](../README.md) › [Globals](../globals.md) › [VulnerabilitiesPostOutAttributes](vulnerabilitiespostoutattributes.md)

# Interface: VulnerabilitiesPostOutAttributes

**`export`** 

**`interface`** VulnerabilitiesPostOutAttributes

## Hierarchy

* **VulnerabilitiesPostOutAttributes**

## Index

### Properties

* [cvss_score](vulnerabilitiespostoutattributes.md#cvss_score)
* [impact](vulnerabilitiespostoutattributes.md#impact)
* [synopsis](vulnerabilitiespostoutattributes.md#synopsis)

## Properties

###  cvss_score

• **cvss_score**: *string | null*

*Defined in [packages/vulnerabilities/api.ts:2300](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2300)*

String representation of cvss3 or cvvs2 (if v3 is not present) score of the CVE.

**`memberof`** VulnerabilitiesPostOutAttributes

___

###  impact

• **impact**: *string*

*Defined in [packages/vulnerabilities/api.ts:2306](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2306)*

Red Hat security impact of the CVE.

**`memberof`** VulnerabilitiesPostOutAttributes

___

###  synopsis

• **synopsis**: *string*

*Defined in [packages/vulnerabilities/api.ts:2312](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/api.ts#L2312)*

Synopsis of the CVE.

**`memberof`** VulnerabilitiesPostOutAttributes
