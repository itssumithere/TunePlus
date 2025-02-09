/* SimpleGraph.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const  SimpleGraph =(props)=> {
  const {data,title,type='spline'}= props;
 
    const options = {
      animationEnabled: true,
      backgroundColor: "#000000", // Set background to black
      title: {
        text: title + " Data",
        fontColor: "#FFFFFF", // Set title text color to white
      },
      axisX: {
        // title: title,
        titleFontColor: "#FFFFFF",
        labelFontColor: "#FFFFFF", // Set X-axis label color to white
        lineColor: "#FFFFFF", // Set X-axis line color to white
        tickColor: "#FFFFFF", // Set tick marks to white
      },
      axisY: {
        title: "Quantity",
        titleFontColor: "#FFFFFF", // Set Y-axis title color to white
        labelFontColor: "#FFFFFF", // Set Y-axis label color to white
        lineColor: "#FFFFFF", // Set Y-axis line color to white
        tickColor: "#FFFFFF", // Set tick marks to white
        gridColor: "#000", // Set grid lines to dark gray
      },
      data: [
        {
          type: type, // Use a column chart
          // color: "#FF4500", // Column color
          dataPoints: data,
        },
      ],
    }
    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
 
}
export default SimpleGraph;  
