import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { UserIcon } from '../UserIcon/UserIcon';
import { InputContent } from '../InputContent/InputContent';


export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Logo />
            <InputContent />
            <UserIcon />
        </header>
    );
};