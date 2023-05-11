var a = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am resolved first");
  }, 100);
});
var b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved second");
  }, 50);
});
var c = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved third");
  }, 150);
});

// Promise.race([a, b, c]).then((result) => {
//   console.log(result);
// });

//polyfill for promise.race

const myPromiseRace = function (taskList) {
  return new Promise((resolve, reject) => {
    taskList.forEach((promise) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

myPromiseRace([a, b, c]).then((result) => {
  console.log(result);
});
