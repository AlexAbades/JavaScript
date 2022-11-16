// We can also create a new type for the output as we've done on one of the parameters 
//  We don't have to re define the type Operation because it's already created 
type Result = number | string 

const calculator4 = (a:number, b: number, op: Operation): Result => { // We can specify the type of the output. We can specify more than one output 
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