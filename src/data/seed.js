import { data } from './recipes';

async function seed() {
  await fetch('https://restapi.fr/api/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export default seed;
