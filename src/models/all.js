
import { routerRedux } from 'dva/router';
import BaaS from 'minapp-sdk';
import { queryAll } from '../services/example'
export default {

  namespace: 'all',

  state: {
    qureyParams: {},
    qureyData: [],
    allObj: {
      language: '母语',
      country: '国家地区',
      hskLevel: 'HSK水平',
      languageFamily: '语种',
      chineseOrigin_generation: '是否为华裔',
      chineseLearning: '是否学习过汉语',
      gender: '性别',
      method: '汉语学习方式',
      age: '年龄',
      chineseOrigin_generation: '其他外语及程度',
      type: '形式',
      value: '内容',
      material: '主题',
      languages: '语言要素',
      a: '流畅度',
      b: '精准度',
      c: '完成度',
      d: '语调',
      e: '高音',
    },
    allChartData: {

    }
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
    * getChartData({ payload }, { call, put }) {
      // 实例化查询对象
      // debugger;
      // let query = new BaaS.Query();
      //  // 字符串是否包含
      //  payload[item] && query.contains(item, payload[item]);
      const temp = {};
      for (const item of Object.keys(payload)) {
        if (payload[item]) {
          let query = new BaaS.Query();
          query.contains('type', item);
          const params = { tableName: 'allChartData', query }
          const res = yield call(queryAll, params);
          // debugger
          temp[item] = {};
          temp[item].lineData = res?.data?.data?.objects[0]?.lineData;
          temp[item].relationData = res?.data?.data?.objects[0]?.relationData;
        }
      }
      yield put({ type: 'setup', payload: { allChartData: temp } });
    },
  },

  reducers: {
    setup(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
