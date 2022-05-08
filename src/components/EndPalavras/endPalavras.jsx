import { useEffect } from 'react';
import { Card, CardGrid } from './styles';
import { useNavigate } from 'react-router-dom';
import { Background, Title, Ligth, BottomLigth } from '../../styles/generalStyles';

const EndPalavras = () => {
    const correctWord = "arara";
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('../palavras/congratsPalavras'), 2500)
    }, []);

    return (
        <Background>
            <Ligth style={{left: "37.5vw", top: "-242.5px"}}/>
            <Ligth style={{left: "3vw", top: "7vh"}}/>
            <Ligth style={{left: "70vw", top: "25vh"}}/>
            <BottomLigth />
            <Title>
                {"Dekōdo".toUpperCase()}
            </Title>
            <CardGrid>
                {correctWord.split("").map((char, index) => (
                   <Card 
                        key={Math.random()}
                    >
                    {char}
                    </Card>
                ))}
            </CardGrid>
        </Background>
    );
}

export default EndPalavras;

