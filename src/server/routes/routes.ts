import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (request, response) => {});

router.post("/teste", (request, response) => {
  console.log(request.body);
  return response.status(StatusCodes.UNAUTHORIZED).send(request.body);
});

router.put("/", (request, response) => {});

router.delete("/", (request, response) => {});

export { router };
