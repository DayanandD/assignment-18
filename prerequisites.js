// Given an array of numbers, use the map function with an arrow function to square each element of the array.



// var resulyss = arr.map(function(sqr){
//     return sqr*sqr*sqr;
// })
// console.log(resulyss);

// var resulyss1 = arr.map((sqr)=>{
//     return sqr*sqr*sqr*sqr;
// })
// console.log(resulyss1);

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var x = arr.map(i=>i*i);
// console.log(x);

// Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// function getStudent(score){
//     return score>=90?'a':
//     score>=80?'b':
//     score>=70?'c':
//     score>=60?'d':
//     score>=50?'e':
//     'f';
// }
// const score = 35;
// const grade = getStudent(score);
// console.log(`Score: ${score}, Grade: ${grade}`);

// Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// let car = {
//     company_name : 'Ford',
//     model:'GT',
//     year:2020
// }

// console.log(car);

// function objchangeCar(car, new_year) {
// car.year = new_year;
// }
// objchangeCar(car, 2019);
// console.log(car)

// let {company_name:c,model:m,year:y} =car;
// console.log(c,m,y);

// console.log(car)

// Given an array of numbers, use the filter function to create a new array containing only the prime numbers

// var arr = [1,2,3,4,5,6,7,8,9,10]
// // var prime = arr.filter(()=>i%2==0?1:0)
// function isprime(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] >= 1 || arr[i]%2 == 0 || arr[i]<=3 ) {
//             return arr.filter();
           
//         }
// }
// }
// // isprime(arr);
// console.log(isprime());

// let isEven = (n) =>{
//     return n%2 == 0;
//   }
//   let results = (evenFn, Num) => {
//     const EvenNumber = evenFn(Num)
//     console.log(`The even number ${Num} is an even Number of ${EvenNumber}`);
//   }
  
//   results(isEven, 9);

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var results=[];
// for (var i = 0; i < arr.length; i++){
//    results.push(arr[i]*arr[i]);
// }

// console.log(results);


// let ruppes = [1000, 3500, 5000, 50, 100, -900, 8507, -3698, 4462];
// let inrToDollars = 80;
// // let out = [];
// let out = ruppes.map(function(r){
//     return r /inrToDollars;
// })
// console.log(out);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var Primenum = arr.filter(function(f){
//      if(f>=3 ? f%f===0:true){
//     console.log(`the give numbe is ${f}, prime`) 
//     }
//     else{
//         console.log(`the give numbe is ${f}, not prime`)
//     }
//  });
//  console.log(Primenum);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const primeNumbers = numbers.filter(function(num) {
//     if (num <= 1) return false; 
//     if (num <= 3) return true; 

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; 
//     }
    
//     return true; 
// });

// console.log(primeNumbers);




const fetchData = async function() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/2')
                        .then(response => response.json())
                        .then(json => json);    
    return data;
}

fetchData().then(person => {
    console.log(JSON.stringify(person));

    const phoneNumber = person?.phone;
    console.log('Phone Number:', phoneNumber);
});
