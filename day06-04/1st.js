//output: 0 100 200 300 400 500 600 700 800 900 1000
function print() {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
    i = i + 99;
  }
}
print();

// for (let i = 0; i <= 1000; i += 100) {
//   console.log(i);
// }
