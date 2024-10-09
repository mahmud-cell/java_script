

window.onload = function()                       
{
    var canvas = document.getElementById('mon_canvas'); 
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

var myInterval = setInterval(animate, 1000/500);    // 30 fois par seconde


var pos_x = 0;
var pos_y = 280;



window.addEventListener('keydown', lect_clavier, true);

function lect_clavier(evt){
    switch(evt.keyCode){
        case 37:
            pos_x -= 10
            break;
        case 39:
            pos_x +=10
            break;
    }
}
function getRandom(min, max){               // On renvoie un ENTIER alÃ©atoire 
    min=Math.ceil(0);                               // compris entre min et max
    max=Math.floor(10);
    return Math.floor(Math.random()*(max-min))+min;
}
var x = 6; // initial absis de centre e crcle
var y = 6; // initial absis de centre de cercle
var a=1;        // increment de dÃ©placement horizontal
var b=1;        // increment de dÃ©placement vertical
var W=300;      // largeur du rectangle 
var H=300;     // hauteur du rectangle
var R=6;      // rayon du cercle 
var largeur = 10;
var longeure = 80;

function animate()

{   

  // Rectangle
  context.fillStyle = "rgb(199, 208, 204)"; 
  context.fillRect(0, 0, W, H);

  // Balle
  context.beginPath();          // Debut d'un nouveau tracÃ©.
  context.fillStyle = "rgb(96, 80, 220)"; 
    // A FINIR  
  context.arc(x,y,R, 0, Math.PI*2); 
  context.fill();                    // Methode fill(); - forme pleine
  context.closePath();
  // la raquette
  context.fillStyle = "red";
  context.fillRect(pos_x,pos_y,longeure,largeur);
 
  x = x+a;
  y = y+b;

    if (x>=R & x<=W-R){
        if (y<=R)
            b = 1;
        if (y>=H-R)
            b = -1;
        }
        if (y>=R & y<=H-R){
            if (x<=R)
                a = 1;
            if (x>=W-R)
                a = -1;
            }
    if (x>=pos_x && pos_x== x - longeure && pos_y == y - R) b = -1 ;{
        if (pos-y<=y)
            a = 1;
        if (pos_y ==  y - longeure)
            a = 1;
        if (pos_x == x - R)
            a = 1;
    } 
  
}

}


