import styles from './DocumentPage.module.css';
import { useRouter } from "next/router";
import { Document } from "../../interfaces/document.interface";
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { DocumentInfo } from '../../components/DocumentsComponents/DocumentInfo/DocumentInfo';


export const DocumentPage = ({ id, title, text, doc, tags, author, date, price }: Document): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperDiv}>
                <Header />
                <DocumentInfo id={id} title={title} text={text} doc={doc} tags={tags} author={author}
                    date={date} price={price} />
            </div>
            <Footer />
        </div>
    );
};
