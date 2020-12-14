/* Exo 1 */
let x = true ;
function exo3 (x) {
    return x=true 
}

/* Exo 2*/
let x = "Ceci est une chaine de caractère"
function chaine (x){
    return x
}
console.log(x);

/* Exo 3 */
let x= "Ceci est le début d'une chaine de caractère"
let y ="et ceci en est la fin"

function trucString (x,y) {
     z = x+y ;
     return z;
}
console.log(z)

/*Exo 4*/
let x=2
let y=0

function nbr(x,y){
   if ( x> y){
    return "Le premier nombre est le plus grand"
    }
  else if ( x < y){
      return "Le premier nombre est le plus petit "
  }
  else {
      return "Les  nombres sont identiques "
     }
}
console.log(nbr(x,y));

/*Exo 5 */
let x = 10
let y= 'Bouffe des chips'
let z= x+y
function exo5 ( x,y) {
    z=x+y
    return z
}
console.log(z);

/*Exo6*/
 let a = "Jacques";
 let b = "Poireau";
 let c = 120
  let d = "Bonjour " + a +"" + b + "Tu as" + c + "ans"

function exo6(a,b,c){
    d = "Bonjour " + a +"" + b + "Tu as" + c + "ans"
    return d
}
console.log(d);

/* Exo 7*/
function exo7 (x,y) {
    if(y == "Femme"){
        if(x>=18){
            return "Vous êtes une femme et vous êtes majeure"
        } else {
            return "Vous êtes une femme mineure"
        }
    } else if(y == "Homme"){
        if(x>=18){
            return "Vous êtes un homme majeur"
        } else {
            return "Vous êtes un homme mineur"
        }
    }
}
console.log(exo7)





