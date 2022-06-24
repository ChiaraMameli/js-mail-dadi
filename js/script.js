// Creo Array
const mail = ['pippo@gmail.com', 'ciccio@gmail.com', 'giorgio@gmail.com', 'michele@gmail.com'];

// Chiedo all'utente di inserire una mail
let mailInput = prompt('Inserisci qui la tua email', 'pippo@gmail.com');

// Verifico che la mail inserita sia valida e stampo un messaggio appropriato sull’esito del controllo.
if(mail.includes(mailInput)) {
    alert('Benvenuto');
} else {
    alert('Spiacenti');
}

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
*/