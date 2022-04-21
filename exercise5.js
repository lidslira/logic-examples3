// Crie uma função que irá receber um número e retornar o fatorial dele. 
// por exemplo: 3! = 3 * 2 * 1 // 6 

function factorial(num) {
  if (num === 0 || num === 1) return 1;

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorial(5));