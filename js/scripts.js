let repository = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    { name: 'Charmander', height: 0.6, types: 'fire'},
    { name: 'Squirtle', height: 0.5, types: 'water'}
]
function printArrayDetails(pokemon){
        if (pokemon.height > 0.6){
            document.write(pokemon.name + ' (height: ' + pokemon.height + ')' +  " - Wow, that's big!"  + '<br>')
        }
        else {
            document.write(pokemon.name + ' (height: ' + pokemon.height + ')' + '<br>') 
        }
};
repository.forEach(printArrayDetails);
