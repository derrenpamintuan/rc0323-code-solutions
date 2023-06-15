async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

  } catch (err) {
    console.error('Error:', err);
  }
}
fetchData();

async function getData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/3');

    if (!response.ok) {
      throw new Error(`HTTP error! status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

  } catch (err) {
    console.error('Error:', err);
  }
}
getData();
