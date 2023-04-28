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
  timetaken_graph_options = {
    series:[
      {
        name: 'Minutes',
        data: [ 10, 240, 10, 20, 10],
        color: '#f8ac59'
      }
    ],
    chart_type:'line',
    categories: ['SanerNow','Intruder','ManageEngine','Nessus Pro', 'Qualys'],
  };

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
