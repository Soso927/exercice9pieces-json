// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// Création des balises pour chaque pièce
for (let i = 0; i < pieces.length; i++) {
    // Récupèration de l'article
    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
    const piecesdescription = document.createElement("article");
    piecesdescription.innerText = article.description ?? "Description non disponible";
    
    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    //Rattachement de nos balises au DOM
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
    pieceElement.appendChild(piecesdescription);
}

//gestion des boutons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
});
 
const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
   console.log(piecesFiltrees)
});

const boutondescription = document.querySelector(".btn-description");

boutondescription.addEventListener("click", function(){
    const piecesfiltre = pieces.filter(function (piece){
        return piece.description;
    });
    console.log(piecesfiltre);
});

boutonDecroissant.addEventListener("click", function(){
    const pieceordonnes = Array.from(pieces);
    pieceordonnes.sort(function (a,b){
        return b.prix - a.prix;
    });
    console.log(pieceordonnes);
})