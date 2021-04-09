// programma che stampa i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
//numeri multipli sia di 3 che di 5 - FizzBuzz 
  if (i%3 == 0 && i%5 == 0) { 
    console.log("FizzBuzz");
// numeni multipli di 3 - Fizz
  } else if (i%3 == 0) {  
    console.log("Fizz"); 
// numeni multipli di 5 - Buzz
  } else if (i%5 == 0) {  
    console.log("Buzz");
  } else {
    console.log(i);
  }
}