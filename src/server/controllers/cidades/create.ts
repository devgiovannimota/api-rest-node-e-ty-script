import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  name?: string;
  state?: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().max(6),
});

export const createBodyValidator = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    // abortEarly serve pra verificar todos os erros de uma vez
    await bodyValidation.validate(request.body, {
      abortEarly: false,
    });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    // É um objeto vazio que está recebendo uma chave string e um valor string
    // Record é um objeto composto por chave e valor
    const validationErros: Record<string, string> = {};
    // inner - é uma lista de validationError(Há um validationError por campo no objeto que mandamos no insominia)
    yupError.inner.forEach((error) => {
      validationErros[error.path] = error.message;
    });

    return response.status(400).json({
      errors: validationErros,
    });
  }
};

interface IFilter {
  filter?: string;
}

const queryValidation: yup.ObjectSchema<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
});

export const createQueryValidator = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    // abortEarly serve pra verificar todos os erros de uma vez
    await queryValidation.validate(request.query, {
      abortEarly: false,
    });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    // É um objeto vazio que está recebendo uma chave string e um valor string
    // Record é um objeto composto por chave e valor
    const validationErros: Record<string, string> = {};
    // inner - é uma lista de validationError(Há um validationError por campo no objeto que mandamos no insominia)
    yupError.inner.forEach((error) => {
      validationErros[error.path] = error.message;
    });

    return response.status(400).json({
      errors: validationErros,
    });
  }
};

export const create = async (request: Request, response: Response) => {
  console.log(request.body);

  return response.send({ message: "Created" });
};
