import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const  PaiChart =(props)=> {
   const {data}= props;
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            theme: "dark2",
            title: {
                text: "Top Store"
            },
            // subtitles: [{
            //     text: "Median hours/week"
            // }],
            data: [{
                type: "doughnut",
                startAngle: 90,
                indexLabel: "{name} ({y})",
                yValueFormatString: "#,##0.0#"%"",
                dataPoints: data
            }]
        };
 
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div >
        );
    
}
export default PaiChart;                              