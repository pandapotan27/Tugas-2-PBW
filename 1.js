// VARIABEL
let name;
name = "Pandapotan";
console.log(name);
// atau
// let name = "Pandapotan";
// console.log(name)

// KONSTANTA
const phi = 3.14;
const greet = "Good Morning";

console.log("Nilai phi adalah " + phi);
console.log(greet+"Pandapotan");

// tipe data NUMBER 
let ipk = 3.94;
let price = 15000;
let celcius = -15;

console.log(ipk);
console.log(price);
console.log(celcius);

// tipe data STRING Tipe data ini berfungsi untuk data yang berisi teks ataupun huruf.
let activity;
activity = "Hello Fasilkom";
console.log(activity);

activity = "I'm learning js";
console.log(activity);

activity = "2024";
console.log(activity);

// Boolean punya dua nilai yakni true atau false.
let isSucces = true;
let isFailed = false;

console.log(isSucces);
console.log(isFailed);

// ARRAY
// let faculties = [
//     "Fakultas ilmu komputer",
//     "Fakultas teknik",
//     "Fakultas ilmu sosial dan ilmu politik",
//     "Fakultas Agama Kristen"
// ];

// console.log(faculties[0]);
// console.log(faculties[1]);
// console.log(faculties[2]);

// // mengubah elemen array
// faculties[3] = "Fakultas Kedokteran";
// console.log(faculties);

// ARRAY 2 DIMENSI
// let coordinate = [
//     [0,3],
//     [6,2],
//     [9,8]
// ];
// console.log(coordinate[0][0]);
// console.log(coordinate[1][1]);

// console.log(coordinate[1][0]);
// console.log(coordinate[1][1]);

// console.log(coordinate[2][0]);
// console.log(coordinate[2][1]);

// OPERATOR ARITMETIKA
// let results = 9+10;
// console.log(results);
// results = 15-10;
// console.log(results);
// results = 9*5;
// console.log(results);
// results = 18/2;
// console.log(results);
// results = 28 % 3;
// console.log(results);
// results = 10 + 15 * 2 / 2;
// console.log(results);

// OPERATOR PERBANDINGAN
// let results = 19 < 2;
// console.log(results);
// results = 10 > 3;
// console.log(results);
// results = 5 >= 10;
// console.log(results);
// results = 16 <= 4;
// console.log(results);
// results = 19 == 10;
// console.log(results);
// results = 20 === 20;
// console.log(results);

// OPERATOR LOGIKA
let bool;

bool = true && false;
console.log(bool);
bool = false || true;
console.log(bool);
bool = !false;
console.log(bool);
bool = true || true || false;
console.log(bool);
bool = true && false || true;
console.log(bool);

// OPERATOR STRING
// let firstName, lastName, fullName;

// firstName = "Pandapotan";
// lastName = "Kristian Sitorus";
// fullName = firstName + lastName;

// console.log(fullName);

// console.log("Halo, my name is "+ fullName);
// let students = ["Rico", "Toto", "Mosul", "Henri"];
// console.log(students[0]+" dan "+students[2]+" merupakan teman dekat");
// let exam = students[3] +" mendapatkan nilai " + 8*9;
// console.log(exam);

// OPERATOR SPREAD
let male =["Mosul","Fahmi","Rico","Raival"];
console.log(male);

let female =["Lidia","Selly","Sarty"];
console.log(female);

let students = [...male,...female];
console.log(students);

// PERCABANGAN DAN PERULANGAN (IF)

let gender;
gender='L';
if(gender === 'L') {
    console.log("I'm a man");
}

// let orang = {
//     "Nama" : "Pandapotan",
//     "Kelas" : "4",
//     "Npm" : "2210631170040"
// }
// console.log(orang)

// KETIKA VARIABEL DAN OBJEK DIPANGGIL MAKA AKAN MENJADI OBJEK
// console.log(orang.Nama)
// console.log(orang.Npm)

// IF ELSE
// let gender;
// gender='P';
// if(gender === 'L') {
//     console.log("I'm a man");
// }else {
//     console.log("i'm a women");
// }

// IF ELSE IF
// let username, password;

// username = "Admin";
// password = "panda";

// const isSuccess = true;
// const isFailed = false;

// if(username === 'Admin' && password === "panda") {
//     console.log(isSucces);
// }else if (username === "Admin" && password === "panda") {
//     console.log(isFailed);
// }else if (username === "Admin" && password === "panda") {
//     console.log(isFailed);
// }else{
//     console.log(isSuccess);
// }

// Nested If Else
// let username, password;

// username = "Admin";
// password = "panda";

// const isSuccess = true;
// const isFailed = false;

// if(username === "Admin"){
//     if(password === "panda"){
//     console.log(isSuccess);
//     }else{
//     console.log(isFailed);
//     }
// }else if(password === "panda"){
//  console.log(isFailed);
// }else{
//  console.log(isFailed);
// }

// SWITCH
// let grade = 'A';

// switch(grade) {
//     case 'A':
//         console.log("Very good");
//     break;
//     case 'B':
//         console.log("Good");
//     break;
//     case 'C':
//         console.log("Enough");
//     break;
//     case 'D':
//         console.log("Very Enough");
//     break;
//     default:
//         console.log("No Grade");
//     break;
// }

// OPERATOR CONDITIONAL
// let age = 20;
// let result = (age >= 20) ? "Eligible for voting" : "Not eligible for voting";
// console.log(result);

// FOR
// for (let i = 0; i < 10; i++) {
//     console.log("Halo JS"); 
//    }

// WHILE
// let i = 20;
//     while(i > 0){
//     console.log(i + " * 5 = " + i*5);
//     i = i -5;
// }

// DO WHILE
// let i = 1;
//     do{
//     console.log(i+" kuadrat = "+i*i);
//     i = i + 1;
//     }while(i <= 10);

// FOR OF
let faculties = [
    "Fakultas Ilmu Komputer",
    "Fakultas Hukum",
    "Fakultas Pertanian",
    "Fakultas Ekonomi",
    "Fakultas Teknik"
   ];
   for(let faculty of faculties){
    console.log(faculty);
   }

// BREAK DAN CONTINUE
// for(let i = 1; i<=10; i++){
//     if(i === 6){
//     break;
//     }
//     console.log(i);
// }
//    for(let i = 1; i<=10; i++){
//     if(i === 6){
//     continue;
//     }
//     console.log(i);
// }

// NESTED LOOP
// let weeks = 3;
// let days = 7;
// for (let i = 1; i <= weeks; ++i) {
//     console.log("Week: " + i);
//  for (let j = 1; j <= days; ++j) {
//          console.log(" Day: " + j);
//      }
// }

// FUNCTION
// function greet(){
//     console.log("Good Morning");
//     console.log("Good Afternoon");
//     console.log("Good Night");
// }
// PANGGIL FUNCTION AGAR MUNCUL dengan,
// greet();

// RETURN FUNCTION (untuk mengembalikan nilai yang ada di dalam function)
// function greet(){
//     return "Good Morning";
// }
//    let regard = greet();
//    console.log(regard);

//    console.log(greet());

// RETURN FUNCTION ARRAY
// function hobbies(){
//     const listHobbies =
//    ["Footbal","Futsal","PS","Music","Coding"];
//         return listHobbies;
// }
//    let hobby = hobbies();

//    for (const iterator of hobby) {
//         console.log(iterator);
// }

// FUNCTION PARAMETER
// function sum(number1, number2){
//     let results = number1 + number2;
//     return results;
// }

//    console.log(sum(5,5));

// SPREAD OPERATOR
// function average(...index){
//     let sum = index.length;
//     let result = 0;
//     for(const i of index){
//     result += i;
//     }
//     return result/sum;
// }

//    console.log("rata-ratanya adalah " + average(2,3,4,5,6,7,8))

//    ARROR FUNCTION
//    const avarage =() => {
//     console.log("rata ratanya adalah : " + avarage (2,3,4,5,6,7,8))
// }

//    avarage();


// ARROW FUNCION TANPA PARAMETER
// const greet = () =>{
//     console.log('Good Morning');
// }

//    greet();

// ARROW FUNCTION DENGAN PARAMETER
// const sum = (x, z) => {
//     let result = x + z;
//     return result;
// }

//    let result1 = sum(5,10);
//    console.log(result1);
   


// kalkulator

const penambahan = (number1,number2)=>{
    return number1 + number2
}
const pengurangan = (number1,number2)=>number1-number2
let result = penambahan(10,20)
let result2 = pengurangan(15,5)
console.log
   
