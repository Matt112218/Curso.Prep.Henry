// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arr = []
  for (var clave in objeto){
    arr.push([clave, objeto[clave]])
  } 
  return arr
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var abc = 'abcdefghijklmnopqrstuvwxyz'
  var cona =0; var conb =0; var conc =0; var cond =0; var cone =0; var conf =0;
  var cong =0; var conh =0; var coni =0; var conj =0; var conk =0; var conl =0;
  var conm =0; var conn =0; var cono =0; var conp =0; var conq =0; var conr =0
  var cons =0; var cont =0; var conu =0; var conv =0; var conw =0; var conx =0
  var conz =0; var cony =0;
  
  var obj = {}
  for (var i=0; i<string.length; i++){
    switch (string.charAt(i)){
      case 'a': cona= cona+1; break; case 'b': conb= conb+1; break;
      case 'c': conc= conc+1; break; case 'd': cond= cond+1; break;
      case 'e': cone= cone+1; break; case 'f': conf= conf+1; break;
      case 'g': cong= cong+1; break; case 'h': conh= conh+1; break;
      case 'i': coni= coni+1; break; case 'j': conj= conj+1; break;
      case 'k': conk= conk+1; break; case 'l': conl= conl+1; break;
      case 'm': conm= conm+1; break; case 'n': conn= conn+1; break;
      case 'o': cono= cono+1; break; case 'p': conp= conp+1; break;
      case 'q': conq= conq+1; break; case 'r': conr= conr+1; break;
      case 's': cons= cons+1; break; case 't': cont= cont+1; break;
      case 'u': conu= conu+1; break; case 'v': conv= conv+1; break;
      case 'w': conw= conw+1; break; case 'x': conx= conx+1; break;
      case 'y': cony= cony+1; break; case 'z': conz= conz+1; break;
    }
  }
  obj.a = cona; obj.b = conb; obj.c = conc; obj.d = cond;
  obj.e = cone; obj.f = conf; obj.g = cong; obj.h = conh;
  obj.i = coni; obj.j = conj; obj.k = conk; obj.l = conl;
  obj.m = conm; obj.n = conn; obj.o = cono; obj.p = conp;
  obj.q = conq; obj.r = conr; obj.s = cons; obj.t = cont;
  obj.u = conu; obj.v = conv; obj.w = conw; obj.x = conx;
  obj.y = cony; obj.z = conz;
  for(var i=0; i<abc.length; i++){
    if (obj[abc.charAt(i)]===0){
    delete obj[abc.charAt(i)]
  }  
}
return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var Mayus = ''
  for (i=0; i < s.length; i++){
    if(s.charAt(i) === s.charAt(i).toUpperCase())
    Mayus = Mayus + s.charAt(i)
  };
  for (i=0; i < s.length; i++){
    if(s.charAt(i) === s.charAt(i).toLowerCase())
    Mayus = Mayus + s.charAt(i)}
  return Mayus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 var split = str.split(' ');
var splitInv = [];

for (i= 0; i<split.length; i++){
  splitInv.push(split[i].split('').reverse().join(''))

  }
var join = splitInv.join(' ')
  return join
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  var numInv = num.split('').reverse().join("")
  if (num === numInv) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sinABC= ''; 
  for( var i=0; i<cadena.length; i++){
    if (cadena.charAt(i) !== 'a'&& cadena.charAt(i) !== 'b'&& cadena.charAt(i) !== 'c') {
      sinABC = sinABC + cadena.charAt(i)
    };
  }return sinABC
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a, b){return a.length-b.length})
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrInterseccion= []
  for (x=0; x<arreglo1.length; x++){
    for (y=0; y<arreglo2.length; y++){
      if(arreglo1[x] === arreglo2[y]){
        arrInterseccion.push(arreglo2[y])
      }
    }
  }
  return arrInterseccion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};