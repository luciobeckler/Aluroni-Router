import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='/cardapio' element={<Cardapio></Cardapio>}></Route>
            </Routes>
        </Router>
    );
}
