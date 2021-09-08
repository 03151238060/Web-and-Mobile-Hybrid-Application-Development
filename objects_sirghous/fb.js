function data() {
    var name = document.getElementById('name')
    var roll = document.getElementById('roll')

    var key = Math.random() * 923032;
    var Student = {
        name: name.value,
        roll: roll.value,
        key: key.toFixed()
    }
    // console.log(Student)
    // firebase.database().ref('student').set(Student)
    // firebase.database().ref('student').push(Student)
    // firebase.database().ref('student').child('mystudents/today').push(Student)
    // console.log(key.toFixed())
    firebase.database().ref('student/' + key.toFixed()).set(Student)
}

function getFirebaseData() {
    // firebase.database().ref('student').once('value',function(data){
    //     console.log(data.val());
    // })
    // firebase.database().ref('student/403923').once('value',function(data){
    //     console.log(data.val());
    // })

    firebase.database().ref('student').on('child_added', function (data) {
        console.log(data.val());
    })
}
getFirebaseData()

function removeFirebaseData() {
    firebase.database().ref('student/675679').remove();
}

// window.onload=removeFirebaseData()

function editFirebaseData(){
    firebase.database().ref('student/351105').set({
        name:"wajahat",
        roll:2334,
        key:351105
    })
}
editFirebaseData()