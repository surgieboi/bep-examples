import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import { DolaWindow, Cart, IProduct } from "../interface";

const GraphCMSEndpoint = "https://api-us-east-1.graphcms.com/v2/ckmcamaj12r5p01z2gqvg5psj/master";
export async function getStaticProps() {
	const graphcms = new GraphQLClient(GraphCMSEndpoint);
	const { product } = await graphcms.request(
		`
      query MyQuery {
				product(where: {id: "ckmcazptc032c0976powhkkaq"}) {
					description {
						text
					}
					id
					price
					image {
						url(transformation: {document: {output: {format: webp}}})
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

	return {
		props: {
			product,
		},
		revalidate: 1,
	};
}

interface IndexProps {
	product: IProduct;
}

const Index: React.FC<IndexProps> = ({ product }) => {
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
		<>
			<Head>
				<title>BEP + GraphCMS + Next.js Example</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<script
					dangerouslySetInnerHTML={{
						__html: `!(function () {
              var t = "${process.env.NEXT_PUBLIC_MERCHANT_ID}",
                  e = window,
                  a = document;
              e.Dolapay = { id: t, type: "sdk" };
              var o = function () {
                var e = a.createElement("script");
                (e.type = "text/javascript"), (e.async = !0), (e.src = "https://bep.dola.me");
                var o = a.getElementsByTagName("script")[0];
                o.parentNode.insertBefore(e, o);
              };
              "complete" === document.readyState ? o() : e.attachEvent ? e.attachEvent("onload", o) : e.addEventListener("load", o, !1);
            })();`,
					}}
				/>
				<style
					dangerouslySetInnerHTML={{
						__html: `
            * { box-sizing: border-box; }
            html { height: 100%; } 
            body { margin: 0; -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale; }
          `,
					}}
				/>
			</Head>

			<div
				onClick={() => {
					handleClick();
				}}
			>
				<div>
					<button type="submit">Check out with Dola</button>
					<div id="dolabuttonloader" style={{}}></div>
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
		</>
	);
};

export default Index;
