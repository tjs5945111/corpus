import React, { useState } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Divider, Collapse, Card } from 'antd';
import { Link } from 'react-router-dom';
import styles from './system.less';

const { Panel } = Collapse;

const SystemCompontent = ({ dispatch, form: { getFieldDecorator, validateFields } }) => {
  const [type, setType] = useState('login');
  function callback(key) {
    console.log(key);
  }
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
      <Form onSubmit={handleSubmit} className="login-form" layout='inline'>
        <Card style={{ marginBottom: "20px" }}>
          <h3>高级检索</h3>
          <Divider />
          <Form.Item label='国家地区'>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
        </Card>

        <Card style={{ marginBottom: "20px" }}>
          <h3>高级检索</h3>
          <Divider />
          <Form.Item label='国家地区'>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
        </Card>

        <Card style={{ marginBottom: "20px" }}>
          <h3>高级检索</h3>
          <Divider />
          <Form.Item label='国家地区'>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
        </Card>

        <Card style={{ marginBottom: "20px" }}>
          <h3>高级检索</h3>
          <Divider />
          <Form.Item label='国家地区'>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
          <Form.Item label='国家地区'>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入!' }],
            })(
              <Input
                type="password"
                placeholder="请输入"
              />,
            )}
          </Form.Item>
        </Card>

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
