module.exports = {
	siteMetadata: {
		title: "with-graphcms-gatsby",
	},
	plugins: [
		{
			resolve: `gatsby-source-graphcms`,
			options: {
				endpoint: `https://api-us-east-1.graphcms.com/v2/ckmcamaj12r5p01z2gqvg5psj/master`,
			},
		},
	],
};
