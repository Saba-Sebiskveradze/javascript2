// დავალება 1
for(i = 5; i < 100; i++){
    console.log(i);
}
// დავალება 2
let arrayNumber = 0
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for(i = 0; i < array1.length; i++){
    arrayNumber = array1[i]
    if(arrayNumber > 0 && arrayNumber < 10){
        console.log(arrayNumber);
    }
}
// დავალება 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(i = 0; i < array2.length; i++){
    console.log(array2[i]);
    if(array2[i] === 5){
        console.log("არის");
        break
    }
}
// დავალება 4
let array3= [1, 2, 3, 4, 5];
let sum1 = 0
for(i = 0; i < array3.length; i++){
    sum1 += array3[i];
}
console.log(sum1);
// დავალება 5
let array4 = [1, 2, 3, 7, 6, 9];
let sum2 = 0;
for(i = 0; i < array4.length; i++){
    sum2 += array4[i];
}
let sashualo = sum2 / array4.length;
console.log("საშუალო არითმეტიკული უდრის ", sashualo);
// დავალება 6
let array5 = [1, 2, 3, 7, 6, 9];
for(i = 0; i < array5.length; i++){
    
    if(array5[i] === 7){
        continue
    }
    console.log(array5[i]);
}
// დავალება 7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
console.log(user.studentstatus);  
// დავალება 8
let user1 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
if(user1.age > 18){
    console.log("hello");
}else if(user1.name === "levani"){
    console.log("hello levani");
}else if(user1.studentstatus === "active" || user1.age < 25){
    console.log("hello world");
}else{
    console.log("error");
}
// დავალება 9
let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];
for(i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++){
        if(array[i][j] > 0){
            console.log(array[i][j]);
        }
    }
}
// დავალება 10
let numbers = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        console.log("ლუწია", numbers[i])
    }else{
        console.log("კენტია", numbers[i])
    }
}
// დავალება 11
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for(i = 0; i < users.length; i++){
    if(users[i].status === true){
        console.log(users[i]);
    }
}