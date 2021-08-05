// Object Creation in Javascript

// bind and this
let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound)
    }
}

dog.talk()
console.log('hello')