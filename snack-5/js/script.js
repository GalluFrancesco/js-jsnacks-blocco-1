tot = 0;
let arrayNumeri=[];
let counter=0;
do{
    const numInserito = parseInt(prompt("Inserisci un numero"))
    tot+=numInserito;
    if(tot<50){
        arrayNumeri[counter]=numInserito;
        counter++;
    }
}while(tot<50);