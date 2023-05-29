
//let valor_orig = []
let valores = []
//let valoresTot = []
//var increment = 1
//valoresTot = valores.concat(valor_orig)
/*
for (let valcont=0;valcont<valores.length;valcont++) {
    //window.alert(`componente do array ${valcont} em ${valores[valcont]}`)
    if (num == valores[valcont]) {
        window.alert(`Esse valor já existe  ${num} em ${valores}`)
        increment = 0
    } 
}

if (increment == 1) {valores.push (num)}

//document.getElementById("demo").innerHTML = `&& `
*/
//document.getElementById("demo").innerHTML=`Fila Original : ${valores}`

document.getElementById("demo1").innerHTML = `... `
document.getElementById("demo2").innerHTML = `... `
document.getElementById("demo3").innerHTML = `... `
document.getElementById("demo4").innerHTML = `... `
//-------------------------- Add --------------------------------
function Add() {
    var increment = 1
    var num = Number(document.querySelector('input#num_arr').value)
    for (let valcont=0;valcont<valores.length;valcont++) {
        if (num == valores[valcont]) {
            window.alert(`Esse valor ${num} já existe em ${valores}`)
            increment = 0
        } 
    }
    if (increment == 1) {
        valores.push (num)
    } 
    
    //document.getElementById("demo").innerHTML=`Fila Original : ${valor_orig}`
    document.getElementById("demo1").innerHTML='O número digitado foi: '+ num;
    document.getElementById("demo2").innerHTML='A nova fila : '+ valores;
}    
//-------------------------- Organizar --------------------------
function Organizar(a,b){
    valores.sort((a, b) => a - b)
    document.getElementById("demo3").innerHTML = `Fila organizada : ${valores}`;
}
//-------------------------- Embaralhar -------------------------
function Embaralhar() {
    for (let i = valores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valores[i], valores[j]] = [valores[j], valores[i]];
    }
document.getElementById("demo4").innerHTML = `Re-embaralhando : ${valores}`;
}
