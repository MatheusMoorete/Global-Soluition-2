import React from 'react';
import Chart from 'react-apexcharts';

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-line-chart',
          toolbar: {
            show: false, 
          },
        },
        xaxis: {
          categories: [1990, 1995, 2000, 2005, 2010, 2015, 2020],
        },
        stroke: {
          width: [3, 3, 3, 3, 3],
          curve: 'straight',
          dashArray: [0, 8, 5, 3, 1]
        },
      },
      series: [
        {
          name: 'Norte',
          data: [47, 39, 37, 35, 23, 19, 19],
        },
        {
          name: 'Nordeste',
          data: [75, 56, 39, 35, 20, 27, 26],
        },
        {
          name: 'Sul',
          data: [33,22,20, 18, 17, 16, 16],
        },
        {
          name: 'Sudeste',
          data: [35,25,22, 20, 19, 18, 18],
        },
        {
          name: 'Centro-Oeste',
          data: [37, 27, 25, 23, 21, 20, 20],
        },
      ],
    };
  }

  render() {
    return (
      <div className="line-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="500"
        />
      </div>
    );
  }
}

export default LineChart;
