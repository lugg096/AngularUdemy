
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './page.routes';



@NgModule({
  declarations: [
    DashboardComponent,
    Graficos1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports :[
    DashboardComponent,
    Graficos1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],

})
export class PagesModule { }
