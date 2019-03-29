/*
let a : number = 10;
console.log(a)

let numeros:Array<number> = [4,5,6]
for(let numero of numeros){
    console.log(numero)
}

function triplica(numero:number):number{
    return 3*numero;
}
console.log(triplica(50))

function soma(...numeros:number[]):number{
    let res : number=0;
    for(let numero of numeros){
        res =  res + numero;
    }
    return res
}

console.log(soma())
console.log(soma(4,5,6,7))

//arrow function
let dobrar = (x) =>x*2;
console.log(dobrar(2));

let numeros1 : number[] = [1,2,3,4];
numeros1 = numeros1.map(x=>2*x);
console.log(numeros1)
*/
//first question
//A)
/*let a = 10;
a = "2";
console.log(a)
 */
/*
let b: any = 10;
b ="0";
console.log(b)
*/
/*
let c: number = 10;
c =2;
console.log(c)
*/
/*
function somaa(x:number,y?:any):number{
    return x+y
}
console.log(somaa(1,2))
console.log(somaa(1,"2"))
console.log(somaa(1))

*/
/*
enum siglas{'PI','CE','MA'}
for(let i in siglas){
    console.log(i)
}
for(let i in siglas){
    console.log(siglas[i])
}
*/
/*
function exibir(...letras){
    for(let i of letras){
        console.log(i)
    }
    console.log(" ")
}

exibir('a','b')
exibir('a','b','c')
exibir('a','b','c','d')
*/
/*
let ola = () => console.log('ola');

ola()
*/
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var numberpar = array.filter(function (x) { return x % 2 != 0; });
console.log(numberpar);
//# sourceMappingURL=app.js.map