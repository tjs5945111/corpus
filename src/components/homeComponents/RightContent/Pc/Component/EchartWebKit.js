// EchartWebKit
import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title"; // 此处是按需引入

class EchartWebKit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgType: "line", // 默认折线图
      xtitle: this.props.xtitle, // x轴类目名称取参
    };
  }
  // getOption 这个函数主要用于配置 option，包括将数据配置进去
  // 也可以将其放在 state 中，然后通过 setState 更新
  getOption = () => {
    // // 组装数据，返回配置 option
    // const { imgType, xtitle } = this.state;
    // const dataName = xtitle === "date" ? "时间" : "名称";
    const webkitDep = this.props.backData;

    return {
      legend: {
        data: ['原始文献', '参考文献', '引用文献', '其他']
      },
      series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        draggable: true,
        data: webkitDep?.nodes?.map(function (node, idx) {
          node.id = idx;
          return node;
        }),
        categories: webkitDep?.categories,
        force: {
          edgeLength: 5,
          repulsion: 20,
          gravity: 0.2
        },
        edges: webkitDep?.links
      }]
    }
  };
  render() {
    return (
      <ReactEcharts
        style={{ minHeight: "400px" }}
        option={this.getOption()}
        notMerge
        lazyUpdate
        theme={"theme_name"}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
      />
    )
  }
}

export default EchartWebKit;