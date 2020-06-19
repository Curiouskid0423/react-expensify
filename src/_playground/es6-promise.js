const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("This is a resolve message.");
        reject("This is a reject message.");
    }, 5000);
});

console.log("before");

promise.then((resolveData) => {
    console.log(resolveData);
}).catch((error) => {
    console.log("Error: ", error);
});

console.log("after");