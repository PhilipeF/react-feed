import styles from './Sidebar.module.css';
import evolution from '../assets/evolution.jpeg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={evolution} alt="" />
            <div className={styles.profile}>
                <strong>Philipe Ferreira</strong>
                <span>Web Developer</span>                
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}