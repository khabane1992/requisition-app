import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { RequisitionSharedModule } from 'app/shared/shared.module';
import { RequisitionCoreModule } from 'app/core/core.module';
import { RequisitionAppRoutingModule } from './app-routing.module';
import { RequisitionHomeModule } from './home/home.module';
import { RequisitionEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RequisitionSharedModule,
    RequisitionCoreModule,
    RequisitionHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    RequisitionEntityModule,
    RequisitionAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class RequisitionAppModule {}
