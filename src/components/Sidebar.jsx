import { Avatar } from "./Avatar";
import { PencilLine } from "@phosphor-icons/react";

import styles from './Sidebar.module.css';
import evolution from '../assets/evolution.jpeg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={evolution} alt="" />
            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/PhilipeF.png" />

                <strong>Philipe Ferreira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}