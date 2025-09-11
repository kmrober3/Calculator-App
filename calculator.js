class Calculator { 

    //Initializes HashMap
    constructor() {
        this.map = new Map([
            ["+", 1],
            ["-", 2],
            ["*", 3],
            ['/', 4]
        ])
    }
    
    //Parses input
    serializeInput(input) {  
        //console.log(input)
        let len = input.length; 
        let copy = []; 
        let x = 0;  
        for (let i = 0; i < len; i++) { 
            if (this.isletterOrDigit(input[i])) { 
                copy[x] = input[i];
                x++;        
            } else if (this.map.has(input[i])){
                copy[x] = input[i]; 
                x++;
            } else if (this.isDecimal(input[i])) {
                copy[x] = input[i];
                x++;
            } else {
                continue;
            }
        }  
        let serializedCopy = copy.join(""); 
        let result = this.deserializeInput(serializedCopy); 
        document.getElementById("result").textContent = "Result: " + result;
    }   

    //Processes input
    deserializeInput(copy) {   
        try { 
            let result = Function('"use strict"; return (' + copy + ')')();
            console.log("Result: " + result);
            return result;
        } catch(err) { 
            console.log("Invalid input: " + copy);
            return null;
        }
    }

    //Utilized to determine if individual character is letter or digit
    isletterOrDigit(x) {  
        return /^[a-zA-Z0-9]$/.test(x);
    }  

    isDecimal(x) {
        return /^[.]$/.test(x);
    }
}    


let calc = new Calculator(); 
let userInput = "";
document.getElementById("input").addEventListener("click", (event) => { 
    userInput = document.getElementById("equation").value; 
    calc.serializeInput(userInput);
})


//Testing Code
let instance = new Calculator();   


/*
//Imports readline
const readline = require("readline");

//Handles reading from input, and writing to output
const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});*/

/* Displays "Enter something: " to the user, waits for user to type then press enter*/ 
/*The second argument is a **callback function** that receives whatever the user typed as the parameter `answer`.*/
/*rl.question("Enter something: ", (answer) => {  
  instance.serializeInput(answer);  
  console.log(`You typed: ${answer}`);
  rl.close();
});*/