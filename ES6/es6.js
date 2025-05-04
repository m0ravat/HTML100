window.onload = function(){
    const pi = 3.145 // cant change value
    
    function calcPi(r=10.23){
        const pi = r
        console.log(`The value of pi here is ${r}, not ${10 + 9}`)
    }
    calcPi(21)

    var x = 10
    if (x > 10){
        let x = 5
        console.log(x) // 5
    }
    console.log(x) // 10
}

function spread(){
    var names = ["Jack", "Joe", "John"] // ["Jack", "Joe", "John"]
    console.log(...names) // Jack Joe John

    var nums = [1, 2, 3]
    var nums2 = [...nums, 4, 5, 6] // [1,2,3,4,5,6]
}

function person(){
    var name = "Matthew"
    var age = 21

    var person = {
        firstName : name, 
        age : age, 
        lastName, dob, 
        chop(x){
            console.log("you chopped the enemy " + x + " times.")
        }
    }
    var personName = person.firstName
    console.log(person.chop(5))

    var printName = () => console.log(personName);
    printName();

    var printRan = name => console.log(name); // dont need brackets if one parameter
    printRan("Mark");

}