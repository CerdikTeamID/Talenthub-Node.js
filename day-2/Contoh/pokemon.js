const { Pokemon } = require('fast-poke-fetch')

Pokemon('hitmonchan').then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error(error)
});