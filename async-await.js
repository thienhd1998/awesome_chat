let sum = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a!= "number" || typeof b != "number") {
      reject("Giá trị nhập vào phải là số");
    }
    resolve(a + b);
  });
};
 
// Promise
sum(7, 10)
  .then((total) => {
    console.log(total);
  })
  .catch((error) => {
    console.log(error);
  });
