import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
const app = express();
const prisma = new PrismaClient()

app.use(express.json())

app.get("/projects", (req: Request, res: Response) => {
    return res.status(200).json(prisma.projects.findMany)
})

app.listen(8080);