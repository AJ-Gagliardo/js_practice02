

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then(response=> {
//     if(!response.ok){
//         throw new Error('could not fetch resource')
//     };
//     return response.json()
// })
// .then(data => console.log(data.name))
// .catch(error=>console.error(error));


async function fetchData(){

    const pokemonName  = document.getElementById('pokemonName').value.toLowerCase();
console.log(pokemonName);
    try{
        const response = await(fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`))

        if(!response.ok){
            throw new Error('could not feth this resource')
        }

        const data= await response.json();
        // console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');

        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';

    }
    catch(error){
        console.error(error)
    }
}

// fetchData();