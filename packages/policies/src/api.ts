/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
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

export const PoliciesClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default PoliciesClient;
