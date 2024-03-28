import * as joi from "joi"

export const EnvsValidationSchema = joi.object({
	NODE_ENV: joi.string().required().not().empty(),
	APP_VERSION: joi.string().required().not().empty(),
	PORT: joi.number().required().not().empty()
})
