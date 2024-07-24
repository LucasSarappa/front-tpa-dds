import React, {useState} from 'react';
import styles from './PaginaLogin.module.css';
import {useHistory} from 'react-router-dom'; // Changed from useNavigate to useHistory
import IconoPJ from '../../components/utils/IconoPJ.png';
import IconoPH from '../../components/utils/IconoPH.png';
import IconoPV from '../../components/utils/IconoPV.png';
import {useAuth} from '../../context/AuthContext';
import PaginaPrincipal from "../principal/PaginaPrincipal";

const PaginaLogin = () => {
    const [active, setActive] = useState(false);
    const [personaType, setPersonaType] = useState(null);
    const [tipoDNI, setTipoDNI] = useState('DNI'); // Estado para el tipo de DNI seleccionado
    const {login} = useAuth();

    const [contactos, setContactos] = useState({
        whatsapp: false,
        email: false,
        telegram: false
    });
    const [valoresContacto, setValoresContacto] = useState({
        telefono: '',
        email: '',
        telegram: ''
    });

    const [contactosVisibles, setContactosVisibles] = useState({
        whatsapp: false,
        email: false,
        telegram: false
    });

    const toggleContacto = (tipo) => {
        setContactosVisibles(prevState => ({...prevState, [tipo]: !prevState[tipo]}));
    };

    //Funcionalidad para el botón LogIn (no está en uso)

    const history = useHistory(); // Initialize useHistory instead of useNavigate

    const handleCheckboxChange = (e) => {
        setContactos({...contactos, [e.target.name]: e.target.checked});
    };

    const handleInputChange = (e) => {
        setValoresContacto({...valoresContacto, [e.target.name]: e.target.value});
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Validar que al menos un contacto haya sido completado
        if (!Object.values(valoresContacto).some(value => value.trim() !== '')) {
            alert('Por favor, complete al menos un contacto.');
            return;
        }
        // Procesar el formulario de registro
    };

    // Estados para manejar los valores de los inputs
    const [cuit, setCuit] = useState('');
    const [documento, setDocumento] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Usa los estados directamente en lugar de document.querySelector
        if (personaType === 'juridica' && cuit === '1' && password === '1') {
            login('juridica');
            history.push('/');
        } else if (personaType === 'humana' && documento === '1' && password === '1') {
            login('humana');
            history.push('/');
        } else if (personaType === 'vulnerable' && documento === '1' && password === '1') {
            login('vulnerable');
            history.push('/');
        }


    };

    return (
        <div className={`${styles.container} ${active ? styles.active : ''}`}>
            <div className={styles.signupSection}>
                <header onClick={() => setActive(false)}>Registrate como...</header>
                <div className={styles['social-buttons']}>
                    <button onClick={() => setPersonaType('juridica')} className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPJ} alt="Icono Persona Jurídica"/>
                        <div>Persona Juridica</div>
                    </button>
                    <button onClick={() => setPersonaType('humana')} className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPH} alt="Icono Persona Humana"/>
                        <div>Persona Humana</div>
                    </button>
                    <button onClick={() => setPersonaType('vulnerable')}
                            className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPV} alt="Icono Persona Vulnerable"/>
                        <div>Persona Vulnerable</div>
                    </button>
                </div>
                <div className={styles.separator}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>

                {personaType === 'juridica' && (
                    <form onSubmit={handleRegister}>
                        <input type="number" placeholder="N° CUIT" required/>

                        <input type="text" placeholder="Nombre de usuario" required/>

                        <label className={styles['contacto-container']}>
                            <button onClick={() => toggleContacto('telefono')} className={styles.plusButton}>+</button>
                            Teléfono
                            {contactosVisibles.telefono && (
                                <input type="text" name="telefono" placeholder="Número de teléfono"
                                       value={valoresContacto.telefono} onChange={handleInputChange}/>
                            )}
                        </label>

                        <label className={styles['contacto-container']}>
                            <button onClick={() => toggleContacto('email')} className={styles.plusButton}>+</button>
                            Email
                            {contactosVisibles.email && (
                                <input type="text" name="email" placeholder="Email"
                                       value={valoresContacto.email} onChange={handleInputChange}/>
                            )}
                        </label>

                        <label className={styles['contacto-container']}>
                            <button onClick={() => toggleContacto('telegram')} className={styles.plusButton}>+</button>
                            Telegram
                            {contactosVisibles.telegram && (
                                <input type="text" name="telegram" placeholder="Telegram"
                                       value={valoresContacto.telegram} onChange={handleInputChange}/>
                            )}
                        </label>

                        <input type="password" placeholder="Contraseña" required/>
                        <a href="#">Forget Password?</a>
                        <button type="submit" className={styles.btn}>Registrarse</button>
                    </form>
                )}

                {personaType === 'humana' && (
                    <form onSubmit={handleRegister}>
                        <div>
                            <select value={tipoDNI} onChange={(e) => setTipoDNI(e.target.value)}
                                    className={`${styles.select} ${styles.selectDNI}`}>
                                <option value="DNI">DNI</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="LC">LC</option>
                                <option value="LE">LE</option>
                            </select>
                            <input type="number" placeholder="Número" required/>
                        </div>
                        <input type="text" placeholder="Nombre de usuario" required/>

                        <label className={styles['contacto-container']}>
                            <button onClick={() => toggleContacto('telefono')} className={styles.plusButton}>+</button>
                            Teléfono
                            {contactosVisibles.telefono && (
                                <input type="text" name="telefono" placeholder="Número de teléfono"
                                       value={valoresContacto.telefono} onChange={handleInputChange}/>
                            )}
                        </label>

                        <label className={styles['contacto-container']}>
                            <button onClick={() => toggleContacto('email')} className={styles.plusButton}>+</button>
                            Email
                            {contactosVisibles.email && (
                                <input type="text" name="email" placeholder="Email"
                                       value={valoresContacto.email} onChange={handleInputChange}/>
                            )}
                        </label>

                        <label className={styles['contacto-container']}>
                            <button onClick={() => toggleContacto('telegram')} className={styles.plusButton}>+</button>
                            Telegram
                            {contactosVisibles.telegram && (
                                <input type="text" name="telegram" placeholder="Telegram"
                                       value={valoresContacto.telegram} onChange={handleInputChange}/>
                            )}
                        </label>

                        <input type="password" placeholder="Contraseña" required/>
                        <a href="#">Olvidaste la contraseña?</a>
                        <button type="submit" className={styles.btn}>Registrarse</button>
                    </form>
                )}

                {personaType === 'vulnerable' && (
                    <form onSubmit={handleRegister}>
                        <input type="text" placeholder="Nombre de usuario" required/>
                        <input type="email" placeholder="Email" required/>
                        <input type="password" placeholder="Contraseña" required/>
                        <a href="#">Olvidaste la contraseña?</a>
                        <button type="submit" className={styles.btn}>Registrarse</button>
                    </form>
                )}
            </div>

            <div className={styles.loginSection}>
                <header onClick={() => setActive(true)}>Inciar Sesion como...</header>
                <div className={styles['social-buttons']}>
                    <button onClick={() => setPersonaType('juridica')} className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPJ} alt="Icono Persona Jurídica"/>
                        <div>Persona Juridica</div>
                    </button>
                    <button onClick={() => setPersonaType('humana')} className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPH} alt="Icono Persona Humana"/>
                        <div>Persona Humana</div>
                    </button>
                    <button onClick={() => setPersonaType('vulnerable')}
                            className={styles.btnLogInPersonaJuridicaHumana}>
                        <img src={IconoPV} alt="Icono Persona Vulnerable"/>
                        <div>Persona Vulnerable</div>
                    </button>
                </div>

                <div className={styles.separator}>
                    <div className={styles.line}></div>
                    <p>Or</p>
                    <div className={styles.line}></div>
                </div>

                {personaType === 'juridica' && (
                    <form onSubmit={handleLogin}>
                        <input type="number" name="cuit" placeholder="N° CUIT" required value={cuit}
                               onChange={e => setCuit(e.target.value)}/>
                        <input type="password" name="password" placeholder="Contraseña" required value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <button type="submit" className={styles.btn}>Acceder</button>
                    </form>
                )}

                {personaType === 'humana' && (
                    <form onSubmit={handleLogin}>
                        <input type="number" name="documento" placeholder="N° de documento" required value={documento}
                               onChange={e => setDocumento(e.target.value)}/>
                        <input type="password" name="password" placeholder="Contraseña" required value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <a href="#">Olvidaste la contraseña?</a>
                        <button type="submit" className={styles.btn}>Acceder</button>
                    </form>
                )}

                {personaType === 'vulnerable' && (
                    <form onSubmit={handleLogin}>
                        <input type="number" name="documento" placeholder="N° de documento" required value={documento}
                               onChange={e => setDocumento(e.target.value)}/>
                        <input type="password" name="password" placeholder="Contraseña" required value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <a href="#">Olvidaste la contraseña?</a>
                        <button type="submit" className={styles.btn}>Acceder</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PaginaLogin;