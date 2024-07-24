import React, { useEffect, useState } from 'react';
import styles from './PaginaConsultarPuntos.module.css';
import logoSinFondo from "../../components/utils/logo-sin-fondo.png";
import Navbar from "../../components/navbar/Navbar";
import {useAuth} from "../../context/AuthContext";

const PaginaConsultarPuntos = () => {

    const {userType} = useAuth(); // Obtiene el userType del contexto
    const [activeIndex, setActiveIndex] = useState(0);


    const stats = [
        { title: "Puntos acumulados:", value: "10.234" },

    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % stats.length);
        }, 3000); // Change card every 3 seconds
        return () => clearInterval(interval);
    }, [stats.length]);


    return (
        <div className={styles['pg-principal-container']}>
            <img src={logoSinFondo} alt="Logo" className={styles['pg-principal-imagen-logo-esquina']}/>
            <Navbar/>
            <div className={styles['rectangulo-personalizado']}>
                <div className={styles['stats-container']}>
                    {stats.map((stat, index) => (
                        <div key={index}
                             className={`${styles['stats-card']} ${index === activeIndex ? styles['active'] : ''}`}>
                            <div className={styles['stats-title']}>{stat.title}</div>
                            <div className={styles['stats-value']}>{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaginaConsultarPuntos;