import { DocumentsListProps } from './DocumentsList.props';
import styles from './DocumentsList.module.css';
import { DocumentsItem } from '../DocumentsItem/DocumentsItem';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Htag/Htag';


export const DocumentsList = ({ documents, sort }: DocumentsListProps): JSX.Element => {
	const router = useRouter();

	if (sort === 'low') {
		documents.sort((a, b) => a.price > b.price ? 1 : -1);
	} else {
		documents.sort((a, b) => a.price < b.price ? 1 : -1);
	}

	return (
		<div className={styles.documentsDiv}>
			{
				documents.length !== 0 ? 
					documents.map(d => (
						<DocumentsItem key={d.id} id={d.id} title={d.title} text={d.text} doc={d.doc} tags={d.tags} 
							author={d.author} date={d.date} price={d.price} />
					))
				:
						<Htag tag='m' className={styles.noDocs}>
							{setLocale(router.locale).no_documents_uploaded}
						</Htag>
			}
		</div>
	);
};
