var a = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am resolved first");
  }, 100);
});
var b = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am resolved second");
  }, 50);
});
var c = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am resolved third");
  }, 150);
});

// Promise.any([a, b, c]).then((result) => {
//   console.log(result);
// });

// Polyfills for Promise.any
const myPromiseAny = function (tasklist) {
  return new Promise((resolve, reject) => {
    let result = [];
    let counter = 0;
    tasklist.forEach((promise) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          result.push(error);
          ++counter;
          if (counter === tasklist.length) {
            reject(result);
          }
        });
    });
  });
};

myPromiseAny([a, b, c]).then((result) => {
  console.log(result);
});
