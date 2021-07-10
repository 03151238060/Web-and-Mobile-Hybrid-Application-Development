        //Chap # 21-25


// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.        

// var fname=prompt('Enter your first name').toLowerCase()
// var lname=prompt('Enter your second name')
// var a=lname.slice(0,1).toUpperCase();
// var b=lname.slice(1);
// var c=a+b;
// alert('Welcome '+fname+c);


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var a=prompt('Enter about your favourite mobile phone')
// console.log('Length of input is found to be : '+a.length)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var country='Pakistan';
// console.log(country.indexOf('n'))
// document.write('String : Pakistan'+"<br>")
// document.write('Index of n is : '+country.indexOf('n'))


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser

// var text='hello world';
// document.write("String hello world"+"<br>")
// document.write("last index of l is "+text.lastIndexOf('l'))

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var word='Pakistani'
// document.write("String : Pakistani"+"<br>")
// document.write("Character at index 3 is "+ word.charAt(3))


//6.Repeat Q1 with string concat function

// var fname=prompt('Enter your first name').toLowerCase()
// var lname=prompt('Enter your second name')
// var a=lname.slice(0,1).toUpperCase();
// var b=lname.slice(1);
// var c=a+b;
// alert('Welcome '+fname.concat(c));

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var city="hyderabad"
// document.write(city.replace('hyder','islam'))



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message ='Ali and Sami are best friends. They play cricket and football together.';
// document.write(message.replaceAll('and','&'))

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var str='472';
// var num=Number(str);
// document.write(num)
// document.write(typeof(num))

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// var inp=prompt("Enter some text ").toUpperCase();
// document.write(inp);

// 11. Write a program that takes user input. Convert and 
// show the input in title case

// var inp=prompt("Enter some text ");
// var nip=inp.slice(0,1).toUpperCase();
// var nip1=inp.slice(1).toLowerCase();
// document.write(nip+nip1);


// 12. Write a program that converts the variable num to 
// string.
// Remove the dot to display “3536” display in your browser


// var num = 35.36 ;
// var str=num.toString()
// var str1=str.slice(0,2)
// var str2=str.slice(3,5)
// document.write(str1+str2+"<br>")
// document.write(typeof(str))

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .

// var username=prompt('Enter your name')
// var schar=['!',"@","#","$","%","^","&","*","(",")",",",".","[","]"]
// for( var i=0;i<username.length;i++){
//     for(var j=0;j<schar.length;j++){
//         if(username[i]==schar[j]){
//             alert("Please enter correct name. Special characters are not allowed")
//         }

//     }
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

// var item=prompt('Enter the product your want').toLowerCase();
// var a = ['cake', 'apple', 'pie', 'cookie','chips', 'patties']
// for(var i=0;i<a.length;i++){

//     if (item===a[i]){
//         alert(item,"is available at index ",a.indexOf(i)," in our bakery ")
//         break;
//     }
//     else{
//         alert(item,"is not available   in our bakery ")
    
//     }
// }

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document

// var password=prompt("Enter password:");
// for (i=0;i<password.length;i++){
//     if (password[0]==Number || password[i]<6 || password[i]=="@" || password[i]=="," || password[i]=="." || password[i]=="!") {
//         alert("Password shouldnot start with  number .please enter a valid password ")
//         break
//     }
// }


// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university ="University of Karachi";
// document.write(university.split(" "),"<br>");
// for (i=0;i<university.length;i++){
//     document.write(university[i],"<br>")
// } 



// 17. Write a program to display the last character of a user
// input.

// var str=prompt("Enter input:");
// document.write("User input:",str,"<br>")
// document.write("Last character of input :",str.charAt(str.length-1))

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str="The quick brown fox jumps over the lazy dog";


// var str1=str.toLowerCase().split(" ");
// var count=0;
// for (var i=0;i<str1.length;i++){
//     if(str1[i]=="the"){
//         count+=1;
        
//     }
// }
// document.write("Text:",str,"<br>");
// document.write("There are",count," occurrences of the word 'the' ");
// document.write(count)

                // Chap # 26-30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num=+prompt('Enter a number')
// document.write("Number is "+num+"<br>")
// document.write("Round off "+Math.round(num)+"<br>")
// document.write("Floor is "+Math.floor(num)+"<br>")
// document.write("Ceil is "+Math.ceil(num))

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num=+prompt('Enter a number')
// document.write("Number is "+num+"<br>")
// document.write("Round off "+Math.round(num)+"<br>")
// document.write("Floor is "+Math.floor(num)+"<br>")
// document.write("Ceil is "+Math.ceil(num))


// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// console.log("The absolute value of -4 is "+Math.abs(-4))

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

// var dice=Math.ceil(Math.random()*6)
// console.log(dice)


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var dice=Math.ceil(Math.random()*2)
// console.log(dice)
// if(dice==2){

//         console.log("Random coin value Heads")
// }
// else{
//         console.log("Random coin value tails")

// }


// 6. Write a program that shows a random number between 1 
// and 100 in your browser


// var dice=Math.ceil(Math.random()*100)
// console.log("Random No between 1 and 100 is "+dice)


// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var no=prompt("Enter your weight")
// console.log("the weight of user is "+parseFloat(no)+" kilograms"    )

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the use


// var dice=Math.ceil(Math.random()*10)
// var guess=+prompt("Enter the number to check")
// console.log(dice)
// if (dice===guess){
//         alert("Congratulations number is correct")
// }
// else{
//         alert("Wrong Number")
// }


// 1. Write a program that displays current date and time in 
// your browser.
// var a=new Date()
// console.log(a)

// 2. Write a program that alerts the current month in words. 
// For example December.

// var a =new Date();
// li=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
// console.log("Month is "+li[a.getMonth()])


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

// var a = new Date();
// var li=["sun","mon","tue","wed","thurs","fri","sat"]
// var day=li[a.getDay()];
// alert("Today is "+day)


// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today


// var a = new Date();
// var li=["sun","mon","tue","wed","thurs","fri","sat"]
// var day=li[a.getDay()];

// if (day=="sun" || day=="sat"){
//         alert("It is a fun day")
// }
// else{
//         alert("It is not a fun day")
// }


// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var a = new Date();
// // var li=["sun","mon","tue","wed","thurs","fri","sat"]
// // var day=li[a.getDay()];
// var date=a.getDate();
// // console.log(date)
// if (date<=15){
//         console.log("First fifteen days of month")
// }
// else{

//         console.log("Last days of month")
// }


// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var a=new Date()
// var b=new Date()
// console.log('milliseconds 1970 to 1997', b.getTime())
// b.setFullYear(1997)
// b.setDate(18)
// b.setMonth(4)
// console.log(b.getTime())
// console.log('milliseconds 1970 to now', a.getTime())


// var finalAge = a.getTime() - b.getTime()
// finalAge = finalAge / (1000 * 60 * 60 * 24 * 365)
// console.log(finalAge)

// b.setFullYear(1997)
// b.setDate(18)
// b.setMonth(4)
// console.log(b.getTime())


// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// var a = new Date();
// console.log(a)
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }


// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate

// var laterDate=new Date()
// laterDate.setDate(31)
// laterDate.setMonth(11)
// laterDate.setFullYear(2020)
// console.log(laterDate)

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015



// var date1 = new Date("5/18/2015");
// var date2 = new Date("6/10/2021");
//  console.log(date1.getTime())
//  console.log(date2.getTime())
// var timeDiff = date2.getTime() - date1.getTime();
 
// var daysDiff = timeDiff / (1000 * 3600 * 24);
 
// document.write(daysDiff+ " days have passed since June 18,2015")


// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var date1 = new Date("01/01/2015");
// var date2 = new Date("12/05/2015");
//  console.log(date1.getTime())
//  console.log(date2.getTime())
//  console.log(date1)
//  console.log(date2)
// var timeDiff = date2.getTime() - date1.getTime();
 
// var daysDiff = timeDiff / (1000);
 
// document.write(daysDiff+ " seconds have passed since June 18,2015")

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var a=new Date()
// var b=a.getHours();
// console.log("Current date is "+a+"<br>")
// a.setHours(b-1);
// console.log("1 hour ago it was "+a)


// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var a=new Date();
// var b=a.getFullYear();
// a.setFullYear(b-100);
// alert("100 years back date was "+a)


// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser

// var name=+prompt("Enter your age")
// var a=new Date();
// var b=a.getFullYear();
// console.log("Your age is  "+name)
// console.log("Current year is   "+b)
// console.log("Your birth year is  "+(b-name))

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current MonthDATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// var a=new Date();
// var net=416*16;
// var late=350;
// var gross=net+late;
// document.write("<h1>K-Electric Bill</h1><br>"+"Customer Name: <b>ABC Customer</b><br> Month : "+a.getMonth()+"<br>Number of Units: 416<br> Charges : 16<br>"+"Net Amount(Payable with in due date) : "+net+"<br>Late Payment Surcharges: "+late+"<br>Gross Payment (Payable after due date): "+gross)


                //Chap # 35-38


                     
// 1. Write a function that displays current date & time in your
// browser.

// function time(){
//         var a=new Date();
//         alert (a);
// }
// time();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// var a=prompt("Enter your First Name");
// var b=prompt("Enter your Last Name ");
// function greet(){
//         var c= a+" "+b;
//         alert("Hi! How are you!  "+c)
// }
// greet();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var a=+prompt("Enter first number");
// var b=+prompt("Enter Second Number");
// function add(){
//         var c=a+b;
//         alert (c);
// }
// add ();

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var x=+prompt("Enter a number");
// var y=+prompt("Enter secomd number");
// var z=prompt("Enter Operator");
// function cal(p,q,r){
//         if(r==="*"){
//                 var a=p*q;
//                 return a;
//         }
//         else if(r==="/"){
//                 var b=p/q;
//                 return b;
//         }
//         else if(r==="+"){
//                 var c=p+q;
//                 return c;
//         }
//         else if(r==="-"){
//                 var d=p-q;
//                 return d;
//         }
//         else{
//                 alert("Undefined!")
//         }
// }
// var j=cal(x,y,z);
// alert(x+" "+z+" "+y+" = "+j);

// 5. Write a function that squares its argument

// var x=+prompt("Enter anumber");
// function abc(){
//         var c=x*x;
//         alert (c);
// }
// abc(x);

// 6. Write a function that computes factorial of a number.

// var n=+prompt("Enter your number");
// var ans=n;
// function fact(num){
//         if(num==0|| num==1){
//                 return 1;
//         }
//         else{
//                 for (var i=num-1;i>=1;i--){
//                         ans=ans*i;
//                 }
//                 return(ans)
//         }

// }
// var c=fact(n);
// alert(c);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var x=+prompt("Enter a starting value");
// var y=+prompt("Enter last value");
// function value(p,q){
//         for (var i=p;i<=q;i++){
//          document.write(i+"<br>")
//         }
// }
// value(x,y)

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// var base=+prompt("Enter base");
// var perpen=+prompt("Enter perpendicular");
// function hyp(b,p){
//     var z=Math.sqrt(b*b+p*p)
//     alert(z)
// }
// hyp(5,10);


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// var x=+prompt("Enter height");
// var y=+prompt("Enter width");
// function rect(a,b){
//         var z=a*b;
//         alert("The area of rectangle is "+z)
// }
// rect(x,y)

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

//function palindrome(){
//    var word = prompt("Enter a word")
//    var reverse = "";
//    for(var i=word.length-1; i>=0; i--){
//        reverse += word[i]
//    }
    
//    if(reverse==word){
//        document.write("Given word is a palindrome")
//    }
//    else{
//        document.write("Given word is not a palindrome")
//    }
//}
//palindrome();

// /11. Write a JavaScript function that accepts a string as 
//a parameter and converts the first letter of each word of the string in upper case. 
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'

// function str(){
//     var string = prompt("Enter a string")
//     var word = " "
//     var check=" ";
//     for(var i =0 ; i<=string.length-1;i++){
//         if(i ==0){
//             document.write(string[i].toUpperCase())
//             word += string[i]
//         }
//         else if(string[i]==check){
//             document.write(string[i+1].toUpperCase())
            
//         }
//         else{
//             document.write(word[i])
        
//         }                                                                                                                                                                                                                                                                                                                                       

//     }
// }
// str();

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr

// var r=+prompt("Enter radius");
// function calccircumference(a){
//        var x=3.142;
//        var d= 2*x*a;
//        alert("The circumference of a circle is "+d);
// }
// calccircumference(r);
// function calcarea(b){
//         var y=3.142;
//         var c=y*b*b;
//         alert("The area of circle is "+c)
// }
// calcarea(r);


//chap 38-42


// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

// function power(a,b){
//         console.log('Ans is '+Math.pow(a,b))
// }
// power(2,4)

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.

// var year=+prompt("Enter any year")
// if (year%4 === 0){
//         alert(year+" is leap year")
// }
// else{
//         alert(year+" is not leap year")

// }


// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// var s;
// var a=2;
// var b=2;
// var c=2;
// function perimeter(a,b,c){
//         s=(a+b+c)/2
// }
// function area(s,a,b,c){

//         var area=s*(s-a)*(s-b)*(s-c)
//         console.log('Area is found to be '+area)
// }
// perimeter(a,b,c)
// area(s,a,b,c)

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction

// function mainFunction(m1,m2,m3){
//         var avg=average(m1,m2,m3)
//         var percent=percentage(m1,m2,m3)
//         console.log("Average is : "+avg+"\n Percentage is : "+percent )
// }

// function average(m1,m2,m3){
//         var avg=(m1+m2+m3)/3
//         return avg;
// }

// function percentage(m1,m2,m3){
//         var perc=((m1+m2+m3)/300)*100
//         return perc
// }


// mainFunction(90,94,99)

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now
// var count=-1;
// var a='Pakistan'
// function index(a){
//         for (var i=0;i<a.length;i++){
//                 if(a[i]==='n'){
//                         count++;
//                         console.log("n is present at index ",count," in Pakistan")
//                         break;
//                 }
//                 else{
//                         count++
//                 }
//         }
// }
// index(a)

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long


//ye sahi output nai deraha tha 
// var a = 'Pakistan is beautiful';

// function index(a) {
//         for (var i = 0; i < a.length; i++) {
//                 if (a[i] === 'a' || a[i] === 'i' || a[i] === 'o' || a[i] === 'e' || a[i] === 'u') {



//                         a.splice(a[i],1," ");
//                 }

//         }
//         console.log("After elimination the vowels the sentence is" + a)
// }
// index(a)


// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// function vowel() {
//         var text = 'Pleases reed this application and give me gratuity';
//         var flag = 0;
//         for (var i = 0; i < text.length; i++) {
//                 if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
//                         flag += 1;
//                         if (flag === 2) {
//                                 console.log(text[i - 1] + text[i])
//                         }
//                 }
//                 else {
//                         flag = 0;
//                 }
//         }
// }
// vowel();


// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

// var input=+prompt("Enter distance between two cities")
// function meters(inp){
//         console.log('Answer in meters is '+(inp*1000))
// }

// function feet(inp){
//         console.log('Answer in feet is '+(inp*3280.84))
// }

// function inches(inp){
//         console.log('Answer in inches is '+(inp*39370.1))

// }

// function centimeters(inp){
//         console.log('Answer in centimeter is '+(inp*100000))

// }

// meters(input)
// inches(input)
// feet(input)
// centimeters(input)


// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.


// var hours = +prompt("enter how many hours you worked")
// function overtime(hours) {
//         if (hours > 40) {
//                 console.log("Your overtime pay is " + (((hours - 40) * 12) * 3 / 4) + ' Rs')
//                 console.log('Pay is reduced because you do not work for fractional part of an hour')
//         }
// }
// overtime(hours)


// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.


var amount=+prompt("Enter amount to withdraw");
function cashier(amount){
var hundreds=Math.floor(amount/100);
var fifty=Math.floor((amount-(hundreds*100))/50);
var tens=Math.floor((amount-(hundreds*100)-(fifty*50))/10);

console.log('Cashier has to give '+hundreds+" hundred notes "+fifty+" fifty notes "+tens+" ten notes ")

}

cashier(amount)