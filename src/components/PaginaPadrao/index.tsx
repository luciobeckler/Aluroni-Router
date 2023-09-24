import React from 'react';
import styles from './PaginaPadrao.module.scss'; // Importa os estilos CSS do arquivo 'PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'; // Importa o componente 'Outlet' do pacote 'react-router-dom'
import stylesTema from '../../styles/Tema.module.scss';

export default function PaginaPadrao({
    children,
}: {
    children?: React.ReactNode;
}) {
    // Declaração do componente funcional 'PaginaPadrao'
    return (
        <>
            <header className={styles.header}>
                {/* Início do cabeçalho */}
                <div className={styles.header__text}>
                    A casa do código e da massa
                    {/* Texto exibido no cabeçalho */}
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet></Outlet>
                {children}
                {/* Renderiza o componente filho definido na rota */}
            </div>
        </>
    );
}
