import { persianDigits } from "../../helpers/toPersianNumber";

export const CHART_OPTIONS = {
  tooltip: undefined,

  legend: {
    data: undefined,
    top: 0,
    textStyle: {
      fontFamily: 'IRANSans',
      fontSize: 13,
    },
  },

  grid: {
    left: '3%',
    right: '3%',
    bottom: '3%',
    containLabel: true,
  },

  xAxis: {
    type: undefined,
    data: undefined,
    axisLabel: {
      fontSize: 12,
      fontFamily: 'IRANSans',
      formatter: (value: any) => value,
    },
  },

  yAxis: {
    type: undefined,
    axisLabel: {
      fontSize: 12,
      fontFamily: 'IRANSans',
      formatter: (val:any) => persianDigits(val),
    },
  },

  series: undefined,
};
