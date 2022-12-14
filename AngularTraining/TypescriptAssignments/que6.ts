class Item
{  
    itemId:number;
    itemName:string;
    itemCategory:string;
    setItemValues=()=>
    {
        this.itemCategory="IT";
        this.itemId=101;
        this.itemName="Laptop";
    }
    checkVowel=(someString:string)=>
    {
        someString.toLowerCase();
        var startingAlphabet=someString.charAt(0);
        var vowelCount:number=0;
        var consonentCount:number=0;
        if(startingAlphabet == 'a' || startingAlphabet == 'e'  || startingAlphabet == 'i'|| startingAlphabet == 'o' || startingAlphabet == 'u')
        {
            console.log("First Letter is Vowel");
            for(let i=0; i<someString.length ; i++)
            {
                if(someString[i] != 'a' && someString[i] != 'e'  && someString[i] != 'i'&& someString[i] != 'o' && someString[i] != 'u')
                {
                    consonentCount++;

                }
            }
            console.log("Number of Consonants are :"+consonentCount);    
        }
        else  
        {
            console.log("First Letter is Consonant");
            for(let i=0;i<someString.length;i++)
            {
                if(someString[i] == 'a' || someString[i] == 'e'  ||someString[i] == 'i' || someString[i] == 'o' || someString[i] == 'u')
                {
                    vowelCount++;
                }
            }
            console.log("Number of Vowels are :"+vowelCount);
        }     
    }
}
let item=new Item();
item.checkVowel("abhishek");