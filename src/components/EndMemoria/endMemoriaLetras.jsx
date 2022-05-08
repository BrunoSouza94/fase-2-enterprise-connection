import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardGrid, Message, Title } from "./styles";
import { Background, Ligth, BottomLigth } from '../../styles/generalStyles';
import cardA from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-a-ok.png';
import cardB from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-b-ok.png';
import cardD from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-d-ok.png';
import cardI from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-i-ok.png';
import cardO from '../../assets/dekodo-assets/game-memoria/game-memoria-letras/cards/card-o-ok.png';

const EndMemoriaLetras = () => {
    const cardLetras = [
        { "src": cardA },
        { "src": cardB },
        { "src": cardD },
        { "src": cardI },
        { "src": cardO }
    ];

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(navigate("../"), 5000);
    }, []);

    return (
        <Background>
            <Ligth style={{left: "37.5vw", top: "-242.5px"}}/>
            <Ligth style={{left: "3vw", top: "7vh"}}/>
            <Ligth style={{left: "70vw", top: "25vh"}}/>
            <BottomLigth />
            <Title>Parabéns!</Title>
            <Message>Você achou todos os pares!</Message>
            <CardGrid>
                {cardLetras.map( card => (
                    <div>
                        <Card src={card.src} />
                        <Card src={card.src} />
                    </div>
                ))}
            </CardGrid>
        </ Background>
    )
}

export default EndMemoriaLetras;