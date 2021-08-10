// Object Creation in Javascript

// Day 1) bind and this
// let dog = {
//     sound: 'woof',
//     talk: function() {
//         console.log(this.sound)
//     }
// }

// dog.talk() // "woof"
// let talkFunction = dog.talk
// talkFunction() // undefined
// let boundFunction = talkFunction.bind(dog)
// boundFunction() // "woof"

// let button = document.getElementById('myNiceButton')
// button.addEventListener('click', dog.talk.bind(dog))

// Day 2) more exammples of bind and this
// function speak() {
//     console.log(this.sound)
// }

// let boromir = {
//     say: speak,
//     sound: 'one does not simply walk into mordor'
// }
// boromir.say()  // "one does not simply walk into mordor"
// let blabber = boromir.say
// blabber() // undefined

// let gollum = {
//     jabber: boromir.say,
//     sound: 'My precious'
// }
// gollum.jabber() // "My precious"


// Day 3) Prototype Basics

// function talk() {
//     console.log(this.sound)
// }
// let animal = {
//     talk
// }
// let dog = {
//     sound: 'woof!'
// }
// let prarieDog = {
//     howl: function() {
//         console.log(this.sound.toUpperCase())
//     }
// }
// Object.setPrototypeOf(dog, animal)
// animal.talk = function() {
//     console.log('i am a little teapot')
// }
// dog.talk()
// Object.setPrototypeOf(prarieDog, dog)
// prarieDog.howl()

// Day 4) The new keyword

function Person(saying) {
    this.saying = saying
}

Person.prototype.talk = function() {
    console.log('I say:', this.saying)
}

var crockford = new Person('Semicolons!!!!!')
crockford.talk()

// lets recreate new and what it does
// remember that whenever a function object is created in javascript, it has the prototype property automatically

function spawn(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    return obj
}
// this function shows what new is already doing
// Array.from creates an array from whatever is passed in, in this case, the arguments property.  If you don't remember what that is,
// console.log(arguments) or check out the 'new' keyword video at 17 min in



var crockfard = spawn(Person, 'Semicolons!!!')
crockfard.talk()