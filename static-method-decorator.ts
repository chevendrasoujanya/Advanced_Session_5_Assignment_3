function myStaticMethodDecorator(target, methodName, descriptor) {
	console.log(target);
	console.log(methodName);
	console.log(descriptor);

	descriptor.value = function() {
		console.log("I am Static Method Decorator");
	}
}

class staticMethodDecoratorExample {
	@myStaticMethodDecorator
	static helloWorld() {

	}
}

staticMethodDecoratorExample.helloWorld(); // static methods are called with the class name but not with the instance of the class