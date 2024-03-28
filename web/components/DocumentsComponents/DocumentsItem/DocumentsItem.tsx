import styles from './DocumentsItem.module.css';
import { Document } from '../../../interfaces/document.interface';
import { Htag } from '../../Htag/Htag';
import { formatDate } from '../../../helpers/format.helper';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';


export const DocumentsItem = ({ id, title, author, date, price }: Document): JSX.Element => {
    const router = useRouter();
    
	return (
		<div className={cn(styles.document, {
            [styles.primaryDocument]: id % 2 === 0,
        })} onClick={() => router.push('/document/' + id)}>
			<Htag tag='m' className={cn(styles.title, {
                [styles.whiteText]: id % 2 === 0,
            })}>
                {title}
            </Htag>
            <div className={cn(styles.documentInfoDiv, {
                [styles.whiteBorder]: id % 2 === 0,
            })}>
                <div className={styles.nameAndDateDIv}>
                    <Htag tag='s' className={cn(styles.author, {
                        [styles.whiteText]: id % 2 === 0,
                    })}>
                        {author}
                    </Htag>
                    <Htag tag='s' className={cn({
                        [styles.whiteText]: id % 2 === 0,
                    })}>
                        {formatDate(date, router)}
                    </Htag>
                </div>
                <Htag tag='l' className={cn({
                    [styles.whiteText]: id % 2 === 0,
                })}>
                    {price === 0 ? setLocale(router.locale).free : price + '$'}
                </Htag>
            </div>
		</div>
	);
};
