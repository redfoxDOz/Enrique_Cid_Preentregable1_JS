alert("WELCOME TO THE JUNGLE");

const bandas = ["Metallica", "Iron Maiden", "Helloween", "Judas Priest"];
const vocalistas = {
    "Metallica": [],
    "Iron Maiden": [],
    "Helloween": [],
    "Judas Priest": []
};

function showMelider(banda) {
    let resultado = vocalistas[banda].join("\n");
    alert(`El Vocalista de ${banda}:\n${resultado}`);
}

for (let i = 0; i < bandas.length; i++) {
    let opcion = parseInt(prompt(`Elige la Mejor Banda Metal (intento: ${i+1} de ${bandas.length}):\n` +
        "1. Metallica\n" +
        "2. Iron Maiden\n" +
        "3. Helloween\n" +
        "4. Judas Priest\n" +
        "5. Salir"
    ));

    if (opcion >= 1 && opcion <= 4) {
        let banda = bandas[opcion - 1];
        let vocalista = prompt(`¿Cómo se llama el Vocalista de ${banda}?`);
        vocalistas[banda].push(vocalista);
        showMelider(banda);
    } else if (opcion === 5) {
        alert("Adiós - Nos vemos en el Infierno - ");
        break;
    } else {
        alert("Fallaste, vuelve a intentarlo o lo lamentarás");
    }
}
