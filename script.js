// 128. Moderní JavaScript - Ladíme detaily: šipková notace v poli (filter, find)

const people = [{
    name: "David", 
    age: 25
},{
    name: "Harry",
    age: 15
},{
    name: "Ron",
    age: 15
}]

// hladame človeka, ktorý má menej ako 20 rokov

// klasický dlhý zapis
// const less20 = people.filter(function(onePerson){
//     return onePerson.age < 20
// })

// zápis šípkovou notáciou
const less20 = people.filter((onePerson) => onePerson.age < 20)

// vypis premennej less20
console.log(less20)



// 1. nájdite človeka, ktorému je presne 15
// 2. najdite človeka, ktorý sa volá Ron
// 3. ukážte rozdiel medzi filter a find v 1. a 2.


// 1. metoda filter
const exactAge = people.filter((onePerson) => onePerson.age == 15)
console.log(exactAge)

// 2. metoda filter
const exactName = people.filter((onePerson) => onePerson.name == "Ron")
console.log(exactName)

// 3. metoda find
const exactAge2 = people.find((onePerson) => onePerson.age == 15)
console.log(exactAge2)
// rozdiel medzi find a filter je, že find nájde len prvý výskyt a tam skončí
// filter nájde všetky výskyty

