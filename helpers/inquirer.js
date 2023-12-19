import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea hacer?",
    choices: [
      {
        value: "1",
        name: "1. Crear una Tarea",
      },
      {
        value: "2",
        name: "2. Listar Tareas",
      },
      {
        value: "3",
        name: "3. Listar Tareas Completadas",
      },
      {
        value: "4",
        name: "4. Listar Tareas Pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir"
      }
    ],
  },
];

const inquirerMenu = async () =>{
    console.clear();
    console.log("=============================".green);
    console.log("     Selecione una opcion    ".green);
    console.log("=============================\n".green);

    const {opcion} = await inquirer.prompt(preguntas)

    return opcion;
}

const inquirerPause = async () =>{
    console.log("\n");
    const { pause } = await inquirer.prompt([
      {
        type: "input",
        name: "pause",
        message: `Presione ${"ENTER".green} para continuar `
      },
    ]);

    
}

export {
    inquirerMenu,
    inquirerPause
}