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