import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Employee } from '../employee';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() employeeData: Employee[] | [] = [];
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    let chartData = this.employeeData.map((obj, i) => {
      return (
        [obj.userid, i + 1]
      )
    })






    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Employee Time Sheet'
      },

      // subtitle: {
      //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
      // },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
      },
      series: [{
        name: 'Population',
        data: chartData,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }
    HC_exporting(Highcharts);
  }

}
