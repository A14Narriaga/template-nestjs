import joi from "joi"

const regexValidListString = /^(?!.*,,)[^\s,]+(,[^\s,]+)*$/

export const EnvsValidationSchema = joi.object({
	NODE_ENV: joi.string().required().not().empty(),
	APP_VERSION: joi.string().required().not().empty(),
	PORT: joi.number().required().not().empty(),
	ALLOWED_ORIGINS: joi
		.string()
		.required()
		.not()
		.empty()
		.pattern(regexValidListString, "comma separed list"),
	DB_PORT: joi.number().required().not().empty(),
	DB_HOST: joi.string().required().not().empty(),
	DB_NAME: joi.string().required().not().empty(),
	DB_USERNAME: joi.string().required().not().empty(),
	DB_PASSWORD: joi.string().required().not().empty(),
	JWT_SEED: joi.string().required().not().empty()
})

export const EnvConfig = () => ({
	appEnv: process.env.NODE_ENV!,
	appVersion: process.env.APP_VERSION!,
	appPort: process.env.PORT!,
	allowedOrigins: process.env.ALLOWED_ORIGINS!.split(","),
	dbPort: process.env.DB_PORT!,
	dbHost: process.env.DB_HOST!,
	dbName: process.env.DB_NAME!,
	dbUsername: process.env.DB_USERNAME!,
	dbPassword: process.env.DB_PASSWORD!,
	jwtSeed: process.env.JWT_SEED!
})
