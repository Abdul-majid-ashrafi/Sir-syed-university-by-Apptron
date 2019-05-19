function saveData() {
    let userName = document.getElementById('userName');
    let email = document.getElementById('email');
    let user = {
        userName: userName.value,
        email: email.value
    }
    localStorage.setItem('info', JSON.stringify(user));
}


function submitResume() {
    let user = JSON.parse(localStorage.getItem("info"));
    if (!user || (user && !user.email || !user.userName)) {
        return;
    }

    let div = document.createElement("DIV");
    let cvHeading = document.createElement("H1");
    let nameHeading = document.createElement("H2");
    let emailHeading = document.createElement("H2");
    let paragraph = document.createElement("p");

    let cvHeadingText = document.createTextNode("Resume here....");
    let nameHeadingText = document.createTextNode(user.userName);
    let emailHeadingText = document.createTextNode(user.email);
    let paragraphText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ..")

    cvHeading.append(cvHeadingText);
    paragraph.append(paragraphText);
    nameHeading.append(nameHeadingText);
    emailHeading.append(emailHeadingText);

    div.append(cvHeading);
    div.append(nameHeading);
    div.append(emailHeading);
    div.append(paragraph);


    document.getElementById('container').append(div)
}

submitResume()