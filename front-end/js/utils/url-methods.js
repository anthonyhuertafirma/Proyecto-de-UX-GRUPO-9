const url = "http://localhost:8080"

async function getItems(endpoint, body) {
  const response = await fetch(url.concat(endpoint), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  })

  return await response.json()
}