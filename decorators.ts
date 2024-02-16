//class decorator
function classDecorator(constructor: Function):void{
    console.log(`An instance of ${constructor.name} class is created.`);
}

//property decorator
function propertyDecorator(target: any, propertyKey: string):void{
    console.log("Property decorator is called.");
    console.log("target: ",target);
    console.log("Property key: ", propertyKey);
    console.log(`Property ${propertyKey} has been defined`);
}

//method decorator
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor):void{
    console.log("Method decorator is called.");
    console.log("target: ", target);
    console.log("Property Key: ", propertyKey);
    console.log("Descriptor: ", descriptor);
}


//accessor decorator
function accessorDecorator(target: any, key: string, descriptor: PropertyDescriptor): void {
    descriptor.enumerable = false
    console.log("method name is : ", key)
    console.log("descriptor : ", descriptor)
}


//parameter decorator
function parameterDecorator(target: any, methodName: string, parameterIndex: number) {
    console.log(`Parameter at index ${parameterIndex} in method ${methodName} has been decorated`);
}




@classDecorator
class Person {
    @propertyDecorator
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @accessorDecorator
    get getName(): string {
        return this.name;
    }

    @methodDecorator
    sayHello(@parameterDecorator greeting: string) {
        console.log(`${greeting}, ${this.name}`);
    }
}

const person = new Person("Ankan");
person.sayHello("Hello");
console.log(person.getName);
