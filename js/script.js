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

roll.addEventListener('click', function(){

    const player = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;
    const roll = document.getElementById('roll');
    console.log(player, computer);

    // Alert: informano l'utente del risultato. Secondo me non necessari dopo l'aggiunta del DOM

    // if(player > computer) {
    //     alert('Hai vinto!');
    // } else if (player < computer) {
    //     alert('Ritenta!');
    // } else {
    //     alert('Parità!');
    // }

    // Varianti: dispongono i punti sulla faccia del dado a seconda del numero estratto
    const one = `<div class="dot position-absolute top-50 start-50 translate-middle"></div>`;
    const two = `<div class="dot position-absolute top-0 end-0"></div><div class="dot position-absolute bottom-0 start-0"></div>`;
    const three = `${one} ${two}`;
    const four = `<div class="dot position-absolute top-0 end-0"></div><div class="dot position-absolute bottom-0 start-0"></div><div class="dot position-absolute top-0 start-0"></div><div class="dot position-absolute bottom-0 end-0"></div>`;
    const five = `${one} ${four}`;
    const six = `${five} <div class="dot position-absolute top-50 start-0 translate-middle-y"></div><div class="dot position-absolute top-50 end-0 translate-middle-y"></div>`;

    let playerFace = document.getElementById('player-face');
    let computerFace = document.getElementById('computer-face');

    if(player == 1) {
        playerFace.innerHTML = one;
    } else if (player == 2) {
        playerFace.innerHTML = two;
    } else if (player == 3) {
        playerFace.innerHTML = three;
    } else if (player == 4) {
        playerFace.innerHTML = four;
    } else if (player == 5) {
        playerFace.innerHTML = five;
    } else if (player == 6) {
        playerFace.innerHTML = six;
    }

    if(computer == 1) {
        computerFace.innerHTML = one;
    } else if (computer == 2) {
        computerFace.innerHTML = two;
    } else if (computer == 3) {
        computerFace.innerHTML = three;
    } else if (computer == 4) {
        computerFace.innerHTML = four;
    } else if (computer == 5) {
        computerFace.innerHTML = five;
    } else if (computer == 6) {
        computerFace.innerHTML = six;
    }

})

