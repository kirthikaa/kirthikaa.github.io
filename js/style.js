function fonctionRequeteApi(url, elementID){
  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById(elementID).innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function homePageLoading() {
    url = 'https://bitcoin.mubiz.com/info';
    elementID = 'info';
    fonctionRequeteApi(url, elementID);

    url = 'https://bitcoin.mubiz.com/blockchaininfo';
    elementID = 'blockchaininfo';
    fonctionRequeteApi(url, elementID);

    url = 'https://bitcoin.mubiz.com/mininginfo';
    elementID = 'mininginfo';
    fonctionRequeteApi(url, elementID);

    url = 'https://bitcoin.mubiz.com/peerinfo';
    elementID = 'peerinfo';
    fonctionRequeteApi(url, elementID);

}
function VerificationMail(){
/*var email = document.getElementById("mail");
email.addEventListener("keyup",function (event)
{
  if(email.validity.typeMismatch){
    email.setCustomValidity("Saisir une adresse mail valable.");
  } else {
    email.setCustomValidity("Adresse mail valide");
  }
});*/

var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("keyup", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (email.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que le champ email est valide.
  if (!email.validity.valid) {

    // S'il est invalide, on affiche un message d'erreur
    error.innerHTML = "Veuillez saisisr une adresse e-mail correcte SVP.";
    error.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);}
