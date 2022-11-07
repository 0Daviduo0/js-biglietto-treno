// Richiesta nome
let nome = prompt("Come ti chiami?");

console.log("nome",nome);


// Richiesta distanza
let km = parseInt(prompt("Quanti Km hai intenzione di percorrere?"));

console.log("distanza",km);

    // Range distanza
    while (
        isNaN(km) || //km is a number
            km <0 || km >9999
        )
        {
            alert ("🙄I don't know Rick...");
            km = parseInt(prompt("Quanti Km hai intenzione di percorrere?"));
        };

// Richiesta età
let eta = parseInt(prompt("Quanti anni hai?"));

console.log("età",eta);

    // Range età
    while (
        isNaN(eta) || //eta is a number
            eta <0 || eta >110
        )
        {
            alert ("🙄I don't know Rick...");
            eta = parseInt(prompt("Quanti anni hai?"));
        };

// Calcolo del prezzo
    
    // Calcolo prezzo in base alla distanza
        let prezzo_km = km * 0.21;

        console.log("prezzo",prezzo_km);
        

        // Calcolo sconto minorenni
            let discount_minors = ((prezzo_km / 100) * 80);

            console.log("prezzo_minori",discount_minors);

        // Calcolo sconto over 65
            let discount_over = ((prezzo_km / 100) * 60);

            console.log("prezzo_over",discount_over);

    // Arrotondamenti
        let pezzo_km_arrotondato = (prezzo_km).toFixed(2);
        let discount_minors_arrotondato = (discount_minors).toFixed(2);
        let discount_over_arrotondato = (discount_over).toFixed(2);

// Stampa nome
document.getElementById("name").innerHTML = `${nome}`;

// Stampa km
document.getElementById("km").innerHTML = `${km} km`;

// Stampa età
document.getElementById("eta").innerHTML = `${eta}`;

// Condizioni
if(eta <= 17){
    document.getElementById("prezzo_finale").innerHTML = `${discount_minors_arrotondato} €`;

} else if(eta > 65){
    document.getElementById("prezzo_finale").innerHTML = `${discount_over_arrotondato} €`;

} else {
    document.getElementById("prezzo_finale").innerHTML = `${pezzo_km_arrotondato} €`;
}