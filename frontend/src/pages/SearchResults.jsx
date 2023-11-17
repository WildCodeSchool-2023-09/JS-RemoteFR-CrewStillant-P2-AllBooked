import { useLoaderData } from "react-router-dom";
import Results from "../components/Results";

function SearchResults() {
  const response = useLoaderData();
  const data = response.items;
  return (
    <div>
      <Results data={data} />
    </div>
  );
}
export default SearchResults;
