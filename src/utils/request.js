import fetch from 'dva/fetch';
import BaaS from 'minapp-sdk';

// BaaS.init('b74475f7389a8d7ead6c');

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

export default function baseQuest(params) {
  const { tableName } = params;
  // let query = new BaaS.Query()
  // 应用查询对象
  let Product = new BaaS.TableObject(tableName);
  return Product.setQuery(params.query).find()
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
