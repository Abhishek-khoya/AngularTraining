class Item
{
    itemId:number;
    itemName:string;
    itemPrice:number;
    category:string;
    constructor(itemId:number,itemName:string,itemPrice:number,category:string)
    {
        this.itemId=itemId;
        this.itemName=itemName;
        this.itemPrice=itemPrice;
        this.category=category;
    }
    itemDetails=()=>
    {
        console.log(this.itemId+","+this.itemName+","+this.itemPrice+","+this.category);
    }
}
let item=new Item(101,"Keyboard",1000,"IT");
item.itemDetails();