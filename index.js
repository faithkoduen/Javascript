let firstName='Faith';
let lastName='Koduen';
let country='Kenya';
let city='Nairobi';
let age=21;
let isMarried=false;
let year=2025;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);


console.log(typeof '10'===typeof 10);

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')=== 10);


// three JavaScript statement which provide truthy value.
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));

//three JavaScript statement which provide falsy value.
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

// comparison expression first without using console.log()
4>3 //true
4>=3//true
4 < 3//false
4 <= 3//false
4 == 4//true
4 === 4//true
4 != 4//false
4 !== 4//false
4 != '4'//false
4 == '4'//true
4 === '4'//false

//length of python and jargon and make a falsy comparison statement.
let python="python"
let jargon="jargon"
console.log(python.length !== jargon.length);


//expressions first without using console.log()
4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //true &&false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true || false
!(4 > 3) //false
!(4 < 3) //true
!(false) //false
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //false && true
!(4 === '4') //true
//There is no 'on' in both dragon and python //false


//Use the Date object to do the following activities
const now=new Date();

console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

//Level 2
//Area of a triangle
let base=12;
let height=15;
let area=0.5*base*height;
console.log(area);

//perimeter of triangle 
let a=5;
let b=4;
let c=3;
let perimeter=a+b+c;
console.log(perimeter);

// calculate an area of rectangle and the perimeter
let length=4;
let width=8;
let areaRectangle=length*width;
let perimeterRectangle=2*(parseFloat(length)+parseFloat(width));
console.log(areaRectangle);
console.log(perimeterRectangle);

//