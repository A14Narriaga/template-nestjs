import {
	BadRequestException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException
} from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { InjectModel } from "@nestjs/mongoose"
import * as bcryptjs from "bcryptjs"
import { Model } from "mongoose"

import { CreateUserDto, LoginDto, RegisterUserDto, UpdateUserDto } from "./dto"
import { User } from "./entities"
import { JwtPayload, LoginResponse } from "./interfaces"

interface MongoErrorResponse {
	index: number
	code: number
	errmsg: string
	keyPattern: unknown
	keyValue: unknown
}

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User.name) private userModel: Model<User>,
		private jwtService: JwtService
	) {}

	#encryptPassword(password: string): string {
		return bcryptjs.hashSync(password, 10)
	}

	#isUserPassword(password: string, securePassword: string): boolean {
		return bcryptjs.compareSync(password, securePassword)
	}

	#getJwtToken(payload: JwtPayload) {
		return this.jwtService.sign(payload)
	}
	async #create(createUserDto: CreateUserDto): Promise<User> {
		try {
			const { password, ...userData } = createUserDto
			const securePassword = this.#encryptPassword(password)
			const userToSave = { password: securePassword, ...userData }
			const newUser = new this.userModel(userToSave)
			await newUser.save()
			const { password: _, ...user } = newUser.toJSON()
			return user
		} catch (error: unknown) {
			const _error = error as MongoErrorResponse
			if (_error.code === 11_000) {
				throw new BadRequestException(`${createUserDto.email} already exist`)
			}
			throw new InternalServerErrorException(`Please contact to support`)
		}
	}

	async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {
		const user = await this.#create(registerUserDto)
		const token = this.#getJwtToken({ id: user._id! })
		return { ...user, token }
	}

	async login(loginDto: LoginDto): Promise<LoginResponse> {
		const { email, password } = loginDto
		const userDB = await this.userModel.findOne({ email })
		if (!userDB) throw new UnauthorizedException("Not valid credentials")
		const isUserPassword = this.#isUserPassword(password, userDB.password!)
		if (!isUserPassword)
			throw new UnauthorizedException("Not valid credentials")
		const { password: _, ...user } = userDB.toJSON()
		const token = this.#getJwtToken({ id: userDB._id })
		return { ...user, token }
	}

	async findOne(id: string) {
		const userDB = await this.userModel.findById(id)
		if (!userDB) throw new NotFoundException("User not found")
		const { password: _, ...user } = userDB.toJSON()
		return user
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		console.log("updateUserDto ==>", updateUserDto)
		return `This action updates a #${id} auth`
	}

	async remove(id: string) {
		const filter = { id }
		const update = { isActive: false }
		const options = { new: true }
		const updatedUser = this.userModel.findOneAndUpdate(filter, update, options)
		console.log("updatedUser ==>", updatedUser)
		return updatedUser
	}

	refreshToken(user: User): LoginResponse {
		const token = this.#getJwtToken({ id: user._id! })
		return {
			...user,
			token
		}
	}
}
