// quick examples for demo on replit.com

'use strict';

//Arrays
  Array.of(1, 2, 3) // = a new array with [1,2,3];
    //Spread operator returns all array elements as individual elements.
    //Great for passing as individual parameters in function
    //Creating a new array with the elements of one array
  const arr = Array.of(1,2,3);
  console.log(arr);
  console.log(...arr);
  const newArr = [...arr];
  arr.find(el => el > 1) //Find the first element > 1
  arr.findIndex(el => el > 1) // returns index of first element > 1
  arr.fill(0) // Fills array with 0's. Useful for reseting data.
  //sets - great for ensuring uniqueness in a dataset. Won't add duplicate data twice to the set
  const mySet = new Set();
  mySet.add("test");
  mySet.add("test"); // won't be added
  console.log("only one test value: ", mySet);
  mySet.add([1,2,3]);
  mySet.add({"name": "Chris"}); // Can be given iterables. Initialized with them as well.
  console.log(mySet);
  mySet.delete("test");
  console.log(mySet);
  //Iterable
  mySet.forEach(val => {
    console.log("iteration: ", val);
  })

  mySet.add(1);
  console.log(mySet.has(1)); //Check if a value exists
  console.log(mySet.size);   //get # of elements in the set
  mySet.clear()
  console.log(mySet.size);  //clear all elements

//weakSets - Can only add objects and do has(), delete(). Not iterable. Great for being an additional storage for some other object.
//weakSets get garbage collected
  const myWeakSet = new WeakSet();
  let chris = { me: "chris" };
  myWeakSet.add(chris); 
  console.log(myWeakSet);
  chris = null;
  //weakset will get garbage collected now

//MAPS - key-value pairs, keep original insertion order
  //Methods: clear, delete, entries, forEach, get, set, has, keys, values
  //properties: Size

    let myMap = new Map()
    myMap.set('0', 'foo')
    myMap.set(1, 'bar')
    myMap.set({}, 'baz')

    //.entries returns an iterator object on the map
    let mapIter = myMap.entries()

    console.log(mapIter.next().value)  // ["0", "foo"]
    console.log(mapIter.next().value)  // [1, "bar"]
    console.log(mapIter.next().value)  // [Object, "baz"]



//Iterating Methods
  //forEach iterates a function over each element
    const arr = Array.of(1, 2, 3);
    let total = 0;
    const fun = (x) => {
      total = x + total;
    }
    arr.forEach(fun);
    //passing an anonymous function
    arr.forEach(x => {
      total = x + total;
    });

    //The for...of statement iterates over values that the iterable object defines to be iterated over.
    for (let el of arr) console.log(e) // 1,2,3
    
    //The for...in statement iterates over all enumerable properties of an object that are keyed by strings
    //For in is generally considered bad practice. Doesn't guarantee sequential order, slower than other loops.
    //Not necessary with all the prototype methods available: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    const object = { a: 1, b: 2, c: 3 };
    for (const property in object) console.log(`${property}: ${object[property]}`);// expected output: "a: 1","b: 2","c: 3"