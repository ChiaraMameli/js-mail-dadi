// MAIL
const mail = ['pippo@gmail.com', 'ciccio@gmail.com', 'giorgio@gmail.com', 'michele@gmail.com'];
const mailResult = document.getElementById('email');
const buttonSend = document.getElementById('btn-email');

buttonSend.addEventListener('click', function(){
    if(mail.includes(mailResult.value)) {
        alert('Benvenuto');
    } else {
        alert('Spiacenti');
    }
})


// GIOCO DEI DADI

// Genero un numero random da 1 a 6 per i due giocatori
const player = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;
console.log(player, computer);
// Determino il vincitore e stampo in console

if(player > computer) {
    //alert('Hai vinto!');
} else if (player < computer) {
    //alert('Ritenta!');
} else {
    //alert('Parità!');
}



