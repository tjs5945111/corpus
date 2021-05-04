import React, { useState } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Divider, Collapse, Card, Select, InputNumber, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import styles from './system.less';

const { Panel } = Collapse;
const { Option } = Select;
const { RangePicker } = DatePicker;

const SystemCompontent = ({ dispatch, form: { getFieldDecorator, validateFields, resetFields } }) => {
  const [searchParams, setSearchParams] = useState({});
  function callback(key) {
    console.log(key);
  }
  function handleSubmit(e) {
    e.preventDefault()
    validateFields((err, values) => {
      console.log(err)
      if (!err) {
        dispatch({
          type: 'all/mainSearch',
          payload: values
        })
      }
    })
  }
  return (
    <div className={styles.system}>
      <Form onSubmit={handleSubmit} className="login-form" layout='inline'>
        <Card style={{ marginBottom: "20px" }}>
          <h3>高级检索</h3>
          <Divider />
          <div style={{ display: 'flex', flexWrap: "wrap" }}>
            <Form.Item label='母语'>
              {getFieldDecorator('language', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>
            <Form.Item label='国家地区'>
              {getFieldDecorator('country', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>

            <Form.Item label='HSK水平'>
              {getFieldDecorator('hskLevel', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>

            <Form.Item label='语种'>
              {getFieldDecorator('languageFamily', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>
            <Form.Item label='是否为华裔'>
              {getFieldDecorator('chineseOrigin_generation', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>
            <Form.Item label='是否学习过汉语'>
              {getFieldDecorator('chineseLearning', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>
            <Form.Item label='性别'>
              {getFieldDecorator('gender', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Select placeholder="请选择！">
                  <Option value='男'>男</Option>
                  <Option value='女'>女</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item label='汉语学习方式'>
              {getFieldDecorator('method', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>
            <Form.Item label='其他外语及程度'>
              {getFieldDecorator('chineseOrigin_generation', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>
            <Form.Item label='年龄'>
              {getFieldDecorator('age', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Input
                  placeholder="请输入"
                />,
              )}
            </Form.Item>

          </div>
        </Card>
        <Card style={{ marginBottom: "20px" }}>
          <h3>形式检索</h3>
          <Divider />
          <div style={{ display: 'flex', flexWrap: "wrap" }}>
            <Form.Item label='形式'>
              {getFieldDecorator('type', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Select placeholder="请选择">
                  <Option value='文本朗读'>文本朗读</Option>
                  <Option value='卡通'>卡通</Option>
                  <Option value='演讲'>演讲</Option>
                  <Option value='报告'>报告</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label='时间范围'>
              {getFieldDecorator('time', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <RangePicker > </RangePicker>,
              )}
            </Form.Item>

          </div>
        </Card>

        <Card style={{ marginBottom: "20px" }}>
          <h3>语音内容</h3>
          <Divider />
          <div style={{ display: 'flex', flexWrap: "wrap" }}>
            <Form.Item label='内容'>
              {getFieldDecorator('value', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Select placeholder="请选择">
                  <Option value='文本朗读'>文本朗读</Option>
                  {/* <Option value='cartoon_material'>卡通</Option>
                  <Option value='speech_material'>演讲</Option>
                  <Option value='talk_material'>报告</Option> */}
                </Select>
              )}
            </Form.Item>
            <Form.Item label='主题'>
              {getFieldDecorator('material', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Select placeholder="请选择">
                  <Option value='文本朗读'>文本朗读</Option>
                  <Option value='卡通'>卡通</Option>
                  <Option value='演讲'>演讲</Option>
                  <Option value='报告'>报告</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item label='语言要素'>
              {getFieldDecorator('languages', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <Select placeholder="请选择">
                  <Option value='word'>词汇</Option>
                </Select>
              )}
            </Form.Item>

          </div>
        </Card>
        <Card style={{ marginBottom: "20px" }}>
          <h3>评测指标</h3>
          <Divider />
          <div style={{ display: 'flex', flexWrap: "wrap" }}>
            <Form.Item label='流畅度'>
              {getFieldDecorator('a', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <InputNumber
                  placeholder="请输入0-100的数字"
                />,
              )}
            </Form.Item>
            <Form.Item label='精准度'>
              {getFieldDecorator('b', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <InputNumber
                  placeholder="请输入0-100的数字"
                />,
              )}
            </Form.Item>
            <Form.Item label='完成度'>
              {getFieldDecorator('c', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <InputNumber
                  placeholder="请输入0-100的数字"
                />,
              )}
            </Form.Item>

          </div>
        </Card>

        <Card style={{ marginBottom: "20px" }}>
          <h3>发音质量</h3>
          <Divider />
          <div style={{ display: 'flex', flexWrap: "wrap" }}>
            <Form.Item label='语调'>
              {getFieldDecorator('d', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <InputNumber
                  placeholder="请输入0-100的数字"
                />,
              )}
            </Form.Item>
            <Form.Item label='高音'>
              {getFieldDecorator('fe', {
                rules: [{ required: false, message: '请输入!' }],
              })(
                <InputNumber
                  placeholder="请输入0-100的数字"
                />,
              )}
            </Form.Item>

          </div>
        </Card>

        <Card className={styles.search}>
          <Form.Item style={{ width: '100%' }}>
            <Button className={styles.button} onClick={() => resetFields()}>
              重置
              </Button>
            <Button type="primary" htmlType="submit" className={styles.button}>
              检索
              </Button>
          </Form.Item>
        </Card>
      </Form>

    </div>
  );
};

export default connect()(Form.create()(SystemCompontent));
