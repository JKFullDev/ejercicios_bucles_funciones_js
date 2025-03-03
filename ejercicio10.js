const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {
    // insert code
    //  Object.keys() para obtener un array de las claves (países) del objeto
    const countries = Object.keys(capitals);

    // Buscamos el país con un bucle for...of
    for (const countryKey of countries) {
        if (countryKey === country) {
            return `La capital de ${country} es ${capitals[countryKey]} `; // Devolvemos la capital si encontramos el país
        }
    }

    // Si no esta el país, devolvemos un mensaje
    return `Error | ${country} no está en la lista.`;
}

// Probamos la función
console.log(getCapital("Spain")); // "Madrid"
console.log(getCapital("Argentina"));
