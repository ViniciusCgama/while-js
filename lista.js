let n = [2, 4, 3, 1, 9, 8, 10, -1];
let maiorNum, menorNum, i = 0, j = n;

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

for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] > n[j]) {
        let temp = n[i];
        n[i] = n[j];
        n[j] = temp;
      }
    }
}

while (i<n.length) {
  if (n[i] > n[i + 1]) {
    const temp = n[i];
    n[i] = n[i + 1];
    n[i + 1] = temp;
    i = 0;
  }else{
    i++
  }
}

console.log("O maior número é: " + maiorNum);
console.log("O menor número é: " + menorNum);
console.log(n);