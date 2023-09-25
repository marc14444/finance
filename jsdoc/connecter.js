let userCon = JSON.parse(localStorage.getItem("session"));
let balise = document.getElementById("affich");
console.log(userCon.nom)
balise.innerText = userCon.nom;

function logout() {
    localStorage.removeItem("session");
}