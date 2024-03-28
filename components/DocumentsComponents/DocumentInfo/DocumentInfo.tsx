import styles from './DocumentInfo.module.css';
import { useRouter } from "next/router";
import { Document } from '../../../interfaces/document.interface';
import { Htag } from '../../Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { formatDate } from '../../../helpers/format.helper';
import Download from './download.svg'; 


export const DocumentInfo = ({ id, title, text, doc, tags, author, date, price }: Document): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.documentInfo}>
            <Htag tag='l' className={styles.title}>
                {title}
            </Htag>
            <Htag tag='m' className={styles.text}>
                {text}
            </Htag>
            <div className={styles.doc} />
            <div>
                <div className={styles.tagsDiv} style={{ gridTemplateColumns: `repeat(${tags.length + 1}, auto)` }}>
                    <Htag tag='m' className={styles.text}>
                        {setLocale(router.locale).tags + ': '}
                    </Htag>
                    {tags.map(t => (
                    <Htag key={t} tag='m' className={styles.tagsText}>
                        {t}
                    </Htag>
                ))}
                </div>
                <Htag tag='m'>
                    {author}
                </Htag>
                <Htag tag='m' className={styles.text}>
                    {formatDate(date, router)}
                </Htag>
            </div>
            <Htag tag='xxl' className={styles.price}>
                {price === 0 ? setLocale(router.locale).free : price + '$'}
                <Download />
            </Htag>
        </div>
    );
};
