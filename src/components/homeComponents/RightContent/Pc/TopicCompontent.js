
import React from 'react';
import { Card, Table, Button, Icon, Input, Select } from 'antd';
import styles from './system.less';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: (a, b) => a.age - b.age,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
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
            <div>数据来源：</div>
            <div>检索条件：</div>
          </div>
        </div>

      </Card>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ margin: 0, fontWeight: 'bolder' }}>语音语料列表</h3>
          <div>
            <Button type='primary'>批量下载</Button>
            <Button type='primary' style={{ marginLeft: '10px' }}>可视化分析</Button>
          </div>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

TopicCompontent.propTypes = {
};

export default TopicCompontent;
