import React from 'react';
import styles from './TipoDonacion.module.css';

const TipoDonacion = ({ userType }) => {
    // Determina si el usuario es de tipo humana o juridica
    const isHumana = userType === 'humana';
    const isJuridica = userType === 'juridica';

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles["section-cards"]}>
                    {/* Donar dinero - Disponible para todos */}
                    <div className={styles["section-card"]}>
                        <span>1</span>
                        <h2>Donar dinero</h2>
                        <p>Realiza una contribución monetaria para las personas que más lo necesitan.</p>
                    </div>
                    {/* Hacerse cargo de una heladera - Solo disponible para juridica */}
                    <div className={`${styles["section-card"]} ${isHumana ? styles.disabled : ''}`}>
                        <span>2</span>
                        <h2>Hacerse cargo de una heladera</h2>
                        <p>Comprométete a mantener una heladera comunitaria abastecida con alimentos.</p>
                    </div>
                    {/* Donar vianda - Disponible para humana */}
                    <div className={`${styles["section-card"]} ${isJuridica ? styles.disabled : ''}`}>
                        <span>3</span>
                        <h2>Donar vianda</h2>
                        <p>Puedes donar alimentos preparados que serán distribuidos a personas en situación de vulnerabilidad.</p>
                    </div>
                    {/* Distribuir vianda - Disponible para humana */}
                    <div className={`${styles["section-card"]} ${isJuridica ? styles.disabled : ''}`}>
                        <span>4</span>
                        <h2>Distribuir vianda</h2>
                        <p>Únete a nuestro equipo de voluntarios para ayudar en la entrega de viandas a diversas comunidades.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipoDonacion;