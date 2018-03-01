import {Item} from "./items-list/item/item.model";
import {UserService} from "../../user.service";
import {Http, Response, Headers} from "@angular/http";
import {Injectable} from "@angular/core";


@Injectable()

export class ItemsService{
    itemId: number;
    items: Item[] = [];
    constructor(private userService: UserService, private http: Http){}

    onEdit(id: number){
        this.itemId = id;
    }
    onItemEdited(itemName: String, itemPrice: number){
        for(var i = 0; i < this.items.length; i++){
            if(this.items[i]._id === this.itemId){
                this.items[i].name = itemName;
                this.items[i].price = itemPrice;
            }
        }
    }
    getItems(){
        const headers = new Headers({'x-auth':this.userService.user.token});
        this.http.get('http://localhost:3000/api/product/getProducts',{headers:headers})
            .subscribe((res:Response)=>{
                this.items = res.json().data;
            },(err:any)=>{
                this.items = [];
            });
    }
    onItemAdded(name:string,price:number){
        var item = new Item(null,name,price,new Date(),new Date(),this.userService.user.username);
        const headers = new Headers({'x-auth':this.userService.user.token});

        this.http.post('http://localhost:3000/api/product/createProduct',item,{headers:headers})
            .subscribe((res: Response)=>{
                this.getItems();
            },(err)=>{
                console.log(err);
            });

    }
    onDelete(item:Item){

        const headers = new Headers({'x-auth':this.userService.user.token});
        this.http.delete(`http://localhost:3000/api/product/deleteProduct/${item._id}`,{headers:headers})
            .subscribe((res: Response)=>{
                this.getItems();
            });

    }

    /*editItem(id:number,updatedItem:Item){
        var index = this.findIndexById(updatedItem);

        const headers = new Headers({'x-auth':this.userService.user.token});

        this.http.patch(`http://localhost:3000/api/product/updateProduct/${updatedItem._id}`,updatedItem,{headers:headers})
            .subscribe((res: Response)=>{
                this.getItems();
            });
    }*/
}