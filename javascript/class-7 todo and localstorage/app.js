// var obj = {
//     userName: "Haider",
//     age: 23,
//     gender: "male",
//     num: 234567890,
//     address: "Khi",
//     Jobtitie: "dev"
// }

// // console.log(obj)
// var convertToJson = JSON.stringify(obj);
// // console.log(convertToJson)
// localStorage.setItem("user", convertToJson)

// let data = localStorage.getItem("user");
// var convertToParse = JSON.parse(data)

// console.log(convertToParse);
// console.log(convertToParse.gender);


// JSON.stringify(obj)
// {"userName":"Haider",
// "age":23,
// "gender":"male",
// "num":234567890,
// "address":"Khi",
// "Jobtitie":"dev"
// }

// JSON.parse()
// {
//     userName: "Haider",
//     age: 23,
//     gender: "male",
//     num: 234567890,
//     address: "Khi",
//     Jobtitie: "dev"
// }





















// function update() {
//     var input1 = document.getElementById("input1").value;
//     document.getElementById("input2").value = input1;
// }




function addTodo() {
    var inputText = document.getElementById("inputField");
    var makeNewListItem = document.createElement("LI");
    var makeNewTextForListItem = document.createTextNode(inputText.value);
    makeNewListItem.append(makeNewTextForListItem);
    document.getElementById("list").append(makeNewListItem);
    inputText.value = "";
}

















function addData() {
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('email').value;
    var table = document.getElementById('renderTable'); // mean table

    var newRow = document.createElement('tr'); // table row
    var userNameElement = document.createElement('td'); // table data // td
    var emailElement = document.createElement('td'); // table data

    var nameText = document.createTextNode(userName); // value of text
    var emailText = document.createTextNode(userEmail);

    userNameElement.appendChild(nameText);// <td>value with text</td>
    emailElement.appendChild(emailText);

    newRow.appendChild(userNameElement);
    newRow.appendChild(emailElement);
    table.appendChild(newRow);
}















