const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
    // Obtenemos el año actual
    const today = new Date();
    const currentYear = today.getFullYear();

    // Array para almacenar los actores con sus edades
    const actorsWithAges = [];

    // Usamos un bucle for...of para recorrer los actores
    for (const actor of actors) {
        // Calculamos la edad restando el año de nacimiento del año actual
        const age = currentYear - actor.born;

        // Añadimos un nuevo objeto con el nombre y la edad al array
        actorsWithAges.push({
            name: actor.name,
            age: age
        });
    }

    // Retornamos el array con los actores y sus edades
    return actorsWithAges;
}

// Llamamos a la función y mostramos los resultados
const actorsAges = calculateActorsAges(actors);
console.log('Actores y sus edades:');

actorsAges.forEach(actor => {
    console.log(`${actor.name}: ${actor.age} años`);
});