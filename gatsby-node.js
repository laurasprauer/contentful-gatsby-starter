const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulPage {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const pageTemplate = path.resolve('./src/templates/flexible.js')
  const pages = result.data.allContentfulPage.nodes

  if (pages.length > 0) {
    pages.forEach((page, index) => {
      createPage({
        path: `${page.slug}`,
        component: pageTemplate,
        context: {
          slug: page.slug,
        },
      })
    })
  }
}
