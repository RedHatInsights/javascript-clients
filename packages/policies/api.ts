/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    deletePoliciesById,DeletePoliciesByIdReturnType,
    deletePoliciesIds,DeletePoliciesIdsReturnType,
    get,GetReturnType,
    getFacts,GetFactsReturnType,
    getPolicies,GetPoliciesReturnType,
    getPoliciesById,GetPoliciesByIdReturnType,
    getPoliciesByIdHistoryTrigger,GetPoliciesByIdHistoryTriggerReturnType,
    getPoliciesIds,GetPoliciesIdsReturnType,
    postPolicies,PostPoliciesReturnType,
    postPoliciesByIdEnabled,PostPoliciesByIdEnabledReturnType,
    postPoliciesIdsEnabled,PostPoliciesIdsEnabledReturnType,
    postPoliciesValidate,PostPoliciesValidateReturnType,
    postPoliciesValidateName,PostPoliciesValidateNameReturnType,
    putPoliciesByPolicyId,PutPoliciesByPolicyIdReturnType,

  } from './index';

const endpointList = {
      deletePoliciesById,
    deletePoliciesIds,
    get,
    getFacts,
    getPolicies,
    getPoliciesById,
    getPoliciesByIdHistoryTrigger,
    getPoliciesIds,
    postPolicies,
    postPoliciesByIdEnabled,
    postPoliciesIdsEnabled,
    postPoliciesValidate,
    postPoliciesValidateName,
    putPoliciesByPolicyId,


};

type endpointReturnTypes = {
      deletePoliciesById: DeletePoliciesByIdReturnType,
    deletePoliciesIds: DeletePoliciesIdsReturnType,
    get: GetReturnType,
    getFacts: GetFactsReturnType,
    getPolicies: GetPoliciesReturnType,
    getPoliciesById: GetPoliciesByIdReturnType,
    getPoliciesByIdHistoryTrigger: GetPoliciesByIdHistoryTriggerReturnType,
    getPoliciesIds: GetPoliciesIdsReturnType,
    postPolicies: PostPoliciesReturnType,
    postPoliciesByIdEnabled: PostPoliciesByIdEnabledReturnType,
    postPoliciesIdsEnabled: PostPoliciesIdsEnabledReturnType,
    postPoliciesValidate: PostPoliciesValidateReturnType,
    postPoliciesValidateName: PostPoliciesValidateNameReturnType,
    putPoliciesByPolicyId: PutPoliciesByPolicyIdReturnType,


};

export const PoliciesClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default PoliciesClient;
