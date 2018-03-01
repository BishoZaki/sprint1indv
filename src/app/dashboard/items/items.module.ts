import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './items-list/item/item.component';
import {ItemsService} from "./items.service";
import {CreateItemComponent} from './create-item/create-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule],
  declarations: [ItemsComponent, ItemsListComponent, ItemComponent, CreateItemComponent, EditItemComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
