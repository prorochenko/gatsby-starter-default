import React, { useState } from "react";

import Layout from "../components/layout"
import exampleImage from "../images/example.png";
import * as css from './product.module.css'
const ProductTemplate = ({ pageContext }) => {

    const [cartCount, setCartCount] = useState(0);
    const addProductToCart = () => {
        setCartCount(cartCount + 1);
    };
    const { product } = pageContext

    return (
        <Layout>
            <h1>{product.title}</h1>
            <div>{product.description}</div>
            <img src={product.featuredImage?.originalSrc  ? product.featuredImage.originalSrc :  exampleImage} alt={product.title} />
                <button onClick={addProductToCart} type="button" className={css.buttonCart}>
		 <span className={css.circle}>
			<span className={css.icon_cart}>
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                      x="0px" y="0px" viewBox="0 0 459.529 459.529"
					 className={css.iconSvg1} preserveAspectRatio="xMidYMid meet">
					<g>
						<path d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
						l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
						s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
						S7.65,55.231,17,55.231z"/>
						<path d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
						S114.183,438.298,135.433,438.298z"/>
						<path d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
						c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
						C339.433,422.431,356.15,438.298,376.267,438.298z"/>
					</g>
				</svg>
			</span>

			<span className={css.icon_checkmark}>
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" viewBox="0 0 511.999 511.999"
					 className={css.iconSvg2}  preserveAspectRatio="xMidYMid meet">
					<g>
						<path d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0
					c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136
					C513.921,95.666,513.921,83.198,506.231,75.508z"/>
					</g>
				</svg>
			</span>
		</span>

                    <span className={css.button_bg}>
			<span className={`${css.text} ${css.text_before}`}>Add to cart</span>
			<span className={`${css.text} ${css.text_after}`}>Added to cart</span>
		</span>
                </button>
			<p>Кількість товару в корзині: {cartCount}</p>
        </Layout>
    )
}

export default ProductTemplate