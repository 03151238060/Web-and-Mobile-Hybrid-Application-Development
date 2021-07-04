// var flag=0;
// var arr=['a','b','c','d','e']
// for (var i=0;i<arr.length;i++){
//     if(arr[i]==='b'){
//         flag=1;
//         alert(flag)
//         break;
//     }else{
//         flag=0; 
//     }
// }
// console.log(flag)

// var num=1.0000001;
// var round=Math.round(num)
// console.log(round)

// var cel=Math.ceil(num)
// console.log(cel)

// var cel=Math.floor(num)
// console.log(cel)


// string to number conversion

// var num="10.65";
// var converted = parseInt(num);
// console.log(converted)

// var num="10.65";
// var converted = parseFloat(num);
// console.log(converted)

// var numberNum = Number(num);
// console.log(numberNum)

// var plusnum = +num;
// console.log(plusnum)

//  Number to string conversion
// var num=4.6;
// var numtostring=num.toString()
// console.log(typeof(numtostring))

// var num=450000000000000;
// var numtostring=num.toLocaleString()//bech ma commas lagadega bas
// console.log(typeof(numtostring))
// console.log(numtostring)

// var num=4.9222222222222222222222;
// var short=num.toFixed(0);
// console.log(short)
// console.log(typeof(short))

// var a='hello';
// console.log(a.charAt(1))


// var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("ali");
// console.log(n)

// var randomnum=Math.random()//point ke baad 16 number dega
// console.log(Math.ceil(randomnum*6))

var user1=prompt("Enter name")
var user2=prompt("Enter name")
var user1_choice=prompt("User1 Choice")
user1_choice.toLowerCase();
if(user1_choice=='head'){
    var user2_choice='tail';
    
}
else{
    var user2_choice='head';
}


var toss=Math.floor(Math.random()*2)
// document.write(toss)
if(toss==1){

    if(user1_choice=='head'){
        document.write(user1,"wins the toss")
    }
    else{
        document.write(user2,"wins the toss")
    }
}
else {
    // document.write(false)
    if(user1_choice=='tail'){
        document.write(user1,"wins the toss")
    }
    else{
        document.write(user2,"wins the toss")
    }
}
console.log(toss)

