import request from '../utils/request';
import baseQuest from '../utils/request';
import { setBaseQuest, loginReq, registerReq } from '../utils/request';

export function query() {
  return request('/api/users');
}

export function queryAll(params) {
  return baseQuest(params);
}

export function setData(params) {
  return setBaseQuest(params);
}

export function loginFun(params) {
  return loginReq(params);
}
export function registerFun(params) {
  return registerReq(params);
}
