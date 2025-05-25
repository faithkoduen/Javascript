//Check age to drive
let age=24;
if(age>=18){
    console.log(`You are old enough to drive`)
}else{
    let yearsLeft=18-age;
    console.log(`you are left with${yearsLeft} years to drive`);
}

//compare age
let myAge=21
let yourAge=23

if(yourAge>myAge){
    console.log(`you are ${yourAge-myAge} years old than me`)
}else if(yourAge<myAge){
    console.log(`I am ${myAge-yourAge} years old han me`)
}else{
    console.log(`We are the same age`);
}

//compare two numbers
let a=4;
let b=3;
if(a>b){
    console.log(`a is greater than b`)
}else{
    console.log(`a is less than b`)
}

console.log(a>b ? `a is gerater than b`: `a is less than `)


//check if a number is even or odd
let number=13;
if(number %2==0){
    console.log(`${number} is an even number`)
}else{
    console.log(`${number} is an odd number`)
}


//level2
function assignGrade(score){
    if(score>=80 && score<=100){
        return'A';
    }else if(score>=70 &&score<=79){
        return'B';
    }else if(score>=60 &&score<=69){
        return'C';
    }else if(score>=50 &&score<=59){
        return'D';
    }else if(score>=0 &&score<=49){
        return'F';
    }else{
        return"invalid score"
    }
}
console.log("assignGrade");
console.log(`${assignGrade(56)}`)
console.log(`${assignGrade(79)}`)
console.log(`${assignGrade(0)}`)
console.log(`${assignGrade(102)}`)
console.log(`${assignGrade(-5)}`)
console.log(`${assignGrade(87)}`)

//check if season is autum,winter,spring or summer
function getSeason(month){
    const monthLower=month.toLowerCase();
    if(["september","october","november"].includes(monthLower)){
        return "Autumn";
    }else if(["december","january","february"].includes(monthLower)){
        return "Winter";
    }else if(["march","april","may"].includes(monthLower)){
        return "Spring";
    }else if(["june","july","august"].includes(monthLower)){
        return "Summer";
    }else{
        return "invalid month"
    }
}
console.log("getSeason");
console.log(`${getSeason('september')}`)
console.log(`${getSeason('january')}`)
console.log(`${getSeason('march')}`)
console.log(`${getSeason('july')}`)
console.log(`${getSeason('august')}`)
console.log(`${getSeason('friday')}`)
console.log(`${getSeason('may')}`)

//