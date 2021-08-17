import React from "react";
import { useParams } from "react-router-dom";
import { ProductArray } from "../ProductsArray";
const Product = () => {
  const params = useParams();
  const findproduct = (product) => {
    return product.title === params.productname;
  };
  const product = ProductArray.find(findproduct);
  return (
    <div className="prod">
      <div className="product">
        <div className="product__left">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product__right">
          <h1>Framed art design</h1>
          <h6>
            {product.title} BY {product.brand}
          </h6>
          <button>Buy now</button>
        </div>
      </div>

      <h1>Product deatils</h1>
      <div className="product__description">
        <div className="product__desc">
          <span></span>
          <h2>description</h2>
          <hr />
          <p>
            Frame it up. The Deny Modern and Classic Framed Art Print takes away
            all the hassle of finding the right frame for your art. The art is
            printed with archival, fade-resistant inks—and the frames are
            available in black or white with a variety of sizes so no matter
            your design needs, we have just the option for you. The Classic
            frame style is wider than our Modern frame for a more traditional,
            gallery-style look. The Modern frame style is narrower but deeper
            than the Classic frame for a sleek alternative. Sprinkle in
            different sizes and maybe an art canvas or two to help create a
            picture-perfect art collection. And the best part? Every purchase
            pays the artist who designed it—supporting creativity worldwide.
          </p>
        </div>
        <div className="product__specs">
          <span></span>
          <h2>DETAILS & PRODUCT SPECS</h2>
          <hr />
          <ul>
            Frame:
            <li>Frame Materials: MDF core with a paper wrap</li>
            <li>Art print with archival, fade-resistant inks</li>
            <li>
              Light filtering acrylic to protect your art print from fading
            </li>
            <li>Classic frame dimensions: 1.25" W x .75" D</li>
            <li>Modern frame dimensions: .75" W x 1.25" D</li>
            <li>
              Wire or sawtooth hanger included depending on size (does not
              include hanging hardware)
            </li>
          </ul>
          <ul>
            Paper Substrate:
            <li>Satin finish</li>
            <li>210 GSM</li>
            <li>Aqueous ink</li>
            <li>8 color inkjet printing</li>
          </ul>
        </div>
      </div>
      <div className="product__about">
        <h1>about the artist</h1>
        <h5>{product.brand}</h5>
        <p>
          Embracing a sunshine state of mind. Sunshine Canteen is a design brand
          with products that are inspired by vintage surf and skate, camping and
          west coast counterculture. <br /> Christie Russert is the designer
          behind Sunshine Canteen. Her illustration work is inspired by vintage
          design, surf & skate counterculture and the laid back vibes of the
          west coast. In her free time Christie loves the outdoors, adventure
          sports, and exploring new places-- all of which contribute to her
          creativity & design.
        </p>
      </div>
    </div>
  );
};

export default Product;
