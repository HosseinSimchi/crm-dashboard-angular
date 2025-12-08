import { Component, input } from '@angular/core';
import * as echarts from 'echarts';
import { CHART_OPTIONS } from './options';

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  chartId = input<string>('');
  chartInfo = input<any>();

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const chartDom = document.getElementById(this.chartId())!;

    if (chartDom) {
      const myChart = echarts.init(chartDom);

      const option = CHART_OPTIONS;

      option.tooltip = this.chartInfo().tooltip;
      option.legend.data = this.chartInfo().data;
      option.xAxis.type = this.chartInfo().xAxis.type;
      option.xAxis.data = this.chartInfo().xAxis.data;

      option.yAxis.type = this.chartInfo().yAxis.type;

      option.series = this.chartInfo().series;

      myChart.setOption(option);
    }
  }
}
