import express from "express"

const porta = 77
const api = express()
const produtos = [{

    id :1,
    nome : "Parabrisa",
    preco : 599,
    categoria : "vidro"
},
{
    id:2,
    nome: "Vidro de Porta",
    preco : 190,
    categoria : "Vidro"
}   
]

api.use(express.json())

api.get("/produtos", (req, res) => {
    const filtros = req.query
    const resposta = produtos

    if (filtros.nome){
        resposta = resposta.filter ((produtos)=>{
            return produtos.nome.toLowerCase().includes(filtros.nome.toLowerCase())
        })
    }
    
    if(filtros.categoria){
        resposta = resposta.filter((produtos) => {
            return produtos.categoria.toLowerCase().includes(filtros.categoria.toLowerCase())

        })
    }
    res.json(resposta)
})   

api.get("/produtos/:id",(req,res) => {
    const id = req.params.id

    res.json(produtos.filter((produtos) =>{
        return produtos.id == id
    }))
})

api.post("/produtos", (req, res)=>{
    const produt = req.body

    if(produt.nome == null || produt.preco == null || produt.categoria == null){
        res.json({
            mensagem: "Erro ao cadastrar produto."
        })
    }

    produt.push(produt)
    res.json({
        mensagem: "Produto cadastrado com sucesso"
    })

})
    api.listen(porta,()=>{
        console.log(`Servidor está rodando em https://localhost:${porta}`)
    })