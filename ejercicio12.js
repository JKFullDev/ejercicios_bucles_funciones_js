const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    // Array para almacenar los mutantes con el poder buscado
    let powerMutants = [];

    for (const mutant of mutants) {
        if (mutant.power === power) {
            powerMutants.push(mutant.name); // Añadimos el nombre del mutante al array
        }
    }

    // Construimos el mensaje según los resultados
    if (powerMutants.length > 0) {
        if (powerMutants.length === 1) {
            return `Se encontró un mutante con el poder ${power}: ${powerMutants[0]}.`;
        } else {
            return `Se encontraron mutantes con el poder ${power}: ${powerMutants.join(', ')}.`;
        }
    } else {
        return `No se encontró ningún mutante con el poder ${power}.`;
    }
}

console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'regeneration'));
console.log(findMutantByPower(mutants, 'flight'));