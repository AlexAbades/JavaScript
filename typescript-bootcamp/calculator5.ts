// Instead of allowing two types on that specific function, it's better to put that thw output, 
// if it has, it should only be a number 
type Result2 = number

const calculator5 = (a:number, b: number, op: Operation): Result2 => { // We can specify the type of the output. We can specify more than one output 
    if (!operations.includes(op)){  // we are checking that the op it's included in operation constant.
        console.log("This operation is not defined")  // Python: operation is a list, we are cheking if the string it's in the list. If it's not in display message
    }

    if(op === 'multiply') return a*b
    if(op ===  'add') return a+b

    if(op == 'divide'){
        if (b === 0) throw new Error("can\t divide by 0! sorry!")
        return a/b    
    }

    throw Error('Operation is not valid') ;
    
}

//  We can use the process.ergv
console.log(process.argv)