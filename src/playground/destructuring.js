
// Objectdestruction

const person = {
    name: 'Yoni',
    age: 23, 
    location: {
        city: 'ottawa',
        temp: 10
    }
};

// const name = person.name;
// const age = person.age;

const {name = 'Anonymous', age, location} = person;

console.log(`${name} is ${age}. in ${location.city}`);

const {city, temp : temperature} = person.location;
console.log(`It's ${temperature} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    pulisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = "Self-Published"} = book.pulisher;
console.log(publisherName);

// Array destruction

const address = ['35 buffon street', undefined, 'ontario', 'f3m4j5'];

const [, city = 'none', province, ]= address;

console.log(`You are in ${city} ${province}`);

const item = ['Coffee (hot)', '2', '2.50', '2.75'];

const [coffee, , medium, ] = item;

console.log(`A medium ${coffee} costs $${medium}`)