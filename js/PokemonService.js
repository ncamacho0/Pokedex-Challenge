let PokemonService = {
	getPokemon : function(name) {

        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP'); // code for IE6, IE5
        }
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let poke  = JSON.parse(this.responseText);
                Pokemon = {
                    id : 1,
                    name :  poke.name,
                    img :  poke.sprites.back_default,
                    weight : poke.weight,
                    height : poke.height,
                    type : poke.types[0].type.name,
                    move : poke.moves[0].move.name
                };
            } else if( this.status == 404) {
                Pokemon = { id: 0}
            }
        };
        
        xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/"+ name); // si no se pone el 3er parametro, por default es true, es decir Asincrono. Y si se pone en falso seria sincrono.
        xhr.send();
        
        return Pokemon;
	}

}