/* tslint:disable */
/* eslint-disable */
import type { AxiosStatic } from 'axios'
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    apiGroupCreateGroup,ApiGroupCreateGroupReturnType,
    apiGroupDeleteGroups,ApiGroupDeleteGroupsReturnType,
    apiGroupDeleteHostsFromDifferentGroups,ApiGroupDeleteHostsFromDifferentGroupsReturnType,
    apiGroupGetGroupList,ApiGroupGetGroupListReturnType,
    apiGroupGetGroupsById,ApiGroupGetGroupsByIdReturnType,
    apiGroupPatchGroupById,ApiGroupPatchGroupByIdReturnType,
    apiHostDeleteAllHosts,ApiHostDeleteAllHostsReturnType,
    apiHostDeleteHostById,ApiHostDeleteHostByIdReturnType,
    apiHostDeleteHostsByFilter,ApiHostDeleteHostsByFilterReturnType,
    apiHostGetHostById,ApiHostGetHostByIdReturnType,
    apiHostGetHostExists,ApiHostGetHostExistsReturnType,
    apiHostGetHostList,ApiHostGetHostListReturnType,
    apiHostGetHostSystemProfileById,ApiHostGetHostSystemProfileByIdReturnType,
    apiHostGetHostTagCount,ApiHostGetHostTagCountReturnType,
    apiHostGetHostTags,ApiHostGetHostTagsReturnType,
    apiHostGroupAddHostListToGroup,ApiHostGroupAddHostListToGroupReturnType,
    apiHostGroupDeleteHostsFromGroup,ApiHostGroupDeleteHostsFromGroupReturnType,
    apiHostHostCheckin,ApiHostHostCheckinReturnType,
    apiHostMergeFacts,ApiHostMergeFactsReturnType,
    apiHostPatchHostById,ApiHostPatchHostByIdReturnType,
    apiHostReplaceFacts,ApiHostReplaceFactsReturnType,
    apiResourceTypeGetResourceTypeGroupsList,ApiResourceTypeGetResourceTypeGroupsListReturnType,
    apiResourceTypeGetResourceTypeList,ApiResourceTypeGetResourceTypeListReturnType,
    apiStalenessCreateStaleness,ApiStalenessCreateStalenessReturnType,
    apiStalenessDeleteStaleness,ApiStalenessDeleteStalenessReturnType,
    apiStalenessGetDefaultStaleness,ApiStalenessGetDefaultStalenessReturnType,
    apiStalenessGetStaleness,ApiStalenessGetStalenessReturnType,
    apiStalenessUpdateStaleness,ApiStalenessUpdateStalenessReturnType,
    apiSystemProfileGetOperatingSystem,ApiSystemProfileGetOperatingSystemReturnType,
    apiSystemProfileGetSapSids,ApiSystemProfileGetSapSidsReturnType,
    apiSystemProfileGetSapSystem,ApiSystemProfileGetSapSystemReturnType,
    apiSystemProfileValidateSchema,ApiSystemProfileValidateSchemaReturnType,
    apiTagGetTags,ApiTagGetTagsReturnType,

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


};

type endpointReturnTypes = {
      apiGroupCreateGroup: ApiGroupCreateGroupReturnType,
    apiGroupDeleteGroups: ApiGroupDeleteGroupsReturnType,
    apiGroupDeleteHostsFromDifferentGroups: ApiGroupDeleteHostsFromDifferentGroupsReturnType,
    apiGroupGetGroupList: ApiGroupGetGroupListReturnType,
    apiGroupGetGroupsById: ApiGroupGetGroupsByIdReturnType,
    apiGroupPatchGroupById: ApiGroupPatchGroupByIdReturnType,
    apiHostDeleteAllHosts: ApiHostDeleteAllHostsReturnType,
    apiHostDeleteHostById: ApiHostDeleteHostByIdReturnType,
    apiHostDeleteHostsByFilter: ApiHostDeleteHostsByFilterReturnType,
    apiHostGetHostById: ApiHostGetHostByIdReturnType,
    apiHostGetHostExists: ApiHostGetHostExistsReturnType,
    apiHostGetHostList: ApiHostGetHostListReturnType,
    apiHostGetHostSystemProfileById: ApiHostGetHostSystemProfileByIdReturnType,
    apiHostGetHostTagCount: ApiHostGetHostTagCountReturnType,
    apiHostGetHostTags: ApiHostGetHostTagsReturnType,
    apiHostGroupAddHostListToGroup: ApiHostGroupAddHostListToGroupReturnType,
    apiHostGroupDeleteHostsFromGroup: ApiHostGroupDeleteHostsFromGroupReturnType,
    apiHostHostCheckin: ApiHostHostCheckinReturnType,
    apiHostMergeFacts: ApiHostMergeFactsReturnType,
    apiHostPatchHostById: ApiHostPatchHostByIdReturnType,
    apiHostReplaceFacts: ApiHostReplaceFactsReturnType,
    apiResourceTypeGetResourceTypeGroupsList: ApiResourceTypeGetResourceTypeGroupsListReturnType,
    apiResourceTypeGetResourceTypeList: ApiResourceTypeGetResourceTypeListReturnType,
    apiStalenessCreateStaleness: ApiStalenessCreateStalenessReturnType,
    apiStalenessDeleteStaleness: ApiStalenessDeleteStalenessReturnType,
    apiStalenessGetDefaultStaleness: ApiStalenessGetDefaultStalenessReturnType,
    apiStalenessGetStaleness: ApiStalenessGetStalenessReturnType,
    apiStalenessUpdateStaleness: ApiStalenessUpdateStalenessReturnType,
    apiSystemProfileGetOperatingSystem: ApiSystemProfileGetOperatingSystemReturnType,
    apiSystemProfileGetSapSids: ApiSystemProfileGetSapSidsReturnType,
    apiSystemProfileGetSapSystem: ApiSystemProfileGetSapSystemReturnType,
    apiSystemProfileValidateSchema: ApiSystemProfileValidateSchemaReturnType,
    apiTagGetTags: ApiTagGetTagsReturnType,


};

export const HostInventoryClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory<typeof endpointList, endpointReturnTypes>(BASE_PATH, endpointList, instance);
}

export default HostInventoryClient;
