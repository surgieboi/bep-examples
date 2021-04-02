import * as React from "react";
import { graphql } from "gatsby";
import { Cart, DolaWindow } from "../interface";

const IndexPage = ({ data: { product } }) => {
	const handleClick = () => {
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
	};

	return (
		<main>
			<div
				onClick={() => {
					handleClick();
				}}
			>
				<div>
					<div>
						<button type="submit" name="add" id="dolapaybutton">
							Check out with Dola
						</button>
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
		</main>
	);
};

export const pageQuery = graphql`
	query IndexPageQuery {
		product: graphCmsProduct {
			description {
				text
			}
			id
			price
			image {
				url
			}
			quantity
			sku
			title
			variants
			weight
			willBeShipped
		}
	}
`;

export default IndexPage;
