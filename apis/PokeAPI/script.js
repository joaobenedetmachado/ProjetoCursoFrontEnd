function SearchPokeInfos() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    console.log(pokemonName)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        infosPokemon = `
            <h1 id="name">${data.name}</h1>
            <img src="${data.sprites.front_default}" height="200px" alt="${data.name}">
            <div id="content">
                <div class="item">
                    <h2>Weight: ${data.weight / 10} kg</h2>
                </div>
                <div class="item">
                    <h2>Height: ${data.height / 10} m</h2>
                </div>
                <div class="item">
                    <h2>Abilities: ${data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</h2>
                </div>
                <div class="item">
                    <h2>Attacks: ${data.stats.find(stat => stat.stat.name === 'attack').base_stat}<</h2>
                </div>
                <div class="item">
                    <h2>Moves: ${data.moves.slice(0, 5).map(moveInfo => moveInfo.move.name).join(', ')}<</h2>
                </div>
            </div>`
        document.getElementById('infosPokemon').innerHTML = infosPokemon;
    })
}