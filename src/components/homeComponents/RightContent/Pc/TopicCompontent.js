
import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Card, Table, Button, Icon, Input, Select } from 'antd';
import styles from './system.less';

const columns = [
  {
    title: '题名',
    dataIndex: 'name',
    // render: text => <a>{text}</a>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '试听',
    dataIndex: 'view',
    render: text => <audio src={text} controls="controls">
      暂不支持 </audio>,
  },
  {
    title: '文本',
    dataIndex: 'value',
    width: 300,
    ellipsis: true,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '发布时间',
    dataIndex: 'created_at',
    // render: text => <>{text && moment(text).format('YYYY-MM-DD HH:mm:ss')}</>,
    render: text => <>{text && moment(text).format('YYYY-MM-DD')}</>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '下载量',
    dataIndex: 'download',
    sorter: (a, b) => a.age - b.age,
  },
];
const InputGroup = Input.Group;
const { Search } = Input;
const { Option } = Select;

const TopicCompontent = (props) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const { qureyParams = {}, qureyData = [] } = props;
  return (
    <div style={{ height: '100%' }} className={styles.listCont}>
      <Card style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex', alignItems: "center", position: 'fixed', top: '13px', right: '160px' }}>
          {/* <div>检索：</div> */}
          <InputGroup compact>
            <Select defaultValue="要素">
              <Option value="ys">要素</Option>
            </Select>
            <div>
              <Search
                placeholder="input search text"
                style={{ widt: '200px' }}
                enterButton="检索"
                onSearch={value => console.log(value)}
              ></Search>
            </div>
          </InputGroup>
          <Button style={{ marginLeft: '10PX' }}>高级检索</Button>
        </div>

        <div style={{ display: 'flex', alignItems: "center" }}>
          <Icon type="exclamation-circle" style={{ color: "#40a9ff", marginRight: '10px' }} />
          <div>
            <div>数据来源：语音语料总库</div>
            <div>检索条件：{
              Object.keys(qureyParams).map(item => {
                return item ? <span>{qureyParams[item]}</span> : null
              })
            }</div>
          </div>
        </div>

      </Card>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ margin: 0, fontWeight: 'bolder' }}>语音语料列表</h3>
          <div>
            {/* <Button type='primary'>批量下载</Button> */}
            <Button type='primary' style={{ marginLeft: '10px' }}><a href="./#/pc/source/datacontent">可视化分析</a></Button>
          </div>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={qureyData} />
      </Card>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state.all,
  };
}
export default connect(mapStateToProps)(TopicCompontent);
