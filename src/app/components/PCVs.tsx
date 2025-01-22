import styles from "./page.module.css";
import { IconFileTypePdf } from '@tabler/icons-react';
import { IconDownload } from '@tabler/icons-react';
interface HomeProps {
    name: string;
    rol: string;
    rold: string;
    text: string;
    cv: string;
}
const Home: React.FC<HomeProps> = ({ name, rol, rold, text, cv }) => {
    return (
        <section className={styles.section}>
            <div className={styles.separate}>
            <h3 className={styles.h3}>{name}</h3>
            <p>{rol}</p>
            <span>{rold}</span>
            <p>{text}</p>
        </div>
            <a href={cv} target="_blank" rel="noopener noreferrer" download>
                <button className={styles.downloadbutton}>
                    <div className={styles.docs}>
                    <IconFileTypePdf stroke={1.5} />
                        Descargar CV
                    </div>
                    <div className={styles.download}>
                    <IconDownload stroke={2} />
                    </div>
                </button>
            </a>
 
        </section>
    );
}
export default Home
