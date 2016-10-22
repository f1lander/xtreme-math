"use strict"; 
class Math {
   constructor(number) {
       this.number = number;
   }
   /* Esta función devolverá el cuadrado del numero que reciba el     constructor de esta clase.*/
   square(){
      return this.number * this.number;
   }
}

module.exports = Math;