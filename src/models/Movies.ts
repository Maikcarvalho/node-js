type Movie = [
    title:string,
    year: number
]
//criando o modelo de banco de dados de filme
const movies = [
    {title:'Cinderela Bahiana', ano: 1998},
    {title:'Rubber', ano:2010},
    {title:'Tainá', ano:2010}
]
//simulando uma consulta do banco de dados
export const Movie = {
    getAll: () =>{

        return movies
    }
}
