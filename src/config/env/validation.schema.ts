import * as joi from "joi"

export const EnvsValidationSchema = joi.object({
	APP_VERSION: joi.string().required().not().empty(),
})
