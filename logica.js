const fs = require('fs');
const prompt = require('prompt');
/*
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
*/
const calcularTabla = nro => {
    try {       
        let file = fs.createWriteStream('tabla-del-N.txt');
        file.once('open', fd => {
            for (let i = 0; i < 10; i++) {
                file.write(`${nro} x ${i+1} = ` + (nro * (i + 1)) + '\n');
            }
            file.end();
        });
        fs.readFile('tabla-del-N.txt', 'utf8', (error, data) => {
            if (error) { 
                console.log(error); 
            }
            console.log(data);
        });

    } catch (error) {
        console.log("Un error ha ocurrido :(");
    }
};

console.log("Ingrese nro entero por consola: ");
//const nro = prompt('Ingrese un nro entero: ', 0);
prompt.start();
prompt.get(['numb'], function (error, result) {
    console.log(result.numb);
    try {
        const nro = parseInt(result.numb);
        calcularTabla(nro);
    } catch (error) {
        console.log("Ha habido un problema :(");
        console.log(error);
    }
    /*
    if (Number.isInteger(result.numb) === true) {
        
    } else {
        console.log("Ud ha ingresado un dato no válido");
    }
    */
});
//console.log("Numero almacenado");
//const nro = readline.question('Ingrese un entero: ');