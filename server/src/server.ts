import { prismaClient } from "../prisma/database";
import fastify from "fastify";
const app = fastify({ logger: true });

app.get("/", async (req, res) => {
  return res.send(await prismaClient.projects.findMany());
});

app.post("/new", async (req, res) => {
  try {
    const result = await prismaClient.projects.create({
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

function start() {
  app.listen({ port: 3000 }, (err) => {
    if (err) {
      app.log.error(err.message);
      process.exit(1);
    }
  });
}

start()
