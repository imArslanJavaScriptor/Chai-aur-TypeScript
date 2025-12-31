// Type Inference: Matlab Khud samajh jana Example: 
let myBook = "The Times Ruch"
// myBook = 10 // Here It automatically detects that myBook is type string and it is not assignable to type number and as you can see i have no provided the specific type here but still typescript is able to detect it. this behaviour is called Type Inference.

// Type Annotation: Yaha mujhe khud sa samjhan parta ha clear instructions deni hoti ha.
let teaFlavour: string = "Masala Tea"
teaFlavour = "Ginger Tea"
// teaFlavour = 10 // here everything is same just we have implicitly tell that the teaFalvour is type of string so it accept the type string if we try to pass other data type like number etc then it will going to through an error.