// Here in this code ma bta rha hu name ki type kya hogi greet(name: string)
// Then greet(name: string): string  ==> tells ke ye function jo return krega wo bhi string return krega. 
function greet(name: string): string {
    return `Hello ${name}`;
}



console.log(greet("Arslan"));
console.log(greet(100));