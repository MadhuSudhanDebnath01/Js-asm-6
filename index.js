console.log("Working");

// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent = {
    name : "Mango",
    type : "Fruit",
    getData : function(){
        console.log(`item is ${this.name} and type is ${this.type}`);
    }
}
parent.getData();

let child = Object.create(parent);
child.name = "Orange";

child.getData();

//Write code to explain prototype chaining

let obj1 ={
    prop1 : "val of obj1 "
}
let obj2 = obj1.create(obj1);
obj2.prop2 = "value of obj2";

let obj3 = obj2.create(obj2);
obj3.prop3 ="value of obj3";
obj3.met = function(){
    console.log(this.prop1 + this.prop2 + this.prop3);
}
obj3.met();
// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let arr = [4,5,8,9];
let arrObj = {
    getName : function(){
        let result = array.reduce((acc,cur)=> acc + cur,0);
        console.log(result);
    }
}
arrObj.getName();