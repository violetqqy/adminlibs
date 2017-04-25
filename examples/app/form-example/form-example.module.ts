import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormExampleComponent } from './form-example.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormExampleComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations:[
    FormExampleComponent
  ]
})
export class FormExampleModule {

}