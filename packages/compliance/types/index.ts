/**
 *
 * @export
 * @interface AssignRulesRequest
 */
export interface AssignRulesRequest {
    /**
     *
     * @type {any}
     * @memberof AssignRulesRequest
     */
    'ids'?: any;
}
/**
 *
 * @export
 * @interface CreatePolicy201Response
 */
export interface CreatePolicy201Response {
    /**
     *
     * @type {CreatePolicy201ResponseData}
     * @memberof CreatePolicy201Response
     */
    'data'?: CreatePolicy201ResponseData;
}
/**
 *
 * @export
 * @interface CreatePolicy201ResponseData
 */
export interface CreatePolicy201ResponseData {
    /**
     *
     * @type {Policy}
     * @memberof CreatePolicy201ResponseData
     */
    'schema'?: Policy;
}
/**
 *
 * @export
 * @interface Errors
 */
export interface Errors {
    /**
     *
     * @type {any}
     * @memberof Errors
     */
    'errors': any;
}
/**
 *
 * @export
 * @interface Links
 */
export interface Links {
    /**
     * Link to first page
     * @type {any}
     * @memberof Links
     */
    'first'?: any;
    /**
     * Link to last page
     * @type {any}
     * @memberof Links
     */
    'last'?: any;
    /**
     * Link to previous page
     * @type {any}
     * @memberof Links
     */
    'previous'?: any;
    /**
     * Link to next page
     * @type {any}
     * @memberof Links
     */
    'next'?: any;
}
/**
 *
 * @export
 * @interface Metadata
 */
export interface Metadata {
    /**
     * Total number of items
     * @type {any}
     * @memberof Metadata
     */
    'total'?: any;
    /**
     * Number of items returned per page
     * @type {any}
     * @memberof Metadata
     */
    'limit'?: any;
    /**
     * Offset of the first item of paginated response
     * @type {any}
     * @memberof Metadata
     */
    'offset'?: any;
    /**
     * Attribute and direction the items are sorted by
     * @type {any}
     * @memberof Metadata
     */
    'sort_by'?: any;
    /**
     * Query string used to filter items by their attributes
     * @type {any}
     * @memberof Metadata
     */
    'filter'?: any;
}
/**
 *
 * @export
 * @interface Policies200Response
 */
export interface Policies200Response {
    /**
     *
     * @type {Metadata}
     * @memberof Policies200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof Policies200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof Policies200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface Policy
 */
export interface Policy {
    /**
     *
     * @type {any}
     * @memberof Policy
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof Policy
     */
    'type'?: PolicyTypeEnum;
    /**
     * Short title of the Policy
     * @type {any}
     * @memberof Policy
     */
    'title'?: any;
    /**
     * Longer description of the Policy
     * @type {any}
     * @memberof Policy
     */
    'description'?: any;
    /**
     * The Business Objective associated to the Policy
     * @type {any}
     * @memberof Policy
     */
    'business_objective'?: any;
    /**
     * The percentage above which the Policy meets compliance requirements
     * @type {any}
     * @memberof Policy
     */
    'compliance_threshold': any;
    /**
     * Identifier of the underlying Profile
     * @type {any}
     * @memberof Policy
     */
    'profile_id': any;
    /**
     * Major version of the Operating System that the Policy covers
     * @type {any}
     * @memberof Policy
     */
    'os_major_version'?: any;
    /**
     * Identificator of the Profile
     * @type {any}
     * @memberof Policy
     */
    'ref_id'?: any;
    /**
     * Title of the associated Policy
     * @type {any}
     * @memberof Policy
     */
    'profile_title'?: any;
    /**
     * The number of Systems assigned to this Policy
     * @type {any}
     * @memberof Policy
     */
    'total_system_count'?: any;
}

export const PolicyTypeEnum = {
    Policy: 'policy'
} as const;

export type PolicyTypeEnum = typeof PolicyTypeEnum[keyof typeof PolicyTypeEnum];

/**
 *
 * @export
 * @interface PolicyUpdate
 */
export interface PolicyUpdate {
    /**
     * Longer description of the Policy
     * @type {any}
     * @memberof PolicyUpdate
     */
    'description'?: any;
    /**
     * The Business Objective associated to the Policy
     * @type {any}
     * @memberof PolicyUpdate
     */
    'business_objective'?: any;
    /**
     * The percentage above which the Policy meets compliance requirements
     * @type {any}
     * @memberof PolicyUpdate
     */
    'compliance_threshold'?: any;
}
/**
 *
 * @export
 * @interface Profile
 */
export interface Profile {
    /**
     *
     * @type {any}
     * @memberof Profile
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof Profile
     */
    'type'?: ProfileTypeEnum;
    /**
     * Identificator of the Profile
     * @type {any}
     * @memberof Profile
     */
    'ref_id'?: any;
    /**
     * Short title of the Profile
     * @type {any}
     * @memberof Profile
     */
    'title'?: any;
    /**
     * Longer description of the Profile
     * @type {any}
     * @memberof Profile
     */
    'description'?: any;
    /**
     * Pair of keys and values for Value Definition customizations
     * @type {any}
     * @memberof Profile
     */
    'value_overrides'?: any;
}

export const ProfileTypeEnum = {
    Profile: 'profile'
} as const;

export type ProfileTypeEnum = typeof ProfileTypeEnum[keyof typeof ProfileTypeEnum];

/**
 *
 * @export
 * @interface Profile200Response
 */
export interface Profile200Response {
    /**
     *
     * @type {Profile200ResponseData}
     * @memberof Profile200Response
     */
    'data'?: Profile200ResponseData;
}
/**
 *
 * @export
 * @interface Profile200ResponseData
 */
export interface Profile200ResponseData {
    /**
     *
     * @type {Profile}
     * @memberof Profile200ResponseData
     */
    'schema'?: Profile;
}
/**
 *
 * @export
 * @interface Profiles200Response
 */
export interface Profiles200Response {
    /**
     *
     * @type {Metadata}
     * @memberof Profiles200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof Profiles200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof Profiles200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface Report
 */
export interface Report {
    /**
     *
     * @type {any}
     * @memberof Report
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof Report
     */
    'type'?: ReportTypeEnum;
    /**
     * Short title of the Report
     * @type {any}
     * @memberof Report
     */
    'title'?: any;
    /**
     * The Business Objective associated to the Policy
     * @type {any}
     * @memberof Report
     */
    'business_objective'?: any;
    /**
     * The percentage above which the Policy meets compliance requirements
     * @type {any}
     * @memberof Report
     */
    'compliance_threshold'?: any;
    /**
     * Major version of the Operating System that the Report covers
     * @type {any}
     * @memberof Report
     */
    'os_major_version'?: any;
    /**
     * Identificator of the Profile
     * @type {any}
     * @memberof Report
     */
    'ref_id'?: any;
    /**
     * Title of the associated Profile
     * @type {any}
     * @memberof Report
     */
    'profile_title'?: any;
    /**
     * The number of Systems assigned to this Report
     * @type {any}
     * @memberof Report
     */
    'assigned_system_count'?: any;
    /**
     * The number of compliant Systems assigned to this Report
     * @type {any}
     * @memberof Report
     */
    'compliant_system_count'?: any;
    /**
     * Informs if the user has access to all the account\'s systems
     * @type {any}
     * @memberof Report
     */
    'all_systems_exposed'?: any;
    /**
     * The number of unsupported Systems assigned to this Report
     * @type {any}
     * @memberof Report
     */
    'unsupported_system_count'?: any;
}

export const ReportTypeEnum = {
    Report: 'report'
} as const;

export type ReportTypeEnum = typeof ReportTypeEnum[keyof typeof ReportTypeEnum];

/**
 *
 * @export
 * @interface Report200Response
 */
export interface Report200Response {
    /**
     *
     * @type {Report200ResponseData}
     * @memberof Report200Response
     */
    'data'?: Report200ResponseData;
}
/**
 *
 * @export
 * @interface Report200ResponseData
 */
export interface Report200ResponseData {
    /**
     *
     * @type {Report}
     * @memberof Report200ResponseData
     */
    'schema'?: Report;
}
/**
 *
 * @export
 * @interface Reports200Response
 */
export interface Reports200Response {
    /**
     *
     * @type {Metadata}
     * @memberof Reports200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof Reports200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof Reports200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface Rule
 */
export interface Rule {
    /**
     *
     * @type {any}
     * @memberof Rule
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof Rule
     */
    'type'?: RuleTypeEnum;
    /**
     * Identificator of the Rule
     * @type {any}
     * @memberof Rule
     */
    'ref_id'?: any;
    /**
     * Short title of the Rule
     * @type {any}
     * @memberof Rule
     */
    'title'?: any;
    /**
     * Rationale of the Rule
     * @type {any}
     * @memberof Rule
     */
    'rationale'?: any;
    /**
     * Longer description of the Rule
     * @type {any}
     * @memberof Rule
     */
    'description'?: any;
    /**
     * The original sorting precedence of the Rule in the Security Guide
     * @type {any}
     * @memberof Rule
     */
    'precedence'?: any;
    /**
     * The severity of the Rule
     * @type {any}
     * @memberof Rule
     */
    'severity'?: any;
    /**
     * The idenfitier of the remediation associated to this rule, only available under profiles.
     * @type {any}
     * @memberof Rule
     */
    'remediation_issue_id'?: any;
}

export const RuleTypeEnum = {
    Rule: 'rule'
} as const;

export type RuleTypeEnum = typeof RuleTypeEnum[keyof typeof RuleTypeEnum];

/**
 *
 * @export
 * @interface Rule200Response
 */
export interface Rule200Response {
    /**
     *
     * @type {Rule200ResponseData}
     * @memberof Rule200Response
     */
    'data'?: Rule200ResponseData;
}
/**
 *
 * @export
 * @interface Rule200ResponseData
 */
export interface Rule200ResponseData {
    /**
     *
     * @type {Rule}
     * @memberof Rule200ResponseData
     */
    'schema'?: Rule;
}
/**
 *
 * @export
 * @interface RuleGroup
 */
export interface RuleGroup {
    /**
     *
     * @type {any}
     * @memberof RuleGroup
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof RuleGroup
     */
    'type'?: RuleGroupTypeEnum;
    /**
     * Identificator of the Rule Group
     * @type {any}
     * @memberof RuleGroup
     */
    'ref_id'?: any;
    /**
     * Short title of the Rule Group
     * @type {any}
     * @memberof RuleGroup
     */
    'title'?: any;
    /**
     * Rationale of the Rule Group
     * @type {any}
     * @memberof RuleGroup
     */
    'rationale'?: any;
    /**
     * Longer description of the Rule Group
     * @type {any}
     * @memberof RuleGroup
     */
    'description'?: any;
    /**
     * The original sorting precedence of the Rule Group in the Security Guide
     * @type {any}
     * @memberof RuleGroup
     */
    'precedence'?: any;
}

export const RuleGroupTypeEnum = {
    RuleGroup: 'rule_group'
} as const;

export type RuleGroupTypeEnum = typeof RuleGroupTypeEnum[keyof typeof RuleGroupTypeEnum];

/**
 *
 * @export
 * @interface RuleGroup200Response
 */
export interface RuleGroup200Response {
    /**
     *
     * @type {RuleGroup200ResponseData}
     * @memberof RuleGroup200Response
     */
    'data'?: RuleGroup200ResponseData;
}
/**
 *
 * @export
 * @interface RuleGroup200ResponseData
 */
export interface RuleGroup200ResponseData {
    /**
     *
     * @type {RuleGroup}
     * @memberof RuleGroup200ResponseData
     */
    'schema'?: RuleGroup;
}
/**
 *
 * @export
 * @interface RuleGroups200Response
 */
export interface RuleGroups200Response {
    /**
     *
     * @type {Metadata}
     * @memberof RuleGroups200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof RuleGroups200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof RuleGroups200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface Rules200Response
 */
export interface Rules200Response {
    /**
     *
     * @type {Metadata}
     * @memberof Rules200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof Rules200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof Rules200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface SecurityGuide
 */
export interface SecurityGuide {
    /**
     *
     * @type {any}
     * @memberof SecurityGuide
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof SecurityGuide
     */
    'type'?: SecurityGuideTypeEnum;
    /**
     * Identificator of the Security Guide
     * @type {any}
     * @memberof SecurityGuide
     */
    'ref_id'?: any;
    /**
     * Short title of the Security Guide
     * @type {any}
     * @memberof SecurityGuide
     */
    'title'?: any;
    /**
     * Version of the Security Guide
     * @type {any}
     * @memberof SecurityGuide
     */
    'version'?: any;
    /**
     * Longer description of the Security Guide
     * @type {any}
     * @memberof SecurityGuide
     */
    'description'?: any;
    /**
     * Major version of the Operating System that the Security Guide covers
     * @type {any}
     * @memberof SecurityGuide
     */
    'os_major_version'?: any;
}

export const SecurityGuideTypeEnum = {
    SecurityGuide: 'security_guide'
} as const;

export type SecurityGuideTypeEnum = typeof SecurityGuideTypeEnum[keyof typeof SecurityGuideTypeEnum];

/**
 *
 * @export
 * @interface SecurityGuide200Response
 */
export interface SecurityGuide200Response {
    /**
     *
     * @type {SecurityGuide200ResponseData}
     * @memberof SecurityGuide200Response
     */
    'data'?: SecurityGuide200ResponseData;
}
/**
 *
 * @export
 * @interface SecurityGuide200ResponseData
 */
export interface SecurityGuide200ResponseData {
    /**
     *
     * @type {SecurityGuide}
     * @memberof SecurityGuide200ResponseData
     */
    'schema'?: SecurityGuide;
}
/**
 *
 * @export
 * @interface SecurityGuides200Response
 */
export interface SecurityGuides200Response {
    /**
     *
     * @type {Metadata}
     * @memberof SecurityGuides200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof SecurityGuides200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof SecurityGuides200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface SupportedProfile
 */
export interface SupportedProfile {
    /**
     *
     * @type {any}
     * @memberof SupportedProfile
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof SupportedProfile
     */
    'type'?: SupportedProfileTypeEnum;
    /**
     * Identificator of the Profile
     * @type {any}
     * @memberof SupportedProfile
     */
    'ref_id'?: any;
    /**
     * Short title of the Profile
     * @type {any}
     * @memberof SupportedProfile
     */
    'title'?: any;
    /**
     * Version of the latest Security Guide supporting this Profile
     * @type {any}
     * @memberof SupportedProfile
     */
    'security_guide_version'?: any;
    /**
     * Major version of the Operating System that the Profile covers
     * @type {any}
     * @memberof SupportedProfile
     */
    'os_major_version'?: any;
    /**
     * List of the supported Operating System minor versions that the Profile covers
     * @type {any}
     * @memberof SupportedProfile
     */
    'os_minor_versions'?: any;
}

export const SupportedProfileTypeEnum = {
    SupportedProfile: 'supported_profile'
} as const;

export type SupportedProfileTypeEnum = typeof SupportedProfileTypeEnum[keyof typeof SupportedProfileTypeEnum];

/**
 *
 * @export
 * @interface SupportedProfiles200Response
 */
export interface SupportedProfiles200Response {
    /**
     *
     * @type {Metadata}
     * @memberof SupportedProfiles200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof SupportedProfiles200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof SupportedProfiles200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface System
 */
export interface System {
    /**
     *
     * @type {any}
     * @memberof System
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof System
     */
    'type'?: SystemTypeEnum;
    /**
     * Display Name of the System
     * @type {any}
     * @memberof System
     */
    'display_name'?: any;
    /**
     *
     * @type {any}
     * @memberof System
     */
    'groups'?: any;
    /**
     *
     * @type {any}
     * @memberof System
     */
    'culled_timestamp'?: any;
    /**
     *
     * @type {any}
     * @memberof System
     */
    'stale_timestamp'?: any;
    /**
     *
     * @type {any}
     * @memberof System
     */
    'stale_warning_timestamp'?: any;
    /**
     *
     * @type {any}
     * @memberof System
     */
    'updated'?: any;
    /**
     *
     * @type {any}
     * @memberof System
     */
    'insights_id'?: any;
    /**
     *
     * @type {any}
     * @memberof System
     */
    'tags'?: any;
    /**
     * Major version of the Operating System
     * @type {any}
     * @memberof System
     */
    'os_major_version'?: any;
    /**
     * Minor version of the Operating System
     * @type {any}
     * @memberof System
     */
    'os_minor_version'?: any;
    /**
     * List of Policies assigned to the System, visible only when not listing Systems under a given Policy
     * @type {any}
     * @memberof System
     */
    'policies'?: any;
}

export const SystemTypeEnum = {
    System: 'system'
} as const;

export type SystemTypeEnum = typeof SystemTypeEnum[keyof typeof SystemTypeEnum];

/**
 *
 * @export
 * @interface System200Response
 */
export interface System200Response {
    /**
     *
     * @type {System200ResponseData}
     * @memberof System200Response
     */
    'data'?: System200ResponseData;
}
/**
 *
 * @export
 * @interface System200ResponseData
 */
export interface System200ResponseData {
    /**
     *
     * @type {System}
     * @memberof System200ResponseData
     */
    'schema'?: System;
}
/**
 *
 * @export
 * @interface Systems200Response
 */
export interface Systems200Response {
    /**
     *
     * @type {Metadata}
     * @memberof Systems200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof Systems200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof Systems200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface Tailoring
 */
export interface Tailoring {
    /**
     *
     * @type {any}
     * @memberof Tailoring
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof Tailoring
     */
    'type'?: TailoringTypeEnum;
    /**
     * Identificator of the Profile from which the Tailoring was cloned
     * @type {any}
     * @memberof Tailoring
     */
    'profile_id'?: any;
    /**
     * Identificator of the Security Guide that contains the parent Profile
     * @type {any}
     * @memberof Tailoring
     */
    'security_guide_id'?: any;
    /**
     * Major version of the Operating System that the Tailoring covers
     * @type {any}
     * @memberof Tailoring
     */
    'os_major_version'?: any;
    /**
     * Minor version of the Operating System that the Tailoring covers
     * @type {any}
     * @memberof Tailoring
     */
    'os_minor_version'?: any;
    /**
     * Pair of keys and values for Value Definition customizations
     * @type {any}
     * @memberof Tailoring
     */
    'value_overrides'?: any;
}

export const TailoringTypeEnum = {
    Tailoring: 'tailoring'
} as const;

export type TailoringTypeEnum = typeof TailoringTypeEnum[keyof typeof TailoringTypeEnum];

/**
 *
 * @export
 * @interface Tailoring200Response
 */
export interface Tailoring200Response {
    /**
     *
     * @type {Tailoring200ResponseData}
     * @memberof Tailoring200Response
     */
    'data'?: Tailoring200ResponseData;
}
/**
 *
 * @export
 * @interface Tailoring200ResponseData
 */
export interface Tailoring200ResponseData {
    /**
     *
     * @type {Tailoring}
     * @memberof Tailoring200ResponseData
     */
    'schema'?: Tailoring;
}
/**
 * Defines customizations of rules and variables for a set of profiles
 * @export
 * @interface TailoringFile
 */
export interface TailoringFile {
    [key: string]: any;

    /**
     *
     * @type {any}
     * @memberof TailoringFile
     */
    'profiles'?: any;
}
/**
 *
 * @export
 * @interface Tailorings200Response
 */
export interface Tailorings200Response {
    /**
     *
     * @type {Metadata}
     * @memberof Tailorings200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof Tailorings200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof Tailorings200Response
     */
    'data'?: any;
}
/**
 *
 * @export
 * @interface ValueDefinition
 */
export interface ValueDefinition {
    /**
     *
     * @type {any}
     * @memberof ValueDefinition
     */
    'id'?: any;
    /**
     *
     * @type {any}
     * @memberof ValueDefinition
     */
    'type'?: ValueDefinitionTypeEnum;
    /**
     * Identificator of the Value Definition
     * @type {any}
     * @memberof ValueDefinition
     */
    'ref_id'?: any;
    /**
     * Short title of the Value Definition
     * @type {any}
     * @memberof ValueDefinition
     */
    'title'?: any;
    /**
     * Type of the Value Definition
     * @type {any}
     * @memberof ValueDefinition
     */
    'value_type'?: any;
    /**
     * Longer description of the Value Definition
     * @type {any}
     * @memberof ValueDefinition
     */
    'description'?: any;
    /**
     * Default value of the Value Definition
     * @type {any}
     * @memberof ValueDefinition
     */
    'default_value'?: any;
}

export const ValueDefinitionTypeEnum = {
    ValueDefinition: 'value_definition'
} as const;

export type ValueDefinitionTypeEnum = typeof ValueDefinitionTypeEnum[keyof typeof ValueDefinitionTypeEnum];

/**
 *
 * @export
 * @interface ValueDefinition200Response
 */
export interface ValueDefinition200Response {
    /**
     *
     * @type {ValueDefinition200ResponseData}
     * @memberof ValueDefinition200Response
     */
    'data'?: ValueDefinition200ResponseData;
}
/**
 *
 * @export
 * @interface ValueDefinition200ResponseData
 */
export interface ValueDefinition200ResponseData {
    /**
     *
     * @type {ValueDefinition}
     * @memberof ValueDefinition200ResponseData
     */
    'schema'?: ValueDefinition;
}
/**
 *
 * @export
 * @interface ValueDefinitions200Response
 */
export interface ValueDefinitions200Response {
    /**
     *
     * @type {Metadata}
     * @memberof ValueDefinitions200Response
     */
    'meta'?: Metadata;
    /**
     *
     * @type {Links}
     * @memberof ValueDefinitions200Response
     */
    'links'?: Links;
    /**
     *
     * @type {any}
     * @memberof ValueDefinitions200Response
     */
    'data'?: any;
}
