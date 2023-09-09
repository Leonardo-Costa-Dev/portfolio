const el = document.querySelector(`#name`)
const text = "Leonardo Costa"
const interval = 200;

function showText(el, text, interval) {
    const char = text.split('').reverse();

    const typer = setInterval(() => {
        if (!char.length) {
            return clearInterval(typer)
        }

        const next = char.pop()
        el.innerHTML += next;

    }, interval)
}
showText(el, text, interval)



/* Resposta das habilidades */


const res = document.querySelector('#paragrafo')
const html = document.querySelector('#html')

const sobre = 'Olá! Meu nome é Leonardo, sou vendedor e atualmente estou em transição de carreira com dedicaçãonos estudos para ser um desenvolvedor front-end. Em outubro/2022 tomei a decisão de iniciar meus estudos, através de cursos técnicos. Desde então venho procurando me aperfeiçoar cada dia mais para poder conseguir minha primeira oportunidade na área de front-end. Recentemente iniciei o curso de Análise e Desenvolvimento de Sistemas, na Estácio, para poder está sempre em constante aprendizado.'


html.addEventListener('mouseover', (e) => {
    e = `HTML é uma linguagem de marcação utilizada na construção de páginas na Web.`
    res.innerHTML = `${e}`
})

html.addEventListener('mouseout', (e) => {
    e = `${sobre}`
    res.innerHTML = `${e}`
})

const css = document.querySelector('#css')

css.addEventListener('mouseover', (e) => {
    e = `O CSS tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.`
    res.innerHTML = `${e}`
})

css.addEventListener('mouseout', (e) => {
    e = `${sobre}`
    res.innerHTML = `${e}`
})

const js = document.querySelector('#js')

js.addEventListener('mouseover', (e) => {
    e = `JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.`
    res.innerHTML = `${e}`
})

js.addEventListener('mouseout', (e) => {
    e = `${sobre}`
    res.innerHTML = `${e}`
})


const react = document.querySelector('#react')

react.addEventListener('mouseover', (e) => {
    e = `O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.`
    res.innerHTML = `${e}`
})

react.addEventListener('mouseout', (e) => {
    e = `${sobre}`
    res.innerHTML = `${e}`
})

// descrição dos projetos //

const textProjeto = document.querySelector('#text')
const pokemon = document.querySelector('#cardPokemon')

pokemon.addEventListener('mouseover', (e) => {
    e = `O projeto Pokedex App foi feito com React, e é alimentada pela PokéAPI.
            Ele inicia mostrando 10 pokemons, que ao clicar no pokemon, o usuario será direcionado para uma página onde sera mostrado algumas informações sobre esse pokemon, como seu nome, tipo, uma lista de seus movimentos, lista de suas habilidades.`
    textProjeto.innerHTML = `${e}`

})

pokemon.addEventListener('mouseout', (e) => {
    e = `Clique nos projetos para ver mais detalhes!`
    textProjeto.innerHTML = `${e}`
})

const landingPage = document.querySelector('#landingPage')

landingPage.addEventListener('mouseover', e => {
    e = 'Duas atividades interagindo juntas, huddle-landing-page e formulário de validação.'

    textProjeto.innerHTML = `${e}`
})

landingPage.addEventListener('mouseout', e => {
    e = 'Clique nos projetos para ver mais detalhes!'
    textProjeto.innerHTML = `${e}`
})

const htmlCssJs = document.querySelector('#htmlCssJs')

htmlCssJs.addEventListener('mouseover', e => {
    e = 'Exercício de conselho aleatório de uma API'
    textProjeto.innerHTML = `${e}`
})

htmlCssJs.addEventListener('mouseout', e => {
    e = 'Clique nos projetos para ver mais detalhes!'
    textProjeto.innerHTML = `${e}`
})

const usuarioGit = document.querySelector('#usuarioGit')

usuarioGit.addEventListener('mouseover', (e) => {
    e = 'Pegando Dados do Usuário por uma APi GuitHub'
    textProjeto.innerHTML = `${e}`
})

usuarioGit.addEventListener('mouseout', e => {
    e = 'Clique nos projetos para ver mais detalhes!'
    textProjeto.innerHTML = `${e}`
})

const breve = document.querySelector('#breve')

breve.addEventListener('mouseover', (e) => {
    e = `Em breve novos projetos`
    textProjeto.innerHTML = `${e}`
})

breve.addEventListener('mouseout', e => {
    e = 'Clique nos projetos para ver mais detalhes!'
    textProjeto.innerHTML = `${e}`
})

const breve1 = document.querySelector('#breve1')

breve1.addEventListener('mouseover', (e) => {
    e = `Em breve novos projetos`
    textProjeto.innerHTML = `${e}`
})

breve1.addEventListener('mouseout', e => {
    e = 'Clique nos projetos para ver mais detalhes!'
    textProjeto.innerHTML = `${e}`
})


// carregar mais projetos //

const btn = document.querySelector('#btn')


btn.addEventListener('click', () => {
    const list = document.querySelectorAll('.loadProjeto')

    for(let i = 0; i < list.length; i++){
        list[i].style.display = 'block'
    }

})