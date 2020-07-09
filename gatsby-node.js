const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogPage = path.resolve(`./src/templates/blog-page.js`)
  const catPage = path.resolve(`./src/templates/category-page.js`)
  const tagPage = path.resolve(`./src/templates/tag-page.js`)

  const result = await graphql(
    `
      {
        posts:allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        categories:allMarkdownRemark {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
        tags:allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog post.
  const posts = result.data.posts.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create blog pages.
  const blogPostsPerPage = 10
  const blogPosts = posts.length // Num of posts
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage) // Num of blog pages

  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: blogPage,
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages,
      },
    })
  })

  // Create category pages
  const categories = result.data.categories.group
  categories.forEach(({ fieldValue }) =>
    createPage({
      path: `category/${fieldValue}`.toLowerCase(),
      component: catPage,
      context: {
        category: fieldValue,
      },
    })
  )

  // Create category pages
  const tags = result.data.tags.group
    tags.forEach(({ fieldValue }) => {
      createPage({
        path: `tags/${fieldValue}`.toLowerCase(),
        component: tagPage,
        context: {
          tag: fieldValue,
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value,
    })
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })
  }
}
