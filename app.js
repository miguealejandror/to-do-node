import colors from "colors";
import { showMenu, pause } from "./helpers/messages.js";

console.clear();

const main = async () => {

    let opt = '';

    do {
        
        opt = await showMenu();
        if (opt !== '0') await pause();

    } while (opt !== '0')
    
    
}

main();