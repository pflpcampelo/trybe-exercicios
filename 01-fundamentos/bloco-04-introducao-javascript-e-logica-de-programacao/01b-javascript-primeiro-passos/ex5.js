/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/
const a = 40;
const b = 60;
const c = -80;
if(a < 0 || b < 0 || c < 0){
    console.log("404")
}
else if(a + b + c == 180 ){
    console.log("true")
}
else if(a + b + c != 180){
    console.log("false")
}
