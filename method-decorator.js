var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myMethodDecorator(target, methodName, descriptor) {
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
    descriptor.value = function () {
        console.log("Hello World!! I am from Method Decorator");
    };
}
var myMethodDecoratorExample = (function () {
    function myMethodDecoratorExample() {
    }
    myMethodDecoratorExample.prototype.sayHello = function () {
    };
    return myMethodDecoratorExample;
}());
__decorate([
    myMethodDecorator
], myMethodDecoratorExample.prototype, "sayHello", null);
var obj = new myMethodDecoratorExample();
obj.sayHello();
