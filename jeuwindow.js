/**
 * this is the function that will be generationg le numbre to guess
 * @param {*} min : minimal value
 * @param {*} max : maximum value
 * @returns the number
 */
function generate(min,max ){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

/**
 * this is the function that will be controlling the game. It's a guess the number game based on the random function and has 3 levels of difficulty
 * @returns 
 */
function jeu () {
    let nbtent;
let min, max ;
while (true){
var niveaudiff= prompt("donner le niveau de difficulté que vous souhaitez, pour facile taper 1 pour intermédiaire taper 2 et pour difficile taper 3");
if (niveaudiff == null) {
    alert("Vous avez annulé le jeu.");
    break; }

switch(niveaudiff){
    case '1':
        nbtent=6; min=10; max =30; break;
    case '2':
        nbtent =4; min=1; max=80; break;
    case '3':
        nbtent =2; min=1 ; max=150;break;
    default:
        alert("choisissez entre 1 , 2, 3 svp"); continue;
    }
    break;
}

let nbre=generate(min,max);

for (let i = 0; i < nbtent ; i++)
{let tentative = prompt(`Donner votre tentative, le numéro recherché est entre ${min} et ${max}`);
if (tentative === null) {
    alert("Vous avez annulé le jeu.");
    break; }

if (tentative == nbre) {
    alert("Bravo! C'est gagné.");
    return; 
} 

 else  if (i===nbtent-1) {alert("désolé! c'est perdu");}

else if (niveaudiff==1){
    if(Number(tentative)<nbre) {alert(`Cest faux , réesseyer,le nombre recherché est plus grand , il vous reste ${nbtent-i-1}tentatives`); }
    else{alert(`Cest faux , réesseyer,le nombre recherché est plus petit , il vous reste ${nbtent-i-1}tentatives`);}
}
   
else {alert(`C'est faux, réessayez. Il vous reste ${nbtent - i - 1} tentatives.`);}
}
}


/**
 * this is the function that will beautomatically restarting the game
 */
function jouer(){
    let rejouer = true;

    while (rejouer) {
        rejouer = confirm("Voulez-vous jouer?");
        if (rejouer) {
            jeu();
        }
    }

    alert("Au revoir et à bientôt!");

}


jouer();