flag=0;
var abc=['a','b','c','d']
for(var i=0;i<abc.length;i++){
    if(abc[i]=='ds'){
        flag=1;
        break;
    }
}
console.log(flag)

var no=1.502;
var roundno=Math.round(no)
console.log(roundno)
console.log(Math.floor(no))
console.log(Math.ceil(no))

//string to number conversion

var no="10.34"
console.log(parseInt(no)    )//parse ignores  string value like alphabets in number
console.log(parseFloat(no)    )
console.log(Number(no)    )
console.log(+no    )

var no=10.34;
console.log(no.toString())
var news=1000000000000000000;
console.log(news.toLocaleString())
nes=23.54435;
console.log(nes.toFixed(1))

var a='wajahat'
console.log(a.charAt(1))//is index pr kon ha
//index of ye kis index pr ha or index of usse pehle tak ka index dega

var b='hey this is wajahat ahmed from ned university'
console.log(b.indexOf('ned'))

var rNo=Math.random();
console.log(rNo )
console.log(rNo*6 )
// for ludo (dice to be rolled)
console.log(Math.floor(rNo*6) )

//For coin (Head or Tail)
console.log(Math.round(rNo))

var user1=prompt('Enter  user1 your name')
var user2=prompt('Enter  user2 your name')
var user1_choice=prompt('Enter user1 your choice ')
if(user1_choice==='head'){
    var user2_choice='tail';
}
else{
    var user2_choice='head';
}

var toss=Math.round(Math.random());
if(toss==1){
    if(user1_choice=='head'){
        alert(user1 +' won the toss')
    }
    else{
        alert(user2 +' won the toss')
    }
}
else{
    if(user1_choice=='tail'){
        alert(user1 +' won the toss')
    }
    else{
        alert(user2 +' won the toss')
    }
}
console.log(toss)
console.log("Hello World")