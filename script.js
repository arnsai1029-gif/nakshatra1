console.log("HELLO WORLD");
//null,undefined,true,false values 
//the let and const
let a = 10;
console.log(a);
a = 20;//will not give error, as variable after using let can be updated but not redeclared
const b = 20;
b = 40;//will give error , as a variable after using const can not be updated or redeclared
//data types in JS boolean,number,string,undefined,null
const student = {F_Name : "ARNAV",Class : "mac",ROLLno : 75};
student["F_Name"] = F_Name + " SAINI";
//"123" + 123 = '123123'
//logical operators - AND(&&) , OR(||)
//if , else if ,else
//prompt asks user value along a message
//alert creates a pop up with a message
let age = prompt("enter age");  
//for of loop is used for strings and arrays to fetch each and every single values
//for in loop is used to fetch keys in dictionary
for(let char of "apna college"){
    console.log("Character =",char);
};
student = {Name : "Arnav",class : "MAC",Rollno : 2026};
for(let key in student){
    console.log("keys :",key,"values :",student[key]);
};
for(let i = 0;i<=100;i++){
    if(i%2 == 0){
        console.log(i);
    };
};

let answer = 5;
let guess = prompt("enter your guess from 1 to 10");
while (guess != answer){
    console.log("you did not win");
};

//strings
Name = "white mamba";
b = Name.length//gives the amount of char in string
console.log(b);
//.tostring()
water = ["bottled water","sweet water","black water"]
water.tostring()//does not transform the array into the string just gives it primarily
console.log(water.tostring())
//arrays
utensils = ["plate","glass","cups","spoons","bowls","knife"];
a = utensils.length//gives the amount of items present in array
console.log(a);
c = utensils[0];//accesing char at diff indexes
//using an index value which is not available returns undefined
utensils[5] = "gas stove"// editing arrays

for(let char of utensils){
    console.log(char)
}

marks = [76,87,32,77,90,98];
let sum = 0;
for(let i of marks){
    sum += i;
}
console.log(sum);
let avg =sum/marks.length;
console.log("Average Marks",avg);

price = [300,400,250,600,467];
let discount = 0;
let k = 0;
for(let j of price){
    discount = j/10;
    fin_price = j - discount;
    price[k] = fin_price;
    k += 1;
}
console.log(price);

//.concat() helps in merging many lists at the same time with out changing any of them
new_array = price.concat(marks,utensils);

//push() - adds a set of value at the end of the list
//pop() - removes the last value and returns it
//splice() - (starting_index,amount of time it should delete, adding a set of values)
//shift() - delete from start and return from array
//unshift() - add to start of array
//slice() - (start_index,end_index)


//functions
// arrow functions used for small code
let arrow = (a,b) => {
    console.log(Multiplication , a*b);
};
arrow(); 

let vowel_count = (valued) =>{
    let sum = 0;
    for (let a of valued) {
        if (a.toUpperCase() == "A" || a.toUpperCase() == "E" || a.toUpperCase() == "I" || a.toUpperCase() == "O" || a.toUpperCase() == "U" ){
            sum += 1;
        };
        
    };
    console.log(sum);
};
vowel_count("POtato");

//for each


arr = [1,2,3,4,5,6];

arr.forEach(function print_array(val,idx,array){//there are three parameters(val,idx,array)
    console.log(val,idx,array);
});

arr = [1,2,3,4,5,6];
arr.forEach(function num_squaring(num){
    console.log(num**2);
});
arr = [1,2,3,4,5,6];
let total = 0;
arr.forEach(function total(x){
    total += x;
    console.log(x);
});
console.log(total);


//arr.filter
arr = [1,1,2,3,45,6,3,23,43,2112,4,98,76];
let array = arr.filter( (val) => {
    return val%2 == 0 ;//return True, tells the function which element should go to the new array
});
console.log(array);


//array.reduce -  used to find smaller , greater values of an array also to find sum .the main concept is to return a value representing the entire array
arr = [1,1,2,3,45,6,3,23,43,2112,4,98,76];
const output = arr.reduce((result ,current) =>{// first element of array is assigned to result , second is assigned to current the value returned gets saved in result and then the third value is assigned to current.
    return result>current ?result : current;//
});
console.log(output);

marks = [45,89,25,65,87,91,90,93,97];
let new_marks = marks.filter( (val)  => {
    return val<=90;
});
console.log(new_marks);


let num = prompt("enter a number");
arr = [];
for(let i =1;i<=num;i++){
    arr.push(i);
}
console.log(arr);
const out = arr.reduce((result,current) => {
    return result * current;
});
console.log(out);