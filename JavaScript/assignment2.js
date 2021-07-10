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