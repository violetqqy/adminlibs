import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DemoDFormComponent } from '../dform';
import { DemoDialogComponent } from '../dmodal';
import { DemoModalFullComponent } from '../dmodal';
import { DemoDTableComponent } from '../dtable';

import { DFormModule } from '../../lib';

const routes: Routes = [{
  path: 'form',
  component: DemoDFormComponent
}, {
  path: 'dialog',
  component: DemoDialogComponent
}, {
  path: 'modal-full',
  component: DemoModalFullComponent
}, {
  path: 'table',
  component: DemoDTableComponent
}];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    DFormModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    DemoDFormComponent,
    DemoDialogComponent,
    DemoModalFullComponent,
    DemoDTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
