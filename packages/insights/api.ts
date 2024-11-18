/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    accountHostsRetrieve,AccountHostsRetrieveReturnType,
    accountList,AccountListReturnType,
    accountRetrieve,AccountRetrieveReturnType,
    ackAllList,AckAllListReturnType,
    ackCreate,AckCreateReturnType,
    ackDestroy,AckDestroyReturnType,
    ackList,AckListReturnType,
    ackRetrieve,AckRetrieveReturnType,
    ackUpdate,AckUpdateReturnType,
    ackcountList,AckcountListReturnType,
    ackcountRetrieve,AckcountRetrieveReturnType,
    autosubexclusionCreate,AutosubexclusionCreateReturnType,
    autosubexclusionDestroy,AutosubexclusionDestroyReturnType,
    autosubexclusionList,AutosubexclusionListReturnType,
    autosubexclusionRetrieve,AutosubexclusionRetrieveReturnType,
    exportHitsList,ExportHitsListReturnType,
    exportReportsList,ExportReportsListReturnType,
    exportRulesList,ExportRulesListReturnType,
    exportSystemsList,ExportSystemsListReturnType,
    hostackCreate,HostackCreateReturnType,
    hostackDestroy,HostackDestroyReturnType,
    hostackList,HostackListReturnType,
    hostackRetrieve,HostackRetrieveReturnType,
    hostackUpdate,HostackUpdateReturnType,
    kcsList,KcsListReturnType,
    kcsRetrieve,KcsRetrieveReturnType,
    pathwayCreate,PathwayCreateReturnType,
    pathwayDestroy,PathwayDestroyReturnType,
    pathwayList,PathwayListReturnType,
    pathwayReportsRetrieve,PathwayReportsRetrieveReturnType,
    pathwayRetrieve,PathwayRetrieveReturnType,
    pathwayRulesList,PathwayRulesListReturnType,
    pathwaySystemsList,PathwaySystemsListReturnType,
    pathwayUpdate,PathwayUpdateReturnType,
    ratingAllRatingsList,RatingAllRatingsListReturnType,
    ratingCreate,RatingCreateReturnType,
    ratingList,RatingListReturnType,
    ratingRetrieve,RatingRetrieveReturnType,
    ratingStatsList,RatingStatsListReturnType,
    ruleAckHostsCreate,RuleAckHostsCreateReturnType,
    ruleJustificationsList,RuleJustificationsListReturnType,
    ruleList,RuleListReturnType,
    ruleRetrieve,RuleRetrieveReturnType,
    ruleStatsRetrieve,RuleStatsRetrieveReturnType,
    ruleSystemsDetailList,RuleSystemsDetailListReturnType,
    ruleSystemsRetrieve,RuleSystemsRetrieveReturnType,
    ruleUnackHostsCreate,RuleUnackHostsCreateReturnType,
    rulecategoryList,RulecategoryListReturnType,
    rulecategoryRetrieve,RulecategoryRetrieveReturnType,
    settingsList,SettingsListReturnType,
    statsList,StatsListReturnType,
    statsOverviewRetrieve,StatsOverviewRetrieveReturnType,
    statsReportsRetrieve,StatsReportsRetrieveReturnType,
    statsRulesRetrieve,StatsRulesRetrieveReturnType,
    statsSystemsRetrieve,StatsSystemsRetrieveReturnType,
    statusLiveRetrieve,StatusLiveRetrieveReturnType,
    statusReadyRetrieve,StatusReadyRetrieveReturnType,
    statusRetrieve,StatusRetrieveReturnType,
    systemList,SystemListReturnType,
    systemRenderedReportsList,SystemRenderedReportsListReturnType,
    systemReportsList,SystemReportsListReturnType,
    systemRetrieve,SystemRetrieveReturnType,
    systemtypeList,SystemtypeListReturnType,
    systemtypeRetrieve,SystemtypeRetrieveReturnType,
    topicCreate,TopicCreateReturnType,
    topicDestroy,TopicDestroyReturnType,
    topicList,TopicListReturnType,
    topicPartialUpdate,TopicPartialUpdateReturnType,
    topicRetrieve,TopicRetrieveReturnType,
    topicRulesWithTagList,TopicRulesWithTagListReturnType,
    topicSystemsRetrieve,TopicSystemsRetrieveReturnType,
    topicUpdate,TopicUpdateReturnType,
    usageList,UsageListReturnType,
    userPreferencesCreate,UserPreferencesCreateReturnType,
    userPreferencesList,UserPreferencesListReturnType,
    weeklyreportautosubscribeCreate,WeeklyreportautosubscribeCreateReturnType,
    weeklyreportautosubscribeList,WeeklyreportautosubscribeListReturnType,
    weeklyreportsubscriptionCreate,WeeklyreportsubscriptionCreateReturnType,
    weeklyreportsubscriptionList,WeeklyreportsubscriptionListReturnType,

  } from './index';

const endpointList = {
      accountHostsRetrieve,
    accountList,
    accountRetrieve,
    ackAllList,
    ackCreate,
    ackDestroy,
    ackList,
    ackRetrieve,
    ackUpdate,
    ackcountList,
    ackcountRetrieve,
    autosubexclusionCreate,
    autosubexclusionDestroy,
    autosubexclusionList,
    autosubexclusionRetrieve,
    exportHitsList,
    exportReportsList,
    exportRulesList,
    exportSystemsList,
    hostackCreate,
    hostackDestroy,
    hostackList,
    hostackRetrieve,
    hostackUpdate,
    kcsList,
    kcsRetrieve,
    pathwayCreate,
    pathwayDestroy,
    pathwayList,
    pathwayReportsRetrieve,
    pathwayRetrieve,
    pathwayRulesList,
    pathwaySystemsList,
    pathwayUpdate,
    ratingAllRatingsList,
    ratingCreate,
    ratingList,
    ratingRetrieve,
    ratingStatsList,
    ruleAckHostsCreate,
    ruleJustificationsList,
    ruleList,
    ruleRetrieve,
    ruleStatsRetrieve,
    ruleSystemsDetailList,
    ruleSystemsRetrieve,
    ruleUnackHostsCreate,
    rulecategoryList,
    rulecategoryRetrieve,
    settingsList,
    statsList,
    statsOverviewRetrieve,
    statsReportsRetrieve,
    statsRulesRetrieve,
    statsSystemsRetrieve,
    statusLiveRetrieve,
    statusReadyRetrieve,
    statusRetrieve,
    systemList,
    systemRenderedReportsList,
    systemReportsList,
    systemRetrieve,
    systemtypeList,
    systemtypeRetrieve,
    topicCreate,
    topicDestroy,
    topicList,
    topicPartialUpdate,
    topicRetrieve,
    topicRulesWithTagList,
    topicSystemsRetrieve,
    topicUpdate,
    usageList,
    userPreferencesCreate,
    userPreferencesList,
    weeklyreportautosubscribeCreate,
    weeklyreportautosubscribeList,
    weeklyreportsubscriptionCreate,
    weeklyreportsubscriptionList,


};

type endpointReturnTypes = {
      accountHostsRetrieve: AccountHostsRetrieveReturnType,
    accountList: AccountListReturnType,
    accountRetrieve: AccountRetrieveReturnType,
    ackAllList: AckAllListReturnType,
    ackCreate: AckCreateReturnType,
    ackDestroy: AckDestroyReturnType,
    ackList: AckListReturnType,
    ackRetrieve: AckRetrieveReturnType,
    ackUpdate: AckUpdateReturnType,
    ackcountList: AckcountListReturnType,
    ackcountRetrieve: AckcountRetrieveReturnType,
    autosubexclusionCreate: AutosubexclusionCreateReturnType,
    autosubexclusionDestroy: AutosubexclusionDestroyReturnType,
    autosubexclusionList: AutosubexclusionListReturnType,
    autosubexclusionRetrieve: AutosubexclusionRetrieveReturnType,
    exportHitsList: ExportHitsListReturnType,
    exportReportsList: ExportReportsListReturnType,
    exportRulesList: ExportRulesListReturnType,
    exportSystemsList: ExportSystemsListReturnType,
    hostackCreate: HostackCreateReturnType,
    hostackDestroy: HostackDestroyReturnType,
    hostackList: HostackListReturnType,
    hostackRetrieve: HostackRetrieveReturnType,
    hostackUpdate: HostackUpdateReturnType,
    kcsList: KcsListReturnType,
    kcsRetrieve: KcsRetrieveReturnType,
    pathwayCreate: PathwayCreateReturnType,
    pathwayDestroy: PathwayDestroyReturnType,
    pathwayList: PathwayListReturnType,
    pathwayReportsRetrieve: PathwayReportsRetrieveReturnType,
    pathwayRetrieve: PathwayRetrieveReturnType,
    pathwayRulesList: PathwayRulesListReturnType,
    pathwaySystemsList: PathwaySystemsListReturnType,
    pathwayUpdate: PathwayUpdateReturnType,
    ratingAllRatingsList: RatingAllRatingsListReturnType,
    ratingCreate: RatingCreateReturnType,
    ratingList: RatingListReturnType,
    ratingRetrieve: RatingRetrieveReturnType,
    ratingStatsList: RatingStatsListReturnType,
    ruleAckHostsCreate: RuleAckHostsCreateReturnType,
    ruleJustificationsList: RuleJustificationsListReturnType,
    ruleList: RuleListReturnType,
    ruleRetrieve: RuleRetrieveReturnType,
    ruleStatsRetrieve: RuleStatsRetrieveReturnType,
    ruleSystemsDetailList: RuleSystemsDetailListReturnType,
    ruleSystemsRetrieve: RuleSystemsRetrieveReturnType,
    ruleUnackHostsCreate: RuleUnackHostsCreateReturnType,
    rulecategoryList: RulecategoryListReturnType,
    rulecategoryRetrieve: RulecategoryRetrieveReturnType,
    settingsList: SettingsListReturnType,
    statsList: StatsListReturnType,
    statsOverviewRetrieve: StatsOverviewRetrieveReturnType,
    statsReportsRetrieve: StatsReportsRetrieveReturnType,
    statsRulesRetrieve: StatsRulesRetrieveReturnType,
    statsSystemsRetrieve: StatsSystemsRetrieveReturnType,
    statusLiveRetrieve: StatusLiveRetrieveReturnType,
    statusReadyRetrieve: StatusReadyRetrieveReturnType,
    statusRetrieve: StatusRetrieveReturnType,
    systemList: SystemListReturnType,
    systemRenderedReportsList: SystemRenderedReportsListReturnType,
    systemReportsList: SystemReportsListReturnType,
    systemRetrieve: SystemRetrieveReturnType,
    systemtypeList: SystemtypeListReturnType,
    systemtypeRetrieve: SystemtypeRetrieveReturnType,
    topicCreate: TopicCreateReturnType,
    topicDestroy: TopicDestroyReturnType,
    topicList: TopicListReturnType,
    topicPartialUpdate: TopicPartialUpdateReturnType,
    topicRetrieve: TopicRetrieveReturnType,
    topicRulesWithTagList: TopicRulesWithTagListReturnType,
    topicSystemsRetrieve: TopicSystemsRetrieveReturnType,
    topicUpdate: TopicUpdateReturnType,
    usageList: UsageListReturnType,
    userPreferencesCreate: UserPreferencesCreateReturnType,
    userPreferencesList: UserPreferencesListReturnType,
    weeklyreportautosubscribeCreate: WeeklyreportautosubscribeCreateReturnType,
    weeklyreportautosubscribeList: WeeklyreportautosubscribeListReturnType,
    weeklyreportsubscriptionCreate: WeeklyreportsubscriptionCreateReturnType,
    weeklyreportsubscriptionList: WeeklyreportsubscriptionListReturnType,


};

export const InsightsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default InsightsClient;
