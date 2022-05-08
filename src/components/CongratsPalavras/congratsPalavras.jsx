import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Image } from "./styles";
import arara from '../../assets/dekodo-assets/game-palavras-arara/arara-tela-final.svg';

const CongratsPalavras = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("../"), 3000)
    }, []);

    return(
        <Background>
            <Image src={ arara }/>
        </Background>
    )
}

export default CongratsPalavras;