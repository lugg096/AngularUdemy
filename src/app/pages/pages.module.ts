
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './page.routes';

import { FormsModule } from '@angular/forms';
import { IncrementarComponent } from '../components/incrementar/incrementar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Graficos1Component,
    ProgressComponent,
    PagesComponent,
    IncrementarComponent
  ],
  exports :[
    DashboardComponent,
    Graficos1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ],

})
export class PagesModule { }
