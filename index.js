// Object Creation in Javascript

// bind and this
let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound)
    }
}

dog.talk() // "woof"
let talkFunction = dog.talk
talkFunction() // undefined
let boundFunction = talkFunction.bind(dog)
boundFunction() // "woof"

// let button = document.getElementById('myNiceButton')
// button.addEventListener('click', dog.talk.bind(dog))

// more exammples of bind and this
function speak() {
    console.log(this.sound)
}

let boromir = {
    say: speak,
    sound: 'one does not simply walk into mordor'
}
boromir.say()  // "one does not simply walk into mordor"
let blabber = boromir.say
blabber() // undefined

let gollum = {
    jabber: boromir.say,
    sound: 'My precious'
}
gollum.jabber() // "My precious"