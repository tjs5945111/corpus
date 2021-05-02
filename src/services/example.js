import request from '../utils/request';
import baseQuest from '../utils/request';

export function query() {
  return request('/api/users');
}

export function queryAll(params) {
  return baseQuest(params);
}
