import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../items.service";
import {Item} from "./item/item.model";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items: Item[];

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.items;
  }

}
