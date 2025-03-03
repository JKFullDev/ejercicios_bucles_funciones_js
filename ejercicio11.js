const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
    // Verificamos si el array está vacío
    if (movies.length === 0) {
        return 0; // O podrías lanzar un error o devolver null, dependiendo del caso
    }

    let totalDuration = 0;
    let count = 0;

    // Usamos un bucle for...of para recorrer las películas
    for (const movie of movies) {
        // Verificamos que movie.duration sea un número válido
        if (movie.duration && typeof movie.duration === 'number') {
            totalDuration += movie.duration;
            count++;
        }
    }

    // Si no hay duraciones válidas, devolvemos 0 o un mensaje
    if (count === 0) {
        return 0;
    }

    // Calculamos y devolvemos el promedio
    const avgDuration = totalDuration / count;
    return avgDuration;
}

// Llamamos a la función e imprimimos el resultado
const average = averageMovieDuration(movies);
console.log(`La duración media es de ${average} minutos`);