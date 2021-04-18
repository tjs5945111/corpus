import React, { useState } from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import titleImg from '../../assets/images/title.png';
import styles from './RetrievePage.css';

function RetrievePage({ dispatch, form: { getFieldDecorator, validateFields }, history }) {
  const [type, setType] = useState('find');
  function handleSubmit(e) {
    e.preventDefault()
    validateFields((err, values) => {
      console.log(err)
      if (!err) {
        if (type === 'find') {
          // dispatch({
          //   type: 'login/checkLogin',
          //   payload: values
          // })
          setType('reset')
        } else {
          // dispatch({
          //   type: 'login/register',
          //   payload: values
          // })
          history.push('/')
        }

      }
    })
  }
  return (
    <div className={styles.loginconter}>
      <img src={titleImg} className={styles.img}></img>
      {
        type === 'find' ? <div>
          <h3 className={styles.title}>找回密码</h3>
          <div className={styles.normal}>
            <div className={styles.line}></div>
            <Form onSubmit={handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入手机号/邮箱' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入手机号/邮箱"
                    size="small"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入验证码!' }],
                })(
                  <div className="yzm" style={{ display: 'flex', paddingRight: "2.5rem" }}>
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="请输入验证码"
                    />
                    <Button style={{ background: '#00C8C4', color: '#ffff', border: '1px solid #00C8C4' }} >
                      发送验证码
                    </Button>
                  </div>
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
                  下一步
              </Button>
              </Form.Item>
            </Form>
          </div>

        </div>
          : <div>
            <h3 className={styles.title}>重置密码</h3>
            <div className={styles.normal}>
              <div className={styles.line}></div>
              <Form onSubmit={handleSubmit} className="login-form">
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
                      确认
                  </Button>
                    <Button className={styles.loginformbuttons} style={{ marginRight: '2.5rem' }}>
                      <Link to='/'>取消</Link>
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
export default connect()(Form.create()(RetrievePage));
