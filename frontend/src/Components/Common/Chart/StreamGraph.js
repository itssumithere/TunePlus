import React, { useRef, useCallback, useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StreamGraph = (props) => {
  const { list } = props;
  const [dataPoints, setDataPoints] = useState("");
  const chartRef = useRef(null);

  useEffect(() => {
    const getData=()=>{
      let arr = [] 
      list?.map((item, index) => { 
          arr.push({ x: index, label: item.dsp, y: item.streams })  
      })
      setDataPoints(arr)
    }
    getData()
  }, [list])
  const toggleDataSeries = useCallback((e) => {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chartRef.current.render(); // Re-render the chart
  }, []);

  // "_id": "674f3f0b49b2f38fc56654bf",
  // "userId": "6747d51843266673e00e8804",
  // "dsp": "Amazon Unlimited",
  // "downloads": 0,
  // "streams": 1872,
  // "createdAt": "2024-12-03T17:25:31.382Z",
  // "updatedAt": "2024-12-03T17:25:31.382Z",
  // "__v": 0
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Live Streams",
    },
    // axisX: {
    //   valueFormatString: "",
    // },
    // axisY: {
    //   prefix: "",

    // },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: "stackedBar",
        name: "Stream",
        showInLegend: true,
        xValueFormatString: "",
        yValueFormatString: "",
        dataPoints: dataPoints
        // dataPoints: [
        //   { x: new Date(2018, 5, 25), y: 56 },
        //   { x: new Date(2018, 5, 26), y: 45 },
        //   // { x: new Date(2018, 5, 27), y: 71 },
        //   // { x: new Date(2018, 5, 28), y: 41 },
        //   // { x: new Date(2018, 5, 29), y: 60 },
        //   // { x: new Date(2018, 5, 30), y: 75 },
        //   // { x: new Date(2018, 6, 1), y: 98 },
        // ],
      },
      // {
      //   type: "stackedBar",
      //   name: "Snacks",
      //   showInLegend: true,
      //   xValueFormatString: "DD, MMM",
      //   yValueFormatString: "$#,##0",
      //   dataPoints: [
      //     { x: new Date(2018, 5, 25), y: 86 },
      //     { x: new Date(2018, 5, 26), y: 95 },
      //     { x: new Date(2018, 5, 27), y: 71 },
      //     { x: new Date(2018, 5, 28), y: 58 },
      //     { x: new Date(2018, 5, 29), y: 60 },
      //     { x: new Date(2018, 5, 30), y: 65 },
      //     { x: new Date(2018, 6, 1), y: 89 },
      //   ],
      // },
      // {
      //   type: "stackedBar",
      //   name: "Drinks",
      //   showInLegend: true,
      //   xValueFormatString: "DD, MMM",
      //   yValueFormatString: "$#,##0",
      //   dataPoints: [
      //     { x: new Date(2018, 5, 25), y: 48 },
      //     { x: new Date(2018, 5, 26), y: 45 },
      //     { x: new Date(2018, 5, 27), y: 41 },
      //     { x: new Date(2018, 5, 28), y: 55 },
      //     { x: new Date(2018, 5, 29), y: 80 },
      //     { x: new Date(2018, 5, 30), y: 85 },
      //     { x: new Date(2018, 6, 1), y: 83 },
      //   ],
      // },
      // {
      //   type: "stackedBar",
      //   name: "Dessert",
      //   showInLegend: true,
      //   xValueFormatString: "DD, MMM",
      //   yValueFormatString: "$#,##0",
      //   dataPoints: [
      //     { x: new Date(2018, 5, 25), y: 61 },
      //     { x: new Date(2018, 5, 26), y: 55 },
      //     { x: new Date(2018, 5, 27), y: 61 },
      //     { x: new Date(2018, 5, 28), y: 75 },
      //     { x: new Date(2018, 5, 29), y: 80 },
      //     { x: new Date(2018, 5, 30), y: 85 },
      //     { x: new Date(2018, 6, 1), y: 105 },
      //   ],
      // },
      // {
      //   type: "stackedBar",
      //   name: "Takeaway",
      //   showInLegend: true,
      //   xValueFormatString: "DD, MMM",
      //   yValueFormatString: "$#,##0",
      //   dataPoints: [
      //     { x: new Date(2018, 5, 25), y: 52 },
      //     { x: new Date(2018, 5, 26), y: 55 },
      //     { x: new Date(2018, 5, 27), y: 20 },
      //     { x: new Date(2018, 5, 28), y: 35 },
      //     { x: new Date(2018, 5, 29), y: 30 },
      //     { x: new Date(2018, 5, 30), y: 45 },
      //     { x: new Date(2018, 6, 1), y: 25 },
      //   ],
      // },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        onRef={(ref) => (chartRef.current = ref)}
      />
    </div>
  );
};

export default StreamGraph;
