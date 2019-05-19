function signup() {
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('password');

    const user = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value,
    }
    let isAlreadyExist = false;
    let users = localStorage.getItem('user');
    if (!users) {
        users = [];
    } else {
        // console.log("after parse ",users)
        users = JSON.parse(users);
        for (let i = 0; i < users.length; i++) {
            const eachUser = users[i];
            if (eachUser.userEmail == user.userEmail) {
                isAlreadyExist = true;
                // break;
            }
        }
    }
    // console.log("after parse ",users)
    if (isAlreadyExist) {
        document.getElementById('error').innerHTML = "This email already exist.!";
        setTimeout(() => {
            document.getElementById('error').innerHTML = "";
        }, 5000);
    } else {
        users.push(user);
        localStorage.setItem('user', JSON.stringify(users));
        document.getElementById('error').innerHTML = "Account has been create succefuly";
        userEmail.value = ""
        userName.value = ""
        userPassword.value = "";
        setTimeout(() => {
            document.getElementById('error').innerHTML = "";
        }, 5000);
    }
}








function login() {
    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('password');

    let isExist = false;
    let users = localStorage.getItem('user');
    if (!users) {
        document.getElementById('error').innerHTML = "This email not exist please create your account.!";
        setTimeout(() => {
            document.getElementById('error').innerHTML = "";
        }, 3000);
    } else {
        users = JSON.parse(users);
        for (let i = 0; i < users.length; i++) {
            const eachUser = users[i];
            if (eachUser.userEmail == userEmail.value) {
                isExist = true;
            }
        }
    }
    if (isExist) {
        document.getElementById('error').innerHTML = "lofin succefuly";
        userEmail.value = ""
        userPassword.value = "";
        setTimeout(() => {
            document.getElementById('error').innerHTML = "";
        }, 3000);
    } else {
        document.getElementById('error').innerHTML = "This email Not exist.!plea............";
        setTimeout(() => {
            document.getElementById('error').innerHTML = "";
        }, 3000);

    }
}