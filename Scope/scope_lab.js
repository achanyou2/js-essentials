// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    //console.log(functionVar); // Throws ReferenceError
    //console.log(functionLet); // Throws ReferenceError
    //console.log(functionConst); // Throws ReferenceError

// Practice
{
    let practiceLet = "practice block scoped let"
    const practiceConst = "practice block scoped const"
    var practiceVar = "practice block scoped var"

    console.log(practiceLet);
    console.log(practiceConst);
    console.log(practiceVar);

    practiceLet = "reassigned let"
    //practiceConst = "reassigned const" // this one will fail
    practiceVar = "reassigned var"

    console.log(practiceLet);
    console.log(practiceConst);
    console.log(practiceVar);
}

practiceLet = "reassigned let again"
practiceConst = "reassigned const again"
practiceVar = "reassigned var again"

console.log(practiceLet);
console.log(practiceConst);
console.log(practiceVar);