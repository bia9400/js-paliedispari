/* Pari e Dispari
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer */


let x = false;
let y=false;
while (x == false) {
    var oddOReven = prompt("pari o dispari?")

    
    if (oddOReven==="pari"|| oddOReven==="dispari" ) {
        x=true;

    }
    
}

while (y == false) {
    var userNumberChoice = prompt("Inserisci numero da 1 a 5")

    
    if (parseInt(userNumberChoice)<6 && parseInt(userNumberChoice)>0) {
        y=true;

    }
    
}

function numeroRandom(min, max){

    return Math.floor(Math.random() * (max - min) + min)}


let k= numeroRandom(1,5)
console.log("Il numero Random del Pc è " + k);

let r= parseInt(userNumberChoice)
console.log("Il tuo numero è " + r);
let somma= k + r;
console.log("La somma dei due numeri è "+somma);

function isPari(somma){
    if (somma % 2 == 0){
        return "pippo"
    }
    else{
        return "pluto"
    }
}

if(isPari(somma)=="pippo" && oddOReven=="pari" ){
    alert("Hai scelto pari, la somma è pari, Hai vinto!!")
}
else if(isPari(somma)=="pluto" && oddOReven=="dispari" ){
    alert("Hai scelto dispari,la somma è dispari, Hai vinto!!")
}
else{
    alert("Hai perso!!")
}
