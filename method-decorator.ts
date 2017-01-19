function myMethodDecorator(target, methodName, descriptor) {
	console.log(target);
	console.log(methodName);
	console.log(descriptor);
	descriptor.value = function() {
		console.log("Hello World!! I am from Method Decorator");
	}
}


class myMethodDecoratorExample {
	@myMethodDecorator
	sayHello() {

	}
}

let obj = new myMethodDecoratorExample();
obj.sayHello();