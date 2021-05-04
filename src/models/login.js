
import { routerRedux } from 'dva/router';
import BaaS from 'minapp-sdk';
import { message } from 'antd';
import { loginFun, registerFun } from '../services/example'
export default {

  namespace: 'login',

  state: {
    userName: '',
  },

  subscriptions: {
  },

  effects: {
    // 路由跳转
    * checkLogin({ payload }, { call, put }) {
      // 实例化查询对象
      let query = new BaaS.Query()
      query.compare('name', '=', payload.username);
      query.compare('passWord', '=', payload.password);
      // 设置查询条件（比较、字符串包含、组合等）
      //调用引入的数据请求函数
      const params = { tableName: 'userInfo', query }
      const result = yield call(loginFun, payload);//如果使用  {参数}  ，则是一个对象
      // BaaS.auth.login(payload).then(user => {
      //   console.log(user)
      //   yield put({ type: 'setup', payload: { userName: user?._username } });
      //   yield put(routerRedux.push('/pc/source/system'));
      // }).catch(err => {
      //   message.error('用户名或密码错误，请检查是否正确！');
      // })
      if (result?.data) {
        yield put({ type: 'setup', payload: { userName: result?.data?._username } });
        yield put(routerRedux.push('/pc/source/system'));
      } else {
        message.error('用户名或密码错误，请检查是否正确！')
      }
    },
    * register({ payload, callback }, { call, put }) {
      // 实例化查询对象
      const addData = { name: payload.username, passWord: payload.password, mail: payload.mail };
      //调用引入的数据请求函数
      const params = { tableName: 'userInfo', addData }
      const result = yield call(registerFun, payload);//如果使用  {参数}  ，则是一个对象
      callback(result);
      // BaaS.auth.register(payload).then(user => {
      //   debugger
      //   console.log(user)
      //   if (user?.id) {
      //     // yield put({ type: 'setup', payload: { userName: result?.data?.data?.objects[0].name } });
      //     // yield put(routerRedux.push('/#/'));
      //   } else {
      //     message.error('注册失败，请稍后重试！');
      //   }
      // })
      // debugger
      if (result?.data) {
        // yield put({ type: 'setup', payload: { userName: result?.data?.data?.objects[0].name } });
        // yield put(routerRedux.push('/'));
      } else {
        message.error('注册失败，请稍后重试！');
      }
    },
  },

  reducers: {
    setup(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
