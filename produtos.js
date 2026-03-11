import produtos from "express"

const porta = 5000
const app = produtos()

app.get ("/produtos/:nome/:id", (req, res) => {
    const id = req.params.id
    const nome = req.params.nome
    res.json({
        nome : nome,
        id : id,
        valor : id * 10
    })
})

app.listen (porta, () => {
    console.log(`O servidor está rodando em http://localhost:${porta}`)
})