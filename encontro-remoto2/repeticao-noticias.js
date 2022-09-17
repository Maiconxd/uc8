//array e foreach

let noticias = [
    'Proibição para campanha de Bolsonaro usar imagens do 7 de Setembro não se restringe a material de TV pública, decide TSE', //0
    'Lula faz campanha em Porto Alegre e chama de vergonha nacional dados sobre alfabetização de crianças', //1
    'Bolsonaro faz comício em cidade do PR com maior comunidade ucraniana do país somos irmãos' //2
]

console.log('Quantidade de notícias: ' + noticias.length) //retorna o tamanho da minha lista

for (let n = 0; n < noticias.length; n++){
console.log(noticias[n])
}

//metodo para percorrer todos os itens da lista(foreach)
noticias.forEach(cadaItem => {
    console.log(cadaItem)
})