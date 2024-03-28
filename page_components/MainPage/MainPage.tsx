import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { TagsBar } from '../../components/TagsBar/TagsBar';
import { useEffect, useState } from 'react';
import { Document } from '../../interfaces/document.interface';
import { getDocuments } from '../../helpers/documents.helper';
import { getTags } from '../../helpers/tags.helper';
import { DocumentsList } from '../../components/DocumentsComponents/DocumentsList/DocumentsList';
import { Footer } from '../../components/Footer/Footer';


export const MainPage = (): JSX.Element => {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [sort, setSort] = useState<'low' | 'high'>('high');

    useEffect(() => {
        setDocuments(getDocuments());
		setTags(getTags());
	}, []);
    
    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <div className={styles.wrapperDiv}>
                    <Header />
                    <TagsBar tags={tags} sort={sort} setSort={setSort} />
                    <DocumentsList documents={documents} sort={sort} />
                </div>
                <Footer />
            </div>
        </>
    );
};
