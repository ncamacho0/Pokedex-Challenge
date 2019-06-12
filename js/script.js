let form = document.getElementById("form");
let pkmName = document.getElementById("inputSearch");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let myPokemon = PokemonService.getPokemon(pkmName.value);

    if(myPokemon.id === 1){
        document.getElementById("error").innerText = "  ";
        document.getElementById('name').innerHTML =  "Nombre: " + myPokemon.name;
        let imgNewelement = document.createElement("img");   // Create a <img> element
        imgNewelement.src = myPokemon.img;
        let img = document.getElementById('imgPoke');
        if (img.hasChildNodes())
        img.removeChild(img.childNodes[0]);
        document.getElementById('imgPoke').appendChild(imgNewelement);
        document.getElementById("weight").innerHTML = "Weight: "+ myPokemon.weight;
        document.getElementById("height").innerHTML =  "Height: " +myPokemon.height;
        document.getElementById("types").innerHTML =  "Type: " + myPokemon.type;
        document.getElementById("moves").innerHTML =  "Move: " + myPokemon.move;
        
    }else{
        document.getElementById("error").innerText = "Ese pokémon no se encuentra en la API";
        document.getElementById("name").innerText = "  ";
        document.getElementById("imgPoke").innerText = "  ";
        document.getElementById("height").innerText = "  ";

        document.getElementById("weight").innerText = "  ";
        document.getElementById("types").innerText = "  ";
        document.getElementById("moves").innerText = "  ";

    }
});


