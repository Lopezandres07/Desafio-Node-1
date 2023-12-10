const fs = require('fs')
const { animalRegister, registeredAnimals } = require('./operaciones')

const [action, Name, Age, Animal, Color, Sickness] = process.argv.slice(2)

if (action === 'register') {
  animalRegister(Name, Age, Animal, Color, Sickness)
}

if (action === 'read') {
  registeredAnimals()
}
