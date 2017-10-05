console.log("testing Promise");

const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});

function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", url);
    // xhr.onload = () => resolve(xhr.responseText);
    // xhr.onerror = () => reject(xhr.statusText);
    // xhr.send();
    if(false){
        resolve("fulfilled");
    } else {
        reject("failed");
    }
    console.log("myAsyncFunction");
  });
}

myAsyncFunction().then((successMessage) => {
  console.log("Yay! " + successMessage);
}).catch((errorMessage) => {
  console.log("Noo! " + errorMessage);
});
