let audio = document.getElementById("n7");
let soundOne22 = document.getElementById("one22");

function myFunction(event) {
    var x = event.which || event.keyCode;
    console.log("key code is " + x)
    if (x === 97) {
        audio.play()
    } else if (x === 122) {
        soundOne22.play()
    }
}

