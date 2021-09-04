function Student (name,rollno){
    this.name=name;
    this.rollno=rollno;
    // this.getname=function(){
    //     return this.name;
    // }
}

Student.prototype.getName=function(){
    return this.name;
}

// constructor is a function which helps us  to make objects in very 
// convienient way so that time and duplication of code is reduced.
var student1=new Student("Wajahat",234);
var student2=new Student("Ahmed",467);
console.log(student1.getName())

console.log("rollno" in student2)
// to check whether roll no is present in student2 or not

for(var prop in student2){
    console.log(student2[prop]);
}
console.log(student2.hasOwnProperty("name"))
