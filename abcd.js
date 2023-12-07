//bubble sorting
//var arr = [26,42,78,18,3]
//n = arr.length
//function bubbleSort(arr,n){
  //  for(let i = 0; i<n-1; i++){
  //      for(let j = 0;j <n-1; j++){
  //          if(arr[j] > arr[j+1]){
  //              var temp = arr[j];
  //              arr[j] = arr[j+1];
  //             arr[j+1] = temp;
  //              
  //          }
  //      }
  //  }
//}
//console.log("Before sorting:"+ arr)
//bubbleSort(arr,n)
//console.log("After Sorting:"+ arr)


//selection sorting
//var arr = [10,9,8,7,6,5,4,3,2,1,11,13,15,17,19,20,12,14,16,18]
//n = arr.length
//function selectionSort(arr,n){
 //   for(let i = 0; i<n-1; i++){
 //       for(let j = i+1;j <n-1; j++){
 //           if(arr[i] > arr[j]){
 //               var temp = arr[i];
 //               arr[i] = arr[j];
 //               arr[j] = temp;
 //               
 //           }
 //       }
 //  }
//}
//console.log("Before sorting:"+ arr)
//selectionSort(arr,n)
//console.log("After Sorting:"+ arr)


//insertion sorting
//var arr = [10,9,8,7,6,5,4,3,2,1,11,13,15,17,19,20,12,14,16,18]
//n = arr.length
//function insertionSort(arr,n){
 //   for(let i = 0; i<n-1; i++){
 //       let temp = arr[i];
 //       for(var j = i-1;j >= 0 && arr[j] > temp; j--){
 //           arr[j+1] = arr[j];
 //       }
 //           arr[j+1] = temp;
 //   }
//}
//console.log("Before sorting:"+ arr)
//insertionSort(arr,n)
//console.log("After Sorting:"+ arr)


//merge 

//var arr =[26,42,78,18,3];

//n = arr.length;

//function merge(arr,l,m,r){
//    var n1 = m-l+1;
//    var n2 = r-m;
//    var L = new Array(n1);
//    var R = new Array(n2);
//    for(var i = 0; i< n1; i++){
//        L[i] = arr[l+i];
//    }
//    for(var j=0;j<n2;j++){
//       R[j] = arr[m + 1 + j];
//    }
//   var j= 0;
//    var k= 1;
//    for(var i= 0;i<n1 && j<n2; ){
//        if(L[i] <= R[j]){
//            arr[k] = L[i];
//            i++;
//       }else {
//            arr[k] = R[j]
//            j++;
//        }
//        k++;
//    }
//    while(i<n1){
//       arr[k] = L[i];
//        i++;
//        k++;
//    }
//    while(j<n2){
//        arr[k] = R[j];
//        j++;
//        k++;
//    }
//}
//function mergeSort(arr,l,r){
//   if(l>=r){
//        return;
//   }
//    var m = l + parseInt((r-l)/2);
//    mergeSort(arr,l,m);
//   mergeSort(arr,m+1,r);
//    merge(arr,l,m,r);
//}
//console.log('Before sorting:'+arr);
//mergeSort(arr,0,n-1);
//console.log('After sorting:'+arr);


//sequential search

// let arr = [256, 32, 187, 56, 4, 99];
// let n = arr.length;
// let s=99;

// function linearSearch(arr,n,x){
//    for(let i = 0; i<n; i++){
//        if(arr[i] == x)
//        {
//            return i;
//        }
//    }
//    return -1
// }
// let result = linearSearch(arr,n,s);
// if(result >= 0){
//    console.log(`Element found at arr[${result}]`)
// }
// else{
//    console.log(`Element not found`)
// }


// let arr1 = [4,32,56,99,187,256];
// let n1 = arr.length;
// let s1=32;

// function linearSearch(arr1,n1,x){
//    for(let i = 0; i<n1; i++){
//        if(arr1[i] == x)
//        {
//            return i;
//        }
//    }
//    return -1
// }
// let result1 = linearSearch(arr1,n1,s1);
// if(result1 >= 0){
//    console.log(`Element found at arr1[${result1}]`)
// }
// else{
//    console.log(`Element not found`)
// }
// application of search algorithm

// let arr = [6,2,3,9,1];
// n = arr.length -1;
// function sort(arr,n){
//     for(let i=0;i<=n;i++){
//         for(let j = i+1;j<=n;j++){
//             if(arr[i]> arr[j]){
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }

// let arr1 = [...arr];
// sort(arr,n);
// console.log(`Give array:[${arr1}]`);
// console.log(`Minimum element: ${arr[0]}`);
// console.log(`Maximum element: ${arr[n]}`);


// arr = ['apple','mango','banana','grapes','kiwi']
// console.log(`Before sorting: [${arr}]`)
// arr.sort()
// console.log(`After sorting: [${arr}]`)


//reversal string
//method 1
// var string = "SHAGUN KAVYA SANDHYA AMRIT";
// var revString = "";

// for(let i=string.length -1; i>=0; i--){
//    revString +=string[i];
// }
// console.log(`Oringinal string:${string}`);
// console.log(`Reversed string: ${revString}`);

//string reversal
//method 2
//var string = "SHAGUN KAVYA SANDHYA AMRIT";
// var revString = string.split("").reverse().join("");

// console.log(`Oringinal string:${string}`);
// console.log(`Reversed string: ${revString}`);

//palindrome

// var string =" level ";
// var revString = string.split("").reverse().join("");

// if (string == revString){
//    console.log(`${string} is a palindrome`);
// }
// else{
//    console.log(`${string} is not a palindrome`);
// }

//anagram program

// var string1 ="listen"
// var string2 ="silent"

// if(string1.length !== string2.length){
//    console.log("They are not anagram")
// }
// let str1 = string1.split('').sort().join('');
// let str2 = string2.split('').sort().join('');

// if (str1 == str2){
//    console.log("They are anagrams");
// }else{
//    console.log("They are not anagrams");
// }

//ficonacci series

// function fibonacci(num){
//    if(num<2){
//       return num;
//    } else{
//       return fibonacci(num-1)+ fibonacci(num-2);
//    }
// }
// let n = Number(prompt("Enter the limit:"));
// if(n<=0){
//    console.log("Enter a positive interger.");
// }else if(n ==1){
//    console.log(1,2);   
// }else{
//    for(let i =0;i<n;i++){
//       console.log(fibonacci(i));
//       document.write(`$(fibonacci(i))`);
//    }
// }

//array push()inbuilt

// const fruits = ["orange", "mango", "apple", "guava"];
// console.log(`Before insertion ${fruits}`);
// fruits.unshift("kiwi");
// console.log(`After insertion ${fruits}`);

// array push() wihout inbuilt function

// const fruits = ["mango","banana","grapes"];
// function push(arr,element){
//    arr[arr.length] = element;
// }
// console.log(`array before insertion the element: ${fruits}`);
// push(fruits,"kiwi");
// console.log(`array after insertion ${fruits}`);

//json format

// let jsonRes = '{"name":"shagun","age":22}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

//constructing forEach() function 

// let fruitss = ["kiwi","orange", "mango", "apple", "guava"];

// function forEach(array,callback){
//   for(let i=0; i<array.length; i++){
//     callback(array[i],i,array);
//   }
// }
// forEach(fruitss,(item,index)=> {
//   console.log(`${index + 1}.${item}`);
// });

// Constructing map() function

// let fruitss = ["kiwi","orange", "mango", "apple", "guava"];
// function map(array,callback){
//    var returnValue = [];
//   for(let i=0;i<array.length;i++){
//     var newValue = callback(array[i],i,array);
//     returnValue.push(newValue);
//   }
//   return returnValue;
// }
// var values = map(fruitss,(item,index) => {
//   return item;
// });
// console.log(values);

//construction of concat() function

// var string1 = "Welcome to ";
// var string2 = "Data Structure";
// var string3 = " and Algorithms";
// function concat(...strings){
//   var sum ="";
//   for(string of strings){
//     sum += string;
//   }
//   return sum;
// }
// var string4 = concat(string1,string2);
// console.log(string4);
// var string5 = concat(string1,string2,string3);
// console.log(string5);

//stack 1. Peek operation

// var arr = [1,3,6,7,8,10,5];
// var arr1 = []
// class Stack{
//   constructor(stack){
//     this.stack = stack
//   }
//   peek(){
//     if(this.stack.length === 0){
//       console.log("Stack Underflow")
//       return;
//     }
//     const top = ((this.stack).length)-1
//     return ((this.stack)[top])
//   }
// }
// var s1 = new Stack(arr)
// var s2 = new Stack(arr1)
// console.log(s1.peek())
// console.log(s2.peek())


//stack 2. Push operation

// class Stack{
//   constructor(size){
//     if(isNaN(size)){
//       size=6;
//     }
//     this.size = size
//     this.arr = []
//     this.top = 10
//   }
//   push(element){
//     if(this.top >=this.size){
//       console.log("Stack Overflow")
//       return
//     }
//     (this.arr)[this.top] = element
//     this.top = this.top +1
//     return(this.arr)
//   }
// }
// var s1 = new Stack(6)
// for(let i=0;i<=4;i++){
//   x=Math.floor((Math.random()*10)+1)
//   console.log(s1.push(x))
// }

//stack 3. Pop operation

// var arr= [1,3,6,7,8]
// class Stack{
//   constructor(arr){
//     this.arr = arr
//     this.top = this.arr.length -1 //4
//   }
//   pop(){
//     if(this.top == -1) {//false
//     console.log("Stack Underflow")
//     return
//   }
//   var x = this.arr[this.top] 
//   this.top = this.top-1 //3
//   this.arr = this.arr.slice(0,this.top +1)
//   console.log(`${x}:{${this.arr}}`)
//   return
//   }
// }
// var s1 = new Stack(arr)
// for(let i=0; i<=5;i++){
//   s1.pop()
// }

//stack 4. Search operation

// var arr = [1,3,6,7,8,10,5]
// class Stack{
//   constructor(arr){
//     this.arr = arr
//   }
//   search(element){
//     let arr1 = [...this.arr]
//     let top = this.arr.length - 1
//     if(top == -1){
//       return -1
//     }
//     for(let i = 0;i <arr1.length; i++){
//       let x = arr1[top]
//       top = top-1
//       if(x == element){
//         return true 
//       }
//     }
//     return false
//   }
// }
// s1 = new Stack(arr)
// console.log(s1.search(3))
// console.log(s1.search(15))

//stack 5. isEmpty operation

// var arr =[]
// class Stack{
//    constructor(arr){
//     this .arr = arr
//     this.top = this.arr.length -1
//    }
//    IsEmpty(){
//     if(this.top == -1){
//       return "StackUnderflow"
//     }
//     return"Good to perform pop and peek"
//    }
// }
// var s1 = new Stack(arr)
// s1.IsEmpty()


// //Queue
// class Queue{
//   constructor(){
//     this.count = 0;
//     this.lowerCount = 0;
//     this.items = {};
//   }
// //   //Queue 1. Enqueue
//   enqueue(element){
//     this.items[this.count] = element;
//     this.count ++;
//   }
// //   //Queue 2. Dequeue
//   dequeue(){
//     if(this.isEmpty()){
//       return undefined;
//     }
//     let result = this.items[this.lowestCount];
//     delete this.items[this.lowestCount];
//     this.lowestCount++;
//     return result;
//   }
// //   //peek operation
// //   Peek(){
// //   if(this.isEmpty()){
// //     return undefined;
// //   }
// //   return this.items[this.lowestCount];
// //   }
// //   //accessing and transverse operation
// //   transverse(){
// //     if(this.isEmpty()){
// //       return "";
// //     }
// //     for(let index =0; index< this.count; index++){
// //       if(index ==0){
// //         console.log(`Value at ${index}th position is ${this.items[index]}`);
// //       }else if(index ==1){
// //         console.log(`Value at ${index}st position is ${this.items[index]}`);
// //       }
// //       else
// //       console.log(`Value at ${index}nd position is ${this.items[index]}`);
//     //}
//   }

// var q = new Queue();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// console.log(q);

//MAP()

// const fruits = new Map();
// fruits.set("mangoes",40);
// fruits.set("grapes",80);
// fruits.set("apples",120);
// console.log(fruits.has("apples"));
// console.log(fruits.entries("apples"));

//hash function

// class HashTable{
//   constructor(){
//     this.table = new Array(10);
//     this.size = 0;
//   }
//   hash(key){
//     let hash = 0;
//     for(let i = 0; i< key.length; i++){
//       hash +=key.charCodeAt(i);
//     }
//     return hash % this.table.length;
//   }
//   set(key,value){
//     const index = this.hash(key);
//     this.table[index] = [key,value];
//     this.size++;
//   }
// }
// var fruits = new HashTable();
// console.log(fruits.hash("apple"));
// console.log(fruits.hash("kiwi"));


// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   // Insert at the end of the linked list
//   insert(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }

//   // Delete a node by value
//   delete(data) {
//     if (!this.head) {
//       return;
//     }

//     if (this.head.data === data) {
//       this.head = this.head.next;
//       return;
//     }

//     let current = this.head;
//     let previous = null;

//     while (current && current.data !== data) {
//       previous = current;
//       current = current.next;
//     }

//     if (!current) {
//       return; // Value not found
//     }

//     previous.next = current.next;
//   }

//   // Search for a node by value
//   search(data) {
//     let current = this.head;
//     while (current) {
//       if (current.data === data) {
//         return true; // Found
//       }
//       current = current.next;
//     }
//     return false; // Not found
//   }

//   // Print the linked list
//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// // Example Usage:
// const myList = new LinkedList();

// myList.insert(10);
// myList.insert(20);
// myList.insert(30);

// console.log("Original Linked List:");
// myList.print();

// myList.delete(20);
// console.log("\nLinked List after deleting 20:");
// myList.print();

// console.log("\nIs 30 in the Linked List?", myList.search(30));
// console.log("Is 40 in the Linked List?", myList.search(40));

// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=> {
//   console.log(res);
//   console.log(res.json());
// })
// .catch((err)=>{
//   console.log("error -",err);
// })

//fetch url

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//   try{
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data.fact);
//   }catch(e){
//     console.log("error - ",e);
//   }
// }

//Axios (library to make HTTP requests
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact= await getFacts();
  console.log(fact);
});
let url = "https://catfact.ninja/fact";

async function getFacts(){
  try{
    let res = await axios.get(url);
    return res.data.fact;
  }catch(e){
    console.log("Error - ",e);
    return "Some Mistake was there";
  }
}