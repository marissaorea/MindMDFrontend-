import React from 'react';
import {Bar} from "react-chartjs-2";


class Chart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Happy',
            data:[
              8,
              9,
              5,
              4,
              7
            ],
            backgroundColor: '#27D6F9'
          }
        ]
      }
    }
  }



  render(){
    return(
      <div className="chart">
      <h1>Mood Tracker</h1>
      <Bar
        data={this.state.chartData}
        options={{
          maintainAspectRatio: true
        }}
      />
      </div>
    )
  }



}
export default Chart;
