import {Item} from "./items-list/item/item.model";


export class ItemsService{
    private _items: Item[] = [
        new Item('pepsi', 12, 25/2/2018,2/26/2018, 'Bisho')
    ];
    get items(): Item[] {
        return this._items.slice();
    }
}