var Cone = /** @class */ (function () {
    function Cone(pi, radius, length) {
        var _this = this;
        this.calculateArea = function () {
            var area;
            area = _this.pi * _this.radius * _this.length;
            console.log("Area of cone is : " + area);
        };
        this.printname = function () {
            console.log("Cone");
        };
        this.pi = pi;
        this.radius = radius;
        this.length = length;
    }
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(pi, radius) {
        var _this = this;
        this.calculateArea = function () {
            var area;
            area = 4 * _this.pi * _this.radius * _this.radius;
            console.log("Area of sphere is : " + area);
        };
        this.printname = function () {
            console.log("Sphere");
        };
        this.pi = pi;
        this.radius = radius;
    }
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        var _this = this;
        this.calculateArea = function () {
            var area;
            area = _this.length * _this.breadth;
            console.log("Area of rectangle is : " + area);
        };
        this.printname = function () {
            console.log("Rectangle");
        };
        this.length = length;
        this.breadth = breadth;
    }
    return Rectangle;
}());
var sphere = new Sphere(3.14, 5);
sphere.printname();
sphere.calculateArea();
var rectangle = new Rectangle(5, 10);
rectangle.printname();
rectangle.calculateArea();
var cone = new Cone(3.14, 5, 10);
cone.printname();
cone.calculateArea();
