import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JasComponent } from '../../Components/Jas/jas.component';

const routes: Routes = [
  { path: 'jas', component: JasComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

  
export class AppRoutingModule { }
