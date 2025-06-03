/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    bulkGetRemediationPlaybook,BulkGetRemediationPlaybookReturnType,
    cancelPlaybookRuns,CancelPlaybookRunsReturnType,
    checkExecutable,CheckExecutableReturnType,
    createRemediation,CreateRemediationReturnType,
    deleteRemediation,DeleteRemediationReturnType,
    deleteRemediationIssue,DeleteRemediationIssueReturnType,
    deleteRemediationIssueSystem,DeleteRemediationIssueSystemReturnType,
    deleteRemediationIssues,DeleteRemediationIssuesReturnType,
    deleteRemediationSystems,DeleteRemediationSystemsReturnType,
    deleteRemediations,DeleteRemediationsReturnType,
    downloadPlaybooks,DownloadPlaybooksReturnType,
    generate,GenerateReturnType,
    getDiagnosis,GetDiagnosisReturnType,
    getPlaybookRunDetails,GetPlaybookRunDetailsReturnType,
    getPlaybookRunSystemDetails,GetPlaybookRunSystemDetailsReturnType,
    getPlaybookRunSystems,GetPlaybookRunSystemsReturnType,
    getRemediation,GetRemediationReturnType,
    getRemediationConnectionStatus,GetRemediationConnectionStatusReturnType,
    getRemediationIssueSystems,GetRemediationIssueSystemsReturnType,
    getRemediationIssues,GetRemediationIssuesReturnType,
    getRemediationPlaybook,GetRemediationPlaybookReturnType,
    getRemediationSystems,GetRemediationSystemsReturnType,
    getRemediations,GetRemediationsReturnType,
    getResolutionsForIssue,GetResolutionsForIssueReturnType,
    getResolutionsForIssues,GetResolutionsForIssuesReturnType,
    getVersion,GetVersionReturnType,
    listPlaybookRuns,ListPlaybookRunsReturnType,
    runRemediation,RunRemediationReturnType,
    updateRemediation,UpdateRemediationReturnType,
    updateRemediationIssue,UpdateRemediationIssueReturnType,

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

type endpointReturnTypes = {
      bulkGetRemediationPlaybook: BulkGetRemediationPlaybookReturnType,
    cancelPlaybookRuns: CancelPlaybookRunsReturnType,
    checkExecutable: CheckExecutableReturnType,
    createRemediation: CreateRemediationReturnType,
    deleteRemediation: DeleteRemediationReturnType,
    deleteRemediationIssue: DeleteRemediationIssueReturnType,
    deleteRemediationIssueSystem: DeleteRemediationIssueSystemReturnType,
    deleteRemediationIssues: DeleteRemediationIssuesReturnType,
    deleteRemediationSystems: DeleteRemediationSystemsReturnType,
    deleteRemediations: DeleteRemediationsReturnType,
    downloadPlaybooks: DownloadPlaybooksReturnType,
    generate: GenerateReturnType,
    getDiagnosis: GetDiagnosisReturnType,
    getPlaybookRunDetails: GetPlaybookRunDetailsReturnType,
    getPlaybookRunSystemDetails: GetPlaybookRunSystemDetailsReturnType,
    getPlaybookRunSystems: GetPlaybookRunSystemsReturnType,
    getRemediation: GetRemediationReturnType,
    getRemediationConnectionStatus: GetRemediationConnectionStatusReturnType,
    getRemediationIssueSystems: GetRemediationIssueSystemsReturnType,
    getRemediationIssues: GetRemediationIssuesReturnType,
    getRemediationPlaybook: GetRemediationPlaybookReturnType,
    getRemediationSystems: GetRemediationSystemsReturnType,
    getRemediations: GetRemediationsReturnType,
    getResolutionsForIssue: GetResolutionsForIssueReturnType,
    getResolutionsForIssues: GetResolutionsForIssuesReturnType,
    getVersion: GetVersionReturnType,
    listPlaybookRuns: ListPlaybookRunsReturnType,
    runRemediation: RunRemediationReturnType,
    updateRemediation: UpdateRemediationReturnType,
    updateRemediationIssue: UpdateRemediationIssueReturnType,


};

export const RemediationsClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default RemediationsClient;
