const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/post.js`)
  const blogPage = path.resolve(`./src/templates/blog.js`)
  const galleryPost = path.resolve(`./src/templates/GalleryPost.js`)
  const categoryPage = path.resolve(`./src/templates/categories.js`)
  const tagPage = path.resolve(`./src/templates/tags.js`)

  const result = await graphql(
    `
      {
        posts:allMarkdownRemark(
          filter: {
            fields: {collection: {eq: "blog"}}
            frontmatter: {
              status: { ne: "draft" }
            }
          }
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
        works:allMarkdownRemark(
          filter: {
            fields: { collection : { eq: "gallery" } }
          }
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
    const prev = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        prev,
        next,
      },
    })
  })

  // Create blog pages.
  const postsPerPage = 10
  const numPosts = posts.length // Num of posts
  const numPages = Math.ceil(numPosts / postsPerPage) // Num of blog pages
  const pathBase = `/blog/`

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? pathBase : `${pathBase}${i + 1}/`,
      component: blogPage,
      context: {
        skip: postsPerPage * i,
        limit: postsPerPage,
        numPages: numPages,
        currentPage: i + 1,
        pathBase: pathBase
      },
    })
  })

  // Create work pages
  const works = result.data.works.edges

  works.forEach((work, index) => {

    createPage({
      path: `gallery${work.node.fields.slug}`,
      component: galleryPost,
      context: {
        slug: work.node.fields.slug,
      },
    })
  })

  // Create category pages
  const categories = result.data.categories.group
  categories.forEach(({ fieldValue }) =>
    createPage({
      path: `category/${fieldValue}`.toLowerCase(),
      component: categoryPage,
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
      name: `collection`,
      value: parent.sourceInstanceName,
    })
  }
}
