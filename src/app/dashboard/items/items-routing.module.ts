import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import {CreateItemComponent} from "./create-item/create-item.component";
import {EditItemComponent} from "./edit-item/edit-item.component";

const routes: Routes = [
  { path: '', component: ItemsComponent, pathMatch: 'full' },
    { path: 'add', component: CreateItemComponent, pathMatch: 'full'},
    {path: 'edit', component: EditItemComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}
