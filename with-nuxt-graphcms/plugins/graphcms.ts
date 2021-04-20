import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NUXT_ENV_GRAPHCMS_API as string;
const graphcmsClient = new GraphQLClient(endpoint);

export default (_: any, inject: (arg0: string, arg1: GraphQLClient) => void) => {
	inject("graphcms", graphcmsClient);
};
