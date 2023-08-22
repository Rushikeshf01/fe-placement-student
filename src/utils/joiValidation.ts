import Joi from "joi";
import { LoginInputType, RegisterInputType } from "./types";

interface JoiReturnType {
  status: boolean;
  message: string;
}

class JoiUtils {
  private loginSchema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "in"] } })
      .required()
      .label("Email"),
    password: Joi.string().alphanum().min(8).required().label("Password"),
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

  private registerSchema = Joi.object({
    firstName: Joi.string().required().label("First name"),
    lastName: Joi.string().required().label("Last name"),
    mobile: Joi.string().required().label("Mobile number"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "in"] } })
      .required()
      .label("Email"),
    password: Joi.string().alphanum().min(8).required().label("Password"),
    confirmPassword: Joi.ref("password"),
    captcha: Joi.string().length(5).required().label("Captcha"),
  });

  public validateRegisterData(registerData: RegisterInputType): JoiReturnType {
    const { error, value } = this.registerSchema.validate(registerData);
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
