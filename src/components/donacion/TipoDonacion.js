import React from 'react';
import styles from './TipoDonacion.module.css'; // Importa el archivo CSS

const TipoDonacion = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles["section-cards"]}>
                    <div className={styles["section-card"]}>
                        <span>1</span>
                        <br></br>
                        <br></br>
                        <h2> Donar dinero</h2>
                        <br></br>
                        <br></br>
                        <p>Realiza una contribución monetaria para las personas que mas lo necesitan.</p>
                    </div>
                    <div className={styles["section-card"]}>
                        <span>2</span>
                        <br></br>
                        <br></br>
                        <h2>Hacerse cargo de una Heldera</h2>
                        <br></br>
                        <br></br>
                        <p> Comprométete a mantener una heladera comunitaria abastecida con alimentos</p>
                    </div>
                    <div className={styles["section-card"]}>
                        <span>3</span>
                        <br></br>
                        <br></br>
                        <h2>Donar vianda</h2>
                        <br></br>
                        <br></br>
                        <p>Puedes donar alimentos preparados que serán distribuidos a personas en situación de
                            vulnerabilidad</p>
                    </div>
                    <div className={styles["section-card"]}>
                        <span>4</span>
                        <br></br>
                        <br></br>
                        <h2>Distribuir vianda</h2>
                        <br></br>
                        <br></br>
                        <p>Únete a nuestro equipo de voluntarios para ayudar en la entrega de viandas a diversas
                            comunidades</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipoDonacion;
