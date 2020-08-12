module.exports = {
  basePath: '/src',
  env: {
    MONGO_URI: "mongodb+srv://make-develop:makedevelop@cluster0.ahrvn.gcp.mongodb.net/make?retryWrites=true&w=majority",
    JWT_SECRET: "CPxGOKuCWeOj1cu6vdyfSX2161nH1rIShnlZczACbsK8DgoOrP6ZqtPEEOtB1xKJ",
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  }
}