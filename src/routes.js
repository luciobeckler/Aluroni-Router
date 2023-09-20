
import Menu from 'components/Menu'; // importa o componente Menu
import PaginaPadrao from 'components/PaginaPadrao'; // importa o componente PaginaPadrao
import Cardapio from 'pages/Cardapio'; // importa o componente Cardapio
import Inicio from 'pages/Inicio'; // importa o componente Inicio
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // importa o roteador do React

export default function AppRouter() { // define o componente AppRouter
    return ( // retorna o componente
        <main> {/* elemento pai */}
            <Router> {/* roteador */}
                <Menu></Menu> {/* renderiza o componente Menu */}
                <Routes> {/* rotas */}
                    <Route path='/' element={<PaginaPadrao></PaginaPadrao>}> {/* rota para a página inicial */}
                        <Route index element={<Inicio></Inicio>}></Route> {/* rota para o componente Inicio */}
                        <Route path='cardapio' element={<Cardapio />} /> {/* rota para o componente Cardapio */}
                    </Route>

                </Routes>
            </Router>
        </main >
    );
}