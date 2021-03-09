
let fieldStates = [false, false, false, false]

function validatePassword(id, value) {

    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (isPassword.test(value)) {
        fieldStates[0] = true;
        document.getElementById("pole_powtorz_haslo").disabled = false;
        document.getElementById(id).style.background = "white";
        checkForm()
    } else {
        fieldStates[0] = false;
        document.getElementById("pole_powtorz_haslo").disabled = true;
        document.getElementById(id).style.background = "red";
        checkForm()
    }
}

function validateSecondPassword(id, value) {
    if (value == document.getElementById("pole_haslo").value) {
        fieldStates[1] = true;
        document.getElementById(id).style.background = "white";
        checkForm()
    } else {
        fieldStates[1] = false;
        document.getElementById(id).style.background = "red";
        checkForm()
    }
}

function validatePhone(id, value) {
    const isTelefon = /^\+48\d{9}$/;
    if (isTelefon.test(value)) {
        fieldStates[2] = true;
        document.getElementById(id).style.background = "white";
        checkForm()
    } else {
        fieldStates[2] = false;

        document.getElementById(id).style.background = "red";
        checkForm()
    }
}

function validateNumber(id, value) {
    const isNumber = new RegExp('^[0-9]{2}-[0-9]{3}$');
    if (isNumber.test(value)) {
        fieldStates[3] = true;
        document.getElementById(id).style.background = "white";
        checkForm()
    } else {
        fieldStates[3] = false;
        document.getElementById(id).style.background = "red";
        checkForm()
    }
}

function checkForm() {
    for (let index = 0; index < fieldStates.length; index++) {
        if (fieldStates[index] == false) {
            document.getElementById("Zarejestruj").disabled = true;
            return
        }
    }
    document.getElementById("Zarejestruj").disabled = false;
}

function register() {
    let login = document.getElementById("pole_login").value;
    let email = document.getElementById("pole_email").value;
    let haslo = document.getElementById("pole_haslo").value;
    let powtorz_haslo = document.getElementById("pole_powtorz_haslo").value;
    let telefon = document.getElementById("pole_telefon").value;
    let kod = document.getElementById("pole_kod").value;
    const account = new Account(login, email, haslo, telefon, kod);
    save(account);
    alert("Zarejestrowano pomyślnie!");
    window.location = "projekt2.html";
    return;

}

function save(account) {
    let list = getFromLocalStorage();
    list.push(account);
    localStorage.setItem("accountList", JSON.stringify(list));
}

function getFromLocalStorage() {
    if ("accountList" in localStorage) {
        return JSON.parse(localStorage.getItem("accountList"));
    } else {
        return new Array();
    }
}

class Account {
    constructor(login, email, haslo, telefon, kod) {
        this.login = login;
        this.email = email;
        this.haslo = haslo;
        this.telefon = telefon;
        this.kod = kod;
    }
}