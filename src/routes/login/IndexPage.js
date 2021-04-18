import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import titleImg from '../../assets/images/title.png';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function IndexPage({ dispatch, form: { getFieldDecorator, validateFields } }) {

  function handleSubmit(e) {
    e.preventDefault()
    validateFields((err, values) => {
      console.log(err)
      if (!err) {
        dispatch({
          type: 'login/checkLogin',
          payload: values
        })
      }
    })
  }
  return (
    <div className={styles.loginconter}>
      <img src={titleImg} className={styles.img}></img>
      <div className={styles.normal}>
        <div className={styles.line}></div>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                size="small"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
              Log in
          </Button>
          </Form.Item>
          <Form.Item className={styles.forgetitem}>
            <div className={styles.forgetcon}>
              <span className={styles.forget}>
                忘记密码？
          </span>
              <span className={styles.zc}>
                没有账号？去 <a>注册</a>
              </span>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>

  );

}

// IndexPage.propTypes = {
// };
//用于连接模板文件与models文件
export default connect()(Form.create()(IndexPage));
