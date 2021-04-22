import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((result) => result.json())
      .then((json) => {
        setCards(json.results);
      });
  });

  const filterCard = cards.filter((i) => {
    return i.name.toLowerCase().includes(search.toLowerCase());
  });

  const Buscar = (e) => setSearch(e.target.value);

  return (
    <div className=" flex flex-wrap mt-10 ml-8">
      <div className="bg-yellow-500 p-5 flex justify-between ">
        <div>
          <Link to="/">Home</Link>
        </div>
        <form>
          <input
            name="search"
            type="text"
            onChange={Buscar}
            placeholder="Nombre Pokemon"
            className="p-1 bg-white"
          />
          <button className="bg-yellow-500 text-white py-1 px-3 font-semibold">
            Buscar
          </button>
        </form>
      </div>
      <div>
        {filterCard.map((item) => {
          return (
            <div className="bg-gray-500 m-2">
              <img src={item.image} className="w-56 h-46"></img>
              <h1>{item.name}</h1>
              <h1>
                <Link to="/Character">Mas info</Link>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
