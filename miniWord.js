/**cette fonction permet de changer la propriété de la variable tochange a la valeur property isuue de l'input item 
 * @param {*} item : la nouvelle valeur de la property
 * @param {*} property: la propriété CSS à changer
 * @param {*} tochange : l'emlement HTML à manipuler  
*/
function change(item,property, tochange){
    var valeur=item.value;
    if (property==='fontSize'){valeur+='px';}
    tochange.style[property]=valeur;

}

var par=document.querySelector('#p');
var colorinput=document.querySelector('#couleur');
var tailleinput=document.querySelector('#taille');
var fontinput=document.querySelector('#police');

colorinput.addEventListener('input',function(){change(colorinput,'color',par);});
tailleinput.addEventListener('input',function(){change(tailleinput,'fontSize',par);});
fontinput.addEventListener('input',function(){change(fontinput,'fontFamily',par);});
