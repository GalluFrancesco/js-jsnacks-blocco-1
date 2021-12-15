let risultato=0;
let potenza=0;
while(risultato < 1000){
    risultato=Math.pow(2, potenza);
    potenza++;
    
    if(risultato < 1000){
     console.log(risultato);
    }
}