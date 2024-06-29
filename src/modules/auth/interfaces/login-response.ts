import { User } from "../entities"

export interface LoginResponse extends User {
	token: string
}
