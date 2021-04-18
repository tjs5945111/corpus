import React, { useState } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './system.css';

const SystemCompontent = ({ dispatch, form: { getFieldDecorator, validateFields } }) => {
  const [type, setType] = useState('login');
  function handleSubmit(e) {
    e.preventDefault()
    validateFields((err, values) => {
      console.log(err)
      if (!err) {

      }
    })
  }
  return (
    <div className={styles.system}>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入"
              size="small"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
            重置
              </Button>
          <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
            检索
              </Button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default connect()(Form.create()(SystemCompontent));
