import React, { useEffect, useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Buttons from '../../components/buttons/Buttons';
import styles from './PaginaPrincipal.module.css';
import imagenPaginaPrincipal from "../../components/utils/imagen-pagina-principal-sin-fondo.jpg";
import logoSinFondo from "../../components/utils/logo-sin-fondo.png";
import '../../App.css';
import { useAuth } from "../../context/AuthContext";

const PaginaPrincipal = () => {
    const { isLoggedIn, userType } = useAuth();
    const [activeIndex, setActiveIndex] = useState(0);

    const stats = [
        { title: "Platos Donados:", value: "1.234" },
        { title: "Dinero Juntado:", value: "$1.000.678" },
        { title: "Heladeras Aportadas:", value: "12" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % stats.length);
        }, 3000); // Change card every 3 seconds
        return () => clearInterval(interval);
    }, [stats.length]);

    return (
        <div className={styles['pg-principal-container']}>
            <Navbar />
            <Buttons isLoggedIn={isLoggedIn} userType={userType} />
            <img src={imagenPaginaPrincipal} alt="Descripción de la imagen" className={styles['pg-principal-imagen-full-width']} />
            <img src={logoSinFondo} alt="Logo" className={styles['pg-principal-imagen-logo-esquina']} />
            <div className={styles['rectangulo-personalizado']}>
                <div className={styles['stats-container']}>
                    {stats.map((stat, index) => (
                        <div key={index} className={`${styles['stats-card']} ${index === activeIndex ? styles['active'] : ''}`}>
                            <div className={styles['stats-title']}>{stat.title}</div>
                            <div className={styles['stats-value']}>{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaginaPrincipal;