const container = document.querySelector(".container");

function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => {
       return res.json();
    })
    .then((data) => {
        var pokemon = data.results;
        var poke = "";
        for(i=0;i<=150;i++)
        {
            var url = `https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`;
            poke += `<div id="container"> <img src=${url}> <h2>${pokemon[i].name.toUpperCase()}</h2> </div>`;
        }
        container.innerHTML = poke;
    })
}


getPokemon();