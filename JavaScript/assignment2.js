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