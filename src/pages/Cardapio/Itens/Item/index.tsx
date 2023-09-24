import styles from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Prato) {
    const { id, title, description, photo } = props;

    const navigate = useNavigate();

    function redirecionarParaDetalhes(prato: Prato) {
        navigate(`/prato/${id}`, { state: { prato }, replace: false });
    }

    return (
        <div
            className={styles.item}
            onClick={() => redirecionarParaDetalhes(props)}
        >
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <TagsPrato {...props}></TagsPrato>
            </div>
        </div>
    );
}
