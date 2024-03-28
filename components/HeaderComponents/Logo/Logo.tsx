import styles from './Logo.module.css';
import { Htag } from '../../Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import LogoIcon from './logo.svg'; 
import { useResizeW } from '../../../hooks/useResize';


export const Logo = (): JSX.Element => {
    const router = useRouter();

    const width = useResizeW();
    
    return (
        <Htag tag='m' className={styles.logo} onClick={() => router.push('/')}>
            <LogoIcon />
            { width > 580 ? setLocale(router.locale).legaldoc : '' }
        </Htag>
    );
};