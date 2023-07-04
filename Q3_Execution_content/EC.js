// Execution Context:-
// The environment in which our code Executed and is evaluated.
// Global Execution Context // By Default
// 1.Javascript engine creates the global Execution Context before it starts to Execute any code.
// 2. Variable and function that is not inside any function. A new execution context gets created 
// every time a function is Executed.
// 3. The global execution context just like any other execution context except that it gets created by Default.
// Its associated with Global Object.

// Example:-
let x = 10;
function timesTen(a){
    return a * 10;
}
let y = timesTen(x);
Console.log(y);