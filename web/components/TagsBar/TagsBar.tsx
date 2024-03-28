import { TagsBarProps } from './TagsBar.props';
import styles from './TagsBar.module.css';
import { useRouter } from 'next/router';
import SortIcon from './sort_icon.svg'; 
import TagsIcon from './tags_icon.svg'; 
import { Htag } from '../Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import cn from 'classnames';
import { useResizeW } from '../../hooks/useResize';


export const TagsBar = ({ tags, sort, setSort }: TagsBarProps): JSX.Element => {
    const router = useRouter();

    const width = useResizeW();
    
    return (
        <div className={styles.tagsBar}>
            <div className={styles.sortDiv} onClick={() => {
                if (sort === 'high') {
                    setSort('low');
                } else {
                    setSort('high');
                }
            }}>
                <span className={cn(styles.sortIcon, {
                    [styles.sortLow]: sort === 'low',
                })}>
                    <SortIcon />
                </span>
                <Htag tag='s' className={styles.sortText}>
                    {setLocale(router.locale).by_price}
                </Htag>
            </div>
            <div className={styles.tagsDiv} style={ width > 580 ?
                { gridTemplateColumns: `repeat(${tags.length + 1}, auto)` } : 
                { gridTemplateColumns: `auto` } }>
                <span className={styles.tagsIcon}>
                    <TagsIcon />
                </span>
                {tags.map(t => (
                    <Htag key={t} tag='s' className={styles.tagsText}>
                        {t}
                    </Htag>
                ))}
            </div>
        </div>
    );
};
