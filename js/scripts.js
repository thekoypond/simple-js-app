let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
        { name: 'Charmander', height: 0.6, types: 'fire'},
        { name: 'Squirtle', height: 0.5, types: 'water'}
    ];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
    };
  })();

function printArrayDetails(i){
        if (i.height > 0.6){
            document.write(i.name + ' (height: ' + i.height + ')' +  " - Wow, that's big!"  + '<br>')
        }
        else {
            document.write(i.name + ' (height: ' + i.height + ')' + '<br>') 
        }
};
pokemonRepository.getAll().forEach(printArrayDetails);