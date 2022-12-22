// var a = 10;
// var y = 12.5;
// var abc= "mehrin";
// document.write("a:" +a);

// document.write("<p style='color:red;'>This is p tag</p>");
// abc = parseInt(abc);
// var studendFristName= prompt("Enter your frist Name");
// var studentLastName= prompt("Enter your Last Name");
// document.write(studendFristName + studentLastName);
// var fristNumber = prompt("enter frist number:");
// var secendNumber = prompt("enter Secend Number");
// document.write(Number (fristNumber) + Number (secendNumber));
// document.write(Number(prompt("Enter frist Number")) + Number(prompt("Enter last Number")))
// document.writeln( 
//     "String concatenation: " +
//     studentFristName.concat(" " + studentLastName) +
//     "<br/>"
// );
// document.write("Length of Last Name: " + studentLastName.toUpperCase() + "<br/>)");
// document.writeln( 
//     "string Lowercase function: " + studentLastName.toUpperCase() + "<br/>"
// )
// let a = parseFloat(prompt("Enter frist Number"));
// let b = parseFloat(prompt("Enter second Number"));

// document.write(a+b);
// document.write(a-b);
// document.write(a*b);
// document.write(a/b);
// // document.write(a%b);
// let a = 10;
// let b = 20;

// document.write("<br> arithmatic:" + (a+b));
// b=a++;
// document.write("<br> a:" + a );
// // document.write("<br> b:" + b);
// var fristNumber = 100;
// var secendNumber = 200;

// if (fristNumber > secendNumber)
// document.write(fristNumber > secendNumber);
// else if (fristNumber < secendNumber)
// document.write(fristNumber<secendNumber);
// else
// document.write("N/A");

// var a = 100 ;
// var b = 200 ;

// var digit = (Number(prompt("Enter any number")));
// if(digit < 100)
// document.write("<100");
// else if(digit <100 )
// document.write("> 100");
// else if (digit > 300)
// document.write( > 300 );

// var fristNumber = 100;
// var digit = Number (prompt("Enter any Number"));
// digit > 20
// ? document.write("<br>> 20 </br>")
// : digit < 20 ? document.write("<br/> < 20")
// var showLetter = prompt("Enter String");
// switch(showLetter){
//     case 'A' || 
// }
// for (var i =0; i<=10; i++){
//     document.write(i + "<br>");
// }
// var i = 1;
// while(i<=10){
//     document.write(i +"<br>");
//     i++;
// }
// var num = 16;
// document.write ("<br/>Result is: " + num * num);

// var num = 25; 
// document.write ("<br/> Result is: " + num * num);

// var num = 36;
// document.write ("<br/> Result is: " + num * num);

// //using function

// function square(){
// var num = 16;
// document.write ("<br/Result is: " + num * num);

// }
// square();
//perameterized function calling
// function square_p(num){
//     var num = 22;
//     document.write("<br/> Perametirized result is: " + num * num);
// }
// square_p();


function math(){
    let num1 = Number(prompt("Enter frist number"));
    let num2 = Number(prompt("Enter second number"));
    let num3 = Number(prompt("Enter third number"));
    document.write("<br/>Adiition is: " + (num1+num2+num3));
    document.write("<br/>Substraction is: " + (num1-num2-num3));
    document.write("<br/> Multification is: " + (num1*num2*num3));
    document.write("<br/> Divition is2: " + (num1/num2/num3));
}
math();

function perameterized(a,b,c){
document.write("<br/>Perameterized Addition is: " + (a+b+c));
document.write("<br/>Perameterized Substaractio is: " + (a-b-c));
}
perameterized(10,20,30);
