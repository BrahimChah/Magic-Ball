let phrases = ["Essaye plus tard",
  "Essaye encore",
  "Pas d'avis",
  "C'est ton destin",
  "Le sort en est jeté",
  "Une chance sur deux",
  "Repose ta question",
  "D'après moi oui",
  "C'est certain",
  "Oui absolument",
  "Tu peux compter dessus",
  "Sans aucun doute",
  "Très probable",
  "Oui",
  "C'est bien parti",
  "C'est non",
  "Peu probable",
  "Faut pas rêver",
  "N'y compte pas",
  "Impossible" ];

window.onload = function (){
  let input = document.getElementById("bouton");
  input.addEventListener("click", magicBall);
  function magicBall() {
    hasard = Math.floor(Math.random()*20);
    reponse = document.createElement('p');
    reponse.textContent = phrases[hasard];
    if (input.after != null) {
      input.nextSibling.remove();
      input.after(reponse);
    }else {
      input.after(reponse);
    }
  }
}