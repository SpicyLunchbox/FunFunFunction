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

let button = document.getElementById('myNiceButton')
button.addEventListener('click', dog.talk.bind(dog))