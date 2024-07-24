import {useState} from 'react';
import styles from './CargarColaboraciones.module.css';
import {MdCloudUpload, MdDelete} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';

function CargarColaboraciones() {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("Sin archivos seleccionados");

    return (
        <main>
            <form
                onClick={() => document.querySelector(`.${styles.inputField}`).click()}
                className={styles.form}
            >
                <input type="file" accept='.csv' className={styles.inputField} hidden
                       onChange={({target: {files}}) => {
                           files[0] && setFileName(files[0].name);
                           if (files) {
                               setImage(URL.createObjectURL(files[0]));
                           }
                       }}
                />

                {image ?
                    <img src={image} width={150} height={150} alt={fileName}/>
                    :
                    <>
                        <MdCloudUpload color='#e9f0ff' size={60}/>
                        <p className={styles.filePrompt}>Selecciona un archivo .csv!</p>                    </>
                }
            </form>

            <section className={styles.uploadedRow}>
                <AiFillFileImage color='#1475cf'/>
                <span className={styles.uploadContent}>
          {fileName} -
          <MdDelete
              onClick={() => {
                  setFileName("Sin archivos seleccionados");
                  setImage(null);
              }}
          />
        </span>
            </section>
        </main>
    );
}

export default CargarColaboraciones;