module.exports = {
    pages: {index: {entry: "src/main.js", title: 'vue-roulette'}},
    publicPath: process.env.NODE_ENV === 'production'
      ? './'   //任意
      : '/'
  }