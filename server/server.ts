import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const prisma = new PrismaClient();
const app = fastify({ logger: true });

app.get("/", async (req, res) => {
  return res.send(await prisma.projects.findMany());
});

app.post("/new", async (req, res) => {
  try {
    const result = await prisma.projects.create({
      data: {
        id: "testes-testes",
        name: "Teste Teste",
        description: "Description Teste",
        github: "github",
        project: "project",
      },
    });

    return res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen({ port: 3000 }, (err) => {
  if (err) {
    app.log.error(err.message);
    process.exit(1);
  }
})
