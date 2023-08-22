// commentaire en javascript sur une ligne
/* commentaire 
sur
plusieurs 
lignes */

// revoie le score obtenue
function afficherresultat(score, nombreQuestions) {
    let zonedescore = document.querySelector(".zoneScore span")
    let affichagescore = `${score} / ${nombreQuestions}`
    zonedescore.innerHTML = affichagescore
}

// charge le tableau choisie
function creerlalistechoisie(choix) {
    if (choix === "mots") {
        let listePropositions = listeMots
        } else {
            let listePropositions = listePhrases
        }
    return listePropositions
}


// fonction principal
function lancerJeu() {
   
    let score = 0
    let nombreQuestions = 0
    let boutonvalider = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    boutonvalider.addEventListener("click", () => {
        console.log(inputEcriture.value)
   
    }) 
    
    
    
    
    afficherresultat(score, nombreQuestions)
}


