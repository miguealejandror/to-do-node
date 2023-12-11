import colors from "colors";
import * as readline from "readline";

const showMenu = () => {

    return new Promise ( resolve =>{
        console.clear();
        console.log("=============================".green);
        console.log("     Selecione una opcion    ".green);
        console.log("=============================\n".green);

        console.log(`${"1.".green} Crear una Tarea`);
        console.log(`${"2.".green} Listar Tareas`);
        console.log(`${"3.".green} Listar Tareas Completadas`);
        console.log(`${"4.".green} Listar Tareas Pendientes`);
        console.log(`${"5.".green} Completar tarea(s)`);
        console.log(`${"6.".green} Borrar tarea`);
        console.log(`${"0.".green} Salir`);

        const option = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        option.question("Seleccione una opcion: ", (opt) => {
            option.close();
            resolve(opt)
        });
    })
}

const pause = () => {
    return new Promise(resolve =>{
        const option = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        option.question(`\nPresione ${'ENTER'.green} para continuar `, (opt) => {
          option.close();
          resolve();
        });

    });

}

export {
    showMenu,
    pause
}