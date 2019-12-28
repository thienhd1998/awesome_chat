let sum = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a!= "number" || typeof b != "number")
    {
      reject("Giá trị truyền vào phải là số");
    }
    resolve(a + b);
  })
}

sum(7, 10)
  .then((total) => sum(total, 10))
  .then((total1) => sum(total1, 10))
  .then((total2) => {
    console.log(total2);
  })
  .catch((error) => {
    console.log(error);
  });