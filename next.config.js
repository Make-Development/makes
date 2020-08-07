module.exports = {
    basePath: '/src',
    env: {
        MONGO_URI: "mongodb+srv://make-develop:makedevelop@cluster0.ahrvn.gcp.mongodb.net/tests?retryWrites=true&w=majority"
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