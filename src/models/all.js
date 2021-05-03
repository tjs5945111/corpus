
import { routerRedux } from 'dva/router';
import BaaS from 'minapp-sdk';
import { queryAll } from '../services/example'
export default {

  namespace: 'all',

  state: {
    qureyParams: {},
    qureyData: [],
  },

  subscriptions: {
  },

  effects: {
    // 路由跳转
    * mainSearch({ payload }, { call, put }) {
      // 实例化查询对象
      let query = new BaaS.Query();
      Object.keys(payload).map(item => {
        // 字符串是否包含
        payload[item] && query.contains(item, payload[item]);
      });
      // 设置查询条件（比较、字符串包含、组合等）
      //...
      //调用引入的数据请求函数
      const params = { tableName: 'allData', query }
      const result = yield call(queryAll, params);//如果使用  {参数}  ，则是一个对象
      if (result?.data?.status === 200) {
        yield put({ type: 'setup', payload: { qureyData: result?.data?.data?.objects, qureyParams: payload } });
        yield put(routerRedux.push('/pc/source/topic'));
      }
    },
  },

  reducers: {
    setup(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
