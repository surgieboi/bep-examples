<template>
	<div>
		<div @click="handleClick()">
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
import Vue from "vue";
import { DolaWindow, Cart } from "../interface";

export default Vue.extend({
	methods: {
		handleClick() {
			const sampleCart: Cart = {
				currency: "USD",
				items: [
					{
						id: "randomId",
						image: "https://cdn.dola.me/swag-store/champion-dad-hat-black-front-604809c8b4a4f.jpg",
						quantity: 1,
						title: "sample product - Dola hat",
						price: 100,
						grams: 30,
						sku: "randomproductsku",
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
});
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
