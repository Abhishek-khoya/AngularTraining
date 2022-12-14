let nNumberOfArgs = (...args: string[]) => {
   var sortedArray= args.sort((a,b)=>a.length-b.length);
    console.log(sortedArray);
};
nNumberOfArgs("good","bad","lal","keel","jai","ujjain");