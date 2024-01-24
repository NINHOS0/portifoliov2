import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';


const app = express();
const prisma = new PrismaClient()

app.use(express.json())
app.get("/", async (req: Request, res: Response) => {
    return res.send("Hello")
})

app.get("/projects", async (req: Request, res: Response) => {
    return res.status(200).json(await prisma.projects.count())
})

app.get("/projects/new", async (req: Request, res: Response) => {
    await prisma.projects.create({
        data: {
            id: "teste-teste",
            name: "Teste Teste",
            description: "Descrição teste",
            github: "github",
            project: "project"
        }
    })
    return res.send("Criou")
})

app.listen(8080, () => {
    console.log("entrou");
})

module.exports = app