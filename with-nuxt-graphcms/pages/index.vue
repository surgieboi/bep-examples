<template>
	<div>
		<div @click="handleClick(product)">
			<div>
				<div>
					<button type="submit" name="add" id="dolapaybutton">
						Check out with Dola
					</button>
					<div id="dolabuttonloader" style="{{}}"></div>
				</div>
			</div>
			<div>
				<p>
					<span>&#9432;</span>Buy it now in 1-click.
					<span>
						<a href="https://dola.me" target="_blank">
							Learn more.
						</a>
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { DolaWindow, Cart } from "../interface";
import { gql } from "graphql-request";

export default {
	async asyncData({ $graphcms }: { [key: string]: any }): Promise<{ product: any }> {
		const { product } = await $graphcms.request(
			gql`
				{
					product(where: { id: "ckmcazptc032c0976powhkkaq" }) {
						description {
							text
						}
						id
						price
						image {
							url(transformation: { document: { output: { format: webp } } })
						}
						quantity
						sku
						title
						variants
						weight
						willBeShipped
					}
				}
			`
		);

		return { product };
	},

	methods: {
		handleClick(product: { [key: string]: any }) {
			const sampleCart: Cart = {
				currency: "USD",
				items: [
					{
						id: product.id,
						image: product.image[0].url,
						quantity: product.quantity,
						title: product.title,
						price: product.price,
						grams: product.weight,
						sku: product.sku,
					},
				],
			};

			const sampleCallback = () => {
				// this callback is called upon successful checkouts
				alert("successful checkout");
			};

			((window as unknown) as DolaWindow).Dolapay.attachDola(sampleCart, sampleCallback);
		},
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	height: 100%;
}

body {
	margin: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
