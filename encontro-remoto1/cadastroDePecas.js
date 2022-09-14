//1 - se a peça possuir peso superior a 100g, pode cadastrar
//2 - dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente
//3 - caso a peça tenha um nome com quantidade inferior a 10 caracteres, informe uma mensagem de erro

let peso = 90

if (peso < 100)
{
    console.log ('não pode cadastrar, a peça deve ter no mínimo 100g')

}else {
    console.log('peça pode ser cadastrada')
}

//2) tamanho da lista
let listaDePecas = ['filtro de ar', 'retrovisor']

if (listaDePecas.length > 3)
{
    console.log ('é possivel cadastrar mais peças')

}else{
    console.log ('não existe espaço na lista')
}

//3) caracteres do nome da peça

let nomePeca = 'parachoque'

if (nomePeca.length > 3)
{
    console.log ('nome da peça está adequado para o cadastro')

}else if (nomePeca.length == 0){


console.log ('o nome não pode ser vazio')
}else{
    console.log('o nome deve ter mais de 3 caracteres, digite um nome adequado')
}