            // CHAP # 1

// alert("Good Morning");
// alert("Thanks for your input");

                // CHAP # 2

// var name="Wajahat";
// var nationality;
// national  ity="Pakistan";
// alert(name)
// alert(nationality)

                // CHAP # 3

// var weight=25;
// console.log(weight+150);//==175

// var originalNo=100;
// var newNo=originalNo+50;
// console.log(newNo)

// var originalNo=23;
// var newNo=45;
// var totalNo=originalNo+newNo;
// console.log(totalNo)

// var originalNo="23";
// var newNo=45;
// var totalNo=originalNo+newNo;//concatenate hogaya
// console.log(totalNo)

// // var caset=144;
// // alert(caset);

//             // CHAP # 4
//             // It contains variable names are  legal or not

//             // CHAP # 5

// var newNo=12;
// var newNo1=54;

// var mult=newNo*newNo1;
// var add=newNo+newNo1;
// var sub=newNo-newNo1;
// var divide=newNo/newNo1;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(divide);


//             // CHAP # 6

// var num=4;
// var newnum=num++;
// console.log(num,"newnum is",newnum)

// var num=4;
// var newnum=++num;
// console.log(num,"newnum is",newnum)

// var num=4;
// var newnum=num--;
// console.log(num,"newnum is",newnum)

// var num=4;
// var newnum=--num;
// console.log(num,"newnum is",newnum)

//             //Chap # 7

// var total=1+3*4;
// console.log(total)

// total=1+(3*4);
// console.log(total)

// total=(2+5)*(3+6) //Mathematics rules will be followed
// console.log(total)

//             //Chap # 8

// var userName="Wajahat"
// console.log("Thanks for your input "+userName);

// var message="Go and Learn Programming";
// console.log(userName+" "+message)

// var banger="!";
// var customMess=userName+" "+message+banger;
// console.log(customMess);

// console.log("2 plus 2 equals to "+"2"+"2");

//             //Chap # 9

// var spec=prompt("Your Species? ","human")
// var noofcats=+prompt("How many cats?")
// var toomanycats=noofcats+1;
// document.write(toomanycats)

//             //Chap # 10

// var x=prompt("Where does the ishaq lives?")
// if(x=="karachi"){
//     alert("Correct")
// }
// else{
//     alert("Incorrect")
// }

//Chap # 44 'Events'

function popup(message){
    alert(message)
}

function greetUser(){
    alert('Thanks for using our website')
}

function checkAddress(fieldId){
    var email=document.getElementById(fieldId).value;
    if (email==="")
    {
        alert("Email is required")
    }
}

function fillCity(){
    var zip=document.getElementById('zip').value;
    var city;
    switch(zip){
        case "1000":
            city="Karachi"
            break;
        case "2000":
            city="Lahore"
            break;
        case "3000":
            city="Multan"
            break;
        case "4000":
            city="Islamabad"
            break;
        default:
            city="Peshawar"
    }
    // alert(city)
    document.getElementById('city').value=city
}