require("dotenv").config();
module.exports = {
	siteMetadata: {
		title: "with-gatsby-graphcms",
	},
	plugins: [
		{
			resolve: `gatsby-source-graphcms`,
			options: {
				endpoint: process.env.GRAPHCMS_API,
			},
		},
	],
};
