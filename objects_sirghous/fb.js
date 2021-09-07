function data(){
    var name=document.getElementById('name')
    var roll=document.getElementById('roll')

    var key=Math.random()*923032;
    var Student={
        name:name.value,
        roll:roll.value,
        key:key.toFixed()
    }
    // console.log(Student)
    // firebase.database().ref('student').set(Student)
    // firebase.database().ref('student').push(Student)
    // firebase.database().ref('student').child('mystudents/today').push(Student)
    // console.log(key.toFixed())
    firebase.database().ref('student/'+key.toFixed()).set(Student)
}

function getFirebaseData(){
    firebase.database().ref('student').once('value',function(data){
        console.log(data.val());
    })
}
getFirebaseData()
