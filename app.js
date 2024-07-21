const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name : "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "orange", range: [25, 30] },
    { name: "Obésité modérée", color: "red", range: [30, 35] },
    { name: "Obésité sévère", color: "purple", range: [35, 40] },
    { name: "Obésité morbide", color: "black", range: 40 }
];

const form = document.querySelector("form"); //pour selectionner le form
//console.log(form);
//console.log(typeof form); prouve que form est un objet
//console.dir(form); pour voir les propriétés de l'objet form


//pour écouter l'evenement submit avec une méthode de callback
//Quand submit est déclenché, handleForm va etre appelé par la meth aEL
form.addEventListener("submit", handleForm) 

// FUNC 1 pour gérer le form
function handleForm(e){
    e.preventDefault(); // pour empecher de submit le form vide
    calculateBMI();
}

const inputs = document.querySelectorAll("input");
//console.log(inputs); renvoie NodeList(2) [input#height, input#weight]


// falsy : 0 "" null undefined false
// truthy : 10 "abc" [1,2,3]

// FUNC 2 pour calculer le BMI
function calculateBMI(){
    const height = inputs[0].value;
    const weight = inputs[1].value;
    
    if (!height || !weight || height <= 0 || weight <= 0){ 
        handleError();
        return;
    }

    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2) //  puissance 2 et toFixed pour arrondir à 1ch. après ,
    
    showResult(bmi);
}


const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

// FUNC 3 pour gérer les erreurs
function handleError(){
    displayBMI.textContent = "Oups"; // pour modifier le contenu
    displayBMI.style.color = "inherit"; // pour remettre la couleur par défaut
    result.textContent = "Remplissez les champs.";

}

// FUNC 4 pour afficher le résultat
function showResult(bmi){
    const rank = BMIData.find(data => { //find va parcourir le tab et comparer le bmi au val ds le range
        if(bmi >= data.range[0] && bmi < data.range[1]) return data;
        else if (data.range == "number" && bmi > data.range) return data;
    })

    displayBMI.textContent = bmi;
    displayBMI.style.color = `${rank.color}`; // backticks pour mettre des expressions js
    result.textContent = `Résultat : ${rank.name}`;
    result.style.color = `${rank.color}`;

}