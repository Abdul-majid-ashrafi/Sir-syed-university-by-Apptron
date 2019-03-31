
// var student1 = "Ali";
// var student2 = "Sami";
// var student3 = "Aini";
// var student4 = "Kainat";
// var student5 = "Jamil";
// var student6 = "Hani";



// var students = ["Ali", "Sami", "Aini", "Kainat", "Jamil"];


// // alert(students.join("$"))
// console.log(students.join(" "))





// alert(students);    // Ali,Sami,Aini,Kainat,Jamil
// alert(students[0]); // Ali
// alert(students[1]); // Sami
// alert(students[2]); // Aini
// alert(students[3]); // Kainat
// alert(students[4]); // Jamil


// /** array definition **/
// var arr = [];           // JS literal notation to define an array
// var arr = new Array();  // JS object notation to define an array


// /** length of an array or total number of elements **/
// alert(students.length); //5

// var arr = [];
// alert(arr.length); //0




// /** array of strings **/
// var students = ["Ali", "Sami", "Kainat", "Jamil"]; // 4 - 1 = 3
// // alert(students.indexOf("Sami"))
// // alert(students[lenght - 2])

// /** array of numbers **/
// var scores = [50, 70, 40, 80];

// /** array of booleans **/
// var flags = [true, false];

// /** mixed array **/
// var mixedArray = ["Ali", 80, true];
// var userProfile = ["alikhan", 19, true];











// /** updating array elements **/
// var fruits = ["Mango", "Peach", "Banana"];
// alert(fruits[0]);

// fruits[fruits.length] = "Orange";
// fruits[fruits.length] = "Apple";
// // alert(fruits[0]);
// alert(fruits);













/** Array methods **/

/*
push      = Add an element to end of an array
pop       = Removes last element of an array

unshift   = Add an element to start of an array
shift     = Removes first element of an array

*/


// /** push **/

// var fruits = ["Mango", "Peach", "Banana"];
// document.write("<br><h4>push</h4>");
// document.write("<br>Fruits: " + fruits);
// fruits.push(["Apple"]);
// document.write("<br>Fruits: " + fruits);
// fruits.push("Water Melon", "Grapes", "Melon");
// document.write("<br>Fruits: " + fruits);
// fruits.push("Grapes");
// document.write("<br>Fruits: " + fruits);
// document.write("<br>Total fruits " + fruits.length);

// /** an alternate way to push in an array **/

// var fruits = ["Apple", "Orange"];
// document.write("<br>Fruits: " + fruits);
// fruits[fruits.length] = "Mango";
// fruits[fruits.length] = "Banana";
// document.write("<br>Fruits: " + fruits);


// /** pop **/

// var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
// document.write("<br><h4>pop</h4>");
// document.write("<br>Fruits: " + fruits);
// fruits.pop();
// document.write("<br>Fruits: " + fruits);
// fruits.pop();
// fruits.pop();
// document.write("<br>Fruits: " + fruits);



// /** unshift **/

// var fruits = ["Mango", "Peach", "Banana"];
// document.write("<br><h4>unshift</h4>");
// document.write("<br>Fruits: " + fruits);
// fruits.unshift("Apple");
// document.write("<br>Fruits: " + fruits);
// fruits.unshift("Water Melon", "Grapes", "Melon");
// document.write("<br>Fruits: " + fruits);
// fruits.unshift("Grapes");
// document.write("<br>Fruits: " + fruits);
// document.write("<br>Total fruits " + fruits.length);


// /** shift **/

// var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
// document.write("<br><h4>shift</h4>");
// document.write("<br>Fruits: " + fruits);
// fruits.shift();
// document.write("<br>Fruits: " + fruits);
// fruits.shift();
// fruits.shift();
// document.write("<br>Fruits: " + fruits);


// console.log(fruits);




// splice    = Add/Remove array elements at/from any position
// slice     = copy an array
// indexOf   = find index or position of a specific element



// /** splice **/
// /*
//     fruits.splice(index, noOfElementsToRemove, elementsToAdd);
// */

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// document.write("<br><h4>splice</h4>");
// document.write("<br>Fruits: " + fruits);
// fruits.splice(2, 1);
// document.write("<br>Remove Fruit(s): " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// fruits.splice(2, 0, "Apple");
// document.write("<br>Add Fruit(s): " + fruits);


// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// fruits.splice(2, 0, "Apple", "Orange", "Melon");
// document.write("<br>Add Multiple Fruits: " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// var i = fruits.indexOf("Grapes");
// if (i !== -1) {
//     fruits.splice(i, 1, "Apple");
//     document.write("<br>Add & Remove Fruit(s): " + fruits);
// } else {
//     document.write("This Element does not exist ");
// }





// /** indexOf **/

// var fruits = ["orange", "banana", "apple"];
// alert(fruits.indexOf("banana"));    // 1
// alert(fruits.indexOf("apple"));     // 2
// alert(fruits.indexOf("peach"));     // -1





// /** slice **/
// /*
//  fruits.slice(startIndex, endIndex+1);
//  */

// var fruits = ["Mango", "Grapes", "Peach", "Banana", "Orange"];
// document.write("<br><h4>slice</h4>");
// document.write("<br>Fruits: " + fruits);

// var newFruits = fruits.slice(2, 4);
// document.write("<br>Copy Fruit(s): " + newFruits);


// /** multidimensional array **/

// var multi = [[], [], []];
// alert(multi.length); //3

// var multi = [[1, 2], [3, 4], [5, 6]];
// alert(multi.length);    // 3
// alert(multi[0]);        // 1,2
// alert(multi[1]);        // 3,4
// alert(multi[2]);        // 5,6
// alert(multi[0].length); // 2

// alert(multi[0][0]); // 1
// alert(multi[0][1]); // 2
// alert(multi[1][0]); // 3
// alert(multi[1][1]); // 4
// alert(multi[2][0]); // 5
// alert(multi[2][1]); // 6


