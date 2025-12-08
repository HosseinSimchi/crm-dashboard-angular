import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { ChartsSectionComponent } from '../charts-section/charts-section.component';
import { OrderChartComponent } from '../order-chart/order-chart.component';
import { RevenueProfileChartComponent } from '../revenue-profile-chart/revenue-profile-chart.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SubHeaderComponent, ChartsSectionComponent, OrderChartComponent, RevenueProfileChartComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
