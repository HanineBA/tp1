
/**
 * cette fonction permet d'ajouter un element childElement portant les valeurs textuelles nameID et ValueID dans fatherID juste lorsqe le dom detecte l'evenement event dans le submitterID
 * @param {*} submitterID : l'element responsable de l'ajout du childElement
 * @param {*} eventt : l'evenement qui déclenchera l'ajout du childElement
 * @param {*} fatherID :l'element ou on va ajouter le childElement
 * @param {*} childElement : l'element à ajouter
 * @param {*} nameID : text a mettre dans le childElement
 * @param {*} valueID : texte a mettre dans le childElement
 */
function ajout(submitterID, eventt, fatherID, childElement, nameID, valueID) {
    let submitter = document.querySelector(submitterID);
    submitter.addEventListener(eventt, function(event) {
        event.preventDefault();
        let father = document.querySelector(fatherID);
        let child = document.createElement(childElement);
        let name = document.querySelector(nameID).value;
        let value = document.querySelector(valueID).value;

        if(value.trim().length !== 0 && name.trim().length !== 0){
            child.textContent = `${name}:  ${value}`;
            document.querySelector(nameID).value='';
            document.querySelector(valueID).value='';
            let deleteButton = document.createElement('button');
            deleteButton.textContent = '🗑';
            child.appendChild(deleteButton);
            father.appendChild(child);
            document.querySelector(".left").addEventListener(eventt, (e) => {
                e.target.parentNode.parentNode.removeChild(e.target.parentNode);});

        }

    });
}
ajout('button', 'click', '#list', 'pre', '#name', '#content');
