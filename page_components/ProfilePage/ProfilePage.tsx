import styles from './ProfilePage.module.css';
import { Toaster } from 'react-hot-toast';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getDocuments } from '../../helpers/documents.helper';
import { Document } from '../../interfaces/document.interface';
import { Htag } from '../../components/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import Add from './add.svg'; 
import { DocumentsList } from '../../components/DocumentsComponents/DocumentsList/DocumentsList';
import { Footer } from '../../components/Footer/Footer';


export const ProfilePage = (): JSX.Element => {
    const router = useRouter();

    const [documents, setDocuments] = useState<Document[]>([]);

    useEffect(() => {
        setDocuments(getDocuments());
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
                    <Htag tag='xl' className={styles.myDocs} onClick={() => router.push('/add')}>
                        {setLocale(router.locale).my_documents}
                        <Add />
                    </Htag>
                    <DocumentsList documents={documents} sort='high' />
                </div>
                <Footer />
            </div>
        </>
    );
};
