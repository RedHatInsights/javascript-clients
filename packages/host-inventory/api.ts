/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    apiGroupCreateGroup,
    apiGroupDeleteGroups,
    apiGroupDeleteHostsFromDifferentGroups,
    apiGroupGetGroupList,
    apiGroupGetGroupsById,
    apiGroupPatchGroupById,
    apiHostDeleteAllHosts,
    apiHostDeleteHostById,
    apiHostDeleteHostsByFilter,
    apiHostGetHostById,
    apiHostGetHostExists,
    apiHostGetHostList,
    apiHostGetHostSystemProfileById,
    apiHostGetHostTagCount,
    apiHostGetHostTags,
    apiHostGroupAddHostListToGroup,
    apiHostGroupDeleteHostsFromGroup,
    apiHostHostCheckin,
    apiHostMergeFacts,
    apiHostPatchHostById,
    apiHostReplaceFacts,
    apiResourceTypeGetResourceTypeGroupsList,
    apiResourceTypeGetResourceTypeList,
    apiStalenessCreateStaleness,
    apiStalenessDeleteStaleness,
    apiStalenessGetDefaultStaleness,
    apiStalenessGetStaleness,
    apiStalenessUpdateStaleness,
    apiSystemProfileGetOperatingSystem,
    apiSystemProfileGetSapSids,
    apiSystemProfileGetSapSystem,
    apiSystemProfileValidateSchema,
    apiTagGetTags,

  } from './index';

export const HostInventoryClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, {
    apiGroupCreateGroup,
    apiGroupDeleteGroups,
    apiGroupDeleteHostsFromDifferentGroups,
    apiGroupGetGroupList,
    apiGroupGetGroupsById,
    apiGroupPatchGroupById,
    apiHostDeleteAllHosts,
    apiHostDeleteHostById,
    apiHostDeleteHostsByFilter,
    apiHostGetHostById,
    apiHostGetHostExists,
    apiHostGetHostList,
    apiHostGetHostSystemProfileById,
    apiHostGetHostTagCount,
    apiHostGetHostTags,
    apiHostGroupAddHostListToGroup,
    apiHostGroupDeleteHostsFromGroup,
    apiHostHostCheckin,
    apiHostMergeFacts,
    apiHostPatchHostById,
    apiHostReplaceFacts,
    apiResourceTypeGetResourceTypeGroupsList,
    apiResourceTypeGetResourceTypeList,
    apiStalenessCreateStaleness,
    apiStalenessDeleteStaleness,
    apiStalenessGetDefaultStaleness,
    apiStalenessGetStaleness,
    apiStalenessUpdateStaleness,
    apiSystemProfileGetOperatingSystem,
    apiSystemProfileGetSapSids,
    apiSystemProfileGetSapSystem,
    apiSystemProfileValidateSchema,
    apiTagGetTags,

  },
  instance);
}

export default HostInventoryClient;
