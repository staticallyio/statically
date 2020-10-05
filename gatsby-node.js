const _ = require(`lodash`);
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog.js`);
  const docsTemplate = path.resolve(`src/templates/docs.js`);
  const policiesTemplate = path.resolve(`src/templates/policies.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (_.includes(node.frontmatter.path, `/blog/`)) {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      });
    }

    if (_.includes(node.frontmatter.path, `/docs/`)) {
      createPage({
        path: node.frontmatter.path,
        component: docsTemplate,
        context: {},
      });
    }

    if (_.includes(node.frontmatter.path, `/policies/`)) {
      createPage({
        path: node.frontmatter.path,
        component: policiesTemplate,
        context: {},
      });
    }
  });
};
