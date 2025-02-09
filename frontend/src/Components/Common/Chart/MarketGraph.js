import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MarketGraph = (props) => {
  const { charDdata } = props;
  console.log(charDdata);

  const options = {
    animationEnabled: true,
    backgroundColor: "#000000", // Set background to black
    title: {
      text: "Market",
      fontColor: "#FFFFFF", // Set title text color to white
    },
    axisX: { 
      valueFormatString: "",
      labelFontColor: "#FFFFFF", // Set X-axis label color to white
      lineColor: "#FFFFFF", // Set X-axis line color to white
      tickColor: "#FFFFFF", // Set tick marks to white
      labelAngle: -45, // Rotate labels if necessary
    },
    axisY: {
      title: "",
      titleFontColor: "#FFFFFF", // Set Y-axis title color to white
      labelFontColor: "#FFFFFF", // Set Y-axis label color to white
      lineColor: "#FFFFFF", // Set Y-axis line color to white
      tickColor: "#FFFFFF", // Set tick marks to white
      gridColor: "#444444", // Set grid lines to dark gray
    },
    data: [
      {
        type: "column", // Use "column" for category-based X-axis
        lineColor: "#FF4500", // Set line color to orange
        markerColor: "#FF4500", // Set data point color to orange
        dataPoints: charDdata,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default MarketGraph;
