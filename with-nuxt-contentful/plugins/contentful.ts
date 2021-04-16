import { GraphQLClient } from "graphql-request";

const contentfulClient = new GraphQLClient(
	`https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_ENV_CONTENTFUL_SPACE_ID}/environments/master?access_token=${process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN}`
);

export default (_: any, inject: (arg0: string, arg1: GraphQLClient) => void) => {
	inject("contentful", contentfulClient);
};
