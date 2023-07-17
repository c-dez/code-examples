//Factory functions and the Module Pattern



const personFactory = (name, age)=>{
    const sayHello = ()=>console.log('Hello');
    return {name, age, sayHello};//{} es un atajo para crear variables
    //con el nombre exacto que la propiedad
}

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'
jeff.sayHello(); // calls the function and logs 'hello'

//NOTE: factory no usa el prototipo

//Factory functions simplemente
// son funciones que regresan objetos

const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};//solo puedo acceder
    //a estas funciones, por ejemplo die() es privada,
    // limitada a su scope
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy);

  //The Module Pattern
  //son similares a factory functions, pero son creadas un poco distinto

  const calculator = (() => {//todo esta envuelto para una IIFE (
    //Immediately Invoked Function Expression)
  
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476
  
//Immediately Invoked Function Expression

const calculator2 = (()=>{//es una funcion envuelta en (parentesis) y seguda de (), 
    //que la invocan, esto hace que se auto invoque al instante
    
})()