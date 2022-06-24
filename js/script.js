// MAIL
// Creo Array
const mail = ['pippo@gmail.com', 'ciccio@gmail.com', 'giorgio@gmail.com', 'michele@gmail.com'];

 // Chiedo all'utente di inserire una mail
let mailInput = prompt('Inserisci qui la tua email');

 // Verifico che la mail inserita sia valida e stampo un messaggio appropriato sull’esito del controllo.
if(mail.includes(mailInput)) {
     alert('Benvenuto');
} else {
     alert('Spiacenti');
}

// GIOCO DEI DADI

// Genero un numero random da 1 a 6 per i due giocatori
const player = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;
console.log(player, computer);
// Determino il vincitore e stampo in console

if(player > computer) {
    alert('Hai vinto!');
} else if (player < computer) {
    alert('Ritenta!');
} else {
    alert('Parità!');
}



