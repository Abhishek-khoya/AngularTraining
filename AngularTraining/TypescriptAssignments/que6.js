var Item = /** @class */ (function () {
    function Item() {
        var _this = this;
        this.setItemValues = function () {
            _this.itemCategory = "IT";
            _this.itemId = 101;
            _this.itemName = "Laptop";
        };
        this.checkVowel = function (someString) {
            someString.toLowerCase();
            var startingAlphabet = someString.charAt(0);
            var vowelCount = 0;
            var consonentCount = 0;
            if (startingAlphabet == 'a' || startingAlphabet == 'e' || startingAlphabet == 'i' || startingAlphabet == 'o' || startingAlphabet == 'u') {
                console.log("First Letter is Vowel");
                for (var i = 0; i < someString.length; i++) {
                    if (someString[i] != 'a' && someString[i] != 'e' && someString[i] != 'i' && someString[i] != 'o' && someString[i] != 'u') {
                        consonentCount++;
                    }
                }
                console.log("Number of Consonants are :" + consonentCount);
            }
            else {
                console.log("First Letter is Consonant");
                for (var i = 0; i < someString.length; i++) {
                    if (someString[i] == 'a' || someString[i] == 'e' || someString[i] == 'i' || someString[i] == 'o' || someString[i] == 'u') {
                        vowelCount++;
                    }
                }
                console.log("Number of Vowels are :" + vowelCount);
            }
        };
    }
    return Item;
}());
var item = new Item();
item.checkVowel("abhishek");
