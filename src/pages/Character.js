import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Character() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((result) => result.json())
      .then((json) => {
        setCards(json.results);
      });
  });

  return (
    <div className=" flex flex-wrap mt-10 ml-8">
      <div className="bg-red-300 p-20">
        <Link to="/">regresar</Link>
      </div>
      {cards.map((item) => {
        return (
          <div className="bg-gray-500 m-2">
            <img src={item.image} className="w-56 h-46"></img>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default Character;
