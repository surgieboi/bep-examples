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
	async asyncData({ $contentful }: { [key: string]: any }): Promise<{ product: any }> {
		const {
			productCollection: { items: products },
		} = await $contentful.request(
			gql`
				query {
					productCollection {
						items {
							title
							id
							price
							weight
							quantity
							imageCollection {
								items {
									url
								}
							}
							sku
							willBeShipped
						}
					}
				}
			`
		);

		const product = {
			...products[0],
			image: `${products[0].imageCollection.items[0].url}`,
		};

		return { product };
	},

	methods: {
		handleClick(product: { [key: string]: any }) {
			const sampleCart: Cart = {
				currency: "USD",
				items: [
					{
						id: product.id,
						image: product.image,
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
