// var heading = document.getElementById('heading');

// // var age, number, myName = "Majid"
// // function userData(name) {
// //     // heading.innerHTML = name;
// //     console.log("Name", name)
// //     console.log("AGE ", age)
// //     console.log("Number ", number)
// // }
// // userData(myName, 23, 2113456)



// // function myFunction(num, sign) {
// //     var number = parseInt(num)
// //     if (sign === '+') {
// //         return number + 10;
// //     } else if (sign === "-") {
// //         return number - 10;
// //     } else {
// //         return "Your sign operator not found";
// //     }

// // }

// // var getNumber = prompt("")// 5
// // var operator = prompt("")// 5
// // alert(myFunction(getNumber, operator))



// // for (let i = 0; i < 15; i++) {
// //     for (let j = 0; j < i; j++) {
// //         document.getElementById("a").innerHTML += "@";
// //     }
// //     document.getElementById("a").innerHTML += "<br/>";
// // }
//     document.getElementById('heading').innerHTML = "Majid"

// function makePattern(param) {
//     var pattern = "@";
//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < i; j++) {
//             pattern += param;
//         }
//         pattern += "<br/>";
//     }
//     document.getElementById('a').innerHTML = pattern;
//     // return pattern;
// }

// // document.getElementById('a').innerHTML = makePattern("@")
// // document.getElementById('b').innerHTML = makePattern("#")
// // document.getElementById('c').innerHTML = makePattern("$")











var user = {
    name: "Majid",
    num: 234675454,
    NIC: "3245650986048956349",
    callName: () => {
        return "Name: " + user.name + " And Number: " + user.num;
    },
    subject: ["Eng", "Math"]
}


user.name = "Haider";
user.language = "ENG";

// delete user.name

// LOOP FOR OBJECT
// for (const key in user) {
//     if (user.hasOwnProperty(key)) {
//         const element = user[key];
//         alert(element)
//     }
// }

// LOOP FOR ARRAY
for (let i = 0; i < user.subject.length; i++) {
    const element = user.subject[i];
    alert(element)
}
console.log(user.callName())














