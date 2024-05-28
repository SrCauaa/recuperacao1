import express from 'express';
import { Produto } from '../models/Produto';

const app = express();
app.use(express.json());

let produtos: Produto[] = [];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.post("/produtos", (req, res) => {
    const novoProduto: Produto = req.body;
    produtos.push(novoProduto);
    res.status(201).end('Produto adicionado com sucesso!');
});

export default app;
