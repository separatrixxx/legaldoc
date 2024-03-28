import styles from './AddPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { useRouter } from 'next/router';
import { Htag } from '../../components/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import Add from './add.svg'; 
import { DocumentsList } from '../../components/DocumentsComponents/DocumentsList/DocumentsList';
import { Footer } from '../../components/Footer/Footer';
import { AddForm } from '../../components/AddComponents/AddForm/AddForm';


export const AddPage = (): JSX.Element => {
    const router = useRouter();

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
                    <Htag tag='xl' className={styles.addDoc}>
                        {setLocale(router.locale).add_document}
                    </Htag>
                    <AddForm />
                </div>
                <Footer />
            </div>
        </>
    );
};
