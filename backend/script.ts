import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
const app = express();
const prisma = new PrismaClient()

app.use(express.json())

app.get("/", async (req: Request, res: Response) => {
    return res.status(200).write("Hello")
})

app.get("/projects", async (req: Request, res: Response) => {
    return res.status(200).json(await prisma.projects.findMany())
})

app.listen(8080);