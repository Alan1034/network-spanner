/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2023-11-07 15:20:41
 * @LastEditTime: 2024-12-25 15:44:35
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \network-spanner\src\index.ts
 * 
 */
import { HTTPStatusTransFunc } from './components/HTTPStatusTrans/index';

export const HTTPStatusTrans = HTTPStatusTransFunc

import { MiniprogramErrnoFunc } from './components/MiniprogramErrno/index';

export const MiniprogramErrno = MiniprogramErrnoFunc

import { MessageQueueFunc } from './components/MessageQueue/index';

export const MessageQueue = MessageQueueFunc

import ObjectStoreInUrlFuncs from './components/ObjectStoreInUrl/index';

export const ObjectStoreInUrl = ObjectStoreInUrlFuncs

import HandleParamsDataFunc from './components/HandleParamsData/index';

export const HandleParamsData = HandleParamsDataFunc

import TableColumnFunc from './components/RenderCom/TableColumn';

export const TableColumn = TableColumnFunc

import OpenDownloadFunc from './components/OpenDownload/index';

export const OpenDownload = OpenDownloadFunc

