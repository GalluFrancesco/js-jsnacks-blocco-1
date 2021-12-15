const numInserito=prompt("Inserire un numero di 4 cifre");
let tot=0;
if(numInserito.length === 4){
    for(let i=0; i<4; i++){
        tot+=parseInt(numInserito[i]);
    }

    console.log(tot);
}else(
    console.log("Attenzione il numero inserito non è di 4 cifre!")
)