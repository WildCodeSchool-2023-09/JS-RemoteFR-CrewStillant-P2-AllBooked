import { useLoaderData } from "react-router-dom";
import React from "react";
import ListCardSelection from "./ListCardSelection";
import Carousel from "./Carousel";

function Home() {
  const response = useLoaderData();
  const data = response.items;
  return (
    <div>
      <Carousel data={data} />
      <ListCardSelection />
    </div>
  );
}
export default Home;
