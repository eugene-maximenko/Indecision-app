var nameVar = 'Eugene'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

// Block scoping

const fullName = 'Jen Maximenko'
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);