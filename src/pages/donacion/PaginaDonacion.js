import React from 'react';
import styles from './PaginaDonacion.module.css';
import logoSinFondo from "../../components/utils/logo-sin-fondo.png";
import TipoDonacion from "../../components/donacion/TipoDonacion";
import Navbar from "../../components/navbar/Navbar";
import { useAuth } from "../../context/AuthContext";

const PaginaDonacion = () => {

    const { userType } = useAuth(); // Obtiene el userType del contexto

    return (
        <div className={styles['pg-principal-container']}>
            <img src={logoSinFondo} alt="Logo" className={styles['pg-principal-imagen-logo-esquina']}/>
            <Navbar/>
            <TipoDonacion userType={userType}/> {/* Pasa userType como prop */}
        </div>
    );
};

export default PaginaDonacion;