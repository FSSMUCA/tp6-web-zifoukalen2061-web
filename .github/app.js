const form = document.getElementById("calc-form");
const error = document.getElementById("error");
const resultat = document.getElementById("resultat");
const historique = document.getElementById("historique");

let operations = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let op = document.getElementById("operation").value;

    error.textContent = "";
    resultat.textContent = "";

    // Validation
    if (a === "" || b === "") {
        error.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    a = Number(a);
    b = Number(b);

    if (op === "/" && b === 0) {
        error.textContent = "Division par zéro interdite.";
        return;
    }

    // Calcul
    let res;
    switch (op) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/": res = a / b; break;
    }

    resultat.textContent = "Résultat : " + res;

    // Ajout à l'historique
    let ligne = `${a} ${op} ${b} = ${res}`;
    operations.push(ligne);

    afficherHistorique();
});

function afficherHistorique() {
    historique.innerHTML = "";
    operations.forEach(op => {
        let li = document.createElement("li");
        li.textContent = op;
        historique.appendChild(li);
    });
}