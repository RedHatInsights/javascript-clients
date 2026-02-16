/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    bulkGetRemediationPlaybook,
    cancelPlaybookRuns,
    checkExecutable,
    createRemediation,
    deleteRemediation,
    deleteRemediationIssue,
    deleteRemediationIssueSystem,
    deleteRemediationIssues,
    deleteRemediationSystem,
    deleteRemediationSystems,
    deleteRemediations,
    downloadPlaybooks,
    generate,
    getDiagnosis,
    getPlaybookRunDetails,
    getPlaybookRunSystemDetails,
    getPlaybookRunSystems,
    getRemediation,
    getRemediationConnectionStatus,
    getRemediationIssueSystems,
    getRemediationIssues,
    getRemediationPlaybook,
    getRemediationSystemIssues,
    getRemediationSystems,
    getRemediations,
    getResolutionsForIssue,
    getResolutionsForIssues,
    getVersion,
    listPlaybookRuns,
    runRemediation,
    updateRemediation,
    updateRemediationIssue,

  } from './index';

const endpointList = {
      bulkGetRemediationPlaybook,
    cancelPlaybookRuns,
    checkExecutable,
    createRemediation,
    deleteRemediation,
    deleteRemediationIssue,
    deleteRemediationIssueSystem,
    deleteRemediationIssues,
    deleteRemediationSystem,
    deleteRemediationSystems,
    deleteRemediations,
    downloadPlaybooks,
    generate,
    getDiagnosis,
    getPlaybookRunDetails,
    getPlaybookRunSystemDetails,
    getPlaybookRunSystems,
    getRemediation,
    getRemediationConnectionStatus,
    getRemediationIssueSystems,
    getRemediationIssues,
    getRemediationPlaybook,
    getRemediationSystemIssues,
    getRemediationSystems,
    getRemediations,
    getResolutionsForIssue,
    getResolutionsForIssues,
    getVersion,
    listPlaybookRuns,
    runRemediation,
    updateRemediation,
    updateRemediationIssue,


};

export const RemediationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default RemediationsClient;
