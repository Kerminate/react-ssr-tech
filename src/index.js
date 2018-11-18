const koa = require('koa')
const Home = require('./containers/Home')

const app = new koa()

app.use((ctx, next) => {
  ctx.body = `
    <html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <h1>first lesson</h1>
        <p>hello word</p>
      </body>
    </html>
  `
  next()
})

app.listen(3000)