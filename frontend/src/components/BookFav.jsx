import { useState, useEffect } from "react";

// styles

import CardBooks from "./CardBooks";

// my function

function BookFav() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=harry+inauthor:rowling&maxResults=40&printType=books&key=AIzaSyCRqS28SI90ab1CXYQ0DUmXdL_P_vRGVEM"
    )
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="List">
      {books &&
        books.items.map((b) => (
          <CardBooks
            key={b.card}
            image={
              b.volumeInfo.imageLinks?.thumbnail ||
              "https://www.ooi.co.jp/sites/default/files/styles/product_listing/public/2019-01/NO-IMAGE_large.jpg?itok=GoKfEXH1"
            }
            title={b.volumeInfo.title}
          />
        ))}
    </div>
  );
}

export default BookFav;
