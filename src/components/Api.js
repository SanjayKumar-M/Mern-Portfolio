import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Api.css'
import { Link } from 'react-router-dom';

const Api = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        console.log(response.data.results)
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };


    fetchCharacters();
  }, []);

  const characterList = characters.map(character => (
    <div>
    <li key={character.id}>{character.name } </li>
    <img src={character.image} alt={character.name} />
    </div>
  ));

  return (
    <div className='cartoon'>
      <h1>Rick and Morty Characters API Fetching</h1>
      <ul>{characterList}</ul>
      <button>
        <Link to='/'>Go Back</Link>
      </button>
    </div>
  );
};

export default Api;