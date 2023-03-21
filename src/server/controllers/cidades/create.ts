import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  name?: string;
  state?: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().max(2),
});

export const create = async (request: Request, response: Response) => {
  let validatedData: ICidade | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(request.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return response.json({
      errors: {
        default: yupError.message,
      },
    });
  }

  console.log(validatedData);

  return response.send({ message: "City created!" });
};
