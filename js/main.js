async function getContent(){
    try {
        const response = await fetch('http://localhost:3000/')
        const data = await response.json()
        showContent(data)
    } catch (error) {
        console.error(error)
    }
}

function showContent(pokemons){
    output = ''
    for(let pokemon of pokemons){
        output += `<li class=list-item>${pokemon.name}</li>`
    }

    document.querySelector("#main").innerHTML = output
}

const pokemons = document.querySelector(".btn")
pokemons.addEventListener('click', ()=>{
    pokemons.style.display = 'none';
    getContent();
});