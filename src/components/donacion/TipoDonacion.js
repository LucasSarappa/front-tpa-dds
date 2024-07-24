import React from 'react';
import styles from './TipoDonacion.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const TipoDonacion = ({ userType }) => {
    const isHumana = userType === 'humana';
    const isJuridica = userType === 'juridica';
    let cardStyles = styles["section-cards"];

    const history = useHistory();

    if (isHumana) {
        cardStyles += ` ${styles["grid-3-columns"]}`;
    } else if (isJuridica) {
        cardStyles += ` ${styles["grid-2-columns"]}`;
    }

    const handlerDonarDineroClick = () => {
        history.push('/DonarDinero');
    };

    const handleHacerseCargoDeUnaHeladeraClick = () => {
        history.push('/HacerseCargoDeUnaHeladera');
    };

    const handlerDistribuirViandasClick = () => {
        history.push('/DistribuirViandas');
    };

    const handlerDonarViandasClick = () => {
        history.push('/DonarVianda');
    };


    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={cardStyles}>
                    {/* Donar dinero - Disponible para todos */}
                    <div className={styles["section-card"]} onClick={handlerDonarDineroClick}>
                        <span>1</span>
                        <h2>Donar dinero</h2>
                        <p>Realiza una contribución monetaria para las personas que más lo necesitan.</p>
                    </div>
                    {/* Hacerse cargo de una heladera - Solo disponible para juridica */}
                    {userType === 'juridica' && (
                        <div className={styles["section-card"]} onClick={handleHacerseCargoDeUnaHeladeraClick} >
                            <span>2</span>
                            <h2>Hacerse cargo de una heladera</h2>
                            <p>Comprométete a mantener una heladera comunitaria abastecida con alimentos.</p>
                        </div>
                    )}
                    {/* Donar vianda - Disponible para humana */}
                    {isHumana && (
                        <>
                            <div className={styles["section-card"]} onClick={handlerDonarViandasClick}>
                                <span>3</span>
                                <h2>Donar vianda</h2>
                                <p>Puedes donar alimentos preparados que serán distribuidos a personas en situación de vulnerabilidad.</p>
                            </div>
                            {/* Distribuir vianda - Disponible para humana */}
                            <div className={styles["section-card"]} onClick={handlerDistribuirViandasClick}>
                                <span>4</span>
                                <h2>Distribuir vianda</h2>
                                <p>Únete a nuestro equipo de voluntarios para ayudar en la entrega de viandas a diversas comunidades.</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TipoDonacion;