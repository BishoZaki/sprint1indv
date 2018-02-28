import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './items-list/item/item.component';
import {ItemsService} from "./items.service";

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule],
  declarations: [ItemsComponent, ItemsListComponent, ItemComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
