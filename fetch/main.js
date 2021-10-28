fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
  .then(res => res.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/4/', { method: 'GET' })
  .then(res => res.json())
  .then(data => console.log(data));
