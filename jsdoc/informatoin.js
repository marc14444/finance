let table = document.querySelector("table");
let tbody = document.querySelector("#tbody");
let data = localStorage.getItem("pretInfo");
data = JSON.parse(data);
let donner;
console.log("", data);


for (let i = 0;i<data.length; i++){

    donner = `
        <tr>
            <td>${data[i].nom}</td>
            <td>${data[i].prenom}</td>
            <td>${data[i].telephone}</td>
            <td>${data[i].adresseMail}</td>
            <td>${data[i].montantDeDemande}</td>
            <td>${data[i].message}</td>
        </tr>`

}
tbody.innerHTML = donner;
   
table.append(tbody)