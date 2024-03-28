import styles from './UserIcon.module.css';
import { useRouter } from 'next/router';
import ProfileIcon from './profile_icon.svg'; 


export const UserIcon = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <span className={styles.userIcon} onClick={() => router.push('/profile')}>
            <ProfileIcon />
        </span>
    );
};