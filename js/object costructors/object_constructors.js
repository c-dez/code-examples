function Player (name, marker){
    this.name = name;
    this.marker = marker;
    this.myFunction = ()=>{
        console.log('hello')
    }
}


Player.prototype.sayHello = function(){
    console.log('hello, Im a player!')
}
const player = new Player('steve', 'X')//player.sayHello()

//Prototypal inheritance


//Recommended Method for Prototypal Inheritance
// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype)