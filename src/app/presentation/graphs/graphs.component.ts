import { Component, OnInit } from '@angular/core';
// import ApexCharts from 'apexcharts';
// import * as ApexCharts from 'apexcharts';
@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
  public getYAxisOptions() {
    return {
      labels: {
        formatter: (val) => {
          return '$' + val;
        }
      }
    };
  }
  constructor() { }
  chartOptions = {
    series: [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    title: {
      text: "My First Angular Chart"
    },
    xaxis: {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    },
    colors: ["#23c6c8"],
    theme: {
      // set to dark
      mode: "dark",
      palette: "palette1",
    }
  };

  price_graph_options = {
    series:[
      {
        name: 'Price',
        data: [ 2.5, 8, 3.5, 17.4, 19.95],
      }
    ],
    chart_type:'bar',
    categories: ['SanerNow','Intruder','ManageEngine','Nessus Pro', 'Qualys'],
  };

  review_graph_options = {
    series:[
      {
        name: 'Rohan',
        data: [4,3,4,3,4.5],
        color: '#ed5565'
      },
      {
        name: 'Sanket',
        data: [4.5,4.5,4,3.5,4],
        color: '#f8ac59'
      },
      {
        name: 'Dev',
        data: [ 4.5,4.5,4,3,4],
        color: '#23c6c8'
      },
      {
        name: 'Aayushi',
        data: [ 5,4.5,4,3.5,4],
        color: '#1ab394'
      },
    ],
    chart_type:'bar',
    categories: ['SanerNow','Intruder','ManageEngine','Nessus Pro', 'Qualys'],
    colors: ['red', 'blue', 'green'],
  };
  severity_graph_options = {
    series:[
      {
        name: 'Critical',
        data: [7,4,6,0,7 ],
        color: '#ed5565'
      },
      {
        name: 'High',
        data: [ 75,43,56,0,80],
        color: '#f8ac59'
      },
      {
        name: 'Medium',
        data: [ 38,15,25,0,30],
        color: '#23c6c8'
      },
    ],
    chart_type:'bar',
    categories: ['SanerNow','Intruder','ManageEngine','Nessus Pro', 'Qualys'],
    colors: ['red', 'blue', 'green'],
  };
  vuln_graph_options = {
    series:[
      {
        name: 'Vulnerabilities',
        data: [120,62,87,0,117],
        color: '#23c6c8'
      },
    ],
    chart_type:'line',
    categories: ['SanerNow','Intruder','ManageEngine','Nessus Pro', 'Qualys'],
  };
  heatmap_graph_options = {
    series: [{
      name: 'Metric1',
      // set data to array of numbers below 100
      data : [90, 23, 45, 56, 78, 89, 90, 61],
      color: '#008FFB'
    },{
      name: 'Metric2',
      data : [24, 56, 78, 90, 23, 45, 67, 89],
      color: '#008FFB'
    }],
    plotOptions: {
      heatmap: {
        // shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            // {
            //   from: -30,
            //   to: 5,
            //   name: 'low',
            //   color: '#00A100'
            // },
            // {
            //   from: 6,
            //   to: 20,
            //   name: 'medium',
            //   color: '#128FD9'
            // },
            {
              from: 0,
              to: 100,
              name: 'high',
              color: '#FFB200'
            },
            // {
            //   from: 50,
            //   to: 100,
            //   // name: 'extreme',
            //   color: '#FF0000'
            // }
          ]
        }
      }
    },
  }
  ngOnInit(): void {
    // const chart = new ApexCharts(document.getElementById('chart'), this.chartOptions);
    // chart.updateSeries(this.chartData);
    // chart.updateOptions({
    //   xaxis: {
    //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    //   }
    // });
    // chart.render();
  }

}
