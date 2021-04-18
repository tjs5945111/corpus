
import { routerRedux } from 'dva/router';
export default {

  namespace: 'login',

  state: {
  },

  subscriptions: {
  },

  effects: {
    // 路由跳转
    * checkLogin({ payload }, { put }) {
      yield put(routerRedux.push('/pc'));
    },
  },

  reducers: {

  },

};
