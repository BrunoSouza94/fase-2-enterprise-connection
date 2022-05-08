import Home from './components/Home/home';
import Letras from './components/Letras/letras';
import Memoria from './components/Memoria/memoria';
import Animais from './components/Animais/animais';
import Palavras from './components/Palavras/palavras';
import EndPalavras from './components/EndPalavras/endPalavras';
import LoadPalavras from './components/LoadPalavra/loadPalavras';
import EndMemoriaLetras from './components/EndMemoria/endMemoriaLetras';
import EndMemoriaAnimais from './components/EndMemoria/endMemoriaAnimais';
import LoadMemoriaLetras from './components/LoadMemoria/loadMemoriaLetras';
import LoadMemoriaAnimais from './components/LoadMemoria/loadMemoriaAnimais';
import CongratsPalavras from './components/CongratsPalavras/congratsPalavras';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="memoria" element = {<Memoria />} />
        <Route path="palavras" element = {<Palavras />}/>
        <Route path="memoria/letras" element = {<Letras />} />
        <Route path="memoria/animais" element = {<Animais />} />
        <Route path="loadPalavras" element = {<LoadPalavras />} />
        <Route path="palavras/endPalavras" element = {<EndPalavras />}/>
        <Route path="palavras/loadPalavras" element = {<LoadPalavras />} />
        <Route path="memoria/endLetras" element = {<EndMemoriaLetras />} />
        <Route path="memoria/endAnimais" element = {<EndMemoriaAnimais />} />
        <Route path="memoria/loadLetras" element = {<LoadMemoriaLetras />} />
        <Route path="memoria/loadAnimais" element = {<LoadMemoriaAnimais />} />
        <Route path="palavras/congratsPalavras" element = {<CongratsPalavras />} />
      </Routes>
    </Router>
  );
}

export default App;
