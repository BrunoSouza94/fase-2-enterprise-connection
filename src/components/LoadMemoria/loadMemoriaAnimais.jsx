import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Thinker, Title } from "./styles";
import thinker from "../../assets/dekodo-assets/mascote-brain/brain-game-memoria-animais.svg";

const LoadMemoriaAnimais = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("../memoria/animais"), 3000)
    }, []);

    return(
        <Background>
            <Title>Qual é o par?</Title>
            <Thinker src={ thinker }/>
        </Background>
    )
}

export default LoadMemoriaAnimais;