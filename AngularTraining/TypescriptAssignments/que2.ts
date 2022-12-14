let nNumberOfArgs=(...args:number[]) => 
{
    var a:number;
    for (var i=0; i<args.length; i++)
    {
        for (var j=i+1; j<args.length; j++)
        {
           if (args[i]>args[j])
           {
              a=args[i];
              args[i]=args[j];
              args[j]=a;
           }
        }
    }
    console.log(args);
 };
 nNumberOfArgs(90,43,21,54,6,34,67);