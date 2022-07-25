import {Request, Response} from 'express'

export const nome = ((req:Request,res:Response)=>{

    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})

export const idade = ((req:Request,res:Response) =>{
    res.render('pages/idade')
})

export const idadeResultado = ((req:Request,res:Response) =>{
    let mostrarIdade: boolean = false
    let idade: number = 0
    if(req.body.anoNascimento){

    let anoNascimento: number = parseInt(req.body.anoNascimento as string)
    let anoAtual: number = new Date().getFullYear()
    let idade = anoAtual - anoNascimento
    mostrarIdade = true
    }

    res.render('pages/idade',{
        idade,
        mostrarIdade
    })
})

export const form = ((req:Request,res:Response) =>{
    let nome: string = req.query.nome as string
    let idade = req.query.idade
    let telefone = req.query.telefone
    let endereco = req.query.endereco

    res.render('pages/form',{
        nome,
        idade,
        telefone,
        endereco
    })
})

export const login = ((req:Request,res:Response) =>{
    res.render('pages/login')
})

export const logado = ((req:Request,res:Response) =>{

    let email: string = (req.body.email as string)
    let senha: string = (req.body.senha as string)

    res.render('pages/logado',{
        email,
        senha
    })
})