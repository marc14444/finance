let bouton = document.querySelector(".bouton");
    bouton.addEventListener("click",(e)=>{
        e.preventDefault(e)
        let demandePret = JSON.parse(localStorage.getItem("pretInfo")) || []
        let nom = document.getElementById("nom").value;
        let prenom = document.getElementById("prenom").value;
        let dates = document.getElementById("dates").value;
        let adresse = document.getElementById("adresse").value;
        let nationalite = document.getElementById("nationalite").value;
        let profession = document.getElementById("profession").value;
        let telephone = document.getElementById("telephone").value;
        let adresseMail = document.getElementById("adresseMail").value;
        let PhotoComplet = document.getElementById("PhotoComplet").value;
        let numeroDeCarteDidentite = document.getElementById("numeroDeCarteDidentite").value;
        let NomDeLaMereOuDuPere = document.getElementById("NomDeLaMereOuDuPere").value;
        let situationMatrimoniale = document.getElementById("situationMatrimoniale").value;
        let codePostal = document.getElementById("codePostal").value;
        let adresseDuDomicile = document.getElementById("adresseDuDomicile").value;
        let montantDeDemande = document.getElementById("montantDeDemande").value;
        let message = document.getElementById("message").value;

        let utilisateur = {
            nom:nom,
            prenom:prenom,
            dates:dates,
            adresse:adresse,
            nationalite:nationalite,
            profession:profession,
            telephone:telephone,
            adresseMail:adresseMail,
            PhotoComplet:PhotoComplet,
            numeroDeCarteDidentite:numeroDeCarteDidentite,
            NomDeLaMereOuDuPere:NomDeLaMereOuDuPere,
            situationMatrimoniale:situationMatrimoniale,
            codePostal:codePostal,
            adresseDuDomicile:adresseDuDomicile,
            montantDeDemande:montantDeDemande,
            message:message
        }
        demandePret.push(utilisateur);
        localStorage.setItem("pretInfo", JSON.stringify(demandePret));
        alert("votre demande a été effectuer avec succes")


       window.location.href = "../htmldoc/pret.html";
    })
