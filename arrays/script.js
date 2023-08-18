let lista = [];
function adc(){
    let produto = document.getElementById("produto").value;
    lista.push(produto);
    console.log(lista);
}
function rmv(){
    let produto = document.getElementById("produto").value;
    let pos = lista.indexOf(produto);
    if(pos == -1){
        console.log("O produto "+produto+" não foi encontrado na lista!")
    }
    else{
        lista.splice(pos,1);
        console.log("O produto "+produto+" foi removido com sucesso!")
    }
}