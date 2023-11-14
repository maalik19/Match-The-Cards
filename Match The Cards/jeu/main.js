const divresultat = document.querySelector("#resultat");
var tabjeu = [
    [1,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
var tabresultat = [
    [1,7,2,6],
    [4,8,3,8],
    [2,7,4,5],
    [5,3,6,1]
];
var oldselection = [];
var nbaffiche = 0;
var ready = true ;
var valeur = 0 ;
affichertableau();
function affichertableau(){
    var txt="";

    for(var i=0; i < tabjeu.length ;i++){
        txt+="<div>";
        for (var j=0; j < tabjeu[i].length ; j++){
            if (tabjeu[i][j] === 0){
                txt+="<button class='btn btn.primary m-2' style='width:100px; height:100px' onClick= 'verif(\""+i+"-"+j+"\")'>Afficher</button>"
            } else {
                txt+="<img src= '"+getimage(tabjeu[i][j])+"' style='width:100px; height:100px' class'm-2'> "
            }
        }
        txt+="</div>";
    }
    divresultat.innerHTML=txt;
}
function getimage (valeur){
    var imgtxt="";
    switch(valeur){
        case 1 : imgtxt += "batrik.jpg" ;
        break;
        case 2 : imgtxt += "bunny.jpg" ;
        break;
        case 3 : imgtxt += "chat.jpg" ;
        break;
        case 4 : imgtxt += "dog.jpg" ;
        break;
        case 5 : imgtxt += "poisson.jpg" ;
        break;
        case 6 : imgtxt += "giraffe.jpg" ;
        break;
        case 7 : imgtxt += "husky.jpg" ;
        break;
        case 8 : imgtxt += "tiger.jpg" ;
        break;
        default : console.log("cas non pris en compte")
        return imgtxt ;
    }
}
function verif(bouton){
    
    var ligne = bouton.substr(0,1);
    var colone = bouton.substr(2,1);
    tabjeu[ligne][colone] = tabresultat[ligne][colone];
    affichertableau();
    
        
   
    oldselection = [ligne,colone];

   
    
}
    
    
