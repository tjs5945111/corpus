
import { routerRedux } from 'dva/router';
import BaaS from 'minapp-sdk';
import { queryAll } from '../services/example'
export default {

  namespace: 'login',

  state: {
  },

  subscriptions: {
  },

  effects: {
    // 路由跳转
    * checkLogin({ payload }, { call, put }) {
      // 实例化查询对象
      let query = new BaaS.Query()
      // query.compare('id', '=', '608bc44f3a9b3e33848ad5c8');
      // 设置查询条件（比较、字符串包含、组合等）
      //...
      // 应用查询对象
      // let Product = new BaaS.TableObject('text_trace')
      // Product.setQuery(query).find().then(res => {
      //   // success
      //   debugger
      // }, err => {
      //   debugger
      //   // err
      // })
      //调用引入的数据请求函数
      const params = { tableName: 'text_trace', query }
      const result = yield call(queryAll, params);//如果使用  {参数}  ，则是一个对象
      yield put(routerRedux.push('/pc/source/system'));
    },
  },

  reducers: {

  },

};
