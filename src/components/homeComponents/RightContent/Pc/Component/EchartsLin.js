import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title"; // 此处是按需引入

class EchartsLin extends Component {
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
    // 组装数据，返回配置 option
    const { imgType, xtitle } = this.state;
    const dataName = xtitle === "date" ? "时间" : "名称";
    const currentData = this.props.backData;
    const clearData = {
      name: "总体趋势",
      type: imgType,
      barWidth: 10,
      data: currentData.map(a => a.cleanAmount) || []
    };
    // const linkData = {
    //   name: "关联量",
    //   type: imgType,
    //   barWidth: 10,
    //   data: currentData.map(b => b.linkAmount) || []
    // };
    return {
      color: ["#386db3", "#e5323e"], // 图颜色
      title: {
        text: ""
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["总体趋势", "关联量"],
        top: "20"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {},
          // dataZoom: {yAxisIndex: "none"}, //区域缩放，区域缩放还原
          //数据视图
          dataView: {
            readOnly: false,
            title: "数据视图",
            // 自定义数据表格样式
            optionToContent: function (opt) {
              var axisData = opt.xAxis[0].data;
              var series = opt.series;
              var tdHeads = "<td  style=\"padding:5px 10px\">" + dataName + "</td>";
              series.forEach(function (item) {
                tdHeads += "<td style=\"padding: 5px 10px\">" + item.name + "</td>";
              });
              var table = "<table border=\"1\" style=\"margin-left:20px;width:600px;border-collapse:collapse;font-size:14px;text-align:center\"><tbody><tr>" + tdHeads + "</tr>";
              var tdBodys = "";
              for (var i = 0, l = axisData.length; i < l; i++) {
                for (var j = 0; j < series.length; j++) {
                  if (typeof (series[j].data[i]) == "object") {
                    tdBodys += "<td>" + series[j].data[i].value + "</td>";
                  } else {
                    tdBodys += "<td>" + series[j].data[i] + "</td>";
                  }
                }
                table += "<tr><td style=\"padding: 0 10px\">" + axisData[i] + "</td>" + tdBodys + "</tr>";
                tdBodys = "";
              }
              table += "</tbody></table>";
              return table;
            }
          },
          magicType: { type: ["line", "bar"] }, //切换为折线图，切换为柱状图
          restore: {},  //还原
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        data: currentData.map(item => item[xtitle]) || []
      },
      yAxis: {
        type: "value",
        name: "语料量（篇）"
      },
      // series: [clearData, linkData]
      series: [clearData]
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

export default EchartsLin;