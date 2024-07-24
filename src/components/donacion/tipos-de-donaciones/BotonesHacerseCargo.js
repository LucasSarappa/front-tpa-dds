import React from 'react';
import styles from './BotonesHacerseCargo.module.css';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const BotonesHacerseCargo = ({userType}) => {
    const isHumana = userType === 'humana';
    const isJuridica = userType === 'juridica';
    let cardStyles = styles["section-cards"];

    const history = useHistory();


    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={cardStyles}>
                    <div className={styles["section-card"]} >
                        <h2>Solicitar puntos recomendados para poner heladeras</h2>
                    </div>
                    <div className={styles["section-card"]} >
                        <h2>Suscribirse a una heladera</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BotonesHacerseCargo;