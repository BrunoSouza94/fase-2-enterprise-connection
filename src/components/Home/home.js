import React from 'react';
import AraraImg from '../../assets/dekodo-assets/home/menu/menu-palavras.png';
import MemoriaImg from '../../assets/dekodo-assets/home/menu/menu-memoria.png';
import FrutasImg from '../../assets/dekodo-assets/home/menu/menu-frutas.png';
import CoresImg from '../../assets/dekodo-assets/home/menu/menu-cores.png';
import { Card, Description, DescriptionDisabled, Image} from './styles';
import { Background, Title, Ligth, BottomLigth, Text } from '../../styles/generalStyles';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <Background>
                <Ligth style={{left: "37.5vw", top: "-242.5px"}}/>
                <Ligth style={{left: "3vw", top: "7vh"}}/>
                <Ligth style={{left: "70vw", top: "25vh"}}/>
                <BottomLigth />
                <Title>
                    {"Dekōdo".toUpperCase()}
                </Title>
                <Card> 
                    <Link to="/palavras/loadPalavras" style={{ textDecoration: 'none' }}>
                        <Image src={AraraImg} />
                        <Description>
                            <Text>
                                PALAVRAS
                            </Text>
                        </Description>
                    </Link>
                </Card>
                <Card> 
                    <Link to="/memoria" style={{ textDecoration: 'none' }}>
                        <Image src={MemoriaImg} />
                        <Description>
                            <Text>
                                MEMÓRIA
                            </Text>
                        </Description>
                    </Link>
                </Card>
                <Card> 
                    <Image src={CoresImg} />
                    <DescriptionDisabled>
                        <Text>
                            CORES
                        </Text>
                    </DescriptionDisabled>
                </Card>
                <Card> 
                    <Image src={FrutasImg} />
                    <DescriptionDisabled>
                        <Text>
                            FRUTAS
                        </Text>
                    </DescriptionDisabled>
                </Card>
            </Background>
        </>
    )
}

export default Home;