/**
 * react调用时vm传入props
 * vue调用时vm传入this
 *
 * @format
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-10-15 15:46:36
 * @LastEditTime: 2025-10-24 11:29:09
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description:
 * @FilePath: /network-spanner/src/components/HandleParamsData/index.ts
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
    // const urlParams = ObjectStoreInUrl.getURLParameter({ decode: true });
    const paramsObj = ObjectStoreInUrl.paramsToQuery({
      // ...urlParams,
      ...params,
    });
    window.location.href = `${window.location.origin}${
      window.location.pathname
    }?${new URLSearchParams(paramsObj as any)}`;
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
const handleQuery = async ({
  queryParameter = <any>{},
  vm = <any>{},
  queryParams = <any>{},
}) => {
  queryParameter.defaultPageFirst ??= true;
  const params = { [vm.currentPageKey]: vm.defCurrentPage };
  let searchParams = {
    ...params,
    ...queryParams,
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
const resetQuery = async ({ vm = <any>{}, dispatchQueryParams }) => {
  vm?.$refs?.queryFormRef?.resetFields();
  const DBParams = await makeParamsByType({}, vm);
  const params = {
    [vm.currentPageKey]: vm.defCurrentPage,
    [vm.pageSizeKey]: DBParams?.[vm.pageSizeKey] || vm.defPageSize,
  };
  await saveParamsByType(params, vm);
  if (dispatchQueryParams) {
    // react
    dispatchQueryParams({ data: { ...params } });
  }
  if (vm.queryParams) {
    vm.queryParams = { ...params };
  }

  vm.afterReset();
  if (vm.handleQuery) {
    vm.handleQuery();
  } else {
    // react
    if (vm.parametersType === "url") {
      return;
    }
    handleQuery({ vm });
  }
};

/** 初始化查询参数 */
const initQueryParams = ({ vm = <any>{}, dispatchQueryParams }) => {
  let queryParams = {
    [vm.pageSizeKey]: vm.defPageSize,
  };
  if (vm.parametersType === "url") {
    queryParams = {
      ...queryParams,
      ...ObjectStoreInUrl.queryToData(
        ObjectStoreInUrl.getURLParameter({ decode: true })
      ),
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
          queryParams = { ...queryParams, ...DBParams };
          if (dispatchQueryParams) {
            // react
            dispatchQueryParams({ data: { ...queryParams } });
          }
          if (vm.queryParams) {
            vm.queryParams = { ...queryParams };
          }
        }
        if (vm.queryWhenReady) {
          vm.$nextTick(() => {
            vm.handleQuery({
              defaultPageFirst: false,
            });
          });
        }
      }
    );
  }
  if (vm.queryWhenReady && vm.parametersType !== "indexDB") {
    vm.$nextTick(() => {
      vm.handleQuery({
        defaultPageFirst: false,
      });
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
