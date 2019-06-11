let  data = null;

let form = document.getElementById("form");
let input = document.getElementById("inputSearch");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP'); // code for IE6, IE5
    }
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("error").innerText = "  ";

            let poke  = JSON.parse(this.responseText);
            console.log(poke);
            document.getElementById('name').innerHTML =  "Nombre: " + poke.name;
            let imgNewelement = document.createElement("img");   // Create a <button> element
            imgNewelement.src = poke.sprites.back_default;
            let img = document.getElementById('imgPoke');
            if (img.hasChildNodes())
            img.removeChild(img.childNodes[0]);
            document.getElementById('imgPoke').appendChild(imgNewelement);
            document.getElementById("weight").innerHTML = "Weight: "+ poke.weight;
            document.getElementById("height").innerHTML =  "Height: " +poke.height;
            document.getElementById("types").innerHTML =  "Type: " + poke.types[0].type.name ;
            document.getElementById("moves").innerHTML =  "Move: " + poke.moves[0].move.name ;
        } else if( this.status == 404) {
            document.getElementById("error").innerText = "Ese pokémon no se encuentra en la API";
            document.getElementById("name").innerText = "  ";
            document.getElementById("imgPoke").innerText = "  ";
            document.getElementById("height").innerText = "  ";

            document.getElementById("weight").innerText = "  ";
            document.getElementById("types").innerText = "  ";
            document.getElementById("moves").innerText = "  ";
        }
    };
    
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/"+ input.value);
    
    xhr.send(data);
})


