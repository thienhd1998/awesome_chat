
/*
let sum = (a, b) => {
  setTimeout(() => {
    return (a+b);
  }, 1000);
};

let total = sum(7,10);
console.log(total);
*/ 

// callback
/*
let sum = (a, b, callback) => {
  setTimeout(() => {
    let error, result;
    if (typeof a != "number" || typeof b != "number") {
      error = "Gia tri truyen vao phai la so";
      return callback(error, null);
    } 
   result = (a + b);
   return callback(null, result);
  }, 1000);
}

sum(7, 10, (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
})
*/

// callback hell
let sum = (a, b, callback) => {
  setTimeout(() => {
    let error, result;
    if (typeof a != "number" || typeof b != "number") {
      error = "Giá trị truyền vào phải là số";
      return callback(error, null);
    }
    result = (a + b);
    return callback(null, result);
  }, 1000);
};

sum(7, 10, (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  sum(result, 10, (error, result01) => {
    if (error) {
      console.log(error);
      return;
    }
    sum(10, result01, (error, result02) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(result02);
    })
  })
})
