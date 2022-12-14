interface Shape
{
    printname();
}
class Cone implements Shape
{
    pi:number;
    radius:number;
    length:number;
    constructor(pi:number,radius:number,length:number)
    {
        this.pi=pi;
        this.radius=radius;
        this.length=length;
    }
    calculateArea=()=>
    {
        var area:number;
        area=this.pi*this.radius*this.length;
        console.log("Area of cone is : "+area);
    }
    printname=()=>{
        console.log("Cone");
    }
}
class Sphere implements Shape
{
    pi:number;
    radius:number;
    constructor(pi:number,radius:number)
    {
        this.pi=pi;
        this.radius=radius
    }
    calculateArea=()=>{
        var area:number;
        area=4*this.pi*this.radius*this.radius;
        console.log("Area of sphere is : "+area)
    }
    printname=()=>{
        console.log("Sphere");
    }
}
class Rectangle implements Shape
{
    length:number;
    breadth:number;
    constructor(length:number,breadth:number)
    {
        this.length=length;
        this.breadth=breadth;
    }
    calculateArea=()=>{
        var area:number;
        area=this.length*this.breadth;
        console.log("Area of rectangle is : "+area);
    }
    printname=()=>{
        console.log("Rectangle");
    }
}
let sphere=new Sphere(3.14,5);
sphere.printname();
sphere.calculateArea();
let rectangle=new Rectangle(5,10);
rectangle.printname();
rectangle.calculateArea();
let cone=new Cone(3.14,5,10);
cone.printname();
cone.calculateArea();