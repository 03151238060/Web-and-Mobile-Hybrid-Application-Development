function data(){
    var name=document.getElementById('name')
    var roll=document.getElementById('roll')

    var Student={
        name:name.value,
        roll:roll.value
    }
    // console.log(Student)
    firebase.database().ref('student').set(Student)
}
