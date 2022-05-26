/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const parolaDaAnalizzare = prompt("Inserire una Parola")


function isPalindroma(parolaDaAnalizzare) {
    let x = parolaDaAnalizzare.split("");
    let i = 0;
    const arrayParola = [];
    let arrayReverse;
    while (arrayParola.length < parolaDaAnalizzare.length) {
        arrayParola.push(x[i]);

        i++
    }
    arrayReverse = arrayParola.reverse();
    let reverseWord = arrayReverse.join("");
    if (reverseWord == parolaDaAnalizzare) {
        alert("La tua parola è palindroma")
       
    }
    else{
        alert("La tua parola non è palindroma")
        
    }
}




isPalindroma(parolaDaAnalizzare);