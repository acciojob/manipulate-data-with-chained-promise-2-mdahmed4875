function handler() {
  let arr = [1, 2, 3, 4];
  let output = document.getElementById("output");

  new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
    .then((arr1) => {
      return new Promise((resolve) => {
        const even = arr1.filter((num) => num % 2 === 0);
        setTimeout(() => {
          output.textContent = even.join(",");
          resolve(even);
        }, 1000);
      });
    })
    .then((arr2) => {
      return new Promise((resolve) => {
        const mul = arr2.map((num) => num * 2);
        setTimeout(() => {
          output.textContent = mul.join(",");
          resolve(mul);
        }, 2000);
      });
    });
}

window.onload = handler;
