import { albertAll, buttonClick, red ,paren} from "./child.js";

import {myFunction  } from "./moduleA.js";

red();


 


console.log(albertAll);
 
console.log(paren(1 ));



async function child() {

    let waiting = await paren;
 
    let another = await myFunction;

    
    
    
console.log("chils is already coming");

console.log(myFunction());
        
        
        
    


    
}

child();




let numbers =[1,2,3,4,5,6,7,8,8,9,9,9,9,9];
numbers.push("red");
numbers.splice(0,9);
console.log(...numbers);



 

const data = setTimeout((a) => {
                fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(...json));

            console.log("the date is arrived");
            
            

           

                
            },2000);

            


            console.log(data);
            









 





