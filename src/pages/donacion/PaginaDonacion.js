import React from 'react';
import styles from './PaginaDonacion.module.css';
import logoSinFondo from "../../components/utils/logo-sin-fondo.png";
import TipoDonacion from "../../components/donacion/TipoDonacion";
import Navbar from "../../components/navbar/Navbar";


const PaginaDonacion = () => {
    return (
        <div className={styles['pg-principal-container']}>
            <img src={logoSinFondo} alt="Logo" className={styles['pg-principal-imagen-logo-esquina']}/>
            <Navbar/>
            <TipoDonacion/>
        </div>
    );
};

export default PaginaDonacion;