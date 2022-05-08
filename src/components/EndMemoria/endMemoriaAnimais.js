import React, { useEffect } from "react";
import { CardAnimais, CardGrid, Message, Title } from "./styles";
import { Background, Ligth, BottomLigth } from '../../styles/generalStyles';
import card1 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/cao-ok.png';
import card2 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/tigre-ok.png';
import card3 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/raposa-ok.png';
import card4 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/hamster-ok.png';
import card5 from '../../assets/dekodo-assets/game-memoria/game-memoria-animais/cards-redondos/golfinho-ok.png';
import { useNavigate } from "react-router-dom";



const EndMemoriaAnimais = () => {
    const cardLetras = [
        { "src": card1 },
        { "src": card2 },
        { "src": card3 },
        { "src": card4 },
        { "src": card5 }
    ];

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("../"), 5000);
    }, [navigate]);

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
                        <CardAnimais src={card.src} />
                        <CardAnimais src={card.src} />
                    </div>
                ))}
            </CardGrid>
        </ Background>
    )
}

export default EndMemoriaAnimais;