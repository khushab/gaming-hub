import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../utils";
//images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import threedots from "../img/three-dots.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = () => {
  const history = useHistory();
  //Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;

      case "Xbox One":
        return xbox;

      case "PC":
        return steam;

      case "Nintendo Switch":
        return nintendo;

      case "iOS":
        return apple;

      default:
        return gamepad;
    }
  };

  //get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  //   console.log(detail);
  return (
    <>
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        {isLoading && (
          <div className="loading">
            {/* <h3>Loading....</h3> */}
            <img src={threedots} alt="loading" />
          </div>
        )}
        {!isLoading && (
          <Detail>
            <h3 className="name">{game.name}</h3>
            <Stats>
              <div className="ratings">
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      alt={data.platform.name}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  alt={screen.id}
                  key={screen.id}
                />
              ))}
            </div>
          </Detail>
        )}
      </CardShadow>
    </>
  );
};

export default GameDetails;

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    border-radius: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  .loading {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff9191;
    img {
      width: 60px;
    }
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  margin: 1rem 0rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
  .gallery {
    img {
      padding: 1rem 0rem;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 1rem;
    .name {
      text-align: center;
      font-size: 1.5rem;
    }
    .gallery {
      img {
        padding: 0.2rem 0rem;
      }
    }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    display: inline;
  }
  @media screen and (max-width: 800px) {
    img {
      width: 0.8rem;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  @media screen and (max-width: 800px) {
    img {
      margin-left: 0.5rem;
      width: 1.2rem;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    margin-top: 1rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem 4rem 0rem;
  @media screen and (max-width: 800px) {
    margin: 1rem 0rem;
  }
`;
