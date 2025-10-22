/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-10-15 15:46:36
 * @LastEditTime: 2025-10-22 17:30:06
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * 
 * react调用时vm传入props
 * vue调用时vm传入this
 * 
 * @FilePath: /network-spanner/src/components/HandleParamsData/index.ts
 * 
 */
/** @format */
import ObjectStoreInUrl from "../ObjectStoreInUrl/index";
import { Schemas, HandleTable } from "general-basic-indexdb";
const { handleData, getData } = HandleTable;
const { formSchema } = Schemas;

const makeParamsByType = async (params, vm) => {
  if (vm.parametersType === "url") {
    params = {
      ...ObjectStoreInUrl.queryToData(
        ObjectStoreInUrl.getURLParameter({ decode: true })
      ),
      ...params,
    };
  }

  if (vm.parametersType === "indexDB") {
    const DBParams = await getData({
      tableName: "formParams",
      propertiesKey: window.location.pathname || "defQueryParams",
      primaryKey: vm.DBPrimaryKey || "default",
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
      propertiesKey: window.location.pathname || "defQueryParams",
      parameter: { ...params },
      primaryKey: vm.DBPrimaryKey || "default",
      mapDB: formSchema,
    });
  }
  return;
};

/** 搜索按钮操作 */
const handleQuery = async ({ queryParameter = <any>{}, vm = <any>{} }) => {
  queryParameter.defaultPageFirst ??= true;
  const params = { [vm.currentPageKey]: vm.defCurrentPage };
  let searchParams = {
    ...params,
    ...vm.queryParams,
  };
  searchParams = await makeParamsByType(searchParams, vm);
  if (queryParameter.defaultPageFirst) {
    searchParams = {
      ...searchParams,
      ...params,
    };
  }
  await saveParamsByType(searchParams, vm);
  vm.getList({
    ...searchParams,
  });
};

/** 重置按钮操作 */
const resetQuery = async ({ vm = <any>{} }) => {
  vm.$refs.queryFormRef.resetFields();
  const DBParams = await makeParamsByType({}, vm);
  const params = {
    [vm.currentPageKey]: vm.defCurrentPage,
    [vm.pageSizeKey]: DBParams?.[vm.pageSizeKey] || vm.defPageSize,
  };
  await saveParamsByType(params, vm);
  vm.queryParams = { ...params };
  vm.afterReset();
  vm.handleQuery();
};

/** 初始化查询参数 */
const initQueryParams = ({ vm = <any>{} }) => {
  let queryParams = {
    [vm.pageSizeKey]: vm.defPageSize,
  };
  if (vm.parametersType === "url") {
    queryParams = {
      ...queryParams,
      ...ObjectStoreInUrl.queryToData(ObjectStoreInUrl.getURLParameter({ decode: true })),
    };
  }
  if (vm.parametersType === "indexDB") {
    getData(
      {
        tableName: "formParams",
        propertiesKey: window.location.pathname || "defQueryParams",
        primaryKey: vm.DBPrimaryKey || "default",
        mapDB: formSchema,
      },
      (DBParams) => {
        if (DBParams) {
          vm.queryParams = { ...queryParams, ...DBParams };
        }
        if (vm.queryWhenReady) {
          vm.$nextTick(() => {
            vm.handleQuery({ defaultPageFirst: false });
          });
        }
      }
    );
  }
  if (vm.queryWhenReady && vm.parametersType !== "indexDB") {
    // console.log({ ...vm.queryParams }, "queryParams")
    vm.$nextTick(() => {
      // console.log({ ...vm.queryParams }, "queryParams112")
      vm.handleQuery({ defaultPageFirst: false });
    });
  }
  return queryParams;
};

const getItemRules = ({ item = <any>{}, vm = <any>{} }) => {
  const { type, rules = [] } = item;
  const newRules = [...rules];
  if (vm.noInputBlank && type === "input") {
    newRules.push({
      pattern: /\S/,
      message: "请输入（不能仅输入空格）",
      trigger: "blur",
    });
    return newRules;
  }
  return newRules;
};

export default {
  makeParamsByType,
  saveParamsByType,
  handleQuery,
  resetQuery,
  initQueryParams,
  getItemRules,
};
