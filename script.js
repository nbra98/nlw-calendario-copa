function criarJogo(time1, hora, time2) {
    return `
        <li>
            <img src="./assets/icone-${time1}.svg" alt="Bandeira ${time1}">
            <strong>${hora}</strong>
            <img src="./assets/icone-${time2}.svg" alt="Bandeira ${time2}">
        </li>
    `
}

let delay = -0.3;
function criarCard(dia, diaSemana, jogos) { // Criando função para automatizar criação de calendários - Com parâmetros para preenchimento automátido de datas.
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
        <h2>${dia} <span>${diaSemana}</span></h2> <!-- Interpolação, usado para automatizar preenchimento do dia e dia da semana -->
            <ul>
                ${jogos}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
            criarCard("24/11", "Quinta-Feira", criarJogo("suica", "07h00", "camaroes") +
                criarJogo("uruguay", "10h00", "coreia-sul") +
                criarJogo("portugal", "13h00", "gana") +
                criarJogo("brasil", "16h00", "servia")) +
            
            criarCard("28/11", "Segunda-Feira", criarJogo("camaroes", "07h00", "servia") +
                criarJogo("coreia-sul", "10h00", "gana") +
                criarJogo("brasil", "13h00", "suica") + 
                criarJogo("portugal", "16h00", "uruguay"))+
            
            criarCard("02/12", "Sexta-Feira", criarJogo("coreia-sul", "12h00", "portugal") +
                criarJogo("gana", "12h00", "uruguay",) +
                criarJogo("servia", "16h00", "suica") +
                criarJogo("camaroes", "16h00", "brasil"))