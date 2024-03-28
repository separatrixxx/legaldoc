import styles from './AddForm.module.css';
import { Htag } from '../../Htag/Htag';
import { useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { useRouter } from 'next/router';
import { addDocument } from '../../../helpers/add_document.helper';
import { LoadingDots } from '../LoadingDots/LoadingDots';
import cn from 'classnames';


export const AddForm = (): JSX.Element => {
    const router = useRouter();

    const [title, setTitle] = useState<string>('Title');
    const [summary, setSummary] = useState<string>('Summary');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) setSelectedFile(file);
    };

    return (
        <div className={styles.addForm}>
            <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx,.txt" />
            {
                !loading ?
                    <button className={styles.addButton} onClick={() => addDocument(selectedFile, setTitle,
                        setSummary, setLoading, router)}>
                        {setLocale(router.locale).add_document}
                    </button>
                :
                    <button className={cn(styles.addButton, styles.loadingButton)}>
                        <LoadingDots />
                    </button>
            }
            <Htag tag='l'>
                {title}
            </Htag>
            <Htag tag='l'>
                {summary}
            </Htag>
        </div>
    );
};
