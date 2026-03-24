const pasta_IMGs = [
    './Assents/IMGs/img_1.jpg',
    './Assents/IMGs/img_2.jpg',
    './Assents/IMGs/img_3.jpg',
    './Assents/IMGs/img_4.jpg',
    './Assents/IMGs/img_5.jpg',
];

let indice = 0;
const slide = document.getElementById('Slide');

// Função Trocar de Imagens
function trocar_IMGs(){
    indice = (indice + 1) % pasta_IMGs.length; // Anvança e volta ao Inicio
    slide.src = pasta_IMGs[indice];
}

// Tempo de espera para Trocar entre as IMGs
setInterval(trocar_IMGs, 3000);