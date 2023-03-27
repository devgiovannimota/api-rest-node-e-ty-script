import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController } from "../controllers/cidades";

const router = Router();

router.get("/", (request, response) => {
  return response.status(StatusCodes.ACCEPTED).send("Olá, dev");
});

router.post(
  "/cidades",
  CidadesController.createBodyValidator,
  CidadesController.createQueryValidator,
  CidadesController.create
);

router.put("/", (request, response) => {});

router.delete("/", (request, response) => {});

export { router };
