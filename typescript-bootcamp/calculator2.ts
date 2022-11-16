// To get the completely versatility of the typesscript we can define an object, and pass that object 
// to the function 
type Operation = 'multiply' | 'add' | 'divide'

const calculator2 = (a:number, b: number, op: Operation): number | string => { // We can specify the type of the output. We can specify more than one output 
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