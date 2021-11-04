/*

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
});

// PREVENTDEFAULT
event.preventDefault(); permette di stoppare il comportamento definito
In questo modo possiamo sfruttare il button tipe submit senza perdere i dati inviati
L'evento submit funziona in ben due occasioni ma impediamo il refresh della pagina

Se inserisco required (nell'input dell'html), anche premendo il bottone l'evento non viene triggerato
Viene anche fuori un pop up "Compila il campo"
DObbiamo adesso memorizzare il valore dellinput

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    const value = input.value;

    console.log(value);
});

Se io adesso scrivo qualcosa e premo il bottone il valore apparirà in console
Voglio usare il valore per filtrare il contenuto della lista...
Dobbiamo quindi creare una nuova versione della lista che contenga solo i risultati della ricerca
Utilizzeremo pertanto il metodo filter degli array
Il metodo filter ritorna un nuovo array(immutabile) con tutti gli elementi che passano un test implementato da una funzione
Anche filter è un ciclo.
Se filter fallisce ritornerà un array vuoto.

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value.toLowerCase();

    const result = data.filter((element, index) => {
        return element.name.toLowerCase().search(value) > -1  //è case sensitive
    });

    render(list, results);
});

Utilizzo .toLowerCase sia nella costante value che in quella result

E se no volessi aspettare di premere invio?
Togliamo il preventDefault
Al posto del submit utilizzeremo un altro evento
Non lavoreremo sul form ma solamente sull'input altrimenti triggera quando scriviamo ovunque
L'evento utilizzato sarà keyup

input.addEventListener('keyup', (event) => {
    e
    const value = input.value.toLowerCase();

    const result = data.filter((element, index) => {
        return element.name.toLowerCase().search(value) > -1  //è case sensitive
    });

    render(list, results);
});

trim
replace

//CSS GRID
Il css grid permette di disporre tutti gli elementi in un certo modo

ul{
    display: grid; //il display sarà una griglia
    //grid-template-columns: 100px 100px 100px; // 3 colonne da 100px
    //grid-template-columns: 1fr 1 fr 1 fr; // Divide il contenitore in 3 frazioni
    grid-template-columns: repeat(3, 1fr); //Se voglio aggiungere una colonna basta inserire 4 invece che 3
    column-gap: 10px; // Inserisce uno spazio fra le colonne
    row-gap //Inserisce uno spazio fra le righe
}

Possiamo sfruttare il grid anche per sfruttare al meglio il concetto di responsive
Alla larghezza minima di 768px all'ul aggiungo 

u@media (min-width: 768px) {
    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
    }
}

Se voglio estendere la ricerca anche alll'email...

input.addEventListener('keyup', (event) => {
    e
    const value = input.value.toLowerCase();

    const result = data.filter((element, index) => 
        element.name.toLowerCase().search(value) > -1 || // Utilizzo or (||)
        element.email.toLowerCase().search(value) > -1
    );

    render(list, results);
});
*/

//PROVA Porre i valori di input ugulali a element.phone element.email ecc e poi invocare la funzione render?