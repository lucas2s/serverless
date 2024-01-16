function buildResponse(status, body, headers) {
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers
    },
    body: JSON.stringify(body)
  }
}

module.exports = {
  buildResponse
}
