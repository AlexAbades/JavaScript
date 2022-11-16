
// Instead of defining a variable as a list and cheking if the string its inside that string 
// we can specify that the string should be on of those types 

// Preguntar a ferran segundo 18.37
// Checkeo de forma estatica 

const calculator1 = (a:number, b: number, op: 'multiply' | 'add' | 'divide') => {
    if (!operations.includes(op)){  // we are checking that the op it's included in operation constant.
        console.log("This operation is not defined")  // Python: operation is a list, we are cheking if the string it's in the list. If it's not in display message
    }

    if(op=='multiply') return a*b
    if(op == 'add') return a+b

    if(op == 'divide'){
        if (b== 0) return "can\t divide by 0! sorry!"
        return a/b    
    }
}