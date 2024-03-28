import { Query, Resolver } from "@nestjs/graphql"

@Resolver()
export class HelloWorldResolver {
	@Query(() => String, {
		name: "hello",
		description: "Hola mundo es lo que retorna"
	})
	helloWorld(): string {
		return "Hello World!"
	}
}
