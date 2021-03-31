import * as React from "react"
import { Cart, DolaWindow } from "../interface";

const IndexPage = () => {
  const handleClick = () => {
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
  )
}

export default IndexPage
