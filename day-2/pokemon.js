const { Pokemon } = require('fast-poke-fetch');

Pokemon('pikachu')

  .then((data) => {

    console.log(data);

  })

  .catch((error) => {

    console.error(error);

  });