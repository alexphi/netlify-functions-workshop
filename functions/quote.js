const http = require("http")
const url = "http://quotes.rest/qod.json?category=inspire"

const buildOkResponse = (quote) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      quote: {
        text: quote.quote,
        author: quote.author
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
