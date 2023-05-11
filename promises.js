var a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved first");
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

//polyfills for promise.all

const myPromiseAll = function (listofPromises) {
  let processCompleted = 0;

  const results = [];

  return new Promise((resolve, reject) => {
    listofPromises.forEach((promise, index) => {
      promise
        .then((res) => {
          results.push(res);
          ++processCompleted;
          if (processCompleted === listofPromises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

myPromiseAll([a, b, c]).then((result) => {
  console.log(result);
});
