import styles from './Header.module.css';
import igniteFeedLogo from '../assets/igniteFeed-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteFeedLogo} alt="Logo da firma" />
        </header>
    );
}