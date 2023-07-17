/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
//
// const path = require(`path`)
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   // Query for all products in Shopify
//   const result = await graphql(`
//     query {
//       allShopifyProduct(sort: { title: ASC }) {
//         edges {
//           node {
//             title
//             featuredImage  {
//               originalSrc
//             }
//             shopifyId
//             handle
//             description
//             priceRangeV2 {
//               maxVariantPrice {
//                 amount
//               }
//               minVariantPrice {
//                 amount
//               }
//             }
//             status
//           }
//         }
//       }
//     }
//   `)
//
//   // Iterate over all products and create a new page using a template
//   // The product "handle" is generated automatically by Shopify
//     result.data.allShopifyProduct.edges.forEach(({ node }) => {
//         createPage({
//             path: `/products/${node.handle}`,
//             component: path.resolve(`./src/templates/product.js`),
//             context: {
//                 product: node,
//             },
//         })
//     })
// }