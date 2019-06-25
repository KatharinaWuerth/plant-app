export function getPlants() {
  return fetch('/plants').then(res => res.json())
}

export function postPlants(data) {
  return fetchCard('POST', data)
}

function fetchCard(method, data, id = '') {
  return fetch('/plants/' + id, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
}

export function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (error) {
    console.log(error)
  }
}
