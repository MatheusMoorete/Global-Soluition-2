import React from "react";
import Chart from "react-apexcharts";

class BarCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Mortalidade infantil (por 1,000 nascidos)',
        data: [1.25,1.32,1.76,2.11,2.60,2.60,3.03,3.76,5.68,13.02] 
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false,
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Islandia', 'China', 'Japão', 'Coreia do Sul', 'Itália', 'Portugal', 'França', 'Reino Unido', 'Estados Unidos', 'Brasil'],
        },
      },
    };
  }

  render() {
    return (
      <div className="BarCharts">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarCharts