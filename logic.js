const fs = require('fs');
const prompt = require('prompt-sync')();

const calcularTabla = nro => {
    try {
        //let file = fs.createWriteStream('tabla-del-N.txt');
        //file.once('open', fd => {
        let tablaString = ""; 
        for (let i = 0; i < 10; i++) {
            tablaString = tablaString + `${nro} x ${i+1} = ` + (nro * (i + 1)) + '\n';
        };
        fs.writeFileSync('./tabla-del-N.txt', tablaString);
        /*
        for (let i = 0; i < 10; i++) {
                file.write(`${nro} x ${i+1} = ` + (nro * (i + 1)) + '\n');
            }
            file.end();
            console.log('Archivo creado!');
        });
        */
        const opcion = prompt(`Quiere ver la tabla de ${nro}? (s | n) : `);
        switch (opcion) {

            case "s":
                fs.readFile('tabla-del-N.txt', 'utf8', (error, data) => {
                    if (error) {
                        console.log(error);
                    }
                    console.log(data);
                });
                break;
            case "n":
                console.log('De acuerdo, hasta luego!');
                break;
            default:
                console.log('Ud ha ingresado una opcion no valida, hasta luego');
                break;
        }

    } catch (error) {
        console.log("Un error ha ocurrido :(");
    }
};

const nro = prompt('Ingrese un nro entero: ');
try {
    console.log(typeof nro);
    if (parseInt(nro,10) != NaN)
        calcularTabla(nro);
    else
        console.log("Ud no ha ingresado un nro :(, chau");
} catch (error) {
    console.log("Ha habido un problema :(, bye");
    console.log(error);
}