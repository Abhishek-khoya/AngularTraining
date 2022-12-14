var palindrome=(str:string)=> 
{  
    const len=str.length;  
    for (let i=0;i<len/2;i++) 
    {  
        if (str[i]!==str[len-1-i]) 
        {  
            console.log("not a palindrome");  
        }  
    }  
    console.log("palindrome");  
}  
palindrome('malayalam');