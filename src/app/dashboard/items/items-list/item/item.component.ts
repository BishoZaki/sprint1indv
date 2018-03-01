import {Component, Input, OnInit} from '@angular/core';
import {Item} from "./item.model";
import {ItemsService} from "../../items.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input () item:Item;

  constructor(public itemService: ItemsService) { }

  ngOnInit() {
  }
  onDelete(){
    this.itemService.onDelete(this.item);
  }
  onEdit(id: number){
    this.itemService.onEdit(id);
  }

}
