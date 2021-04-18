import React, { useState } from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import titleImg from '../../assets/images/title.png';
import styles from './IndexPage.less';

function IndexPage({ dispatch, form: { getFieldDecorator, validateFields } }) {
  const [type, setType] = useState('login');
  function handleSubmit(e) {
    e.preventDefault()
    validateFields((err, values) => {
      console.log(err)
      if (!err) {
        if (type === 'login') {
          dispatch({
            type: 'login/checkLogin',
            payload: values
          })
        } else {
          // dispatch({
          //   type: 'login/register',
          //   payload: values
          // })
          setType('login')
        }

      }
    })
  }
  return (
    <div className={styles.loginconter}>
      <img src={titleImg} className={styles.img}></img>
      {
        type === 'login' ? <div>
          <h3 className={styles.title}>欢迎登录！</h3>
          <div className={styles.normal}>
            <div className={styles.line}></div>
            <Form onSubmit={handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入账号!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入账号"
                    size="small"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input.Password
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="请输入密码"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
                  登录
              </Button>
              </Form.Item>
              <Form.Item className={styles.forgetitem}>
                <div className={styles.forgetcon}>
                  <span className={styles.forget}>
                    <Link to='/retrieve'>忘记密码？</Link>
                  </span>
                  <span className={styles.zc}>
                    没有账号？去 <a onClick={() => setType('register')}>注册</a>
                  </span>
                </div>
              </Form.Item>
            </Form>
          </div>

        </div>
          : <div>
            <h3 className={styles.title}>欢迎注册！</h3>
            <div className={styles.normal}>
              <div className={styles.line}></div>
              <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入账号!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="请输入账号"
                      size="small"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入邮箱!' }],
                  })(
                    <Input
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="请输入邮箱"
                      size="small"
                    />,
                  )}
                </Form.Item>
                <Form.Item >
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                  })(
                    <Input.Password
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="请输入密码"
                    />,
                  )}
                </Form.Item>
                <Form.Item >
                  {getFieldDecorator('confirm', {
                    rules: [{ required: true, message: '请确认密码!' }],
                  })(
                    <Input.Password
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="请确认密码"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <Button type="primary" htmlType="submit" style={{ background: "#F45809" }} className={styles.loginformbuttons}>
                      立即注册
                  </Button>
                    <Button className={styles.loginformbuttons} style={{ marginRight: '2.5rem' }} onClick={() => setType('login')}>
                      取消
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
      }
    </div>
  );
}

// IndexPage.propTypes = {
// };
//用于连接模板文件与models文件
export default connect()(Form.create()(IndexPage));
