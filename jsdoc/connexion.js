let boutton = document.querySelector("#connexion")
let formulaire = document.querySelector("#formulaire")
formulaire .addEventListener("submit", (e) =>{
    e.preventDefault();
    let userlist = JSON.parse(localStorage.getItem("tab_LS"))
    let result ;
    userlist.forEach((user) => {
        if (document.querySelector("#adresseMail").value == user.adresseMail && document.querySelector("#motDePasse").value === user.motDePasse){
            result = user
            console.log(result);
        }
    });
    if (typeof result !== "undefined"){
        localStorage.setItem("session", JSON.stringify(result))
        window.location.replace("./../htmldoc/connecter.html");
    }
    else{
        alert("introuvable")
         window.location.reload()
    }

     userlist.push(user)
    localStorage.setItem("tab_LS", JSON.stringify(userlist));
})
