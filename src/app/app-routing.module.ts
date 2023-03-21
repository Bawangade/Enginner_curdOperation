import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEngineerComponent } from './add-engineer/add-engineer.component';
import { DelEngineerComponent } from './del-engineer/del-engineer.component';
import { ListEnginnerComponent } from './list-enginner/list-enginner.component';
import { UpdateEngineerComponent } from './update-engineer/update-engineer.component';

const routes: Routes = [
  {
    path:'list_Engineer',
    component:ListEnginnerComponent
  },
  {
    path:'add_Engineer',
    component:AddEngineerComponent
  },
  {
    path:'update_Engineer',
    component:UpdateEngineerComponent
  },
  {
    path:'delete_Engineer',
    component:DelEngineerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
