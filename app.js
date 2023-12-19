import colors from "colors";
import {inquirerMenu, inquirerPause} from "./helpers/inquirer.js"

console.clear();

const main = async () => {

    let opt = '';

    do {
        
        opt = await inquirerMenu();
        await inquirerPause();

    } while (opt !== '0')
    
    
}

main();