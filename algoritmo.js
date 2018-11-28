let brands = [
    "Gap",
    "Banana Republic",
    "Boss",
    "Hugo Boss",
    "Taylor",
    "Rebecca Taylor"
];

let clothingTypes = [
    "Denim",
    "Pants",
    "Sweaters",
    "Skirts",
    "Dresses"
];

// let textTest = "red dresses banana Republic";


let algoritmo = (textTest) => {


    // hay que unir los nombres compuestos con un comodin
    let textoConComodin = "";
    brands.forEach(item => {

        let posEnTexto = textTest.toLocaleLowerCase().search(new RegExp(item, "i"));
        // reemplazar el espacio en blanco de las marcas por el comodin
        if (posEnTexto != -1) {
            // textoConComodin = textTest.replace(new RegExp(item, "i"), item.replace(" ", ".:."));
            textoConComodin = textTest.replace(new RegExp(item, "i"), `<strong>${item}</strong>`);
        }
    });

    // reemplaza en el texto de prueba el espacio de las marcas compuestas por un comodin
    // ahora si separo el texto de prueba por espacios, voy a tener las palabras compuestas junstas

    let palabrasEnTexto = textoConComodin.split(" ");


    // temporalmente se pasan todos los tipos de ropa a minusculas
    var lowerCaseRopa = clothingTypes.map(function(value) {
        return value.toLowerCase();
    });

    // se reemplazan los tipos de ropas con la manera italica
    palabrasEnTexto.forEach((palabra, index) => {
        if (lowerCaseRopa.indexOf(palabra.toLowerCase()) != -1) {
            palabrasEnTexto[index] = `<del>${ palabra }</del>`;
        }
    });


    // se reemplazan las marcas con la manera negrilla
    // palabrasEnTexto.forEach((palabra, index) => {
    //     if ()
    // });
    // palabrasEnTexto.toString().replace
    // console.log(palabrasEnTexto.join(" "));

    return palabrasEnTexto.join(" ");
}