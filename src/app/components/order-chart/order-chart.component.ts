import { Component, signal } from '@angular/core';
import { ChartsComponent } from '../../../shared/components/charts/charts.component';
import { persianDigits } from '../../../shared/helpers/toPersianNumber';

@Component({
  selector: 'app-order-chart',
  imports: [ChartsComponent],
  templateUrl: './order-chart.component.html',
  styleUrl: './order-chart.component.scss',
})
export class OrderChartComponent {
  orderChartInfo = signal<any>({
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },

      // APPLY FONT HERE
      textStyle: {
        fontFamily: 'IRANSans',
        fontSize: 13, // optional
      },

      formatter: (params: any) => {
        let result = params[0].name + '<br/>';

        params.forEach((p: any) => {
          result +=
            `${p.marker} ${p.seriesName}: ` + persianDigits(p.value) + '<br/>';
        });

        return result;
      },
    },

    data: ['سفارش‌های تکمیل‌شده', 'سفارش‌های در انتظار', 'سفارش‌های لغوشده'],
    xAxis: {
      type: 'category',
      data: [
        'یکشنبه',
        'شنبه',
        'جمعه',
        'پنج‌شنبه',
        'چهارشنبه',
        'سه‌شنبه',
        'دوشنبه',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'سفارش‌های تکمیل‌شده',
        type: 'bar',
        stack: 'total',
        data: [320, 280, 240, 190, 220, 180, 150],
        itemStyle: { color: '#1CA347' }, // green
      },
      {
        name: 'سفارش‌های در انتظار',
        type: 'bar',
        stack: 'total',
        data: [50, 60, 80, 70, 100, 90, 60],
        itemStyle: { color: '#FF8F00' }, // orange
      },
      {
        name: 'سفارش‌های لغوشده',
        type: 'bar',
        stack: 'total',
        data: [20, 10, 30, 15, 20, 25, 10],
        itemStyle: { color: '#E53935' }, // red
      },
    ],
  });
}
