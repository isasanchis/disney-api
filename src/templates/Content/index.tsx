import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './styles';
import Pagination from "../Pagination";
import { Character } from '../../types/types';

const Content: React.FC = () => {
  const [character, setCharacter] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<any>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    axios.get(`https://api.disneyapi.dev/characters?page=${page}`)
      .then(res => {
        setCharacter(res.data.data)
        setTotalPages(res.data.totalPages)
      }
      )
  }, [page]);

  return (
    <>
      <input type="text" onChange={e => setSearchTerm(e.target.value)} />
      <C.Content>
        {character.filter((char) => {
          if(searchTerm === "") {
            return char
          } else if (char.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return char.imageUrl
          }
        }).map((char) => (
          <div className="char-container" key={char.id}>
            <img src={char.imageUrl} alt="" />
            <p>{char.name}</p>
            <p><i>{char.tvShows !== [] ? char.tvShows : char.films}</i></p>
          </div>
        ))}
      </C.Content>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </>
    );
};

export default Content;