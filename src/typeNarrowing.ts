// Type Narrowing
function getTea(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} tea...`;
  }
  return `Chai Order: ${kind}`;
}

// Finding Truthiness
function serveMeal(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serve Default Meal`;
}

console.log(serveMeal());

// Exausted Checks
function orderTea(orderSize: "small" | "medium" | number) {
  if (orderSize === "small") {
    return `Make Small Tea Cup`;
  }

  if (orderSize === "medium") {
    return `Make Medium Tea Cup`;
  }

  return `Tea Order #${orderSize}`;
}

// Guardrails: Jitne JS ke checks ha joke type check krte ha un sbhi ko use krna guardrails ha
class AtlasionTea {
  serve() {
    return `Serving Atlasion Tea`;
  }
}

class WandaTea {
  serve() {
    return `Serving Wanda Tea`;
  }
}

function serve(tea: AtlasionTea | WandaTea) {
  if (tea instanceof AtlasionTea) {
    return tea.serve();
  }
  return tea.serve();
}

// Hum Custom Types bhi TypeScript ma na skte ha.
type TeaOrder = {
  type: string;
  sugar: number;
};

function isTeaOrder(obj: any): obj is TeaOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}


function serveOrder(item: TeaOrder | String) {
    if(isTeaOrder(item)) {
        return `Serving ${item.type} Tea with ${item.sugar} Sugar`
    }
    return `Server custom tea: ${item}`
}

type MasalaTea = {teaType: "masala"; spiceLevel: number}
type ElaiciTea = {teaType: "elaici"; amount: number}
type GingerTea = {teaType: "ginger"; quantity: number}
type Tea = MasalaTea | ElaiciTea | GingerTea