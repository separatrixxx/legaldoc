import { AddPage } from "../../page_components/AddPage/AddPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Add(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).add_document}</title>
        <meta name='description' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).add_document} />
        <meta property='og:title' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).add_document} />
        <meta property='og:description' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).add_document} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <AddPage />
    </>
  );
}

export default Add;
