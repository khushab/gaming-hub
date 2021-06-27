import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
    console.log("abc");
  }, [dispatch]);

  //Get data from state
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const SearchedStyle = {
    marginTop: "2rem",
  };

  return (
    <GameList>
      {pathId && <GameDetails />}
      {searched.length ? (
        <div className="searched-games">
          <h2>Searched results</h2>
          <Games>
            {searched.map((game) => (
              <Game game={game} id={game.id} key={game.id} />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}

      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game game={game} id={game.id} key={game.id} />
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game game={game} id={game.id} key={game.id} />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game game={game} id={game.id} key={game.id} />
        ))}
      </Games>
    </GameList>
  );
};

export default Home;

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  padding-bottom: 5rem;
  h2 {
    padding: 4rem 0rem 3rem 0rem;
  }
  @media screen and (max-width: 800px) {
    padding: 0rem 1rem;
    padding-bottom: 2rem;
    h2 {
      text-align: center;
      padding: 2rem 0rem;
      font-size: 2rem;
    }
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  @media screen and (max-width: 800px) {
    min-height: 50vh;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
