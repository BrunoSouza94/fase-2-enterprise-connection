import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Thinker, Title } from "./styles";
import thinker from "../../assets/dekodo-assets/mascote-brain/brain-game-memoria-letras.svg";

const LoadMemoriaLetras = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("../memoria/letras"), 3000)
    }, []);

    return(
        <Background>
            <Title>Qual é o par?</Title>
            <Thinker src={ thinker }/>
        </Background>
    )
}

export default LoadMemoriaLetras;