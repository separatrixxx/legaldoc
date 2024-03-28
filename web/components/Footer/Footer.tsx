import styles from './Footer.module.css';
import { LocaleChange } from '../LocaleChange/LocaleChange';
import LogoIcon from './logo.svg'; 
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from '../../helpers/locale.helper';


export const Footer = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <footer className={styles.footer}>
            <LogoIcon />
            <div className={styles.footerLinks}>
                <Htag tag='m' className={styles.link}>
                    {setLocale(router.locale).about}
                </Htag>
                <Htag tag='m' className={styles.link}>
                    {setLocale(router.locale).contacts}
                </Htag>
            </div>
            <LocaleChange />
        </footer>
    );
};
