/* tslint:disable */
/* eslint-disable */
import { APIFactory } from '@redhat-cloud-services/javascript-clients-shared/dist/utils';
import { ApiConfig } from '@redhat-cloud-services/javascript-clients-shared/dist/common'
import {
    addTemplateSubscribedSystem,
    deletesystem,
    detailAdvisory,
    detailSystem,
    exportAdvisories,
    exportAdvisorySystems,
    exportPackageSystems,
    exportPackages,
    exportSystemAdvisories,
    exportSystemPackages,
    exportSystems,
    exportTemplateSystems,
    latestPackage,
    listAdvisories,
    listAdvisoriesIds,
    listAdvisorySystems,
    listAdvisorySystemsIds,
    listPackages,
    listSystemAdvisories,
    listSystemAdvisoriesIds,
    listSystemTags,
    listSystems,
    listSystemsIds,
    listTemplate,
    listTemplateSystems,
    listTemplateSystemsIds,
    packageSystems,
    packageSystemsIds,
    packageVersions,
    removeTemplateSystems,
    systemPackages,
    systemVmaasJson,
    systemYumUpdates,
    updateTemplateSystems,
    viewAdvisoriesSystems,
    viewSystemsAdvisories,

  } from './index';

const endpointList = {
      addTemplateSubscribedSystem,
    deletesystem,
    detailAdvisory,
    detailSystem,
    exportAdvisories,
    exportAdvisorySystems,
    exportPackageSystems,
    exportPackages,
    exportSystemAdvisories,
    exportSystemPackages,
    exportSystems,
    exportTemplateSystems,
    latestPackage,
    listAdvisories,
    listAdvisoriesIds,
    listAdvisorySystems,
    listAdvisorySystemsIds,
    listPackages,
    listSystemAdvisories,
    listSystemAdvisoriesIds,
    listSystemTags,
    listSystems,
    listSystemsIds,
    listTemplate,
    listTemplateSystems,
    listTemplateSystemsIds,
    packageSystems,
    packageSystemsIds,
    packageVersions,
    removeTemplateSystems,
    systemPackages,
    systemVmaasJson,
    systemYumUpdates,
    updateTemplateSystems,
    viewAdvisoriesSystems,
    viewSystemsAdvisories,


};

export const PatchClient = (BASE_PATH: string, instance?: ApiConfig) => {
  return APIFactory(BASE_PATH, endpointList, instance);
}

export default PatchClient;
