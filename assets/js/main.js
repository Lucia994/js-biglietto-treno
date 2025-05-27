console.log("Hello");
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

Tools 
    -Variables: const, let
    -Prompt
    -Conditional Statements: if, else, 

*/


//Steps
// Step -1 Richiesta Utente numero di kilometri che intende percorre
const userChoice = Number(prompt("Quanti kilometri vorresti percorrere?")); // 10
console.log(userChoice);

// Step 2- Richiedere età utente
const userAge = Number(prompt("Quanti anni hai?")); // 31
console.log(userAge);

//Step 3- Calcolare prezzo tot del viaggio
// -il prezzo del biglietto è definito in base ai km (0.21 € al km)
const costForKm = 0.21;

let totalPriceTicket = userChoice * costForKm; // 10*0.21= 2,1
console.log(totalPriceTicket);


//sconto del 20% per i minorenni (userAge < 18)
if (userAge < 18) {
    totalPriceTicket = totalPriceTicket - (totalPriceTicket * 0.2);
    console.log("discount_minors: "+ "€" + totalPriceTicket.toFixed(2));
}
//sconto del 40% per gli over 65 (userAge >= 65)
else if (userAge >= 65) {
    totalPriceTicket = totalPriceTicket - (totalPriceTicket * 0.4); //es. prezzo corretto: €16.80
    console.log("discount_senior: "+ "€" + totalPriceTicket.toFixed(2));
} else { 
    console.log("full_price: " + totalPriceTicket + "€");
}