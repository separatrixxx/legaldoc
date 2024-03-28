import styles from './InputContent.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Search from './search.svg';


export const InputContent = (): JSX.Element => {
    const [search, setSearch] = useState<string>('');

    return (
        <label className={styles.labelContent}>
            <span className={styles.iconContent}>
                <Search />
            </span>
            <input className={styles.inputContent}
                type="text"
                name="search"
                aria-label="search"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }} />
        </label>
    );
};
