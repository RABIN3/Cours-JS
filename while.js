let prix = 50000;
let Epagne = 4000;
let semaines = 0;
let TotalEpargne = 0;
while (TotalEpargne < prix) {
    TotalEpargne += Epagne;
    semaines++;
}
console.log("lLe nombre de semaines nécessaires : " + semaines);