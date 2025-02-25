const creation1=[1,2,3] //[1,2,3]
console.log(creation1)

//With new keyword (Constructor)
const creation2= new Array() // Empty Array- []
console.log(creation2)
const creation3= new Array("Hi","Hello") //["Hi","Hello"]
console.log(creation3)

//Without new keyword
const creation4= Array() //Empty Array- []
console.log(creation4)
const creation5=Array(1,2,3,4) //[1,2,3,4]
console.log(creation5)

//Size array
const creation6= Array(3) //[],  it creates an array with a length of 4, but the elements are not initialized (hence they appear as "empty" slots). It is still expandable
console.log(creation6) //(3) [empty × 3]
creation6.push("Hi")
console.log(creation6) //(4) [empty × 3, 'Hi']
creation6[20]="Hello"
console.log(creation6)

/**
 * When you assign a value to an index in a JavaScript array that is beyond its current length (`e.g., creation6[20] = "Hello"`), JavaScript will automatically expand the array to accommodate the new index. Any gaps between the existing elements and the new index will be filled with empty slots.
 * JavaScript arrays are dynamically sized, which means they can grow or shrink as needed. When you assign a value to an index that is greater than the current length of the array, the array will automatically expand to that size.
 * Why this behavior?
 * This is a performance optimization in JavaScript. Instead of pre-allocating memory for all indices up to 20 when you assign creation6[20] = "Hello", JavaScript only creates the necessary storage for the existing elements and keeps gaps as uninitialized.
 */

/* Similarly the above code will work with `new` keyword */

// Using Array.of
const creation7=Array.of(1,2,3,4,5)
console.log(creation7) //[1,2,3,4,5]

//Using Array.from
/**
 * Array.from() is a method in JavaScript that creates a new array from an array-like or iterable object. 
 * It’s useful when you need to work with objects that act like arrays but don’t have array methods.
 * */
const creation8 = Array.from("Hello")
console.log(creation8) //(5) ['H', 'e', 'l', 'l', 'o']
const creation9= Array.from(document.querySelectorAll("li")) //NodeList (array-like object)
console.log(creation9)
const creation10=Array.from(document.getElementsByTagName("li")) //HTMLCollection (array-like object)
console.log(creation10)

const objectVariable={
    name: "Rahul",
    BMI:{
        height: "172cm",
        weight: "68kgs"
    }
}
const creation11=[1,"Hi",objectVariable,creation10]
console.log(creation11)

const creation12=[[1,2,3],[3,4,5],[6,7,8]]
for(const i of creation12){
    let singleLine="";
    for(const j of i){
        singleLine+=j+" "
    }
    console.log(singleLine)
}

//Removing Elements
let arr = ['a', 'b', 'c', 'd', 'e'];
let removed = arr.splice(1, 2);  // Start at index 1, remove 2 elements
console.log(arr);     // ['a', 'd', 'e']
console.log(removed); // ['b', 'c']

//Adding Elements
arr = ['a', 'b', 'c'];
arr.splice(1, 0, 'x', 'y');  // Start at index 1, remove 0, add 'x', 'y'
console.log(arr);  // ['a', 'x', 'y', 'b', 'c']

//Replacing Elements
arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2, 'x', 'y');  // Start at index 1, remove 2, add 'x', 'y'
console.log(arr);  // ['a', 'x', 'y', 'd']

//Negative Indexes
/** When using negative indexes with splice(), the start index is counted from the end of the array. A negative index means "start this many positions from the end." */
arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(-2, 1);  // Start from 2nd-to-last element, remove 1 element
console.log(arr);  // ['a', 'b', 'c', 'e']
arr = ['a', 'b', 'c', 'd'];
arr.splice(-1, 0, 'x');  // Start from last element, remove 0, add 'x'
console.log(arr);  // ['a', 'b', 'c', 'x', 'd']

//Slice
let arr1 = ['a', 'b', 'c', 'd', 'e'];
let slicedArr = arr1.slice();  // Creates a shallow copy of the entire array
console.log(slicedArr);  // ['b', 'c']
console.log(arr1);        // ['a', 'b', 'c', 'd', 'e']  (Original array is unchanged)
arr1[0]="ABCDE"
console.log(slicedArr)
console.log(arr1)

console.log(arr1.slice(1)) // ['b', 'c', 'd', 'e']
console.log(arr1.slice(1, 3)) // ['b', 'c']
/** You can use negative indexes to start counting from the end of the array.
-1 refers to the last element, -2 refers to the second-to-last, and so on */
console.log(arr1.slice(-3, -1));  // ['c', 'd']

//Merge Arrays
const creation13=[1,2,3]
console.log(...creation13) // 1 2 3
let creation14=[4,5,6]
creation14=[...creation13,...creation14] //[1,2,3,4,5,6]
console.log(creation14)
creation14=creation14.concat(creation14)
console.log(creation14) //[1,2,3,4,5,6,1,2,3,4,5,6]
creation14.push(7,8,9,10)
console.log(creation14) //[1,2,3,4,5,6,1,2,3,4,5,6,7,8,9,10]

//index of element
const creation15=[100,200,300,400,500,600,700,100,400]
console.log(creation15.indexOf(500)) //4
console.log(creation15.lastIndexOf(700)) //6 (Searches from the end of the array and return indexes based non 0th position)
console.log(creation15.indexOf(400)) //3 (finds the first occurence from the starting point of the array)
console.log(creation15.lastIndexOf(100)) //6 (finds the first occurence from the end point of the array)

/** 
 * index of element does not work for object type element it only work for primitive elements
 * Even though an object with the same properties exists in the array, indexOf returns -1. This is because the comparison is done by reference, not by value. The object passed to indexOf is a new object, so it is not the same object as the one in the array
 * It uses strict equality (===) for comparison.
 */
const creation16=[{name:"ABC"},{name:"BCS"}] //Array of object
console.log(creation16.indexOf({name:"ABC"})) //-1 (not found)


function checkElement8(i){
    return i==8;
}

let creation17 = [5, 12, 8, 130, 44];
let found = creation17.find(checkElement8);
console.log(found);  // 8


//Re-writing above code to below using arrow function
console.log(creation17.find((i)=>i==12)); // 12
console.log(creation17.find((i)=>i==20)); // undefined (not found)
console.log(creation17.find(i=>i%2==0)); //12, return the first even number 

let creation18=[{name:"ABC",age:19},{name:"ABC",age:20}]
console.log(creation18.find(i=>i.name=="ABC" && i.age==20)); //{name: 'ABC', age: 20}

//find() with 2 Parameters
console.log(creation17.find((element,i)=>{
    console.log("Element "+element+", index "+i);
}))
/**
 * Element 5, index 0
Element 12, index 1
Element 8, index 2
Element 130, index 3
Element 44, index 4
 */

let testResults = [true, true, false, true];
let firstFail = testResults.find((result, index) => {
  if (!result) {
    console.log(`First failure found at index: ${index}`);
    return true;
  }
});


//find() with 3 parameters
console.log(creation17.find((element,i,arr)=>{
    console.log(`Element: ${element}, Index: ${i}, Full Array: ${arr}`);
}));

/**
 * Element: 5, Index: 0, Full Array: 5,12,8,130,44
 Element: 12, Index: 1, Full Array: 5,12,8,130,44
 Element: 8, Index: 2, Full Array: 5,12,8,130,44
 Element: 130, Index: 3, Full Array: 5,12,8,130,44
 Element: 44, Index: 4, Full Array: 5,12,8,130,44
 */

//includes
creation18=[1,2,3,4,5,6,1,2]
console.log(creation18.includes(4)) //true
console.log(creation18.includes(10)) //false
//based on starting index number 5 & 7
creation18.includes(1,5) //true
creation18.includes(1,7) //false
let obj={name:"ABC",age:21}
creation18.push(obj)
console.log(creation18.includes({name:"ABC",age:21})) //false

function squareNumbers(element){
    console.log(element*element);
}

let creation19=[1,2,3,4,5];
creation19.forEach(squareNumbers);
creation19.forEach(i=>console.log(i*i));
creation19.forEach((currentElement,idx,AnyArr)=>{
    console.log("Current Element: "+currentElement+", Index: "+idx+", Array: "+AnyArr)})

const creation20=[1,2,3,4,5]
const newCreation20=creation20.map(i=>i*i);
console.log(newCreation20) //[ 1, 4, 9, 16, 25 ]

let creation21=[1000,320,300,200]
console.log(creation21.sort()) //[ 1000, 200, 300, 320 ]

//Sorting using Compare Function (Sorting in Ascending Order)
console.log(creation21.sort((a,b)=>{
  if(a>b){
    return 1 //return positive value, the second element is placed before the first element
  }else if(a===b){
    return 0 // No change in position
  }
  return -1 //return negative value, the second element is placed after the first element
}));

//Sorting using Compare Function (Sorting in descending Order)
console.log(creation21.sort((a,b)=>{
  if(a>b){
    return -1 //return positive value, the first element is placed before the second element
  }else if(a===b){
    return 0 // No change in position
  }
  return 1 //return negative value, the first element is placed after the second element
}));

//Filtering
let filtered = [24, 33, 16, 40].filter((i)=>i>18);
console.log(filtered);

//reduce
let reduceArr=[1,2,3,4]
const reduceSum=reduceArr.reduce((acc,i)=>acc+i)
console.log(reduceSum) //10
console.log(reduceArr.reduce((acc,i)=>acc+i,1000)) //1010
console.log(reduceArr.reduce((maxi,i)=>(i>maxi?i:maxi),-Infinity)) //4 (Maximum Element)

const grades = [
  { grade: 90, weight: 0.5 },
  { grade: 80, weight: 0.3 },
  { grade: 85, weight: 0.2 },
];
const weightedAvg = grades.reduce((acc, curr) => acc + curr.grade * curr.weight, 0);
console.log(weightedAvg); // 86

const words = ['Reduce', 'is', 'powerful'];
const sentence = words.reduce((acc, curr) => acc + ' ' + curr);
console.log(sentence); // "Reduce is powerful"

//Split and Join
let strWord = "Hello, world!";
let stringSplitOfArrays = strWord.split(", ");
console.log(stringSplitOfArrays); // Output: ["Hello", "world!"]
console.log(strWord.split("")); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']
console.log(strWord.split()); // Output: ['Hello, world!']

stringSplitOfArrays = ["Hello", "world!"];
strWord = stringSplitOfArrays.join(" ");
console.log(strWord); // Output: "Hello world!"
console.log(stringSplitOfArrays.join()) //Output: Hello,world!

//Spread Operator
let SpreadArr=[1,2,3]
console.log(...SpreadArr) // 1 2 3

let SpreadArr1 = [4,5,6,7];
let SpreadArr2 = [...SpreadArr,...SpreadArr1]; // Copying
console.log(SpreadArr2); // Output: [1,2,3,4,5,6,7]

console.log(Math.min(1,2,3,4)) //1
console.log(Math.max(1,2,3,4)) //4
console.log(Math.min(...[1,2,3,4])) //1
console.log(Math.max(...[1,2,3,4])) //4

let ObjectSpreadArr1=[{name:"ABC",age:19},{name:"XYZ",age:20}]
let ObjectSpreadArr2=[...ObjectSpreadArr1]
console.log(ObjectSpreadArr2)

ObjectSpreadArr1[0].age=91
console.log(ObjectSpreadArr1)
console.log(ObjectSpreadArr2)

let ObjectSpreadArr3=[...ObjectSpreadArr1.map(i=>{

    return {name:i.name,
      age:i.age
    }

})]

ObjectSpreadArr1[0].age=991
console.log(ObjectSpreadArr1)
console.log(ObjectSpreadArr3)

//Array Destructing
let arrdes = [10, 20, 30];
let [x, y, z] = arrdes;

console.log(x); // Output: 10
console.log(y); // Output: 20
console.log(z); // Output: 30

let [x1,,z1]=arrdes
console.log(x1)//10
console.log(z1)//30

let [x2,y2=100]=arrdes
console.log(x2)//10
console.log(y2)//100

let [x3,...restElements]=arrdes
console.log(x3)//10
console.log(restElements)//[20,30]

let arrb = [10, [20, 30]];
let [a, [b, c]] = arrb;

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 30


const h1ElementNode=document.getElementById("header1id")
const divElementNode=document.getElementById("myDiv")

console.log(h1ElementNode.nodeName)
console.log(divElementNode.nodeName)

console.log(h1ElementNode.nodeType)
console.log(divElementNode.nodeType)

const childElementsOfDiv=divElementNode.childNodes

childElementsOfDiv.forEach(i=>{
    console.log(i.nodeName+" "+i.nodeType+" "+i.nodeValue)
}
)

let divGrandParentvar = document.getElementById('grandParent');
let divParentvar = document.getElementById('parent');
let Pchildvar = document.getElementById('child');
let aDescendantvar = document.getElementById('descendant');

// Parent-Child relationship
console.log(divParentvar.parentElement); // Outputs: <div id="grandParent">
console.log(Pchildvar.parentElement);  // Outputs: <div id="parent">

// Descendant and Ancestor
console.log(aDescendantvar.closest('div')); // Outputs: <div id="parent"> (first matching ancestor)
console.log(divGrandParentvar.contains(aDescendantvar)); // Outputs: true (because descendant is inside grandParent)

// Direct child access
console.log(divParentvar.children); // Outputs: [<p id="child">This is a paragraph...</p>]

// Navigating ancestors and descendants
console.log(Pchildvar.parentElement); // Outputs: <div id="parent"> (child's direct parent)
console.log(divParentvar.children[0]);  // Outputs: <p id="child"> (parent's direct child)

// Check if the parent is an ancestor of the link
console.log(divParentvar.contains(aDescendantvar)); // Outputs: true


//Traversing in DOM

//Child Traversing
let parentDiv = document.getElementById("parentDiv");
console.log(parentDiv)
console.log(parentDiv.childNodes);   // NodeList(9) [text, p#first-child, text, comment, text, span#second-child, text, ul, text]
console.log(parentDiv.childNodes.length);   // 9
console.log(parentDiv.childNodes[3]);   // <!-- This is my Comment --> (Accessing 4th element in the list , it is 0 based index)
console.log(parentDiv.children);     // HTMLCollection(3) [p#first-child, span#second-child, ul]
console.log(parentDiv.children.length);     // 3
console.log(parentDiv.children[2]);     // <ul>...</ul> (Accessing 3th element in the list , it is 0 based index)
console.log(parentDiv.children[2].children[2]);     
console.log(parentDiv.children[2].children[2].textContent);     //              item3
console.log(parentDiv.firstChild);        // #text
console.log(parentDiv.firstElementChild); // <p id="first-child">
console.log(parentDiv.lastChild);         // #text
console.log(parentDiv.lastElementChild);  // <ul>...</ul>

//Parent Traversing
let childList=document.getElementsByTagName("li")[0]
console.log(childList)
console.log(childList.parentElement)
let childList1=document.getElementById("second-child")
console.log(childList1.parentNode)

//Ancestors 
let currentNode = document.getElementById('current');
console.log(currentNode.closest('div')); // <div class="middle">
console.log(currentNode.closest('#ancestor')); // <div id="ancestor">

//Siblings
let secondChild = document.getElementById('second-child');

//Sibling below second child
console.log(secondChild.nextSibling);         // #text
console.log(secondChild.nextElementSibling);  // <ul>..<ul>

//Sibling above second child
console.log(secondChild.previousSibling);         // #text
console.log(secondChild.previousElementSibling);  // <p id="first-child">

console.log(document.body.firstElementChild)

// InnerHTML
let divContent=document.querySelector("#parentDiv")
divContent.innerHTML+="<h2> Hello </h2>"

// Insert HTML inside the div, before its first child
divContent.insertAdjacentHTML('afterbegin', '<p>New content at the beginning</p>');
    
// Insert HTML inside the div, after its last child
divContent.insertAdjacentHTML('beforeend', '<p>New content at the end</p>');

// Insert HTML before the div itself
divContent.insertAdjacentHTML('beforebegin', '<h3>Before the div</h3>');

// Insert HTML after the div itself
divContent.insertAdjacentHTML('afterend', '<h3>After the div</h3>');

//createElement
let newPara=document.querySelector("p") //getElementById()
newPara.textContent="This is a new para from createElement()"
divContent.appendChild(newPara)
newPara.textContent="This is a new para added before <div> by createElement()"
divContent.insertBefore(document.getElementById("ancestor"), newPara)

let cloningNode=document.getElementById("parentDiv")
let deepClone=cloningNode.cloneNode(true) // Deep Cloning , copies all the descendent or child nodes
document.body.appendChild(deepClone)

console.log(document.getElementById("parentDiv").childNodes) //NodeList(11) [text, p#first-child, text, comment, text, span#second-child, text, ul, text, div#ancestor, text]
console.log(document.getElementById("parentDiv").getElementsByTagName("p")) //HTMLCollection(2) [p#first-child, p#current]



//Static NodeList
let liveHTMLListCollection=document.getElementsByTagName("li")
console.log(liveHTMLListCollection) // HTMLCollection(3) [li.list-item, li.list-item, li.list-item]
let staticNodeList=document.querySelectorAll("li") // NodeList(3) [li.list-item, li.list-item, li.list-item]
console.log(staticNodeList)
let newLiElement=document.createElement("li")
newLiElement.textContent="Item 4"
document.querySelector("ul").appendChild(newLiElement)
console.log(liveHTMLListCollection) //HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li]
console.log(staticNodeList) // NodeList(3) [li.list-item, li.list-item, li.list-item]

let liveNodeList=document.getElementsByName("lists")
console.log(liveNodeList) //NodeList(3) [li.list-item, li.list-item, li.list-item]
let newLiElement1=document.createElement("li")
newLiElement1.textContent="Item 5"
newLiElement1.setAttribute("name","lists")
newLiElement1.className="list-item"
document.querySelector("ul").appendChild(newLiElement1)
console.log(liveNodeList) //NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]


//Remove Elements
// const getULElement=document.querySelector("ul")
// getULElement.remove()

const getULElement=document.querySelector("ul")
getULElement.parentElement.removeChild(getULElement)

//Map
// Creating a map
let myMap = new Map();

// Or initializing with key-value pairs
let initializedMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  [{ city: 'NY' }, 'Object as key']
]);
console.log(initializedMap)

myMap.set('name', 'ABC');
myMap.set('age', 24);
myMap.set({ city: 'NY' }, 'New York');
myMap.set("New Key","New Value")

console.log(myMap);// Output: Map { 'name' => 'ABC', 'age' => 25, { city: 'NY' } => 'New York','New Key' => 'New Value' }

//Get value based on key name
console.log(myMap.get('name'));  // Output: ABC
console.log(myMap.get('age'));   // Output: 25
//If the key does not exist, get() will return undefined.
console.log(myMap.get('unknown'));  // Output: undefined

//Checking for Key Existence
console.log(myMap.has('name'));  // Output: true
console.log(myMap.has('gender'));  // Output: false

//Deleting Key
myMap.delete('age');
console.log(myMap);  // Output: Map { 'name' => 'ABC', { city: 'NY' } => 'New York', 'New Key' => 'New Value'}

//Size of Collection
console.log(myMap.size);  // Output: 3

//Clear Collection
myMap.clear();
console.log(myMap);  // Output: Map {}

myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['country', 'USA']
]);
//Iterating over Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Output:
// name: Alice
// age: 25
// country: USA

for(const [key,value] of myMap.entries()){
  console.log(key,value)
}

//Output:
// name Alice
// age 25
// country USA

//Get Keys only
for(const key of myMap.keys()){
  console.log(key)
}

//Output:
// name
// age
// country

//Get Values only
for(const values of myMap.values()){
  console.log(values)
}

//Output:
// Alice
// 25
// USA


//Set
let mySet = new Set([1, 2, 3, 3, 4]);  // Duplicate '3' will be removed
console.log(mySet);  // Output: Set(4) {1, 2, 3, 4}
mySet.add(5) //Adding Element
mySet.add(6) //Adding Element
mySet.add(7) //Adding Element
mySet.add(1) //Adding Element
console.log(mySet) //Set(7) {1, 2, 3, 4, 5, 6, 7}


console.log(mySet.has(2));  // Output: true
console.log(mySet.has(50));  // Output: false

mySet.delete(2); //Deleting Element
console.log(mySet);  // Output: Set(6) {1, 3, 4, 5, 6, 7}

mySet.clear(); //Clearing Elements
console.log(mySet);  // Output: Set { }

mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
console.log(mySet.size);  // Output: 4 (Size of Set collection)

// Using forEach method
mySet.forEach(item => {
  console.log(item);  // Output: 1, 2, 3, 4(each on a new line)
});

console.log(mySet.values()) //SetIterator {1, 2, 3, 4}

for(const i of mySet.entries()){
  console.log(i)
}

obj = { name: 'Alice' };
let weakMap = new WeakMap();

weakMap.set(obj, 'Employee');

console.log(weakMap.get(obj));  // Output: Employee

obj = null;  // Now there are no references to the object

// The object and its corresponding value will be garbage collected automatically

let obj1 = { id: 1 };
let obj2 = { id: 2 };
let weakSet = new WeakSet();


weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));  // Output: true

obj1 = null;  // The object is no longer referenced

// obj1 will be automatically removed from the WeakSet by the garbage collector


// Car object
let car = {
  color: "red",
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  startEngine: function() {
    console.log("Engine started");
  },
  accelerate: function() {
    console.log("Car accelerating");
  },
  brake: function() {
    console.log("Car braking");
  }
};


console.log(car.color) //red (Accessing property)
car.brand="TATA" // Adding a new Property
console.log(car)

car.year=2024 //updating a property
console.log(car)

car.startEngine=undefined //Deleting a property using undefined (null won't work)
delete car.model //Deleting a property
console.log(car)

let StringKeys={
  "First name": "ABC",
  "Last name": "XYZ"
}
console.log(StringKeys["First name"]) //ABC

let NumberKyes={
  1.5: "Hi",
  0: "Hello"
}
console.log(NumberKyes[0]) //Hello

let OrderingOfKeys={
  2: "Hi",
  1: "Hello",
  "First": 1,
  greet: function(){
    console.log("Greetings!")
  },
  "a": "ABC"
}
console.log(OrderingOfKeys)


let first_name="A Person First Name"
let PersonObject={
  [first_name]: "ABC",
  lastName: "XYZ"
}
console.log(PersonObject)
console.log(PersonObject[first_name]) //ABC

let chainingObjects={
  name:{
    family_name:{
      first_name: "ABC",
      last_name: "XYZ"
    }
  }
}

//Chaining methods
console.log(chainingObjects.name.family_name.first_name) //ABC

let NestedSpreadObject={
  name: "ABC",
  hobbies:["Cycling","Dancing","Singing"],
  age:24
}

//Copying Objects
let NestedSpreadObject1=NestedSpreadObject

// Changing the age value in first object
NestedSpreadObject.age="42"

console.log(NestedSpreadObject1.age) //42 (Since sharing the same memory references for the same object)

let NestedSpreadObject2={...NestedSpreadObject}

// Changing the age value in first object
NestedSpreadObject.age="22"

console.log(NestedSpreadObject2.age) //42 (Since a new object is created and copied the existing object details with new memory references)
NestedSpreadObject.hobbies.push("Acting")
console.log(NestedSpreadObject2.hobbies) //[ 'Cycling', 'Dancing', 'Singing', 'Acting' ]

let NestedSpreadObject3={...NestedSpreadObject,hobbies:[...NestedSpreadObject.hobbies]}
NestedSpreadObject.hobbies.push("Playing")
console.log(NestedSpreadObject.hobbies) //[ 'Cycling', 'Dancing', 'Singing', 'Acting', 'Playing' ]
console.log(NestedSpreadObject3.hobbies) //[ 'Cycling', 'Dancing', 'Singing', 'Acting' ]

//Object Destructing
let objDes={
  name: "ABC",
  age: 20,
  info:{
    fname: "ABC",
    lname: "XYZ"
  }
}

const { name, age , ...remainingObjectDes} = objDes;
console.log(name); //ABC
console.log(age); //20
console.log(remainingObjectDes) // info:  {fname: 'ABC', lname: 'XYZ'}

const { name: objName, age: objAge} = objDes;
console.log(objName); //ABC
console.log(objAge); //20

const usersList = [
  { 
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  { 
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  { 
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let { name, age } of usersList) {
  console.log(`${name} is ${age} years old!`);
}

/**
 * Output:
 * Alex is 43 years old!
 * Bob is 53 years old!
 * Carl is 26 years old!
 */

//Checking Key in Object

let chkObj={
  objectKey1: 1,
  objectKey2: 2
}

if('objectKey1' in chkObj){
  console.log("Property Exists") //Property Exists
}

if(chkObj.objectKey3 == undefined){
  console.log("Property does not Exists") //Property does not Exists
}

// "use strict";

// function show(){
//   console.log(this)
// }

// show(); //undefined

const person = {
  name: 'Alice',
  greet() {
      console.log('Hello, ' + this.name);
  }
};
person.greet(); // Hello, Alice

const {greet} = person
let {greet:newGreet} = person
newGreet= newGreet.bind(person)
newGreet(); // Hello, Alice
greet(); // Hello, 

greet.call(person); // Hello, Alice
greet.apply(person); //Hello, Alice

const ButtonHandler=document.getElementById("myButton");

/**
 * Trigger function when clicked on Button
 */
ButtonHandler.addEventListener("click",()=>{
  console.log(this)
})

const outerObject = {
  name: "outer",
  logThis() {
    document.getElementById("myButton").addEventListener("click", () => {
      console.log(this);  // Refers to 'outerObject', not the button element
    });
  }
};

outerObject.logThis();

//getters and setters
const personInfo = {
  firstName: "John",
  lastName: "Doe",
  
  // Getter to retrieve full name
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  
  // Setter to update first and last name together
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Accessing fullName using the getter
console.log(personInfo.fullName);  // Output: John Doe

// Updating fullName using the setter
personInfo.fullName = "Jane Smith";

// Accessing updated fullName
console.log(personInfo.fullName);  // Output: Jane Smith
console.log(personInfo.firstName);  // Output: Jane
console.log(personInfo.lastName);   // Output: Smith

// Define a Car class (the blueprint)
class Car{

  //Properties of Car Class
  engine;
  NumberOfCylinders=4; //Default 4 cylinder.
  color;

  constructor(engine,NumberOfCylinders,color){
    //this references the class Properties
    this.engine=engine; 
    this.NumberOfCylinders=NumberOfCylinders
    this.color=color
  }

  //Methods of Car Class
  // Method to display car details (behavior)
  CarDefinition(){
    console.log("Color - "+this.color+", Engine: "+this.engine+", Number Of Cylinders: "+this.NumberOfCylinders)
  }

  startEngine(){
    console.log("Starting Engine") //Starting Engine
  }

  ApplyingBreaks(){
    console.log("Applying Breaks")
  }

  Accelerating(){
    console.log("Accelerating car")
  }
}

// Create an instance (object) of the Car class
const Ferrari = new Car("Super",6,"red");
Ferrari.CarDefinition()
Ferrari.startEngine()
Ferrari.Accelerating()
Ferrari.ApplyingBreaks()

// First Class: Person
class Person {
  constructor(name, age) {
      this.name = name; // 'this' refers to the current instance of Person being created
      this.age = age;
  }

  greet() {
      // 'this' here refers to the current instance of Person calling this method
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Second Class: Teacher (uses a Person object)
class Teacher {
  constructor(person, subject) {
      this.person = person; // 'this' refers to the current instance of Teacher being created
      this.subject = subject;
  }

  introductionOfTeacher() {
      console.log(`I teach ${this.subject}.`); // 'this' refers to the current Teacher object
      const PersonBtn=document.getElementById("personIntroduction");
      PersonBtn.addEventListener("click",this.person.greet.bind(this.person))
  }
}


// Example Usage:
// Create a person instance
const john = new Person("John Doe", 30);

// Create a teacher instance, passing the person instance to the constructor
const mathTeacher = new Teacher(john, "Math");
mathTeacher.introductionOfTeacher()


class CountOfObjects{
 
  //Static Property
  static objectsGotCreated=0;

  //Instance Property
  name;
  constructor(name){
    this.name=name; // 'this' refers to the specific instance of Object name being created
    CountOfObjects.objectsGotCreated+=1;  // Accessing the static property using Class name (CountOfObjects) to track how many Object have been created
  }

  //Static method
  static classDisplay(){
    console.log("A Common Static Method") // Accesses the static property
  }

  //Instance method
  display(msg){
    console.log(`A Object (${this.name}) method displaying - ${msg}`); // Works on individual name of instances
  }
};

CountOfObjects.classDisplay();
console.log("Objects Up till now created - "+CountOfObjects.objectsGotCreated); 

const Cob1= new CountOfObjects("Cob1");
Cob1.display("Message Given From Object 1")
CountOfObjects.classDisplay(); // Accesses the static method with class name
const Cob2= new CountOfObjects("Cob2");
Cob1.display("Message Given From Object 2")
// Both objects access the static property via the class
console.log("Objects Up till now created - "+CountOfObjects.objectsGotCreated); // Accesses the static property with class name


// Parent class: Animal
class Animal {

  static life=true;

  // Instance method available to all animals
  walk() {
      console.log(`Animal walks`);
  }

  static lives(){
    console.log("Animal is alive");
  }
}

// Child class: Dog
class Dog extends Animal {

  // Override the parent method
  bark() {
      console.log(`Dog barks.`);
  }
}

// Example usage:
const animal = new Animal();
animal.walk(); // Output: Animal Walks

const myDog = new Dog();
myDog.bark(); // Output: Dog barks.
myDog.walk(); // Output: Animal Walks
console.log(Dog.life); //True
console.log(Dog.lives()) //Animal is alive"

class Animal1 {
  #species = "Mammal"; // Private property

  constructor(name) {
      this.name = name; // Public property
  }

  // Private method
  #getSpecies() {
      return this.#species;
  }

  // Public method that uses the private method
  introduce() {
      console.log(`Hi, my name is ${this.name}, and I am a ${this.#getSpecies()}.`);
  }
}

// Child class: Dog
class Dog1 extends Animal1 {
  constructor(name, breed) {
      super(name);
      this.breed = breed;
  }

  // Child class method
  showDetails() {
      console.log(`${this.name} is a ${this.breed}.`);

      // Trying to access the private method or property of the parent class
      // console.log(this.#getSpecies()); // ❌ SyntaxError: Private field '#getSpecies' must be declared in an enclosing class
  }
}

// Create an instance of Dog
const myDog1 = new Dog1("Buddy", "Golden Retriever");

myDog1.introduce();   // Output: Hi, my name is Buddy, and I am a Mammal.
myDog1.showDetails(); // Output: Buddy is a Golden Retriever.

//Constructor Function

function PersonInfo(name, age) {
  this.name = name;
  this.age = age;
  this.greet=function(){
    console.log("Greetings!!")
  }
}

let person1 = new PersonInfo("Alice", 25);
console.log(person1) //undefined
person1.greet()

//Prototype 

const anyObj={
  name: "ABC",
  age:21
}
console.log(anyObj)

const anyObj1={
  address:"ABCD",
  pin_code: 333
}

console.log(anyObj1.name); //undefined

// The prototype of anyObj is Object.prototype
console.log(Object.getPrototypeOf(anyObj) === Object.prototype);  // true

const ArrProp=[1,2,3]
console.log(Object.getPrototypeOf(ArrProp) === Array.prototype);  // true
ArrProp.push(4);  // function push() {...} (inherited from Array.prototype)
console.log(ArrProp) //Output: [1,2,3,4]

function exampleFunction() {}
console.log(Object.getPrototypeOf(exampleFunction) === Function.prototype);  // true

function PersonConstProp(name) {
  this.name = name;
}

const nameABC = new PersonConstProp("ABC");
console.log(Object.getPrototypeOf(nameABC) === PersonConstProp.prototype);  // true

function constructorFun(name){
  this.name=name
}

constructorFun.prototype.greet=function(){
  console.log("Greetings!!! from "+this.name)
} // "greet" is attached to Person's prototype, shared by all instances

const c1=new constructorFun("ABC")
c1.greet() //Outputs: Greetings!! from ABC

const c2=new constructorFun("DEF")
c2.greet() //Outputs: Greetings!! from DEF

console.log(c1.greet === c2.greet ) //Output: true // (shared method from prototype)

// Check if the c1 object has its own greet property
console.log(c1.hasOwnProperty("greet")); // Outputs: false

function constructorFun1(name){
  this.name=name,
  this.greet=function(){
    console.log("Greetings!!! from "+this.name)
  }
}

const c3=new constructorFun1("XYZ")
c3.greet() //Outputs: Greetings!! from XYZ

const c4=new constructorFun1("UVW")
c4.greet() //Outputs: Greetings!! from UVW

console.log(c3.greet === c4.greet ) //Output: false // (not shared method from prototype)

// Check if the c4 object has its own greet property
console.log(c4.hasOwnProperty("greet")); // Outputs: true

function PersonExample(name){
  this.name=name,
  this.greet=function(){
    console.log("Greetings!!! from "+this.name)
  }
}

const p = new PersonExample("ABC")
p.greet() //Outputs: Greetings!!! from ABC
// p.SayHello() // ERROR: Uncaught TypeError: p.SayHello is not a function
console.log(p.toString()) //Output: [object Object]
console.log(p)

const arrProp = [1, 2, 3];
console.log(arrProp.toString());  // "1,2,3" (from Object.prototype)

console.log(Object.getPrototypeOf(arrProp) === Array.prototype);  // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);  // true

console.log(Object.getPrototypeOf(arrProp) === Array.prototype);  // true
console.log(arrProp.__proto__ === Array.prototype ) //true
console.log(arrProp.__proto__.__proto__ === Object.prototype ) //true

class GeneralAges{
  displayAgees(){
    
  }
}

class PersonAges extends GeneralAges{
  
  constructor(name){
    super()
    this.name=name;
  }

  greet(){
    console.log("Greetings!!")
  }
}

const pa= new PersonAges("ABC");
console.log(pa.__proto__)



function replaceConstructor(name){
  this.name=name;
  this.greet=function(){
    console.log("Greetings!!! from "+this.name)
  }
}
console.log(replaceConstructor.prototype.constructor === replaceConstructor);  // true

console.dir(replaceConstructor)

replaceConstructor.prototype.newfunction=function(){
    console.log("A new function")

}

console.log(replaceConstructor.prototype.constructor === replaceConstructor);  // false (the link is broken)

console.dir(replaceConstructor)

console.log(Object.prototype.__proto__)

// Prototype with properties and methods

// class ParentClass{
//   parentShow(){

//   }
// }

// class ChildClass extends ParentClass{
//   user_name ="ABC"
//   constructor(){
//     super()
//     this.age="27"
//     /**
//      * user_name="ABC" is same as this.name="ABC" inside constructor
//      */
//   }

//   childShow(){
//     console.log("Inside ChildClass")
//   }
// }


// function ChildClass(){
//   this.age="27",
//   this.name="ABC"
// }

// ChildClass.prototype.childShow=function(){
//   console.log("Inside ChildClass")
// }

// const cc = new ChildClass()
// console.dir(cc)

// const cc1 = new ChildClass()
// console.log(cc.__proto__===cc1.__proto__) //Output: true


class ChildClass{
  constructor(){
    this.name="ABC",
    this.age="27"
  }

  greet = () => {
    console.log("The greet function is not part of prototype it is present in each object instance")
  }
}

const cc = new ChildClass()
console.dir(cc)



const animalVar = {
  species: 'Mammal',
};

const dog = Object.create(animalVar);  // Create an object with `animal` as its prototype
dog.breed = 'Golden Retriever';

// Retrieve the prototype of `dog`
const proto = Object.getPrototypeOf(dog);

console.log(proto);  // Outputs: { species: 'Mammal' }
console.log(proto === animalVar);  // true, because `animal` is the prototype of `dog`

const bird = {
  canFly: true,
};

const penguin = {
  canFly: false,
};

// Set `bird` as the prototype of `penguin`
Object.setPrototypeOf(penguin, bird);

console.log(penguin.canFly);  // Outputs: false, because `penguin` overrides the `canFly` property

// Now, change the `penguin` object to no longer override `canFly`
delete penguin.canFly;  // Remove the `canFly` property from `penguin`

console.log(penguin.canFly);  // Outputs: true, because it's now inherited from `bird`


//Dataset

const div = document.getElementById("myDivDataset");
console.log(div.dataset.name); // Output: John
console.log(div.dataset.age);  // Output: 30

//updating
div.dataset.name = "Jane";
console.log(div.dataset.name); // Output: Jane

//adding
div.dataset.city = "New York";
console.log(div.dataset.city); // Output: New York

//Deleting
delete div.dataset.age;
console.log(div.dataset.age); // Output: undefined

console.log(div.dataset.extraInfo) // Output: extra

//Template Tag
const template = document.getElementById("cardTemplate");

// Clone the content of the template
const cardContent = template.content.cloneNode(true);

// Modify content if needed
cardContent.querySelector(".title").textContent = "Template Example";
cardContent.querySelector(".description").textContent = "This is a description in a reusable card.";

// Append to an element in the DOM
document.body.appendChild(cardContent);

// //Creating JS
// const createNewJSScript=document.createElement("script");
// createNewJSScript.textContent="alert('this is dynamically added')";
// document.head.append(createNewJSScript);

// const insertingNewJSScript=document.createElement("script")
// insertingNewJSScript.src="newJs.js";
// insertingNewJSScript.defer=true
// document.head.append(insertingNewJSScript);

// setTimeout(() => {
//   console.log("Hello after 2 seconds");
// }, 2000); // This code runs after 2 seconds

// setInterval(() => {
//   console.log("Hello every 3 seconds");
// }, 3000); // This code runs every 3 seconds

// let timer = setTimeout(() => {
//   console.log("This won't display if we clearTimeout");
// }, 5000);

// clearTimeout(timer); // Cancels the timer, so the message won't appear

// Dates

const currentDate = new Date();
console.log(currentDate); // Outputs: Sun Oct 27 2024 17:26:49 GMT+0530 (India Standard Time)

//Parses a date string and creates a date.
const dateFromString = new Date("2023-10-27");
console.log(dateFromString); // Example: Fri Oct 27 2023 05:30:00 GMT+0530 (India Standard Time)

//Pass individual components as numbers (Month is zero-indexed, where January is 0, so 11 -> December).
const specificDate = new Date(2023, 11, 27, 15, 30, 0);
console.log(specificDate); // Example: Wed Dec 27 2023 15:30:00 GMT+0530 (India Standard Time)

//Provide the time in milliseconds since January 1, 1970 (UTC)
const dateFromTimestamp = new Date(1698422400000);
console.log(dateFromTimestamp); // Example date based on the timestamp (Fri Oct 27 2023 21:30:00 GMT+0530 (India Standard Time))

const validDate = new Date("October 27, 2023 15:30:00");
console.log(validDate); // Example: Fri Oct 27 2023 15:30:00 GMT+0530 (India Standard Time)

const invalidDate = new Date("Not a Date");
console.log(invalidDate); // Invalid Date

const date1 = new Date("2024-10-27");
const date2 = new Date("2023-10-27");

const diffInMs = date1 - date2;
const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Convert milliseconds to days

console.log(`Difference in days: ${diffInDays}`); // Output: 366 (for leap year)

const date = new Date("2023-10-27");
date.setDate(date.getDate() + 5); // Add 5 days
console.log(date); // Wed Nov 01 2023 05:30:00 GMT+0530 (India Standard Time)

//Formatting dates
const datef = new Date("2023-10-27");
console.log(datef.toLocaleDateString()); // "10/27/2023" (based on locale)
console.log(datef.toLocaleTimeString()); // "5:30:00 AM" (based on locale)

//Error
const error = new Error("Something went wrong!");
console.log(error.message); // "Something went wrong!"
console.log(error.name);    // "Error"




















































































