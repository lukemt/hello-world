// @flow
/* eslint-disable no-console */
/* eslintDocumentation: http://eslint.org/docs/user-guide/configuring */

import Dog from './dog'

console.log('Hello World! Wow. Guten Morgen Lukas und noch eine Änderung');

const str = 'ES6'
console.log(`Hello ${str}`)

const toby = new Dog('Peter')

console.log(toby.bark())
