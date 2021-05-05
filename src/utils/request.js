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
    // .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

export function setBaseQuest(params) {
  const { tableName } = params;
  // let query = new BaaS.Query()
  // 应用查询对象
  let Product = new BaaS.TableObject(tableName);
  let product = Product.create();
  return product.set(params.addData).save()
    .then(checkStatus)
    // .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

export function loginReq(params) {
  return BaaS.auth.login(params)
    // .then(checkStatus)
    // .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

export function registerReq(params) {
  return BaaS.auth.register(params)
    // .then(checkStatus)
    // .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
// 下载服务器的MP3文件
export const downloadMp3 = (filePath, name = '音频') => {
  fetch(filePath).then(res => res.blob()).then(blob => {
    const a = document.createElement('a');
    document.body.appendChild(a)
    a.style.display = 'none'
    // 使用获取到的blob对象创建的url
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    // 指定下载的文件名
    a.download = `${name}.mp3`;
    a.click();
    document.body.removeChild(a)
    // 移除blob对象的url
    window.URL.revokeObjectURL(url);
  });
}