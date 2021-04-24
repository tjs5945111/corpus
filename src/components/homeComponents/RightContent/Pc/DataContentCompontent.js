
import React from 'react';
import { Card, List, Icon, Divider, Checkbox } from 'antd';
import EchartsLin from './Component/EchartsLin'
import EchartWebKit from './Component/EchartWebKit'
import * as mockData from './Component/mock.json'

const backData = [{ cleanAmount: 1, date: '2012-1-1' }, { cleanAmount: 2, date: '2013-1-2' }, { cleanAmount: 3, date: '2021-3-5' },]
const data = [
  'Racing ',
  'Japanese',
  'Australian.',
  'Man charged ',
  'Los Angeles',
];

const DataContentCompontent = (props) => {

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <List
          styles={{ width: '10%' }}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Checkbox onChange={onChange}>{item}</Checkbox>
            </List.Item>
          )}
        />
        <Card style={{ width: '80%' }}>
          <div style={{ display: 'flex', alignItems: "center" }}>
            <Icon type="exclamation-circle" style={{ color: "#40a9ff", marginRight: '10px' }} />
            <div>
              <div>数据来源：</div>
              <div>检索条件：</div>
            </div>
          </div>
          <Divider />
          <div>
            <h3>国家地区</h3>
            <p style={{ marginLeft: '8px' }}><Icon type="right" />总体趋势分析</p>
            <EchartsLin backData={backData}
              xtitle="date" />
            {/* 模型关系依赖图 */}
            <EchartWebKit backData={mockData} />
          </div>
        </Card>
      </div>
    </Card>
  );

};

DataContentCompontent.propTypes = {
};

export default DataContentCompontent;


