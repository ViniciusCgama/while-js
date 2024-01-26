let n = [2, 4, 3, 1, 9, 8, 10, -1];
let maiorNum, menorNum, i = 1, temp;

maiorNum = menorNum = n[0];

while (i < n.length) {
  if (n[i] > maiorNum) {
    maiorNum = n[i];
  }

  if (n[i] < menorNum) {
    menorNum = n[i];
  }
  i++; 
}

 while ( i < n.length - 1 ) {
    if (n[i] > n[i + 1]) {
        const temp = n[i];
        n[i] = n[i + 1];
        n[i + 1] = temp;
        }
        else {
            i++; 
        }
}

console.log("O maior número é: " + maiorNum);
console.log("O menor número é: " + menorNum);
console.log("A lista organizada " + n);
