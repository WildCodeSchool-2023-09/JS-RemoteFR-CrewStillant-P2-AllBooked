import { useLoaderData } from "react-router-dom";
import Results from "../components/Results";

function SearchResults() {
  const response = useLoaderData();
  const data = response.items;
  const category = data && [
    ...new Set(
      data
        .map((d) => d.volumeInfo?.categories?.[0])
        .filter((alix) => alix !== undefined)
    ),
  ];

  return (
    <div>
      <select name="category" id="category">
        {category && category.map((c) => <option>{c}</option>)}
      </select>
      <Results data={data} />
    </div>
  );
}
export default SearchResults;
