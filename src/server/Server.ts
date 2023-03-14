import express from "express";

const server = express();

server.get("/", (request, response) => {
  return response.send({ message: "Olá dev, tudo bem?" });
});

export { server };
