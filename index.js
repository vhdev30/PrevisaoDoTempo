


let chave = "5b843f9fe2fa96722b76a8e5def5a33e"

function colocarNaTela (dados){
console.log(dados)
document.querySelector(".cidade").innerHTML= "Tempo em " + dados.name
document.querySelector(".temp").innerHTML= Math.floor( dados.main.temp) + " °C"
document.querySelector(".condicoes").innerHTML= dados.weather[0].description
document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity
 + " %"
}

async function buscarCidade(cidade) {
    let dados = await fetch (
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +
        "&lang=pt_br" + "&units=metric")
    .then (resposta => resposta.json())

    colocarNaTela(dados)

}


function buttonPress() {
    let cidade = document.querySelector(".valueInput").value
    buscarCidade(cidade)

}
