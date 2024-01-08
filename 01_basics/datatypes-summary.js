/*

জাভাস্ক্রিপ্টে 2 প্রকার তথ্য বা data রয়েছে, এগুলো হল নিম্নরূপ।

1. Primitive ডাটা টাইপ এবং
2. Non-primitive বা reference ডাটা টাইপ 

----------------------------------------------------------------

**Primitive ডাটা টাইপ
জাভাস্ক্রিপ্টে 7 প্রকার Primitive ডাটা টাইপ রয়েছে। এগুলো হল নিম্নরূপ -
1. String -
2. Number - গাণিতিক বা numeric মান নির্ধারণ করে,
3. Boolean - কেবল মাত্র দুইটি মান বা value ব্যবহার করে অর্থাৎ "true" এবং "false" ব্যবহার করে মান নির্ধারণ করে,
4. Null - শূন্য বা null মান নির্ধারণ করে,
5. Undefined - Undefined মান নির্ধারণ করে,
6. Symbol - কোন ভ্যালু কে unique বানানোর জন্য Symbol ব্যবহার করা হয়
7. BigInt - BigInt টাইপ হল জাভাস্ক্রিপ্টের একটি সংখ্যাসূচক আদিম যা নির্বিচারে মাত্রা সহ পূর্ণসংখ্যাগুলিকে উপস্থাপন করতে পারে। BigInts-এর সাহায্যে, আপনি সংখ্যার জন্য নিরাপদ পূর্ণসংখ্যার সীমা (Number.MAX_SAFE_INTEGER) ছাড়িয়েও বড় পূর্ণসংখ্যাগুলিকে নিরাপদে সঞ্চয় করতে এবং পরিচালনা করতে পারেন৷
*/
const score = 100;
const scoreValues = 100.5

const isLoggedIn = false;
const outsidetemp = null;
let userEmail;

const id = Symbol('123')
const anothertId = Symbol('123')

const binumber = 345234626453455343462n //bigInt

//console.log(id, anothertId);
//console.log( id === anothertId); // false 



/*
**Non-primitive বা reference ডাটা টাইপ
জাভাস্ক্রিপ্টে 3 প্রকার Non-primitive বা reference ডাটা টাইপ রয়েছে। এগুলো হল নিম্নরূপ -
2. Array - একই রকম মান বা value গুলোর গুচ্ছ বা group তৈরি করে,
1. Object -
3 Function - 
*/

const heros = ["Muhammad", "Abu Bakkar", " Omor"] // array 

// object
let myObj = {
    name: 'Nazmul',
    age: '23'
}

//Function
const myFunction = function() {
    // console.log('Hello World');
}


/* 
    __BASIC__
 কিভাবে বুঝব ভ্যালু কোন ডাটা টাইপ এ আছে ?
 এর জন্য আমাদেরকে typeOf ফাংশন ব্যবহার করতে হবে
*/

const value = "hello world"
const value1 =345345;
const value2 = true;

console.log(typeof(value));
console.log(typeof(value1));
console.log(typeof(value2));
