const admin = [
    {
        email: "amanijeanmarc41@gmail.com",
        motDePasse: "imbecile1"
    }
]
localStorage.setItem("dataAdmin", JSON.stringify(admin))

let boutton = document.querySelector("#connexion")
let formulaire = document.querySelector("#formulaire")
formulaire .addEventListener("submit", (e) =>{
    e.preventDefault();
    let userlist = JSON.parse(localStorage.getItem("tab_LS"))
    let dataAdmin = JSON.parse(localStorage.getItem("dataAdmin"))
    let result ;
    let verifAdmin;
    // let verifAdmin = dataAdmin.find(emailInput => emailInput.value === dataAdmin.email && pwdInput.value === dataAdmin.motDePasse)


    // RECHERCHE  ET VERIF DE ADMIN 
    dataAdmin.forEach((admin) => {
        if (document.querySelector("#adresseMail").value === admin.email && document.querySelector("#motDePasse").value === admin.motDePasse){
            verifAdmin = admin
            console.log(verifAdmin);
        }
    });
    // RECHERCHE  ET VERIF DE USER 
    userlist.forEach((user) => {
        if (document.querySelector("#adresseMail").value == user.adresseMail && document.querySelector("#motDePasse").value === user.motDePasse){
            result = user
            console.log(result);
        }
    });

    if (typeof verifAdmin === 'object') {
        window.location.replace("./../htmldoc/dashboard.html");
    } else if (typeof result === "object") {
        localStorage.setItem("session", JSON.stringify(result))
        window.location.replace("./../htmldoc/connecter.html");
    }else{
        alert("introuvable")
        window.location.reload()
    }



    // console.log(typeof verifAdmin);
    // if (typeof verifAdmin != 'undefined') {
    //     window.location.replace("./../htmldoc/dashboard.html");
    // }

    // if (typeof result !== "undefined"){
    //     localStorage.setItem("session", JSON.stringify(result))
    //     window.location.replace("./../htmldoc/connecter.html");
    // }

    //  userlist.push(user)
    // localStorage.setItem("tab_LS", JSON.stringify(userlist));
})
