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

*Defined in [api.ts:2587](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L2587)*

String representation of cvss3 or cvvs2 (if v3 is not present) score of the CVE.

**`memberof`** VulnerabilitiesPostOutAttributes

___

###  impact

• **impact**: *string*

*Defined in [api.ts:2593](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L2593)*

Red Hat security impact of the CVE.

**`memberof`** VulnerabilitiesPostOutAttributes

___

###  synopsis

• **synopsis**: *string*

*Defined in [api.ts:2599](https://github.com/RedHatInsights/javascript-clients.gi/blob/master/packages/vulnerabilities/api.ts#L2599)*

Synopsis of the CVE.

**`memberof`** VulnerabilitiesPostOutAttributes
