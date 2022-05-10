import React from 'react';
import * as C from "./styles";

type Pages = {
  totalPages: number,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<Pages> = ({ totalPages, page, setPage }) => {
  const previousPage = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setPage(page - 1)
    window.scrollTo(0, 0)
  }

  const nextPage = () => {
    setPage(page + 1)
    window.scrollTo(0, 0)
  }

  return(
      <C.Pagination>
        <button onClick={previousPage} className={page <= 1 ? 'disabled' : 'btn-pagination'}>Anterior</button>
        <span>
          {page} de {totalPages}
        </span>
        <button onClick={nextPage}>Próxima</button>
      </C.Pagination>
  );  
};

export default Pagination;