const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a*b)
}; 

const parseArguments = (args) => {
    if(args.length !== 4) throw new Error('Wrong number of arguments')

    const firstNumber = Number(args[2])
    const secondNumber = Number(args[3])
    if (!isNaN(firstNumber) && !isNaN(secondNumber)){
        return [
            firstNumber,
            secondNumber
        ]
    } else {
        throw new Error('Provided values are not numbers')
    }
}
console.log(process.argv)
const cleanArguments = parseArguments(process.argv)

// We tranform the string to a number 
const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])

//  argv --> Position 1: ejecutor (lo que se esta ejectudanto: ts-node)
//  argv --> Position 2: archivo entero multiplayer.ts

multiplicator(a,b, `Multiplied ${a} times ${b} and the result is: `)