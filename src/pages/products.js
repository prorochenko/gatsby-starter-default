import React from "react"
import { Link, graphql } from "gatsby"

import * as css from "./products.module.css"
import Layout from "../components/layout"

const ProductsPage = ({ data }) => (
    <Layout>
        <h1>Products</h1>
        <ul className={css.list}>

            {data?.allShopifyProduct.edges.map(({ node }) => (
                <li key={node.shopifyId}>
                    <h3>
                        <Link to={`/products/${node.handle}`}>{node.title}</Link>
                        {" - "}${node.priceRangeV2.minVariantPrice.amount}
                    </h3>

                    <img src={node.featuredImage?.originalSrc ? node.featuredImage.originalSrc : '/images.example.png'} alt={node.title} />
                    <p>{node.description}</p>
                </li>
            ))}
        </ul>
    </Layout>
)

export default ProductsPage

export const query = graphql`
  {
    allShopifyProduct(sort: { title: ASC }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          featuredImage  {
              originalSrc
            }
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`