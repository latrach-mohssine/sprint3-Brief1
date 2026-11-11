// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.

import { getdata } from "./data.js";
let caracters = []

caracters = await getdata();

console.log(caracters)
// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------
const typeColors = {
  Plante: "#DCFCE7",
  Feu: "#FEE2E2",
  Eau: "#DBEAFE",
  Électrik: "#FEF9C3",
  Normal: "#F3F4F6",
  Glace: "#80DEEA",
  Ténèbres: "#B8B5E8"
};
const container = document.getElementById("character-container");
const template = document.getElementById("character-template");
function displayCharacters(list){
    container.replaceChildren()

list.forEach(character => {
   
  const copy = template.content.cloneNode(true)
  const card = copy.querySelector("article");
  card.dataset.id = character.id;
  const image = copy.querySelector(".character-image")
const background = copy.querySelector(".character-background")
const bckground = copy.querySelector(".bg-logo")
  image.src = character.image
  image.alt = character.name
background.style.backgroundColor = typeColors[character.type] || "#F3F4F6"
bckground.style.backgroundColor = typeColors[character.type] || "#F3F4F6"
   copy.querySelector(".character-id").textContent = `${character.id}`;
   copy.querySelector(".character-name").textContent = character.name;
   copy.querySelector(".character-type").textContent = character.type;
   copy.querySelector(".character-level").textContent = `${character.level}`;
    container.append(copy);
})};
displayCharacters(caracters)
// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------
const detail = document.getElementById("detail");
 detail.style.backgroundColor =  "#F3F4F6";
function showDetails(character) {

const detailId = document.getElementById("detail-id");
const detailType = document.getElementById("detail-type");
const detailDescription = document.getElementById("detail-text");
const detail = document.getElementById("detai-bg-image");


  detailName.textContent = character.name;
  detailImage.src = character.image;
  detailImage.alt = character.name;
  detailId.textContent = character.id;
  detailType.textContent = character.type;
  detailDescription.textContent = character.description;


detailType.style.backgroundColor =typeColors[character.type] || "#F3F4F6";
  detail.style.backgroundColor = typeColors[character.type] || "#F3F4F6";
 const attackPercentage = Math.min(
    (character.stats.attack / 155) * 100,
    100);
  const hpPercentage = Math.min(
    (character.stats.hp / 155) * 100,
    100
  );
   const dfPercentage = Math.min(
    (character.stats.defence / 155) * 100,
    100
  );
  akBar.style.width = `${attackPercentage}%`;
  hpBar.style.width = `${hpPercentage}%`;
  dfBar.style.width = `${dfPercentage}%`;

}

const detailName = document.getElementById("detail-name");

const detailImage = document.getElementById("detail-image");

const hpBar = document.getElementById("detail-hp-bar");

const akBar = document.getElementById("detail-attack-bar");

const dfBar = document.getElementById("detail-defence-bar");

const paneuDaitail = document.getElementById("detail")

const removeBtn = document.getElementById("detail-x")

const parent = paneuDaitail.parentElement
 paneuDaitail.remove()
container.addEventListener("click", event => {
  if (event.target.closest("button")) return;

  const card = event.target.closest("article");


  if (!card || !container.contains(card)) return;

  const selectedCharacter = caracters.find(character => {
    return character.id === card.dataset.id;

  });

  if (selectedCharacter) {
    parent.appendChild(paneuDaitail);
    showDetails(selectedCharacter);
  }
 
});
// const restoreBtn = document.getElementById("")

const card = document.getElementById("p-detail")


removeBtn.addEventListener("click", () => {
 paneuDaitail.remove()
 
  
})

// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------
// let names = ""
// const searchinput = document.getElementById("search")
// searchinput.addEventListener("input", eva =>{
//   names = eva.target.value.toLowerCase()
//   const result = []
//   for(const nam of caracters){
  
//     if(nam.name.toLowerCase().includes(names) === true){
//     result.push(nam)
//     }
//   }
//   displayCharacters(result)
// })
// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------
const filterCaracters = document.getElementById("filters")
let typeSelected = "Tous"
filterCaracters.addEventListener("click",eventfilter =>{
  const button = eventfilter.target.closest("button");
  if(!button || !filterCaracters.contains(button)) return;
   typeSelected = button.dataset.type;
 typeSelected = button.dataset.type;

updateCharacters();

}
)
let names = ""
const searchinput = document.getElementById("search")

function updateCharacters() {
  names = searchinput.value.toLowerCase();
  const result = []
  for(const nam of caracters){
  

    if(nam.name.toLowerCase().includes(names) &&(typeSelected === "Tous" || nam.type === typeSelected)) {
  result.push(nam);
}
  }
  displayCharacters(result)
}
searchinput.addEventListener("input", updateCharacters);
// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
