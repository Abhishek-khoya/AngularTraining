var Item = /** @class */ (function () {
    function Item(itemId, itemName, itemPrice, category) {
        var _this = this;
        this.itemDetails = function () {
            console.log(_this.itemId + "," + _this.itemName + "," + _this.itemPrice + "," + _this.category);
        };
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.category = category;
    }
    return Item;
}());
var item = new Item(101, "Keyboard", 1000, "IT");
item.itemDetails();
