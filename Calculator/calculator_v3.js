const calcolaBtn = document.getElementById("calcola")
const n1Elem = document.getElementById("n1")
const n2Elem = document.getElementById("n2")
const opElem = document.getElementById("operazione")
const resElem = document.getElementById("risultato")
const erroElem = document.getElementById("error")


function executeOperation(a, simbolo, b){
     try {
        valida(regola, n1Elem.value, n2Elem.value)
        const a = Number(n1Elem.value)
        const b = Number(n2Elem.value)
    
        const chosenOp = operations[opElem.value]
        const res = calcola(chosenOp,a,b)
        erroElem.textContent = " "
        resElem.textContent = res
    } catch (error) {
        resElem.textContent = error.message

    }

}

function forOperation(sym){
    return function(){
        executeOperation(n1Elem.value, sym, n1, n2)
    }
}

const operations = {
    '+' :  (a,b) => a+b,
    '-' :  (a,b) => a-b,
    '*' :  (a,b) => a*b,
    '/' :  (a,b) => {
        if (b===0) throw new Error("Div by zero")
        return a/b
        
    },
    '**': (a,b) => Math.pow(a,b),
    'min': (a,b) => Math.min(a,b),
    'max': (a,b) => Math.max(a,b)
}

const LIMIT = 1000000

const regole = [
    (a,b) => {
        if (a === "" || b === "") throw new Error("inserire entrambi i numeri")
    },
    (t1,t2) => {
        if(t1 > LIMIT || t1 < -LIMIT || t2 > LIMIT || t2 < -LIMIT)
            throw new Error("Numeri troppo grandi")
    }

]

function format(a, simbolo, b, res){
    return a+" "+simbolo+" "+b+" "+res
}

function valida(regole, t1, t2){
    for (const regola of regole) regola(t1,t2)
}

function scegliOpereazione(simbolo){
    const v = operations[simbolo]
    if(v===undefined) throw new Error("operazione nen supporta " + simbolo)
}


function calcola(f, a, b) {
    return f(a,b)
}

//console.log(calcolaBtn);
calcolaBtn.addEventListener("click", function () {
   

    


})
