/** @format */
import ObjectStoreInUrl from "../ObjectStoreInUrl/index";
import { Schemas, HandleTable } from "general-basic-indexdb";
const { handleData, getData } = HandleTable;
const { formSchema } = Schemas;

const makeParamsByType = async (params, vm) => {
  if (vm.parametersType === "url") {
    params = {
      ...ObjectStoreInUrl.queryToData(vm.$route?.query),
      ...params,
    };
  }

  if (vm.parametersType === "indexDB") {
    const DBParams = await getData({
      tableName: "formParams",
      propertiesKey: vm.$route.path || "defQueryParams",
      primaryKey: vm.DBPrimaryKey|| "default", 
      mapDB: formSchema,
    });
    params = {
      ...DBParams,
      ...params,
    };
  }
  return params;
};

const saveParamsByType = async (params, vm) => {
  if (vm.parametersType === "url") {
    await vm.$router.push({
      query: ObjectStoreInUrl.paramsToQuery({ ...params }),
    });
  }
  if (vm.parametersType === "indexDB") {
    await handleData({
      tableName: "formParams",
      propertiesKey: vm.$route.path || "defQueryParams",
      parameter: { ...params },
      primaryKey: vm.DBPrimaryKey|| "default",
      mapDB: formSchema,
    });
  }
  return;
};

export default {
  makeParamsByType,
  saveParamsByType,
};
