import {Request, Response} from 'express'

export const home = ((req:Request,res:Response) =>{

    let idade: number = 18
    let exibirIdade: boolean = false

    if(idade >= 18){
        exibirIdade = false
    }

    res.render('pages/home',{
        nome:'Maik',
        exibirIdade,
        
})

})