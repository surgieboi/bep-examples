import { GraphQLClient } from "graphql-request";

const graphcmsClient = new GraphQLClient(
	"https://api-us-east-1.graphcms.com/v2/ckmcamaj12r5p01z2gqvg5psj/master"
);

export default (_: any, inject: (arg0: string, arg1: GraphQLClient) => void) => {
	inject("graphcms", graphcmsClient);
};
