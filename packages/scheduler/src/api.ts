/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    listJobs,
    createJob,
    getJob,
    updateJob,
    patchJob,
    deleteJob,
    runJob,
    pauseJob,
    resumeJob,
    getJobRuns,
    getJobRun,

  } from './index';

const endpointList = {
      listJobs,
    createJob,
    getJob,
    updateJob,
    patchJob,
    deleteJob,
    runJob,
    pauseJob,
    resumeJob,
    getJobRuns,
    getJobRun,


};

export const SchedulerClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default SchedulerClient;
