
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Card, List, Icon, Divider, Checkbox, Empty } from 'antd';
import EchartsLin from './Component/EchartsLin'
import EchartWebKit from './Component/EchartWebKit'
import * as mockData from './Component/mock.json'

const backData = [{ cleanAmount: 1, date: '2012-1-1' }, { cleanAmount: 2, date: '2013-1-2' }, { cleanAmount: 3, date: '2021-3-5' },]

const DataContentCompontent = (props) => {
  const [checkeddData, setCheckeddData] = useState(props.qureyParams);
  useEffect(() => {
    props.dispatch({
      type: 'all/getChartData',
      payload: checkeddData
    })
  }, [checkeddData]);

  function onChange(e, item) {
    console.log(`checked = ${e.target.checked}`);
    checkeddData[item] = e.target.checked;
    setCheckeddData({ ...checkeddData });
    props.dispatch({
      type: 'all/getChartData',
      payload: checkeddData
    })
  }
  const { qureyParams = {}, allObj = {}, allChartData = {} } = props;
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <List
          styles={{ width: '10%' }}
          header={<div>
            <h3>目录</h3>
            <div>可视化分析</div>
          </div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={Object.keys(allObj)}
          renderItem={item => (
            <List.Item>
              <Checkbox onChange={e => onChange(e, item)} checked={Boolean(checkeddData[item])}>{allObj[item]}</Checkbox>
            </List.Item>
          )}
        />
        <Card style={{ width: '80%' }}>
          <div style={{ display: 'flex', alignItems: "center" }}>
            <Icon type="exclamation-circle" style={{ color: "#40a9ff", marginRight: '10px' }} />
            <div>
              <div>数据来源：语音语料总库</div>
              <div>检索条件：{
                (Object.keys(checkeddData) || []).map(item => {
                  return checkeddData[item] ? <span key={item} style={{ marginRight: '15px' }}>{allObj[item]}：{qureyParams[item]}</span> : null
                })
              }</div>
            </div>
          </div>
          <Divider />
          {
            Object.keys(checkeddData).length ? null : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          }
          {(Object.keys(checkeddData) || []).map(item => {
            return (
              checkeddData[item] ?
                <div key={item}>
                  <h3>{allObj[item]}</h3>
                  <p style={{ marginLeft: '8px' }}><Icon type="right" />总体趋势分析</p>
                  <EchartsLin backData={allChartData[item]?.lineData || []}
                    // <EchartsLin backData={backData}
                    xtitle="date" />
                  <p style={{ margin: '8px' }}><Icon type="right" />语料引互联网分析</p>
                  {/* 模型关系依赖图 */}
                  <EchartWebKit backData={allChartData[item]?.relationData || []} />
                </div> : null
            )
          })}
        </Card>
      </div>
    </Card>
  );

};

function mapStateToProps(state) {
  return {
    ...state.all,
  };
}

export default connect(mapStateToProps)(DataContentCompontent);


