import React from 'react';
import { Link } from 'react-router-dom';
import char from '../../assets/dekodo-assets/home/submenus/submenu-letras.png';
import hamster from '../../assets/dekodo-assets/home/submenus/submenu-animais.png';
import returnIcon from '../../assets/dekodo-assets/botoes/btn-voltar.svg';
import { Background, Title, Return, Ligth, BottomLigth, Text } from '../../styles/generalStyles';
import { Card, SecondCard, Description, SecondDescription, Image, SecondImage } from './styles';

const Memoria = () => {
    return(
        <>
            <Background>
                <Ligth style={{left: "37.5vw", top: "-242.5px"}}/>
                <Ligth style={{left: "3vw", top: "7vh"}}/>
                <Ligth style={{left: "70vw", top: "25vh"}}/>
                <BottomLigth />
                <Link to="/">
                    <Return src={returnIcon}/>
                </Link>
                <Link to="/">
                    <Title>
                        {"Dekōdo".toUpperCase()}
                    </Title>
                </Link>
                <Card> 
                    <Link to="/memoria/loadLetras" style={{ textDecoration: 'none' }}>
                        <Image src={char} />
                        <Description>
                            <Text>
                                LETRAS
                            </Text>
                        </Description>
                    </Link>
                </Card>
                <SecondCard> 
                    <Link to="/memoria/loadAnimais" style={{ textDecoration: 'none' }}>
                        <SecondImage src={hamster}/>
                        <SecondDescription>
                            <Text>
                                ANIMAIS
                            </Text>
                        </SecondDescription>
                    </Link>
                </SecondCard>
            </Background>
        </>
    )
}

export default Memoria;