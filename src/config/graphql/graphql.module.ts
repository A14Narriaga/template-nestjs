import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { join } from "path"
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default"

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			// debug: false,
			playground: false,
			autoSchemaFile: join(process.cwd(), "src/config/graphql/schema.gql"),
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
		}),
	],
})
export class GraphqlModule {}
