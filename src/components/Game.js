import React from "react";
import { Link } from "react-router-dom";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { loadDetail } from "../actions/detailAction";
import { useDispatch } from "react-redux";
import { smallImage } from "../utils";

const Game = ({ game }) => {
  const stringPathId = game.id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(stringPathId));
  };

  return (
    <div>
      <StyledGame onClick={loadDetailHandler}>
        <Link to={`/game/${game.id}`}>
          <h3>{game.name}</h3>
          <p>{game.released}</p>
          <img src={smallImage(game.background_image, 640)} alt={game.name} />
        </Link>
      </StyledGame>
    </div>
  );
};

export default Game;

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  @media screen and (max-width: 800px) {
    img {
      height: 35vh;
    }
  }
`;
