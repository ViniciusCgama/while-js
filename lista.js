let n = [2, 4, 3, 1, 9, 8, 10, -1];
let maiorNum, menorNum, i = 0;

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

console.log("O maior número é: " + maiorNum);
console.log("O menor número é: " + menorNum);

