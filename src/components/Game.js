import React from 'react';
//styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({name, released, image}) => {
    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGame>
    )
}

export default Game

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.1);
    text-align: center;
    img{
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
`
