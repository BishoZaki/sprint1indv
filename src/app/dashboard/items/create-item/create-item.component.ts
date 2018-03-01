import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../items.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
  }

  onCreate(itemName, itemPrice){
    this.itemsService.onItemAdded(itemName.value, itemPrice.value);
  }

}
