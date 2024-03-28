import { Query, Resolver } from "@nestjs/graphql"

import { fizzbuzz } from "./fizzbuzz"

@Resolver()
export class HelloWorldResolver {
	@Query(() => String, {
		name: "fizzbuzz",
		description:
			"Retorna 'fizz' si es multiplo de 3, 'buzz' si es multiplo de 5, 'fizzbuzz' si es multiplo de 3 y 5, si no es nungun caso de los anteriores retorna el numero."
	})
	fizzbuzz(num: number): number | string {
		return fizzbuzz(num)
	}
}
