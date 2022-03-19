exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
   resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  })
}