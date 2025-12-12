function greetUser(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greetUser("Arslan"));

function findUserAge(user: { name: string; age?: number }): string {
    if (user.age !== undefined) {
        return `${user.name} is ${user.age} years old.`;
    } else {
        return `Age of ${user.name} is unknown.`;
    }
}

console.log(findUserAge({ name: "Alice", age: 30 }));
console.log(findUserAge({ name: "Bob" }));