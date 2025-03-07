//Criando um Array/Vetor com valores

//Usando Colchetes
let modelos = ['Gol', 'Corsa', 'Fusca', 12, true, false, null]
//ou
//Usando o construtor da Classe Array
let marcas = Array ('Chevrolet', 'Ford', 'Fiat')


//Criar um Array/Vetor sem valores (ou vazia)
let cores = [];
//ou
let categoria = new Array();

// exibir o conteúdo
console.log(modelos)
console.log(marcas)
console.log(cores)
console.log(categoria)

// Ele permiti limitar ao utilizar essa sintaxe
let clientes = new Array(5)

console.log(clientes)

//adicionando um elemento após a criação de um vetor/array ilimitada

//adicionando no fim do vetor
marcas.push('Jeep')

//adicionando no inicio do vetor
marcas.unshift('VW')
console.log(marcas)

//removendo o ultimo elemento 
marcas.pop()
console.log(marcas)

//removendo o primeiro elemento 
marcas.shift()
console.log(marcas)

// selecionado e copiando uma parte do vetor
let frutas = ['Laranja','Melância', 'Kiwi', 'Uva', 'Manga']
let legumes = ['Batata', 'Cenoura', 'Milho']

let feira = frutas.concat(legumes)

console.log(feira)

//Cortando o vetor e salvando a parte em um novo

let frutas_sel = frutas.slice(1,4)


console.log(frutas_sel)

let frutas_c = frutas.splice(1,1,'Manga')
//Elemento Removido

console.log(frutas_c)

//Lista Atualizada

console.log(frutas)

//Função Includes
//Verifica se todos os elementos do array

let situacao = frutas.includes("Manga")
console.log(situacao)

let situacoes = frutas.includes("Caju")
console.log(situacoes)

//Função Join
//Pega o vetor e transforma em texto corrido
let texto = frutas.join(', ')
console.log(texto)
//ou
//let texto = frutas.join('\n ')
//console.log(texto)


//Função Map
//permite fazer operações com os valores do vetor
let numeros = [0,1,2,3,4,5,6,7,8,9,10]
let tabuada = numeros.map(x=>x*2)
console.log(tabuada)

//Função Filter
//faz uma verificação e filtra de acordo com a regra estabelecida
let pares = numeros.filter(x=> x % 2 == 0)
console.log(pares)


//Função Find
//Retorna o primeiro valor que satifaz a condição
let localizado = numeros.find(x=> x > 5)
console.log(localizado)

//Função Findindex
//faz a mesma verificação porem retorna o index
let loc_index = numeros.findIndex(x=> x>9)
console.log(loc_index)

//Função Some
//verifica um elemento no vetor que satisfaça a condição (Retorna um único Booleano)
let loc= numeros.some (x=> x>4)
console.log(loc)

//Funçao Every
//Verifica se todos os elementos passam pela condição (Retorna um único Booleano)
let return_every = numeros.every(x=> x>3)
console.log(return_every)

