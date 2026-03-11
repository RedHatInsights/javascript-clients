/* tslint:disable */
/* eslint-disable */
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
    apiHostGroupGetHostListByGroup,
    apiHostHostCheckin,
    apiHostMergeFacts,
    apiHostPatchHostById,
    apiHostReplaceFacts,
    apiHostViewsGetHostViews,
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

const endpointList = {
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
    apiHostGroupGetHostListByGroup,
    apiHostHostCheckin,
    apiHostMergeFacts,
    apiHostPatchHostById,
    apiHostReplaceFacts,
    apiHostViewsGetHostViews,
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


};

export const HostInventoryClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default HostInventoryClient;
