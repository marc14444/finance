let boutton = document.querySelector("#buttonn")
    boutton.addEventListener("click", () =>{
    let userlist = JSON.parse(localStorage.getItem("tab_LS")) || []
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let datesDenaissance = document.querySelector("#datesDenaissance").value;
    let adresse = document.querySelector("#adresse").value;
    let nationalite= document.querySelector("#nationalite").value;
    let profession = document.querySelector("#profession").value;
    let adresseMail = document.querySelector("#adresseMail").value;
    let motDePasse = document.querySelector("#motDePasse").value;
    let codeBanque = document.querySelector("#codeBanque").value;
    let codeGuichet = document.querySelector("#codeGuichet").value;


    let user = {

        nom:nom,
        prenom:prenom,
        datesDenaissance:datesDenaissance,
        adresse:adresse,
        nationalite:nationalite,
        profession:profession,
        telephone:telephone,
        adresseMail:adresseMail,
        motDePasse:motDePasse,
        confirmationMotDePasse:confirmationMotDePasse,
        codeBanque:codeBanque,
        codeGuichet:codeGuichet

    };
    
    userlist.push(user);
    localStorage.setItem("tab_LS", JSON.stringify(userlist));
});

