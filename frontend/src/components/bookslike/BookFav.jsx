// loader

import { useLoaderData } from "react-router-dom";

// components

import CardBooks from "./CardBooks";

// styles

import "../../styles/cardbooks.css";
import "../../styles/mybooks.css";

// my function

function BookFav() {
  const data = useLoaderData();
  const category = data && [
    ...new Set(
      data.items
        .map((d) => d.volumeInfo?.categories?.[0])
        .filter((pie) => pie !== undefined)
    ),
  ];

  return (
    <div className="List">
      <select className="filterCategorie" name="" id="">
        {category && category.map((c) => <option>{c}</option>)}
      </select>
      {data &&
        data.items.map((b) => (
          <div key={b.id}>
            <CardBooks
              image={
                b.volumeInfo.imageLinks?.thumbnail ||
                "https://www.ooi.co.jp/sites/default/files/styles/product_listing/public/2019-01/NO-IMAGE_large.jpg?itok=GoKfEXH1"
              }
              title={b.volumeInfo.title}
              id={b.id}
            />
          </div>
        ))}
    </div>
  );
}

export default BookFav;
