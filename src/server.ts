import express from 'express'
import instrutorRouter from '../src/routes/instrutor-Router'
import cursoRouter from '../src/routes/curso-Router'
 
const app = express()
 
app.use(express.json())
app.use("/api/instrutor", instrutorRouter)
 
app.use("/api/curso", cursoRouter)
 
app.listen(3000, () => {
  console.log('Servidor está rodando na porta 3000')
})
 