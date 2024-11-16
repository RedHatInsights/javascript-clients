/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    workspacesCreate,
    workspacesDelete,
    workspacesList,
    workspacesPatch,
    workspacesRead,
    workspacesUpdate,

  } from './index';

export const RbacClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, {
    workspacesCreate,
    workspacesDelete,
    workspacesList,
    workspacesPatch,
    workspacesRead,
    workspacesUpdate,

  },
  instance);
}

export default RbacClient;
