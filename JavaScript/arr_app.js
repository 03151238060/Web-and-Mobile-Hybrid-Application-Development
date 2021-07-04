var cities=["karachi","lahore","islamabad","multan","Quetta"]
console.log("Welcome to "+cities[3])

var mix=[1,"wajahat",23.54,true]
console.log(mix[3])

var pets=[]
pets[0]="billi mao"
pets[1]="tota"
pets[2]='bakra'
console.log(pets)
pets.pop()//end se remove krega
console.log(pets)
pets.push("cow","camel")// end se add krega
console.log(pets)
pets.shift();// start se remove krega
console.log(pets)
pets.unshift("billi mao","chakor")//start ma add krega
console.log(pets)

pets.splice(2,0,"parrot","bird","kawoa")//deleting and inserting inside the array 
console.log(pets)
var remo=pets.splice(2,2)
console.log(remo)
// pets.splice(2)
// console.log(pets)


