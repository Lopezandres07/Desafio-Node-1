const fs = require('fs')

const animalRegister = (petName, age, typeOfAnimal, animalColor, sickness) => {
  const register = JSON.parse(fs.readFileSync('citas.json', 'utf8'))

  if (!petName || !age || !typeOfAnimal || !animalColor || !sickness) {
    console.log('Please complete the information')
    return
  }

  register.push({
    Name: petName,
    Age: age,
    Animal: typeOfAnimal,
    Color: animalColor,
    Sickness: sickness,
  })

  fs.writeFileSync('citas.json', JSON.stringify(register))

  console.log(register)
}

const registeredAnimals = () => {
  const animals = fs.readFileSync('citas.json', 'utf8')

  JSON.parse(animals).forEach((animal) => {
    console.log(animal)
  })
}

module.exports = { animalRegister, registeredAnimals }
