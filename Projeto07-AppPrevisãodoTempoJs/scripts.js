

const key = "0552b6d046776dde78c7b4fe01cebb04"

function colocarDadosNaTela (dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp_max) + "C°"

    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description

    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 

    console.log(dados)


       // document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png" - Tentativa de alteração no ícone de previsão, preferível a opção com $ e {}, linha 12. Por algum motivo não está renderizando alguns ícones específicos que representam o tempo/céu. Perguntar para o Jailson.

    // document.querySelector(".umidade").innerHTML = dados.main.humidity + "%" - umidade funcionando de forma correta, porém descartei a informação.
    
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
   
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
 