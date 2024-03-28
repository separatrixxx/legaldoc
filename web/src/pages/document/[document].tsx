import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getDocuments } from '../../../helpers/documents.helper';
import { Document } from '../../../interfaces/document.interface';
import { DocumentPage } from '../../../page_components/DocumentPage/DocumentPage';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';


export default function Document({ document }: DocumentProps) {
	const router = useRouter();
	
	return (
		<>
			<Head>
				<title>{setLocale(router.locale).legaldoc + ' - ' + document.title}</title>
				<meta name='description' content={setLocale(router.locale).legaldoc + ' - ' + document.title} />
				<meta property='og:title' content={setLocale(router.locale).legaldoc + ' - ' + document.title} />
				<meta property='og:description' content={setLocale(router.locale).legaldoc + ' - ' + document.title} />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<DocumentPage id={document.id} title={document.title} text={document.text} doc={document.doc} tags={document.tags} 
                author={document.author} date={document.date} price={document.price} />
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const documents: Document[] = getDocuments();
		
    const locales = ['en', 'ru'];

    const paths: any[] = [];

    documents.map(document => {
        return locales.map((locale) => {
            return paths.push({
                params: { document: '' + document.id },
                locale,
            });
        });
    });

	return {
		paths: paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<DocumentProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	try {
		const documentsList: Document[] = getDocuments();

		const document = documentsList[params.document ? +params.document : 0];

		return {
			props: {
				document
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface DocumentProps extends Record<string, unknown> {
	document: Document;
}
