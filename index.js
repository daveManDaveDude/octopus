import fetch from 'node-fetch';

async function main() {
  const apiKey = process.env.OCTO_KEY;
  if (!apiKey) {
    console.error('OCTO_KEY environment variable not set');
    process.exit(1);
  }

  const url = 'https://api.octopus.energy/v1/products/';
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Basic ' + Buffer.from(apiKey + ':').toString('base64')
    }
  });
  if (!response.ok) {
    console.error('API request failed:', response.statusText);
    process.exit(1);
  }
  const data = await response.json();
  console.log('First product:', data.results[0]);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
