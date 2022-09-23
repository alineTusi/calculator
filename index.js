
// Task 2

// 1. Create HTML structure: 2 Input fields, 2 buttons, result
// 2. Work with DOM Element
// 3. You need to understand how you take the value 
// of the each input
// 4. Write 2 functions: 1st -> Multiply 2nd: divide
// 5. Show the result on the page


const multiplyOperator = document.querySelector("#multiplication-operator-button");

const divideOperator = document.querySelector("#division-operator-button");

const resultOperator = document.querySelector(".result-output");



const multiplication = () =>{
   
    const firstValue = document.querySelector("#first-input").value;

    const secondValue = document.querySelector("#second-input").value;

    const result = firstValue * secondValue;

    resultOperator.textContent = result;

    // console.log(result) 
};

const division = () =>{
    const firstValue = document.querySelector("#first-input").value;

    const secondValue = document.querySelector("#second-input").value;

    const result = firstValue / secondValue;

    resultOperator.textContent = result;

    console.log(result) 

}

multiplyOperator.addEventListener("click",multiplication);

divideOperator.addEventListener("click",division);

