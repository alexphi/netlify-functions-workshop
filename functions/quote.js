const http = require("http")
const url = "http://quotes.rest/qod.json?category=inspire"

const buildOkResponse = (quote) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      quote: {
        text: quote.quote,
        author: quote.author,
        link: quote.permalink
      }
    })
  }
}

const buildErrorResponse = (message) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: false,
      error: message
    })
  }
}

exports.handler = (event, context, callback) => {

  if (process.env.CONTEXT === 'development') {
    // return dummy quote for dev
    callback(null, buildOkResponse({
      quote: 'In Production environment real data will this quote have',
      author: 'Master Yoda',
      permalink: '#'
    }))
  } else {

    http.get(url, res => {
      res.setEncoding("utf8")
      let body = ""
      res.on("data", data => {
        body += data
      })
      res.on("end", () => {
        body = JSON.parse(body)

        if (body.success)
          callback(null, buildOkResponse(body.contents.quotes[0]))
        else
          callback(null, buildErrorResponse(body.error.message))
      })
    })
  }
}
