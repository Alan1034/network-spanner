/**
 * @format
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-08 15:00:02
 * @LastEditTime: 2025-02-18 19:22:43
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: Vue2的自定义组件生成函数
 * @FilePath: \network-spanner\src\components\RenderCom\TableColumn.ts
 */

const TableColumn = {
  functional: true,
  props: {
    renderFunction: {
      default: () => {},
      type: Function,
    },
    item: {
      default: () => {},
      type: Object,
    },
  },
  render(createElement, context) {
    const { props } = context;
    const { renderFunction, item } = props;
    const ele = renderFunction(item);
    return ele;
  },
};

export default TableColumn;
