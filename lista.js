let n = [2, 4, 3, 1, 9, 8, 10, -1];
let maiorNum, menorNum, i = 0, j = n;
let swapped = true;

maiorNum = menorNum = n[0];

while (true) {
  if (n[i] > maiorNum) {
    maiorNum = n[i];
  } else if (n[i] < menorNum) {
    menorNum = n[i];
  }
  i++
  
  if (n[i] === undefined) {
    break;
  }
}

while (swapped) {
  swapped = false;
  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] > n[i + 1]) {
      let temp = n[i];
      n[i] = n[i + 1];
      n[i + 1] = temp;
      swapped = true;
    }
  }
}


console.log("O maior número é: " + maiorNum);
console.log("O menor número é: " + menorNum);
console.log(n);