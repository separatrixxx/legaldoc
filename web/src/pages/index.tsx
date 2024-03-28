import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Main(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).slogan}</title>
        <meta name='description' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).slogan} />
        <meta property='og:title' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).slogan} />
        <meta property='og:description' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).slogan} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
