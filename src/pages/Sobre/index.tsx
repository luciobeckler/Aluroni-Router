import React from 'react';
import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/Sobre/casa.png';
import massa1 from 'assets/Sobre/massa1.png';
import massa2 from 'assets/Sobre/massa2.png';
const imagens = [massa1, massa2]; //Estão do lado de fora pois não precisam ser atualizadas

export default function Sobre() {
    return (
        <section>
            <h3 className={stylesTema.titulo}>Sobre</h3>
            <div className={styles.sobreNos}>
                <img src={casa} alt='Casa Aluroni' />
                <div className={styles.sobreNos__Texto}>
                    <p>
                        Nós do Aluroni oferecemos a vocês, nossos queridos
                        clientes, a Massa Italiana Caseira mais saborosa e
                        sofisticada de São Paulo! Prezamos pelos ingredientes
                        tradicionais da culinária Italiana, frescos e de
                        excelente qualidade para que sua experiência seja ainda
                        mais intensa!
                    </p>
                    <p>
                        Também possuímos uma cardápio de carnes com muitas
                        opções de acordo com o seu gosto!
                    </p>
                    <p>
                        Para acompanhar as massas italianas, Aluroni possui uma
                        reserva de vinhos especiais, que harmonizam
                        perfeitamente com o seu parto, seja carne ou massa!
                    </p>
                </div>
            </div>
            <div className={styles.imagens}>
                {imagens.map((imagem, index) => (
                    <div className={styles.imagens__imagem} key={index}>
                        <img src={imagem} alt='Imagem de massa' />
                    </div>
                ))}
            </div>
        </section>
    );
}
