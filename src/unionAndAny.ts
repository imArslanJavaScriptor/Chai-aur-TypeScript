// Unions
let subs: number | string  = "1M"

subs = 10
subs = "2M"

let apiRequestStatus: "pending" | "success" | "error" = 'pending' 
apiRequestStatus = "success"

let airlineSeat: "aisle" | "window" | "middle" = "window"
airlineSeat = "aisle"

// Use case to a avoid any
const orders = ["12", "20", "50", "42"]

let currentOrder: string | undefined;

for(let order of orders) {
    if(order === "50") {
        currentOrder = order
        break
    }
}

console.log(currentOrder)


// Extra Discussion 
// We have new type called Unknown which can be use in the place of Any 

// Example of Any
let value1: any;

value1 = 10;
value1 = "hello";
value1 = true;

value1.toUpperCase(); // ✅ No error (even if value is NOT a string)
value1();             // ✅ No error
value1.foo.bar();     // ✅ No error


// Example of Unknown
let value: unknown;

value = 10;
value = "hello";
value = true;


// value.toUpperCase(); // ❌ Error
// value();             // ❌ Error
