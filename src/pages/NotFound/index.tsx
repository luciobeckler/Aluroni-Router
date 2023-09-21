import styles from './NotFound.module.scss';
import React from 'react';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';

export default function NotFound() {
    const historico = useNavigate(); //Inicializa a constante historico com a pilha de histórico
    return (
        <div
            className={classNames({
                [styles.container]: true,
                [stylesTema.container]: true,
            })}
        >
            <div className={styles.voltar}>
                <button
                    onClick={() => {
                        historico(-1); //Retira um elemento da pilha, voltando para a página anterior
                    }}
                >
                    {'<Voltar'}
                </button>
            </div>
            <NotFoundImage></NotFoundImage>
        </div>
    );
}
