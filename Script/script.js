//Dados 
const pokeName =document.querySelector ('.pokename')
const pokeId =document.querySelector ('.pokeid')
const pokeImage =document.querySelector ('.img2')
//Botões e Barra de pesquisa
const form = document.querySelector ('.form')
const input = document.querySelector ('.input-search')
const buttonPrev =document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')
// Status
const pokeStatus1 = document.querySelector('.pokeHp')
const pokeStatus2 = document.querySelector('.pokeAtk')
const pokeStatus3 = document.querySelector('.pokeSpeed')
const pokeStatus4 = document.querySelector('.pokeDef')
// Inicio
let searchPokemon = 1;
// Codigo
const fetchPokemon = async (pokemon)=>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status = 200){
    const data= await APIResponse.json();
    return data;}
}
const renderPokemon = async (pokemon) =>{

         pokeName.innerHTML = 'Loading...'
         pokeId.innerHTML = "";
         const data = await fetchPokemon(pokemon);
  
    if(data){
     pokeName.innerHTML = data.name;
     pokeId.innerHTML = data.id;
     pokeImage.src = data.sprites.versions['generation-v']['black-white'].animated['front_default']; 
     searchPokemon = data.id;
     pokeStatus1.innerHTML = data['stats']['0']['base_stat'];
     pokeStatus2.innerHTML = data['stats']['1']['base_stat'];
     pokeStatus3.innerHTML = data['stats']['2']['base_stat'];
     pokeStatus4.innerHTML = data['stats']['3']['base_stat'];
    } else{
        pokeName.innerHTML ='Not Found...';
        pokeId.innerHTML ='';
    }
}
// Resto dos comandos
form.addEventListener('submit', () =>{

    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
    input.value = '';
})
buttonPrev.addEventListener ('click', () => {
    if(searchPokemon > 1) {
    searchPokemon -=1;
renderPokemon(searchPokemon);} })
buttonNext.addEventListener('click', () => {
    searchPokemon +=1;
renderPokemon(searchPokemon); 
})
renderPokemon(searchPokemon)
