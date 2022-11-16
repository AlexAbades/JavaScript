const operations = ['multiply', "add", "divide"];

const calculator = (a:number, b: number, op: string) => {
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

console.log(calculator(1,3, 'add'))