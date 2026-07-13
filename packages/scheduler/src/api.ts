import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/common'
import {
    createJob,
    deleteJob,
    getJob,
    getJobRun,
    getJobRuns,
    listAllRuns,
    listJobs,
    patchJob,
    pauseJob,
    resumeJob,
    runJob,
    updateJob,

  } from './index';

const endpointList = {
      createJob,
    deleteJob,
    getJob,
    getJobRun,
    getJobRuns,
    listAllRuns,
    listJobs,
    patchJob,
    pauseJob,
    resumeJob,
    runJob,
    updateJob,


};

export const SchedulerClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default SchedulerClient;
