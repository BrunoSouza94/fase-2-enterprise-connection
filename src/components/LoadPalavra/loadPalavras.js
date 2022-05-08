import { Image } from './styles';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Arara from '../../assets/dekodo-assets/game-palavras-arara/arara-grande.svg';
import { Background, Title, Ligth, BottomLigth, Text } from '../../styles/generalStyles';



const LoadPalavras = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('../palavras'), 3000)
    }, []);
    
    return(
        <Background>
            <Ligth style={{left: "37.5vw", top: "-242.5px"}}/>
            <Ligth style={{left: "3vw", top: "7vh"}}/>
            <Ligth style={{left: "70vw", top: "25vh"}}/>
            <BottomLigth />
            <Title>
                {"Dekōdo".toUpperCase()}
            </Title>
            <Image src={Arara}/>
        </Background>
    )
}

export default LoadPalavras;