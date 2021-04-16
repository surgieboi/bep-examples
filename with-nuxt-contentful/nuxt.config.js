export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "bep-nuxt-contentful",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
		],
		script: [
			{
				hid: "Dola",
				defer: true,
				innerHTML: `!function(){var e=window,t=document;e.Dolapay={id:"${process.env.NUXT_ENV_MERCHANT_ID}",type:"sdk"};var a=function(){var e=t.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://bep.dola.me";var a=t.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)};"complete"===document.readyState?a():e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}();`,
			},
		],
		__dangerouslyDisableSanitizersByTagID: {
			Dola: ["innerHTML"],
		},
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/contentful.ts"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
