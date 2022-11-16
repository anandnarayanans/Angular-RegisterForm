import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { MultiformsComponent } from './multiforms/multiforms.component';

const routes: Routes = [
  {path:'/', component:MultiformsComponent},
  {path:'/data',component:DataTableComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
