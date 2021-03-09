function login() {
    let login = document.getElementById("pole_login").value;
    let haslo = document.getElementById("pole_haslo").value;

    const accountList = getFromLocalStorage();

    for (let i = 0; i < accountList.length; i++) {
        if (accountList[i].login == login && accountList[i].haslo == haslo) {
            alert("Zalogowano poprawnie")
            window.location = "projekt2.html";
            return;
        }
    }

    alert("Błędne dane przy logowaniu!")
}

function getFromLocalStorage() {
    if ("accountList" in localStorage) {
        return JSON.parse(localStorage.getItem("accountList"));
    } else {
        return new Array();
    }
}


