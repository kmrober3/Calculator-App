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
            } else {
                continue;
            }
        }  
        let serializedCopy = copy.join(""); 
        console.log(serializedCopy);
        this.deserializeInput(serializedCopy);
    }   

    //Performs operations on input
    deserializeInput(copy) {  
        let i = 0; 
        let max = copy.length;   
        let flag = false;  
        let result = 0;
        let a = 0;
        let b = 0;  
        while (i < max) {
            if (this.isletterOrDigit(copy[i]) && flag == false) { 
                a = Number.parseInt(copy[i]);
                flag = true;
                i++;
                continue;
            } else if (!this.isletterOrDigit(copy[i]) && this.map.has(copy[i])) {   
                i++;
                b = Number.parseInt(copy[i]);
                if (copy[i] == "+") { 
                    result += this.addition(a, b);  
                } else if (copy[i] == "-") {
                    result += this.subtraction(a, b);
                } else if (copy[i] == "*") { 
                    result += this.multiplication(a,b);
                } else if (copy[i] == "/") { 
                    result += this.division(a, b);
                } 
                i++;
            }
        }  
        console.log(result);
        return result;
    }

    //Utilized to determine if individual character is letter or digit
    isletterOrDigit(x) {  
        return /^[a-zA-Z0-9]$/.test(x);
    } 

    //Utilized to compute addition 
    addition(a, b) {
        return a + b;
    } 

    //Utilized to compute subtraction
    subtraction(a, b) { 
        return a-b;
    }

    //Utilized to compute multiplication 
    multiplication(a, b) { 
        return a * b;
    } 

    //Utilized to compute division
    division(a, b) { 
        return a / b;
    }
}   

let instance = new Calculator();  

//Imports readline
const readline = require("readline");

//Handles reading from input, and writing to output
const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
}); 

/* Displays "Enter something: " to the user, waits for user to type then press enter*/ 
/*The second argument is a **callback function** that receives whatever the user typed as the parameter `answer`.*/
rl.question("Enter something: ", (answer) => {  
  instance.serializeInput(answer);  
  console.log(`You typed: ${answer}`);
  rl.close();
});