import { HashMap } from "./hash.mjs"

const test =  HashMap() 


test.hashSet('apple', 'red')
test.hashSet('banana', 'yellow')
test.hashSet('carrot', 'orange')
test.hashSet('dog', 'brown')
test.hashSet('elephant', 'gray')
test.hashSet('frog', 'green')
test.hashSet('grape', 'purple')
test.hashSet('hat', 'black')
test.hashSet('ice cream', 'white')
test.hashSet('jacket', 'blue')
test.hashSet('kite', 'pink')
test.hashSet('lion', 'golden')

// should delete old banana
test.hashSet('banana', 'red')
test.hashSet('moon', 'silver')
test.hashSet('mn', 'silver')
test.hashSet('banaa', 'red')
test.hashSet('banahjfna', 'red')


console.log(test.length())
console.log(test.capacity)


