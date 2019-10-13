const postsQuery = `{
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: frontmatter___date }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          category
          title
          description
          date_timestamp: date
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        }
        excerpt(pruneLength: 5000)
        timeToRead
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

const settings = { attributesToSnippet: ['excerpt:20'] }

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'Posts',
    settings,
  },
]

module.exports = queries
