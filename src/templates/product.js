import React from "react"

import Layout from "../components/layout"
import exampleImage from "../images/example.png";

const ProductTemplate = ({ pageContext }) => {
    const { product } = pageContext
    return (
        <Layout>
            <h1>{product.title}</h1>
            <div>{product.description}</div>
            <img src={product.featuredImage?.originalSrc  ? product.featuredImage.originalSrc :  exampleImage} alt={product.title} />
        </Layout>
    )
}

export default ProductTemplate