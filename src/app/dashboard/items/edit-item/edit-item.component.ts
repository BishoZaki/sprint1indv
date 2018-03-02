import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../items.service";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
  }
  onEdit(editName, editPrice){
    this.itemsService.onItemEdited(editName.value,editPrice.value);
  }
}
