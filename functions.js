/* Functions! */

/* Named Function | Função com nome */

function soma1(x,Y) {
    return x+ y;
}

/* Anonymous Function | Função anônima */

var soma2 = function(x,y){
    return x + y;
}

/* ********* ES6 ******** */
/* Arrow Function */
const soma3 = (x,Y) => {
    return x+ y;
}

const soma4 = (x,y) => x+y;

const array = [1,2,3,4,5].map(function(x) {
    return x *10
})

const array = [1,2,3,4,5].map((x) => x* 10);

console.log(soma3(10,5));