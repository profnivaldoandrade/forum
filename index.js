//importar o módulo express
const express = require('express')
const Express = require('express')
//indicar o uso do express
const app = Express()

//informar a porta do servidor ao navegador
const porta = process.env.PORT || 3000

//definir a local publico do nosso app
app.use(express.static('public'))

//definir o local(pasta) onde ficará o front-end (html)
app.set('view engine','ejs')

//criar a rota inicial
app.get('/',(req,res)=>{
    //imprime em tela do usuario
    res.render('index')   
})

//criar a rota pagina pergunta
app.get('/perguntar',(req,res)=>{
    res.render('cadpergunta')
})

//inicializar o servidor
app.listen(porta,()=>{
    console.info('APP RODANDO NA PORTA: '+ porta)
})