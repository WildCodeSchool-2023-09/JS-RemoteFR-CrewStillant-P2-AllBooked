import { useState, useContext, createContext, useMemo } from "react";
import PropTypes from "prop-types";

const booksContext = createContext();

export function BooksProvider({ children }) {
  const [favBooks, setFavBooks] = useState([]);

  const basketValues = useMemo(
    () => ({ favBooks, setFavBooks }),
    [favBooks, setFavBooks]
  );

  return (
    <booksContext.Provider value={basketValues}>
      {children}
    </booksContext.Provider>
  );
}

BooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentBooks = () => useContext(booksContext);
