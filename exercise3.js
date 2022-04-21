//  Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. 

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result = i * j;
    console.log(`${i} x ${j} = ${result}`);
  }
}