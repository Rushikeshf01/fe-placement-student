import Joi from "joi";
import { LoginInputType } from "./types";

interface JoiReturnType {
  status: boolean;
  message: string;
}

class JoiUtils {
  private loginSchema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string()
      .pattern(
        new RegExp(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        )
      )
      .required()
      .label("Password"),
    captcha: Joi.string().length(5).required().label("Captcha"),
  });

  public validateLoginData(loginData: LoginInputType): JoiReturnType {
    const { error, value } = this.loginSchema.validate(loginData);
    if (error) {
      return { status: false, message: error.details[0].message };
    }
    if (value) {
      return { status: true, message: value.message };
    }
    return { status: true, message: value.message };
  }
}

export const joiUtils = new JoiUtils();
