import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function AppendPokemons(props) {
  const pokemons = props.pokemons;
  const pokemon = pokemons.map(pokemon =>
  <li key={pokemon.number}>{pokemon.name}</li>
  );

  return (
    <ul>{pokemon}</ul>
  );
}

ReactDOM.render(<AppendPokemons pokemons={pokedex} />, document.querySelector('#root'));
